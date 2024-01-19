// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Layout from './Layout'
// import Home from './Home'
// import ViewAll from './ViewAll'
// import SingleStudent from './SingleStudent'
// import Update from './Update'
// import ErrorPAge from './ErrorPAge'


// const App = () => {
//   return (
//     <BrowserRouter>
//         <Routes>
//         <Route path='/' element={<Layout />}>
//             <Route index element={<Home />}/>
//             <Route path='/viewall' element={<ViewAll />}/>
//             <Route path='/single/:id' element={<SingleStudent />}/>
//             <Route path='/update/:id' element={<Update />}/>
//             <Route path='*' element={<ErrorPAge />}/>
//         </Route>
//         </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import ViewAll from './ViewAll'
import SingleStudent from './SingleStudent'
import Update from './Update'
import ErrorPAge from './ErrorPAge'
import { Toaster } from 'react-hot-toast'

let r = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
      index:true,
      element:<Home/>,
      },
      {
        path:"/viewall",
        element:<ViewAll/>,
      },
      {
        path:"/single/:id",
        element:<SingleStudent/>
      },
      {
        path:"/update/:id",
        element:<Update/>,
      },
      {
        path:"*",
        element:<ErrorPAge/>
      }
    ]
  }
])
const App = () => {
  return (
    <>
      <div>
        <Toaster/>
      </div>
      <RouterProvider router={r}></RouterProvider>
    </>
  )
}

export default App