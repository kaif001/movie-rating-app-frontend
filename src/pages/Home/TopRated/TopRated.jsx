import React, { useState } from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFEtch from '../../../hooks/useFetch'


const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie")

    const { data, loading } = useFEtch(`/${endpoint}/top_rated`)


    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv")
    }


    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">
                    Top-Rated Movies
                </span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} endpoint={endpoint} loading={loading} />
        </div>
    )
}

export default TopRated