import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/videoCard'
import { webdText } from '../data/webd'

const Webd = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const webdPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "Interactive Developer"
            description="코드로 만드는 애니메이션, 영감, 실리콘밸리의 생활과 해외취업에 대해 이야기 합니다.">

            <section id='webdPage' className={webdPageClass}>
                <h2>Interactive Developer</h2>
                <h3>코드로 만드는 애니메이션, 영감, 실리콘밸리의 생활과 해외취업에 대해 이야기 합니다.</h3>
                <div className="video__inner">
                    <VideoCards videos={webdText} />
                </div>
            </section>
        </Main>
    )
}

export default Webd
