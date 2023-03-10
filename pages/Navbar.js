import Link from 'next/link';

import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { getToken } from './components/redux/LocalStorageService';


 
const Navbar = () => {
   
   
     
       
    // const { access_token, refresh_token } = useSelector((state) => state.token);

    const  refresh_token = ''
    const access_token = ''

    // const {access_token, refresh_token} = getToken()

  const [navbar, setNavbar] = useState(false);
console.log("Refresh Token  "+ refresh_token);
  return (
    <div>
      <nav className="w-full bg-white shadow">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
              <div>
                  <div className="flex items-center justify-between py-3 md:py-5  space-x-3 ">
                      <Link href='/'>
                          <h2 className="text-2xl font-bold">Flparvez</h2>
                          </Link>
                      { access_token ? <Link href="/profile">
                      <h2 className="text-xl font-mono">Profile</h2>
                  </Link> : <Link href="/auth/register">
                      <h2 className="text-xl font-mono">Register</h2>
                  </Link> }

             <Link href="/admin">
                      <h2 className="text-xl font-mono">Admin</h2>
                  </Link> 

 { access_token ? " " : <Link href="/auth/login">
                      <h2 className="text-xl font-mono">Login</h2>
                  </Link> }


                   
                      <div className="md:hidden">
                          <button
                              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                              onClick={() => setNavbar(!navbar)}
                          >
                              {navbar ? (
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                  >
                                      <path
                                          fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"
                                      />
                                  </svg>
                              ) : (
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                  >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M4 6h16M4 12h16M4 18h16"
                                      />
                                  </svg>
                              )}
                          </button>
                      </div>
                  </div>
              </div>
              <div>
                  <div
                      className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                          navbar ? "block" : "hidden"
                      }`}
                  >
                      <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                          <li className="text-black hover:text-blue-600">
                              <Link href="/">Home</Link>
                          </li>
                          <li className="text-black hover:text-blue-600">
                              <Link href="/blog">Blog</Link>
                          </li>
                          <li className="text-black hover:text-blue-600">
                              <Link href="/video">Videos</Link>
                          </li>
                          <li className="text-black hover:text-blue-600">
                              <Link href="/contact">Contact US</Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </nav>
      </div>
  );
};

export default Navbar;