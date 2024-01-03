
import {Routes, Route, Outlet } from 'react-router-dom'


import Top from "./Sections/Top";
import Nav from "./Sections/Nav";
import Footer from "./Sections/Footer";
import Home from './Sections/Home';
import ContactUs from './Sections/ContactUs';

import BreadCrumbs from './Components/BreadCrumbs';


function App() {
   
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/contact' element={<ContactUs />}></Route>
      <Route path="*" index element={<NotFound />} />
    </Route>
    
    </Routes>
   
  )
}

const Layout = () => {
  return (
     <main className="h-screen min-w-[1100px] overflow-none grid grid-rows-[40px_80px_1fr_1fr]">  
      <Top />
      <Nav />
      <Outlet />
      <Footer />
    </main>
  )
}
// 


const NotFound = () => {
  const routes = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Not Found',
      link: ''
    }
]
  return (
    <div className='px-10 py-16 mx-10'>
      <BreadCrumbs routes={routes}/>
      <section className='flex flex-col justify-center items-center p-24 gap-10'>
          <h1 className='text-9xl font-semi-bold tracking-wide'>404 Not Found</h1>
          <p>Your visited page not found. You may go home page</p>
          <button type="button" className="py-6 px-12 flex items-center justify-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 self-center">
              Back to home page
          </button>
        </section>
    </div>
  )
}




export default App
