import React from 'react';
import projects from '../projectData';

const Project = () => {
  return (
    <>
      <section className='my-28 px-5' id='projects'>
        <header className='text-3xl font-bold pt-10'>
          <h2>Web Projects</h2>
        </header>
        <div className='my-7 space-y-24'>
          {projects.map((project, index) => (
            <article className='flex flex-wrap md:justify-between md:items-center' key={index}>
              <picture className={index % 2 === 0 ? 'w-full md:w-6/12 shadow-lg ' : 'w-full md:w-6/12 shadow-lg md:order-1'}>
                
                <div style={{background: 'linear-gradient(to top, rgb(9, 32, 63) 0%, rgb(83, 120, 149) 100%)'
,padding:".7rem",borderRadius:"1.2rem"}}
>
                  <img src={project.image} width='768px' height='575px' loading='lazy' alt={project.title} className='rounded-2xl' />                  
                </div>
              </picture>
              <div className='flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 '>
                <h3 className='uppercase font-bold text-lg'>{project.title}</h3>
                <p>{project.description}</p>
                <div className='flex overflow-auto space-x-3 pb-2'>
                  {project.tools.map((disc, index) => (
                    <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm' key={index}>
                      {disc}
                    </span>
                  ))}
                </div>
                <div className='w-auto flex space-x-5 relative'>
                  <a href={project.github} target='_blank' rel='noreferrer'>
                    <img src='./images/icons/github.svg' alt='link to github page' width='24px' height='24px' />
                  </a>
                  <a href={project.link} target='_blank' rel='noreferrer'>
                    <img src='./images/icons/external-link.svg' alt='link to live website' width='24px' height='24px' />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className='mx-5'>
        <a href='https://github.com/shivampurbia' target='_blank' rel='noreferrer' className='bg-gray block shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-auto'>
          <span>See more on Github</span>
        </a>
      </div>
    </>
  );
};

export default Project;
