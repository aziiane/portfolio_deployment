import React, { useEffect, useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { client } from './lib/client'


export default function Application(info) {
    const [appData, setAppData] = useState([])
    let params = window.location.pathname.split('/');

    client.fetch(
        `*[_type == "apps_data" && slug == '${params[2]}' ]{
                slug,
                name,
                content,
                type,
                logo {
                    asset -> {
                        _id,
                        url
                    },
                    alt
                }
            }`
    )
        .then((data) => {
            setAppData(data)
            console.log(data)
        })
        .catch(console.error)

    return (
        appData.map((data) => (
            <div className={`appContainer ${data.type}`}>
                <div className='appHeader'>
                    <p>{data.name}</p>
                    <span>
                        <p><Link to='/'><IoMdCloseCircle /></Link></p>
                    </span>
                </div>
                <div className='appBody'>

                    {data.type === "textEditor" ? <textArea>{data.content}</textArea> : <p>{data.content}</p>}
                </div>
            </div>
        ))
    )
}
