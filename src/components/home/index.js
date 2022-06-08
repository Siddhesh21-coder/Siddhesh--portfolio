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
        <a href="https://storyset.com/people">People illustrations by Storyset</a>
        <a href="https://iconscout.com/icon-pack/social-media-logos" target="_blank">Social Media Logos Icon Pack</a> by <a href="https://iconscout.com/contributors/icon-mafia" target="_blank">Icon Mafia</a>
        <a href="https://iconscout.com/icons/github" target="_blank">Github Icon</a> by <a href="https://iconscout.com/contributors/unicons" target="_blank">Unicons Font</a>
    </div>
  )
}

export default Home