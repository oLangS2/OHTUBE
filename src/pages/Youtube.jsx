import React,{useEffect,useState} from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/videoCard'
import {youtubeText} from '../data/Youtube'

const Youtube = () => {
    const [loading,setLoading] =useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },300);
    },[]);

    const YoutubePageClass = loading?'isLoading':'isLoaded';

    return(
        <Main 
            title = "유튜브 클론 사이트"
            description="유튜브 클론 사이트 튜토리얼 강의입니다.">
            
            <section id="youtubePage" className={YoutubePageClass}>
                <h2>유튜브 클론 사이트</h2>
                <h3>유튜브 클론 사이트 튜토리얼 채널입니다.</h3>
                <div className="video__inner">
                    <VideoCards  videos={youtubeText}/>
                </div>
            </section>
        </Main>
    )
}

export default Youtube