import React from 'react'

function Contact() {
    return (
        <div className="bg-gray-300 ">
            <div className="mx-auto w-1/3">
            <form className="contact-form">
                <div className="">
                <label>Name</label>
                <input type="text"/>
                </div>
                <div>
                <label>Email Address</label>
                <input type="email"/>
                </div>
                <div>
                <label>Message</label>
                <input type="messagebox"/>
                </div>
                    
            </form>
            </div>
          
        </div>
    )
}

export default Contact
