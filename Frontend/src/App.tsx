import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { faClock, faHome, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {

  const [side, setSide] = useState<boolean>(false);
  const location = useLocation();
  const pathName = location.pathname;

  const links = [
    {
      page:'Home',
      link:'/',
      icon: <FontAwesomeIcon icon={faHome}/>
    },
    {
      page:'Subscriptions',
      link:'/subscriptions'
    },
    {
      page:'Explore',
      link:'/explore'
    },
    {
      page:'Library',
      link:'/library'
    },
    {
      page:'History',
      link:'/history',
      icon: <FontAwesomeIcon icon={faClockRotateLeft} />
    },
    {
      page:'Watch Later',
      link:'/watch-later'
    },
  ]

  return (
    <>
      <header className='flex items-center justify-between p-2'>
        <div className='w-1/5'>
          <button className='mr-2 p-2 border font-bold text-2xl' onClick={() => setSide(!side)}>x</button>
          <Link to='/' className='text-2xl font-bold'>Youtube</Link>
        </div>
        <div className='flex w-3/5'>
            <div className='rounded-full p-2 border border-gray-500 mr-2 w-1/2 flex justify-between'>
                <input type='text' placeholder='Search' className='bg-transparent outline-none w-full'/>
                <button className='rounded-full w-10 bg-gray-200 p-2'>🔍</button>
            </div>
            <button className='rounded-full bg-black p-2'>🎙️</button>
        </div>
        <div className='w-1/5'>
          <button className='rounded-full bg-black text-white p-2 w-10'>P</button>
          <button className='rounded-full bg-black text-white p-2 w-10'>P</button>
        </div>
      </header>

      <main className=''>

        <aside className='md:flex md:flex-col transition-all duration-700 bg-white fixed z-20 left-0 top-0 w-0 overflow-x-hidden h-full shadow-2xl' style={{width: side ? '250px' : '0px'}}>
          <div className='p-4 mb-4'>
            <button onClick={() => setSide(false)} className='border px-4'>x</button>
            <Link to='/' className='text-2xl font-bold'>Youtube</Link>
          </div>
          <ul>
            {links.map(l => <li className='w-full mb-2'><Link to={l.link} className={pathName === l.link ? 'inline-block w-full border-l-red-500 border-l-4 text-xl p-2 bg-gradient-to-r from-red-300 transition-all' : 'text-xl p-2'}><span className={pathName === l.link ? 'text-red-500 mr-2' : 'mr-2'}>{l.icon}</span>{l.page}</Link></li>)}
          </ul>
        </aside>

        {/* <div className='absolute bg-gray-400 w-full h-full top-0 z-10 opacity-80' style={{display: side ? 'block' : 'none'}} onClick={() => setSide(false)}></div> */}
        
        <div style={{marginLeft: side ? '250px' : '0px'}} className='transition-all duration-700'>
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default App
