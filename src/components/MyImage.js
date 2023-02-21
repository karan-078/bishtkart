import React, { useState } from "react";

const MyImage = ({ imgs = [{ index
    : "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[1]);

  console.log(imgs)
  return (
    <>
      <div className="flex items-center justify-center flex-col-reverse gap-4 md:flex-row">
        <div className=" flex md:flex-col  justify-center items-center">
          {imgs?.map((curElm, index) => {
            return (
              <figure className="p-2 justify-center items-center flex  md:p-2 md:max-w-md">
                <img className=" w-20  h-20 "
                  src= {curElm}
                  alt={curElm}
                  
                  key={index}
                  onMouseOver={() => setMainImage(curElm)}
                />
              </figure>
            );
          })}
        </div>
       

        <div className="main-screen w-[18rem] h-[18rem] flex justify-center items-center">
          <img src={mainImage} alt={mainImage} className=" w-full h-full max-h-[30rem] md:w-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default MyImage;