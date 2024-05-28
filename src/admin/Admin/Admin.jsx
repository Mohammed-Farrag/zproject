import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Admin() {

  
  return (
    <div className='flex flex-row-reverse justify-between h-screen '>


    <Sidebar />
    <div className="content flex flex-col grow ">
        
        <div className="flex grow px-10 sm:px-36  bg-[#ECECEC]">

            <Outlet />
        </div>
    </div>
</div>

  )
}

export default Admin