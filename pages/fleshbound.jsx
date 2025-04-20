import Image from 'next/image';
import React from 'react';
import fleshImg from '../public/assets/projects/flesh.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const crypto = () => {
  return (
    (<div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={fleshImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Fleshbound</h2>
          <h3>Unreal Engine / C++ / BitBucket</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This video game was created by a team of 5 students in Unreal Engine 
            for the course GAM-305, Digital Game Development, at Southern New 
            Hampshire University. The story takes place within the body 
            of a human. The player is a scientist that has shrunk themselves 
            down to fight off a virus, represented by fleshy creatures. 
            I was the lead for minimap development, compass development, sound 
            tech, and was a second on QA for the entire project. While a collective 
            effort was made for the map development.
          </p>
          <a
            href='https://github.com/CorganMaillet/FleshBound'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>          
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Unreal Engine
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> C++
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> BitBucket
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Adobe Illustrator
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Adobe Media Encoder
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects' legacyBehavior>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>)
  );
};

export default crypto;
