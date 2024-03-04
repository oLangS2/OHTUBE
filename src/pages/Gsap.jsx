import React , {useEffect, useState}from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/videoCard'
import { gsapText } from '../data/gsap'

const Gsap = () => {
    const [loading, setLoding] =useState(true);

    useEffect(()=> {
        setTimeout(()=>{
            setLoding(false);
        },300);
    },[]);

    const gsapPageClass = loading ? 'isLoading':'isLoaded';
    
    return(
        <Main 
            title = "Harry Styles"
            description="Harry Styles의 유튜브입니다.">
            
            <section id="gsapPage" className={gsapPageClass}>
                <h2>Harry Styles</h2>
                <h3>Official website : hstyles.co.uk</h3>
                <div className="video__inner">
                    <VideoCards videos={gsapText} />
                </div>
            </section>
        </Main>
    )
}

export default Gsap