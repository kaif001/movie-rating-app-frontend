import { useEffect, useState } from "react"
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from "./pages/Home/Home";
import Error from "./pages/404/Error"
import Details from './pages/Details/Details'
import SearchResults from './pages/SearchResults/SearchResults'
import Explore from './pages/Explore/Explore'


function App() {

  const dispatch = useDispatch()
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig()
    genresCall()
  }, []);
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
      .then((res) => {
        console.log(res)

        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }

        dispatch(getApiConfiguration(url))
      }).catch(err => console.log(err))
  }
  const genresCall = async () => {
    let promises = []
    let endpoints = ["tv", "movie"]
    let allGenres = {}
    endpoints.forEach((url) => {
      return promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })
    const data = await Promise.all(promises)
    data?.map(({ genres }) => {
      return genres?.map((item) => (allGenres[item?.id] = item))
    })
    dispatch(getGenres(allGenres))
    // console.log(allGenres)
  }


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:mediaType/:id' element={<Details />} />
          <Route path='/search/:query' element={<SearchResults />} />
          <Route path='/explore/:mediatype' element={<Explore />} />
          <Route path='*' element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
