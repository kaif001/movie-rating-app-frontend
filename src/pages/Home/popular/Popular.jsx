import React, { useState } from 'react'
import '../style.scss'
import Carousel from '../../../components/Carousel/Carousel'
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFEtch from '../../../hooks/useFetch'


const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie")

    const { data, loading } = useFEtch(`/${endpoint}/popular`)


    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv")
    }


    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">
                    What's Popular
                </span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} endpoint={endpoint} loading={loading} />
        </div>
    )
}

export default Popular