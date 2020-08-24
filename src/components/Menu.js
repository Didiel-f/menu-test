import React from 'react'
// import { Card } from './Card';

import Slider from 'react-slick'

import '../styles1.css'
import { Bar } from './Bar';


export const Menu = () => {
    const arr = [1,2,3,4];



    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    
    
    
    
    
    return (
        <div>


            <div className="container">
                <h2>Hamburguesas</h2>
                <Slider {...settings} className="Slider" >
                    {
                        arr.map( entry => (
                            <div className="" key={entry}>
                                <div className="tarjeta">
                                    <img src="./images/burguer.jpg" alt="Portada" />
                                    <div className="Desc">
                                        <h4><b>Hulk</b></h4>
                                        <p>El increible hulk</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>

            <div className="container">
                <h2>Bebidas</h2>
                <Slider {...settings} className="Slider" >
                    {
                        arr.map( entry => (
                            <div className="" key={entry}>
                                <div className="tarjeta">
                                    <img src="./images/juice.jpg" alt="Portada" />
                                    <div className="Desc">
                                        <h4><b>Hulk</b></h4>
                                        <p>El increible hulk</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
          


            <div className="container">
                <h2>Hamburguesas</h2>
                <Slider {...settings} className="Slider" >
                    {
                        arr.map( entry => (
                            <div className="" key={entry}>
                                <div className="tarjeta">
                                    <img src="./images/burguer.jpg" alt="Portada" />
                                    <div className="Desc">
                                        <h4><b>Hulk</b></h4>
                                        <p>El increible hulk</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>


            <Bar />

            {/* <div className="container">
                <h2>Hamburguesas</h2>
                <Slider {...settings} className="Slider" >
                <div className="">
                    <div className="tarjeta">
                        <img src="./images/burguer.jpg" alt="Portada" />
                        <div className="Desc">
                            <h4><b>Hulk</b></h4>
                            <p>El increible hulk</p>
                        </div>
                    </div>
                </div>
                </Slider> */}
            




























            
            
{/* 

            <ul>
                <li>Menu</li>
                <li>Items</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <h1>
                Hola mundo
            </h1>

            
            {
                arr.map( entry =>( 
                    <Card 
                        key={entry} 
                    />
                ) )
            } */}



        {/* <div className="containerT">
            <div className="gridItem" >1</div>
            <div className="gridItem" >2</div>
            <div className="gridItem" >3</div>
            <div className="gridItem" >4</div>
            <div className="gridItem" >5</div>
            <div className="gridItem" >6</div>
            <div className="gridItem" >7</div>
            <div className="gridItem" >8</div>
            <div className="gridItem" >9</div>
        </div> */}




        </div>
    )
}
