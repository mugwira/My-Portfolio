import React from 'react'

function Navbar() {
    return (
        <div className="container flex justify-between items-center py-4">
            <div className="left">
                <a className="font-mono font-semibold text-2xl text-blue-600" href="./about">Claire</a>
            </div>
            <div className="right">
                <a href="#">Dark Mode</a>
            </div>
        </div>
    )
}

export default Navbar
