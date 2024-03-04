import React,{useEffect,useState} from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/videoCard'
import {portfolioText} from '../data/portfolio'

const Port = () => {
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },300);
    },[]);

    const portPageClass = loading ?'isLoading':'isLoaded';

    return(
        <Main 
            title = "떡볶퀸 Tteokbokqueen"
            description="세상의 모든 떡볶이를 소개합니다!">
            
            <section id="portPage" className={portPageClass}>
                <h2>떡볶퀸 Tteokbokqueen</h2>
                <h3>세상의 모든 떡볶이를 소개합니다!</h3>
                <div className="video__inner">
                    <VideoCards videos={portfolioText}/>
                </div>
            </section>
        </Main>
    )
}

export default Port