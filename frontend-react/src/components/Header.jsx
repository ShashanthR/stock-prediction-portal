import React from 'react'
import Button from './Button'

const Header = () => {
    return (
        <>
        <nav className="navbar container pt-2 pb-3 align-items-start">

            <a className='navbar-brand text-light' href="">Stock Prediction Portal</a>

            <div className="header-actions">
            <Button text="Log in" className='btn-info'/>
            <Button text="Register" className='btn-info'/>
            </div>
        </nav>
        </>
    )
}

export default Header