import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/VideoSlider'

import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { gsapText } from '../data/gsap'
import { portfolioText } from '../data/portfolio'
import { youtubeText } from '../data/Youtube'
import { developerText } from '../data/developer';
import { todayText } from '../data/today';

const Home = () => {
    return(
        <Main 
            title = "오현정 오튜브"
            description="오현정 포트폴리오 오튜브 사이트에 오신 것을 환영합니다.">
                
            <Today videos={todayText} id="today"/>
            <Developer videos={developerText} title="구독중인 유튜브 채널" id="developer" />
            <VideoSlider videos={webdText} title="Interactive Developer" id="webd"/>
            <VideoSlider videos={websiteText} title="yerin Baek" id="website"/>
            <VideoSlider videos={gsapText} title="Harry Styles" id="gsap"/>
            <VideoSlider videos={portfolioText} title="떡볶퀸" id="portfolio"/>
            <VideoSlider videos={youtubeText} title="유튜브 클론 사이트" id="youtube"/>
        </Main>
    )
}

export default Home