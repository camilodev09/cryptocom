import React,{useState} from 'react'
import Slider from "react-slick";
import bannerOne from '../assets/bannerOne.jpg';
import bannerTwo from '../assets/bannerTwo.jpg';
import bannerThree from '../assets/bannerThree.jpg';

const Banner = () => {
      const [dotActive, setDocActive] = useState(0);
     const settings = {
       dots: true,
       infinite: true,
       speed: 300,
       
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
  
      autoplaySpeed: 2000,
      cssEase: "linear",

       beforeChange: (prev, next) => {
         setDocActive(next);
       },
       appendDots: (dots) => (
         <div
           style={{
             borderRadius: "10px",
             padding: "10px",
           }}
         >
           <ul
             style={{
               display: "flex",
               gap: "15px",
               justifyContent: "center",
               marginTop: "20px",
             }}
           >
             {" "}
             {dots}{" "}
           </ul>
         </div>
       ),
       customPaging: (i) => (
         <div
           style={
             i === dotActive
               ? {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "#ff014f",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
               : {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "gray",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
           }
         ></div>
       ),
     };

  return (
    <section
      id="testimonial"
      className="w-full h-full lg:h-screen justify-center items-center "
    >
      
      <div className="w-screen  relative justify-center items-center">
        {/* ================ Slider One ================== */}
        <Slider {...settings} className='relative' arrows={false} dots={false}>
          <div className="w-screen ">
          
              <div className="w-full bg-gradient-to-r from-[#1e2024] to-[#23272b]  shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="w-full h-full lg:h-[600px]  rounded-lg object-cover"
                  src={bannerOne}
                  alt="testimonialOne"
                />
              </div>
          </div>
          {/* ================ Slider Two ================== */}

          <div className="w-full ">
              <div className=" bg-gradient-to-r from-[#1e2024] to-[#23272b]  shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="w-full h-full  lg:h-[600px]   rounded-lg object-cover"
                  src={bannerTwo}
                  alt="testimonialTwo"
                />
              </div>
          </div>
          {/* ================ Slider Three ================== */}

          <div className="w-full ">
              <div className=" bg-gradient-to-r from-[#1e2024] to-[#23272b]  shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="w-full h-full lg:h-[600px] rounded-lg object-cover"
                  src={bannerThree}
                  alt="testimonialOne"
                />
              </div>
            </div>

        </Slider>
        
         <div className=" gap-2 pt-10 md:pt-40 flex flex-row md:flex-col justify-center item-center  relative md:absolute md:top-40  mdl:left-40  lg:left-60   mdl:ml-40   lg:ml-60 lgl:ml-40 xl:ml-80    mdl:pl-20 lg:pl-80   px-10 md:px-4">
               <span className=' rounded-md flex'>
                <h3 className="text-1xl font-bold bg-gray-900 p-2 rounded-md  md:px-6 items-center justify-center w-full"> Join and start earning money</h3>
              </span>
              <span className=' rounded-md flex '>
                <h3 className="text-1xl md:text-2xl mdl:text-4xl  font-bold bg-red-300 p-1 rounded-md px-1 items-center justify-center ml-12 pl-4"> JOIN NOW</h3>
              </span>
         </div>

    </div>
  </section>
  );
}

export default Banner