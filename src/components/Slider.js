import React, { useEffect, useState } from "react";
import Image from "../utils/Image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

// console.log(Image)

const Slider = () => {
  const [product, setProduct] = useState(Image);
  const [index, setIndex] = useState(0);

  const PrveProduct = () => {
    setIndex((oldindex) => {
      let index = oldindex - 1;

      if (index < 0) {
        index = product.length - 1;
      }
      return index;
    });
  };

  const NextProduct = () => {
    setIndex((oldindex) => {
      let index = oldindex + 1;

      if (index > product.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldindex) => {
        let index = oldindex + 1;
        if (index > Image.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <section className="flex w-[99vw]  md:mt-4 transition-[1s ease] m-auto ">
      {Image.map((Product, ProductIndex) => {
        const { id, image } = Product;

        let postion = "nextSlide";

        if (ProductIndex === index) {
          postion = "active";
        }

        if (
          ProductIndex === index - 1 ||
          (index === 0 && ProductIndex === product.length - 1)
        ) {
          postion = "firstslide";
        }

        return (
          <div className=" h-52 md:h-96  transition-[1s ease]">
          <div 
            key={id}
            className={`${postion}  w-[100vw] md:w-[96vw]  opacity-0  h-1/4 m-auto  absolute md:ml-6 md:h-1/2 transition-[1s ease]`}
          >
            <img
              src={image}
              alt={id}
              className="w-full max-w-[80rem] object-fill 
               h-full m-auto md:w-[80rem] md:h-full "
            />

            <button
              className="absolute top-14 md:bg-transparent md:top-40 w-8  h-20 left-0 grid place-content-center"
              onClick={NextProduct}
            >
              <FiChevronLeft className="h-10 w-10 text-white md:text-black" />
            </button>

            <button
              className="absolute top-14 md:top-40 w-8  h-20 right-0 grid place-content-center"
              onClick={PrveProduct}
            >
              <FiChevronRight className="h-10 w-10  text-white md:text-black" />
            </button>
          </div>

          </div>
        );
      })}
    </section>
  );
};
export default Slider;
