import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dsaImg from '../public/assets/projects/dsa.png';
import fleshImg from '../public/assets/projects/flesh.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Worked On</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Northwest AR DSA'
            backgroundImg={dsaImg}
            projectUrl='/dsa'
            tech='Ruby'
          />
          <ProjectItem
            title='Fleshbound'
            backgroundImg={fleshImg}
            projectUrl='/fleshbound'
            tech='Unreal Engine'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
