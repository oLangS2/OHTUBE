import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import { developerText } from '../data/developer'
import { Link } from 'react-router-dom'

const Developer = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const developerPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "구독"
            description="구독중인 유튜브 채널">
            
            <section id='developerPage' className={developerPageClass}>
                <h2>구독중인 유튜브 채널</h2>
                <h3>최신순입니다.</h3>
                <div className="developer__inner">
                    {developerText.map((developer, key) => (
                        <div className="developer" key={key}>
                            <div className="developer__img play__icon">
                                <Link to={`/channel/${developer.channelId}`}>
                                    <img src={developer.img} alt={developer.name} />
                                </Link>
                            </div>
                            <div className="developer__info">
                                <Link to={`/channel/${developer.channelId}`}>
                                    {developer.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    )
}

export default Developer
