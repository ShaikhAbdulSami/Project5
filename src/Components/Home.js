import React from 'react'
import '../App.css'
import Introimg from '../Images/Intro_Brain.svg'
import Flashimg from '../Images/Intro_Featured_Image_Empty.svg'
import { Zoom , Bounce , Fade } from 'react-reveal';
import Spin from 'react-reveal/Spin';

const Home = () => {

  return (
    <header className='header'>
      <section>
        <div className='leftside'>
            <img src={Introimg} height='500px' className='intro' alt="" />
            <img src={Flashimg} height='500px' className='flash' alt="" />
        </div>
        <div className='rightside'>
          <Spin>
            <h1>SHAIKH ENTERPRISES</h1>
          </Spin>
          <Zoom out>
            <p>THE WAY TO FUTURE</p>
          </Zoom>
        </div>
      </section>
    </header>

  )
}
export default Home;

