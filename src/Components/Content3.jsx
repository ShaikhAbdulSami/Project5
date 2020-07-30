import React from 'react'
import Content3img from '../Images/content3.svg'
import useWebAnimations, {wobble} from "@wellyshen/use-web-animations";
import '../App.css'
import { Flip , Fade, LightSpeed} from 'react-reveal';

const Content3 = () => {

    const { keyframes, timing } = wobble;
    const { ref } = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        delay: 2000, // Delay 1s
        direction: "alternate",
        iterations: Infinity,
        duration: timing.duration * 6, // Speed up the animation
        easing: "ease-in-out",
      },
    });

    return (
        <section className='content3bg'>
            <div className='col-10 mx-auto'>
                <div className='row'>
                <div className='col-md-6 pt-5 order-2'>
                    <Fade bottom big>
                      <h2>Advertisment</h2>  
                    </Fade>
                    <Flip left>
                      <p className='my-3'>We have provided effective advertising services to small businesses for over years. We provide advertising services on different platforms. Like: Facebook , Twitter , Youtube etc.</p>  
                    </Flip>                   
                </div>
                <div className='col-lg-6 pt-5 order-2 order-1'>
                    <LightSpeed right >
                       <img src={Content3img} ref={ref} alt="" /> 
                    </LightSpeed>
                </div>
                </div>
            </div>
        </section>
    )
}
export default Content3;