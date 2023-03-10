import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { BiMailSend } from 'react-icons/bi'

export default function Contact() {
    return (
        <>
            <div className="appContainer w-1/4">
                <div className='appHeader'>
                    <p>Me Contacter</p>
                    <span>
                        <p><Link to='/'><IoMdCloseCircle /></Link></p>
                    </span>
                </div>
                <div className='bg-white appBody '>
                    <div class="w-full h-fit">
                        <form class="px-8 pt-6 pb-8 mb-4">
                            <div class="flex flex-wrap -mx-3 mb-6">


                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                    <label class="block uppercase tracking-wide text-gray-700 font-bold mb-2" for="">
                                        Name
                                    </label>

                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" />

                                </div>

                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                    <label class="block uppercase tracking-wide text-gray-700 font-bold mb-2" for="">
                                        Subject
                                    </label>

                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" type="text" />

                                </div>


                                <div class="w-full px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 font-bold mb-2" for="">
                                        Your Message
                                    </label>
                                    <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" placeholder="Leave a comment..."></textarea>
                                </div>
                                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Send < BiMailSend class="inline" />
                                </button>





                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
