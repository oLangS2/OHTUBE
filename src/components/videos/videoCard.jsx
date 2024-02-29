import React from 'react'
import {Link} from 'react-router-dom'

const VideoCards = ({ videos })=>{
    return(
    <>
        {videos.map((video,index)=>(
            <div className="video_thumb play__icon">
                <Link to ={`/video/${video.videold}`}>
                    <img src={video.img} alt={video.title} />
                </Link>
            </div>
        ))}
    </>
    )
}

export default VideoCards