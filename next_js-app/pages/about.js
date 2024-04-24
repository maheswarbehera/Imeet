import React from 'react';
import styles from '@/styles/maheswar.module.css';
import Dev from '@/component/Dev';
const about = () => {
  return (
    <>
    <style>
       { `
        .dev{
            padding:50px;margin:10px;
            background: red;
        }
        `}
    </style>


    <div className='dev'>
      About page
    </div>
    <Dev/>
    </>
  );
}

export default about;
