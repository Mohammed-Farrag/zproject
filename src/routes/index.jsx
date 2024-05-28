import React, { Suspense } from "react";
import Spinner from "../components/Spinner";
import {   createHashRouter} from "react-router-dom";

// User
const News = React.lazy(() => import("../pages/News"));
const About = React.lazy(() => import("../pages/About"));
const Gallery = React.lazy(() => import("../pages/Gallery"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Product = React.lazy(() => import("../pages/Product"));
const Signin = React.lazy(() => import("../pages/Signin"));
const Signup = React.lazy(() => import("../pages/Signup"));
const Cart = React.lazy(() => import("../pages/Cart"));
const Store = React.lazy(() => import("../pages/Store"));
const Main = React.lazy(() => import("../pages/Main"));
const App = React.lazy(() => import("../App"));







// export const route = (
//   <Router>
//     <Routes>
//         <Route path='/' element={<Suspense fallback={<Spinner />}><Main /></Suspense>} >
//           <Route path="" element={<Suspense fallback={<Spinner />}><Layout /></Suspense>} >
//             <Route path="store" element={<Suspense fallback={<Spinner />}><Store /></Suspense>} />
//             <Route path="store/:id" element={<Suspense fallback={<Spinner />}><Product /></Suspense>} />
//             <Route path="about" element={<Suspense fallback={<Spinner />}><About /></Suspense>} />
//             <Route path="gallery" element={<Suspense fallback={<Spinner />}><Gallery /></Suspense>} />
//             <Route path="news" element={<Suspense fallback={<Spinner />}><News /></Suspense>} />
//             <Route path="contact" element={<Suspense fallback={<Spinner />}><Contact /></Suspense>} />
//             <Route path="signin" element={<Suspense fallback={<Spinner />}><Signin /></Suspense>} />
//             <Route path="signup" element={<Suspense fallback={<Spinner />}><Signup /></Suspense>} />
//             <Route path="cart" element={<Suspense fallback={<Spinner />}><Cart /></Suspense>} />
//           </Route>
//           <Route path="*" element={<Suspense fallback={<Spinner />}><NotFound /></Suspense>} />
//         </Route>
//     </Routes>
//   </Router>
// )

export const route = createHashRouter([
  {
    path: "",
    element: (
      <Suspense fallback={<Spinner />}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Spinner />}>
            <App />
          </Suspense>
        ),
        children: [
          {
            path: "store",
            children: [
              {
                path: '',
                element: (
                  <Suspense fallback={<Spinner />}>
                    <Store />
                  </Suspense>
                ),
              },
              {
                path: ':id',
                element: (
                  <Suspense fallback={<Spinner />}>
                    <Product />
                  </Suspense>
                ),
              }
            ]
          },
          {
            path: "news",
            element: (
              <Suspense fallback={<Spinner />}>
                <News />
              </Suspense>
            ),
          },
          {
            path: "cart",
            element: (
              <Suspense fallback={<Spinner />}>
                <Cart />
              </Suspense>
            ),
          },
          {
            path: "gallery",
            element: (
              <Suspense fallback={<Spinner />}>
                <Gallery />
              </Suspense>
            ),
          },
          {
            path: "about",
            element: (
              <Suspense fallback={<Spinner />}>
                <About />
              </Suspense>
            ),
          },
          {
            path: "contact",
            element: (
              <Suspense fallback={<Spinner />}>
                <Contact />
              </Suspense>
            ),
          },
        ]
      },
      {
        path: "signin",
        element: (
          <Suspense fallback={<Spinner />}>
            <Signin />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<Spinner />}>
            <Signup />
          </Suspense>
        ),
      },
    ]
  },
]);
