import React from 'react'
import Content2img from '../Images/content2.svg'
import useWebAnimations, {swing} from "@wellyshen/use-web-animations";
import '../App.css'
import { Rotate, Flip, LightSpeed } from "react-reveal";
const Content2 = () => {

    const { keyframes, timing } = swing;
    const { ref } = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        delay: 1000, // Delay 1s
        direction: "alternate",
        iterations: Infinity,
        duration: timing.duration * 5, // Speed up the animation
        easing: "ease-in-out",
      },
    });

    return (
        <section className='content2bg'>
            <div className='col-10 mx-auto'>
                <div className='row'>
                <div className= 'col-md-6 pt-5 order-2'>
                  <LightSpeed right>
                     <img src={Content2img} ref={ref} alt="" />
                  </LightSpeed>
               
                </div>
                <div className= 'col-lg-6 pt-5 order-2 order-1'>
                  <Rotate bottom right>
                    <h2>Website Cloning</h2>
                  </Rotate>
                  <Flip left>
                     <p className='my-3'>Website cloning refers to getting inspired from a successful website idea and ‘copying‘ that concept to create a new ‘website clone’ that not only has majority of the same features that the reference site had, but adds new unique features of its own.

Website clone scripts of popular websites allow aspirant entrepreneurs to create and start their website venture without the need to develop it from scratch.</p>
                  </Flip>               
               
                </div>
                </div>
            </div>
        </section>
    )
}
export default Content2;