"use client";
import Slider from "react-slick";
import MascotCard from '../MascotCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel(mascots: any) {

  var settings = {
    dots: true,
    infinite: mascots.data > 4 ? true : false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <div className="py-12">
        <h3 className="text-3xl md:text-5xl text-center md:text-start leading-10 md:leading-tight mx-4 pb-12">Mascotas en adopción</h3>
        <Slider {...settings}>
        {
              mascots.data.map((mascota: any, index: number) => {
                return (
                  <MascotCard key={index} mascota={mascota} klass="mx-3"/>
                );
              })
            }
        </Slider>
      </div>
    </div>
  );
}