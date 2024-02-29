import React from "react";

import {websiteText} from '../../data/website'
import {Link} from 'react-router-dom'

const Website =()=>{
    return(
        <section id="website">
            <h2>yerin Baek</h2>
            <div className="video__inner">
                {websiteText.map((video,key)=>(
                    <div className="video">
                        <div className="video__thumb play_icon">
                            <Link to ={`/video/${video.videold}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Website