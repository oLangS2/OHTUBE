import React from 'react'
import Main from '../components/section/Main'

import {developerText} from '../data/developer'
import { Link } from 'react-router-dom'

const Developer = () => {
    return(
        <Main title ="구독"
        description="구독중인 유튜브 채널입니다.">
            <section id='developerPage'>
                <h2>🥰 오늘의 추천 개발자입니다.</h2>
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