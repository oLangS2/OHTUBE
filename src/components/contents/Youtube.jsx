import React from "react";

import { youtubeText } from "../../data/Youtube";
import { Link } from "react-router-dom";

const Youtube = () => {
    return (
        <section id='youtube'>
            <h2>유튜브 클론 사이트</h2>
            <div className='video__inner'>
                {youtubeText.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Youtube