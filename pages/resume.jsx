import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Corgan | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Corgan Maillet</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/corgan-maillet-5956a7178/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/CorganMaillet'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Programming <span className='px-1'>|</span> Game Development{' '}
              <span className='px-1'>|</span> Critical Thinking
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Programming</p>
            <p className='py-2'>Game Development</p>
            <p>Criticla Thinking</p>
          </div>
        </div>
        <p>
          Native American who has taken my love for video games and applied it 
          to the advancement of education through video game media. By working in 
          teams to develop outcomes that we have set forth for ourselves, I have 
          been able to accomplish all tasks and challenges. Critical thinking and 
          strong leadership has led me to excel in all parts of my life and allows 
          me to produce the best possible product! With the knowledge of many human 
          advancements, I have applied this thought to my work and have studied trends 
          that are being set by mainstream entertainment and the development of society.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>Java
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span>C++
            <span className='px-2'>|</span>C#
            <span className='px-2'>|</span>Ruby
            <span className='px-2'>|</span>Unreal Engine
            <span className='px-2'>|</span>Visual Studio
            <span className='px-2'>|</span>Adobe CC
            <span className='px-2'>|</span>Microsoft Office
            <span className='px-2'>|</span>Cerner
            <span className='px-2'>|</span>Autodesk
            <span className='px-2'>|</span>Roblox Studio
          </p>
          <p className='py-2'>
            <span className='font-bold'>Medical Skills</span>
            <span className='px-2'>|</span>ImageTrend
            <span className='px-2'>|</span>Cerner
            <span className='px-2'>|</span>AthenaHealth
            <span className='px-2'>|</span>GIS/911 CAD
            <span className='px-2'>|</span>Zoll
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            DATAVANT
            </span>
            <span className='px-2'>|</span>Bentonville, AR
          </p>
          <p className='py-1 italic'>Health Information Specialist I (2023 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Process requests for patients, healthcare providers, insurance agencies, worker’s
              compensation claims, attorneys, government organizations, and disability determinations.
            </li>
            <li>
              Follow federal laws highlighted under HIPAA and other federal privacy laws.
            </li>
            <li>
              Keep track of inventory management at a single location and request supplies when
              needed.
            </li>
            <li>
              Assist other staff with job duties and train when needed.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              ADAIR COUNTY EMS
            </span>
            <span className='px-2'>|</span>Westville, OK
          </p>
          <p className='py-1 italic'>Station Captain (2022 - 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Track supplies for the station and keep intermediate drugs up to date on expiration dates.
              Order the supplies and keep inventory of when supplies are used and when.
            </li>
            <li>
              Train staff in best practices in the EMS field, driving safely with emergency vehicles, and
              great service to the patient.
            </li>
            <li>
              Track all station checks and calls to ensure all information related to federal and state
              laws are being applied.
            </li>
            <li>
              Create and enforce Standard Operating Procedures (SOPs).
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>WATTS FIRE DEPARTMENT</span>
            <span className='px-2'>|</span>Watts, OK
          </p>
          <p className='py-1 italic'>Lieutenant Firefighter (2018 - 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Maintain station that is in-service 24/7/365. Including truck maintenance, 
              supply restock, fuel restock, purchase of new equipment, and fire report 
              tracking.
            </li>
            <li>
              Host department wide trainings to teach and understand the importance of 
              safe fire fighting techniques, basic life support, truck driving for emergency 
              vehicles, and proper search and rescue techniques. 
            </li>
            <li>
              Leading as the first contact and scene commander for many local emnergencies, 
              hosting CPR/BLS with local public schools to teach life saving techniques, 
              assistance to local public schools with on-site medical teams for athletic competitions.
            </li>
            <li>
              Keep a level head under intense and extreme pressure. Contain the chaos of the 
              public when an emergency is in-progress and provide support to the community 
              after extreme emergencies and weather related injuries.
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            PAFFORD EMS
            </span>
            <span className='px-2'>|</span>Stilwell, OK
          </p>
          <p className='py-1 italic'>Emergency Medical Technician (2020 - 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Respond to emergency calls dispatched from local 911 dispatch centers.
            </li>
            <li>
              Clean, sanitize, and restock all items on assigned units and ensure all items are accounted
              for at shift change.
            </li>
            <li>
              Provide public support in disaster situations and give aid to patients while following the
              best practices of local, state, and federal standards.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
