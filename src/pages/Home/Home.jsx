import React from 'react'
import './style.scss'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './TopRated/TopRated'
import Footer from '../../components/footer/Footer'
import Explore from '../Explore/Explore'
// import TopRated from './TopRated/TopRated'

const Home = () => {
    return (
        <>
            <div className="homePage" style={{ height: "1000px" }}>
                <HeroBanner />
                <Trending />
                <Popular />
                <TopRated />
                <Explore />
                <Footer />
            </div>
        </>
    )
}

export default Home