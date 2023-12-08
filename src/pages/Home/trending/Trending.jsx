import React, { useState } from 'react'
import '../style.scss'
import Carousel from '../../../components/Carousel/Carousel'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFEtch from '../../../hooks/useFetch'


const Trending = () => {
    const [endpoint, setEndpoint] = useState("day")

    const { data, loading } = useFEtch(`/trending/all/${endpoint}`)


    const onTabChange = (tab) => {
        setEndpoint(tab === "Days" ? "day" : "week")
    }


    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">
                    Trending
                </span>
                <SwitchTabs data={["Days", "Weeks"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    )
}

export default Trending