/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from "react"
import { db, storage } from "../../firebase";
import { getDownloadURL, listAll, ref, uploadBytesResumable, deleteObject, updateMetadata } from "firebase/storage";
import { useForm, } from "react-hook-form";
import { addDoc, collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { FaPen } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";


function AddGallery() {
    const [imagesData, setImageData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imgName, setImgName] = useState('')
    const [percent, setPercent] = useState(0)
    const navigate = useNavigate();
    const colRef = collection(db, "galleries");
    const storageRef = ref(storage, '/galleries/');
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        watch
    } = useForm()

    const onSubmit = (data) => {
        const file = data.img[0];
        const text = data.text;
        // setLoading(true)
        let imgPath = "";
        reset()
        const uploadTask = uploadBytesResumable(ref(storage, `/galleries/${file.name}`), file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((url) => {
                        imgPath = url
                        addDoc(collection(db, 'galleries'), { image: imgPath, title: text })
                            // .then(() => setLoading(false))
                            .then(() => navigate(0))
                    })

            }
        );
    }


    const deleteDocument = (path, docId) => {
        setLoading(true)
        let delRef = ref(storage, path)
        let docRef = doc(db, '/galleries/', docId)
        deleteDoc(docRef)
            .then(() => {
                deleteObject(delRef)
                    .then(() => { setLoading(false); navigate(0) })
                    .catch(err => console.log(err))
            })
    }

    useEffect(() => {
        let nm = watch('img')[0]?.name;
        setImgName(nm);
    }, [watch('img')])

    useEffect(() => {
        async function getData() {

            const docsSnap = await getDocs(colRef);
            docsSnap.forEach(item => {
                setImageData(old => [...old, { ...item.data(), docId: item.id }])
            })
        }
        getData();
    }, [])
    return (
        <div className='flex flex-col items-end text-right w-full pt-10 overflow-x-hidden'>
            {loading ? (<Spinner />) : (

                <div className="flex flex-col items-center justify-center gap-2  bg-white rounded-lg max-h-[800px] overflow-y-scroll  text-black w-full mt-2  py-3 px-5" >

                    {imagesData.length ? imagesData.map((imgData, idx) => (

                        <div key={idx} className="flex items-center gap-x-3">
                            <FaTrashCan className="cursor-pointer" onClick={() => deleteDocument(imgData.image, imgData.docId)} />
                            <img className="w-[200px]" src={imgData.image} key={idx} />
                            <span>{imagesData.title}</span>
                            {/* <FaPen className="cursor-pointer" /> */}
                        </div>

                    )) : <p>there are no images</p>}

                </div>
            )}

            <p className="w-full py-5 text-center">Percent: {percent}</p>


            <div className="text-2xl text-default font-bold mb-4 mt-5">إضافة صورة</div>
            {loading ? (<Spinner />) : (

                <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-2' >
                    <div className="flex flex-col gap-3 ">
                        <label htmlFor="img" className="bg-green-500 flex justify-start flex-row-reverse gap-x-2 hover:bg-green-700 text-white py-2 px-2 rounded-md cursor-pointer">أضف صورة جديدة
                            <input  {...register("img", { required: "File is required" })} type="file" id="img" className="hidden" />
                            <span>{imgName}</span>
                            
                        </label>

                        <label htmlFor="text" className="bg-green-500 flex flex-col justify-start gap-x-3 gap-y-3 hover:bg-green-700 text-white py-2 px-2 rounded-md cursor-pointer"
                        >أضف  نص الصورة
                            <input  {...register("text", { required: "File is required" })} type="text" id="text" className="rounded text-end py-1 grow text-black outline-none px-2" />
                        </label>
                        <button type='submit' className='mb-5 mt-10 py-2 bg-default rounded-md text-white bg-black font-bold text-center'>نشر</button>
                    </div>

                </form>
            )}
        </div>
    )
}

export default AddGallery