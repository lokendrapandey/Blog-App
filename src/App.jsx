import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './Components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [dispatch])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main className='text-center'>
        POSTS <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App













// import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// // import './App.css'
// import authService from "./appwrite/auth"
// import {login, logout} from "./store/authSlice"
// import { Footer, Header } from './Components'
// import { Outlet } from 'react-router-dom'

// function App() {
//   const [loading, setLoading] = useState(true)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     authService.getCurrentUser()
//     .then((userData) => {
//       if (userData) {
//         dispatch(login({userData}))
//       } else {
//         dispatch(logout())
//       }
//     })
//     .finally(() => setLoading(false))
//   }, [])
  
//   return !loading ? (
//     <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
//       <div className='w-full block'>
//         <Header />
//         <main>
//         TODO:  <Outlet />
//         </main>
//         <Footer />
//       </div>
//     </div>
//   ) : null
// }

// export default App

















// import './App.css'
// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';
// // import authService  from "./appwrite/auth"
// import authService from "./appwrite/auth"
// // import {login,logout} from "./store/authSlice.js"
// import {login,logout} from "./store/authSlice"
// import {Header, Footer} from "./Components"
// import { Outlet } from 'react-router-dom';

// const App = () => {
//   const [loading, setloading] = useState(true);
//   const dispatch = useDispatch();
  
//   useEffect(()=>{
//     authService.getCurrentUSer()
//     .then((userData)=> {
//       if(userData){
//         dispatch(login({userData}))
//       } else {
//         dispatch(logout())
//       }
//     })
//     .finally(()=> setloading(false))

//   },[])

  
//   return !loading ? (
//         <div className='min-h-screen flex flex-wrap content-between bg-gray-400'> 
//           <div className='w-full block'>
//             <Header/>
//             <main>
//               TODo<Outlet/> :
//             </main>
//             <Footer/>
//           </div>
//         </div>
//        ) : null
//     }

// export default App


// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       shivam
//     </div>
//   )
// }

// export default App



// import { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';
// import authService from './appwrite/auth';
// import {login,logout} from "./store/authSlice";



// function App() {
//   const [loading, setloading] = useState(true);
//   // console.log(import.meta.env.VITE_APPWRITE_URL)
//   const dispatch = useDispatch()

//   useEffect(()=>{
//     authService.getCurrentUSer()
//     .then((userData)=>{

//       if(userData){
//         dispatch(login({userData}))
//       }
//       else{
//         dispatch(logout())
//       }
//     })
//     .finally(()=>setloading(false))
//   },[])
  
// //4:42  


//   return !loading ? (
//     <div className='min-h-screen flex flex-wrap content-between bg-gray-400'> test</div>
//    ) : null
// }

// export default App
