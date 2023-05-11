import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinsCarrousel from './CoinsCarrousel';
import Coin from '../routes/Coin';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Coins.css';

const Carrousel = () => {
  const [coins, setCoins] = useState([]);

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 640, // breakpoint para pantallas pequeñas
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768, // breakpoint para pantallas medianas
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1024, // breakpoint para pantallas grandes
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="mx-4 sm:mx-8 lg:mx-16 pt-10  pl-10 md:pl-10 lg:pl-20  lgl:pl-40 pb-10 lg:pb-20">
      <Slider {...settings} arrows={false} dots={false}>
        {coins.map((coin) => (
          <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
            <CoinsCarrousel coins={coin} />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carrousel;


