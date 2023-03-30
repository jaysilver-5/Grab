import React from 'react';
import Project1 from './assets/project1.png';
import Project2 from './assets/project2.png';
import Project3 from './assets/project3.png';
import Project4 from './assets/project4.png';
import Project5 from './assets/project5.png';
import Projectimage from './assets/project-images.png';

function Projects() {
  return (
    <div style={{background: 'linear-gradient(to bottom, white 50%, #FFB629 50%'}}>
      <div className='-gray mt-10 w-full'>
        <div className='p-20 w-full -red'>
          <div className='mx-auto -green'>
            <div className='flex'>
              <h1 className='mx-auto -gray font-primary text-[35px] font-semibold'>
                Transporting Across The World
              </h1>
            </div>
            <div className='flex items-center -gray'>
              <div className='mx-auto gap-x-2 flex -gray'>
                <img src={Projectimage} alt='' className='h-[300px]' />
              </div>
            </div>
          </div>

          {/* <div className='w-full bg-primary h-[400px]'></div> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
