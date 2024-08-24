import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../ContextApi/ContextApi";
function Images() { 
const { id } = useParams();
const { products } = useContext(AppContext);
const product = products.find((item) => item.id === parseInt(id));

  const data = [
    {
      img: product.img1,
    },
    {
      img: product.img2,
    },
    {
      img: product.img3,
    },
    {
      img: product.img4,
    },
    {
      img: product.img5,
    },
    {
      img: product.img6,
    },
    {
      img:"https://www.stickitup.xyz/cdn/shop/files/3_8355b37b-0df6-4fc9-a9a9-8423e2161be0.jpg?v=1719676096&width=493",
    }
  ];
  
  const [mainimage, setmainimage] = useState(data[0].img);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <div>
        <div>
          {/* Main */}
          <div>
            <img className="w-96 shadow-lg" src={mainimage} alt="Items1" />
          </div>
          <div className="w-96 h-24 mt-4">
            <Slider {...settings}>
              {data.map((data) => (
                <div className=" ">
                  <div className=" ">
                    <img
                      src={data.img}
                      alt="img"
                      className=" w-20 "
                      onClick={() => setmainimage(data.img)}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Images;
