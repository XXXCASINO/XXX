import React, { useEffect, useState } from 'react';
import './App.css';
import { FaHome, FaGift, FaTrophy, FaUsers, FaShoppingCart, FaGamepad, FaHeart, FaHistory, FaDice, FaDiceD20, FaQuestionCircle, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const App = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    fetch('https://api-xxx.vercel.app/')
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          setUserName(data[0].user);
        }
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo">XXX Logo</div>
        <div className="menu">
          <div className="menu-item">Promotions</div>
          <div className="submenu">
            <div className="submenu-item"><FaGift /> Rewards</div>
            <div className="submenu-item"><FaTrophy /> Challenge</div>
            <div className="submenu-item"><FaUsers /> Big Lottery</div>
            <div className="submenu-item"><FaShoppingCart /> Shop</div>
          </div>
          <div className="menu-item"><FaGamepad /> All Game</div>
          <div className="menu-item"><FaGamepad /> Populars Game</div>
          <div className="menu-item"><FaGamepad /> New Game</div>
          <div className="menu-item"><FaHeart /> My favorites</div>
          <div className="menu-item"><FaHistory /> Recent Viewed</div>
          <div className="menu-item"><FaDice /> Live Casino</div>
          <div className="menu-item"><FaDiceD20 /> Slots</div>
          <div className="menu-item"><FaDice /> Roulette</div>
          <div className="menu-item"><FaQuestionCircle /> Originals</div>
        </div>
      </div>
      <div className="main-content">
        <div className="navbar">
          <div className="nav-item"><FaHome /> Home</div>
          <div className="nav-item">Free</div>
          <div className="nav-item">Referral</div>
          <div className="nav-item search"><input type="text" placeholder="Search.........." /></div>
          <div className="nav-item login"><FaSignInAlt /> Log In</div>
          <div className="nav-item signup"><FaUserPlus /> Sign Up</div>
          <div className="nav-item signup">{userName}</div>
        </div>
        <div className="carousel-container">
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div className="promotion-banner">
              <h2>Weekly cashback</h2>
              <p>Every Monday 10-15% up to €500!</p>
              <div className="buttons">
                <button className="btn btn-primary">Create Account</button>
                <button className="btn btn-secondary">More Info</button>
              </div>
            </div>
            <div className="promotion-banner">
              <h2>Special Offer</h2>
              <p>Get 20% off on your next deposit!</p>
              <div className="buttons">
                <button className="btn btn-primary">Claim Now</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="top-games">
          <h2>Top games</h2>
          <div className="game-cards">
            <div className="game-card">96x96 Crime</div>
            <div className="game-card">96x96 The Lion's Share</div>
            <div className="game-card">96x96 Super Power</div>
          </div>
        </div>
      </div>
      <div className="right-sidebar">
        <div className="notifications">
          <div className="notification">qJQ.QXxHP4 got 0.001 ETH from Vince</div>
          <div className="notification">Blankfrost got 0.001 ETH from Vince</div>
          <div className="notification">rutor got 0.001 ETH from Vince</div>
          <div className="notification">Margaret1254 just gotta wait to get it then run it up LFG</div>
          <div className="notification">YTwQNJpD2qyu got 0.001 ETH from Vince</div>
          <div className="notification">tQS.HkBJC got 0.001 ETH from Vince</div>
          <div className="notification">rutor got 0.001 ETH from Vince</div>
        </div>
        <div className="chat-box">
          <input type="text" placeholder="Your Message" />
          <button className="btn btn-send">Send</button>
        </div>
      </div>
    </div>
  );
};

export default App;