import React, { useEffect,useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/videoCard'
import {websiteText} from '../data/website'

const Website = () => {
    const [loading,setloading] =useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setloading(false);
        },300)
    },[]);
    
    const websitePaseClass = loading?'isLoading':'isLoaded'

    return(
        <Main 
            title = "Yerin Baek"
            description="@YerinBaekOfficial">
            <section id="websitePage" className={websitePaseClass}>
                <h2>Yerin Baek</h2>
                <h3>@YerinBaekOfficial</h3>
                <div className="video__inner">
                    <VideoCards videos={websiteText}/>
                </div>
            </section>

        </Main>
    )
}

export default Website