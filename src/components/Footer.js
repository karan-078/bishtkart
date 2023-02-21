import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#172337] p-4 text-[#cfd7da] ">
        <div>
          <div className="pb-4">
            <div className="flex justify-around flex-col gap-4 md:flex-row">
              <div className="flex flex-col">
                <h4 className="text-[#586b75]">ABOUT</h4>
                <ul className="">
                  <li>Contact Us</li>
                  <li> About Us</li>
                  <li>Careers</li>
                  <li>Slipkart Stories</li>
                  <li>Press</li>
                  <li>Slipkart</li>
                  <li>Information</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[#586b75]">HELP</h4>
                <ul>
                  <li>Payments</li>
                  <li>Shipping</li>
                  <li>Cancellation &</li>
                  <li>Returns</li>
                  <li>FAQ</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[#586b75]">POLICY</h4>
                <ul className="">
                  <li>Return Police</li>
                  <li>Temrs Of Use</li>
                  <li>Security</li>
                  <li>Privecy</li>
                  <li>Sitemp</li>
                  <li>EPR Compliance</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[#586b75]">SOICAL</h4>
                <ul>
                  <li>Facebbok</li>
                  <li>Twiter</li>
                  <li>You Tube</li>
                </ul>
              </div>

       
              <div className="flex ">
              <div className="h-40 w-[1px] bg-[#586b75]">

</div>
                <div className="pl-6">
                  <h4 className="text-[#586b75]">Mail Us:</h4>
                  <p>
                    Flipkart Internet Private Limited, <br />
                    Buildings Alyssa, Begonia &<br />
                    Clove Embassy Tech Village,
                    <br />
                    Outer Ring Road, Devarabeesanahalli Village,
                    <br />
                    Bengaluru, 560103,
                    <br />
                    Karnataka, India
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="w-full justify-center items-center">
            <h4 className="text-center">© 2023 Bishtkart.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
