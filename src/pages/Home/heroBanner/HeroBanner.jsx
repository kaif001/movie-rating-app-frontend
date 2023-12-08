import React, { useState, useEffect } from 'react'
import './style.scss'
import useFetch from '../../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Img from "../../../components/lazyloadimage/Img"
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'



const HeroBanner = () => {
    const [background, setBackground] = useState("")
    const [query, setQuery] = useState("")

    const navigate = useNavigate()
    const { data, loading } = useFetch("/movie/upcoming")

    const searchQueryHandler = (e) => {
        if (e?.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }
    const searchResultApi = () => {
        if (query.length > 0)
            navigate(`/search/${query}`)

    }

    const { url } = useSelector((state) => state.home)
    console.log(url)

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
        setBackground(bg)
    }, [data])


    return (
        <div className="heroBanner">
            {!loading && <div className="backdrop-img">
                <Img src={background} />
            </div>}
            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome</span>
                    <span className="subtitle">Millions of movies, TV shows and people to discover, Explore Now</span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder='Seacrh for a movie or a Tv show'
                            onKeyUp={searchQueryHandler}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button onClick={() => searchResultApi()}>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default HeroBanner