import React from "react";
import Content1img from '../Images/content1.svg'
import useWebAnimations, {pulse} from "@wellyshen/use-web-animations";
import '../App.css'
import { Flip, LightSpeed } from "react-reveal";


const Content1 = () => {

    const { keyframes, timing } = pulse;
    const { ref } = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        delay: 1000, // Delay 1s
        direction: "alternate",
        iterations: Infinity,
        duration: timing.duration * 2, // Speed up the animation
        easing: "ease-in-out",
      },
    });

    

    return (
        <section className='content1bg'>
            <div className='col-10 mx-auto'>
                <div className='row'>
                <div className='col-md-6 pt-5 order-2'>
                    <Flip top>
                        <h2>UI Designing</h2>
                    </Flip>
                    <Flip left>
                        <p className='my-3'>Our UI design experts lead the way in interface design development, creating websites and applications that are visually appealing, seamless, and intuitive to use, putting users first.</p>
                    </Flip>
                    
                </div>
                <div className='col-lg-6 pt-5 order-2 order-1'>
                    <LightSpeed right>
                        <img src={Content1img}  ref={ref}  className='target' alt="" />
                    </LightSpeed>
                    
                </div>
                </div>
            </div>
        </section>
    )
}
export default Content1;