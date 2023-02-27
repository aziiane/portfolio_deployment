import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { client } from './lib/client'
import './styles/App.scss';

export default function Desktop() {
    const [appData, setAppData] = useState([])
    useEffect(() => {
        client.fetch(
            `*[_type == "apps_data"]{
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
            })
            .catch(console.error)
    }, [])
    return (
        <>
            <div className='container'>
                {appData.map((obj) => (
                    <ul>
                        <Link to={`/application/${obj.slug}`}>
                            <li className='justify-center'>
                                <img src={obj.logo.asset.url} alt={obj.name} />
                            </li>
                            <li className='text text-center'>{obj.name}</li>
                        </Link>
                    </ul>
                ))}
            </div>
        </>
    )
}
