import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.png';

const About = () => {
  return (
    (<div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Native American Programmer</h2>
          <p className='py-2 text-gray-600'>
            Much of the content that I create is geared towards wartime 
            developments and models. Creating these experiences gives me 
            the ability to educate people in the historic lens of war. 
            I study history as my minor and continue to learn every bit 
            of information about war and the experiences of those who
            lived through the times.
          </p>
          <p className='py-2 text-gray-600'>
            I began creating models, maps, and clothing in Roblox back 
            in 2013. Since then I have expanded to include other programs 
            such as Unreal Engine, Adobe Creative Cloud, Autodesk, and Blender; amongst 
            others. I have experience in coding with Python, Java, JavaScript, 
            C++, C#, and Ruby. I was a first responder for 6 years and continue
            to have a special place in developing software to improve the lives
            of all first responders.
          </p>
          <Link href='/#projects' legacyBehavior>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>)
  );
};

export default About;
