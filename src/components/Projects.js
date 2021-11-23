import React from 'react'
import Zoom from 'react-reveal/Zoom'
function Projects() {
    return (
        <div className="main bg-blue-100 h-screen">
            <div className="container py-4">
                <Zoom delay={3000}>
                <div className="first w-1/3 bg-blue-300 rounded-lg ">
                    <div className="image ">
                        <img className="w-full " src="./Web Dev.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="text-xl text-white py-2 px-2">My Portfolio</h1>
                        <p className="px-2 text-sm ">Designed this portifolio with react and tailwind css</p>
                        <div className="stacks py-2 px-2 flex gap-4">
                        <a className="px-2 text-white rounded-full bg-blue-600 py-0.5 text-xs" href="home#">React</a>
                        <a className="px-2 text-white rounded-full bg-blue-600 py-0.5 text-xs" href="home#">Tailwind CSS</a>
                        </div>
                        <div className="link py-8 mx-auto px-2">
                            <a className="bg-gray-800 hover:bg-gray-600 text-white rounded  px-16 py-2" href="https://mugwira-weatherapp.netlify.app/">View Project</a>
                        </div>
                    </div>
                </div>
                </Zoom >
                <div className="second">

                </div>
                <div className="third">

                </div>
            </div>
                
        </div>
    )
}

export default Projects
