import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="bg-gradient-to-b from-gray-800 to-black w-full h-full text-white">
      <div  className="flex flex-col justify-center mx-auto max-w-screen-lg h-full ">
      <div className="flex flex-col justify-center items-center ">
            <p className="text-6xl inline border-b-4 mt-36 ">Contact Me</p>
            <p className="mb-28 inline border-b-4  text-2xl">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
            <form className="flex flex-col justify-center w-full md:w-1/2"action="https://getform.io/f/zazkkgkb" method="POST">
                <input name="name" type="text" placeholder="Enter your name"
                className="text-white focus:outline-none  bg-transparent p-2 rounded-md  border-2"></input>
                <input name="email" type="email"  placeholder="Enter your Mail"
                className="text-white focus:outline-none my-4  bg-transparent p-2 rounded-md  border-2"></input>
                <textarea name="message"  rows={10} className="text-white focus:outline-none  bg-transparent p-2 rounded-md  border-2"></textarea>
               <button type="submit" class=" relative left-24 w-2/3 text-white flex justify-center items-center bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-bold  rounded-lg py-4 text-center mb-1">Chat with me</button>

            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
