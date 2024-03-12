import React from 'react'
import {Link} from 'react-router-dom'

const Logo = ({toggleMenu}) => {
    return (
        <h1 className='header__logo'>
            <Link href='/'>
                <em aria-hidden='true' onClick={toggleMenu}></em>
                <span>OH<br />TUBE</span>
            </Link>
        </h1>
    )
}

export default Logo
