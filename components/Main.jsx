import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import faveImg from '../public/assets/navlogo.png';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    (<div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <Image

            src={faveImg}
            alt='/'
            width='175'
            height='50'
            className='mx-auto p-2 flex justify-center items-center'
          />
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            EDUCATION THROUGH GAMING
          </p>
          <h1 className='py-4 text-gray-700'>
            Hello, my name is <span className='text-[#5d34c6ff]'> Corgan</span>
          </h1>
          <h2 className='py-2 text-gray-700'>Video Game Programmer</h2>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I focus most of my time on developing indie games and 
            models ranging from the Great War through modern wars.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/corgan-maillet-5956a7178/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/CorganMaillet'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact' legacyBehavior>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume' legacyBehavior>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>)
  );
};

export default Main;
