import React from 'react';
import Header from '../header';
import './home.css';
import Body from '../body';
import Footer from '../footer';
function Home() {
  return (
    <div className='Home'>
        <div >
            <Header />
        </div>
        <div>
            <Body />
        </div>
        <div>
            <Footer />
        </div>
       
    </div>
  )
}

export default Home