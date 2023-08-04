import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import './Home.css';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import Favourites from '../../components/favourites/Favourites';
import MailList from '../../components/mailList/MailList';

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='homeContainer'>

        <br></br>
        <Featured/>

        <br></br>
        <h1 className='homeTitle'>Browse by property Type</h1>
        <PropertyList/>

        <br></br>
        <h1 className='homeTitle'>Most Loved Properties</h1>
        <Favourites/>

        <br></br>
        <MailList/>
        {/* <Footer/> */}

      </div>



    </div>

  )
}

export default Home;