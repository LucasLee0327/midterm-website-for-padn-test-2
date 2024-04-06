import React, { Component } from "react";
import { useState } from 'react'

// webpage template from https://tailblocks.cc/
function Chatboard() {
    const [textInput, setTextInput] = useState({ name: '', message: '' })
    const [comments, setComments] = useState(
    /** @type {{name: string, message: string}[]} */([])
    )

    /** @type {React.ChangeEventHandler<HTMLInputElement>} */
    const handleTextInputChange = ({ target: { name, value } }) => {
        // const { name, value } = event.target
        // obj = { ...prev }; obj[name] = value
        setTextInput(prev => ({
        ...prev,
        [name]: value,
        }))
    }
    /** @type {React.FormEventHandler<HTMLFormElement>} */
    const handleFormSubmit = (event) => {
        setComments(prev => [...prev, textInput])
        setTextInput({ name: '', message: '' })
        event.preventDefault();
    }

    // next page content
    return (
        <>
            <section class="text-black body-font overflow-hidden">
                <div class="container px-5 py-10 mx-auto">
                    <h1 className="flex justify-start py-5 text-2xl font-bold">Chatboard</h1>
                    <div class="-my-8 divide-y-2 divide-gray-200">
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:flex-grow">
                                <form onSubmit={handleFormSubmit} class="flex flex-row space-x-4">
                                    <label for="name">名字:</label>
                                    <input className="bg-blue-100 mb-4" name="name" value={textInput.name} onChange={handleTextInputChange} />
                                    <label for="message">想說的話:</label>
                                    <input className="bg-blue-100 mb-4" name="message" value={textInput.message} onChange={handleTextInputChange} />
                                    <input className="bg-blue-300 mb-4 rounded-md border-2 border-blue-500 font-bold" type="submit" value="留言" />
                                </form>                               
                            </div>
                        </div>

                        <div className="py-8 justify-start">
                            {comments.map((comment, index) =>
                                <div key={index} className="text-left mb-4 bg-blue-100 p-4 rounded-lg">
                                    <p class="text-xl font-semibold text-gray-900 title-font mb-2">{comment.name}</p>
                                    <p class="leading-relaxed">{comment.message}</p>       
                                </div>
                            )}
                        </div>
                                          
                    </div>
                </div>
            </section>
        </>
    );

}

export default Chatboard