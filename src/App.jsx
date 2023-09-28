import logo from "../src/assets/img/Bizpro.png";
import logo_1 from "../src/assets/img/Bizpro_1.png";
import Elips_1 from "../src/assets/img/Ellipse 11.png";
import Facebook from "../src/assets/img/Facebook.png";
import frame_11 from "../src/assets/img/Frame 11.png";
import frame_12 from "../src/assets/img/Frame 12.png";
import frame_9 from "../src/assets/img/Frame 9.png";
import group from "../src/assets/img/Group 18.png";
import group_20 from "../src/assets/img/Group 20.png";
import group_20_1 from "../src/assets/img/Group 20_1.png";
import group_20_2 from "../src/assets/img/Group 20_2.png";
import group_33 from "../src/assets/img/Group 33760.png";
import Instagram from "../src/assets/img/Instagram.png";
import Linkdin from "../src/assets/img/LinkedIn.png";
import Twiter from "../src/assets/img/Twitter.png";
import hero from "../src/assets/img/hero main component.png";
import quotes from "../src/assets/img/straight-quotes 1.png";
import victory from "../src/assets/img/victory.png";
import Video from "../src/assets/img/video.png";

import Button from "./component/button/Button";
function App() {
  return (
    <div className="bg-background">
      <header className="container mx-auto py-[50px]">
        <nav className=" flex items-center justify-between bg-white py-[35px] px-[35px] rounded">
          <div>
            <img src={logo} alt="Bizpro_logo" />
          </div>
          <div>
            <ul className="flex gap-x-[25px] text-base font-medium	 text-[#828297]	">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-x-[25px]">
            <button className="text-sm font-medium">Sign In</button>
            <Button title={"Free trial"}></Button>
          </div>
        </nav>

        <section className="container mx-auto grid grid-cols-12 pt-[110px] pb-[60px]">
          <div className="col-star-1 col-span-5">
            <div className="grid gap-[30px]">
              <div className="relative ">
                <div>
                  <p className=" relative text-accent font-bold text-[50px]">
                    Perfect place for<br></br> your business<br></br> promotion
                    <span className="absolute -top-1 left-[100px]">
                      <img src={Elips_1} alt="elips" />
                    </span>
                    <span className="absolute bottom-5 right-1/2 translate-x-1/7">
                      <img src={victory} alt="victory" />
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-paragraph leading-[28px]">
                  Businesses generally promote their brand, products,<br></br>{" "}
                  and services by identifying audience.
                </p>
              </div>
              <div className="flex gap-[30px]">
                <div className="py-6">
                  <button className=" bg-accent px-[79px] py-[15px] rounded-md text-white">
                    Get Started
                  </button>
                </div>
                <div>
                  <a href="#">
                    <img src={Video} alt="video" />
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-md">
                <div className="flex justify-between p-[23px]">
                  <div>
                    <img src={quotes} alt="quotes" />
                  </div>
                  <div>
                    <img src={group} alt="group 18" />
                  </div>
                </div>
                <div>
                  <p className="text-paragraph p-[23px] leading-[28px]">
                    There’s no shortage of ideas, what’s missing is the<br></br>{" "}
                    will to execute them – Seth Godin
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-star-6 col-span-7 relative ">
            <div className="relative flex items-center justify-center flex-col">
              <img src={hero} alt="hero picture" />

              <span className="absolute left-0 ">
                <img src={frame_11} alt="frame" />
              </span>
              <span className="absolute -bottom-20 ">
                <img src={frame_9} alt="frame" />
              </span>
              <span className="absolute right-0">
                <img src={frame_12} alt="frame" />
              </span>
              <span className="absolute -top-12 right-0">
                <img src={group_33} alt="group 33760" />
              </span>
            </div>
          </div>
        </section>
      </header>
      <main>
        <section className="bg-white py-[110px]">
          <div className="container mx-auto ">
            <div>
              <h1 className="relative text-center text-accent font-bold text-[45px]">
                How it works
                <span className="absolute -top-1 right-[45%]">
                  <img src={Elips_1} alt="elips" />
                </span>
              </h1>
              <p className=" text-center text-paragraph text-sm leading-[28px]">
                Businesses generally promote their brand, products, and<br></br>{" "}
                services by identifying audience.
              </p>
            </div>
            <div className="grid grid-cols-12 items-end ">
              <div className="col-star-1 col-span-4">
                <div className="px-[30px]">
                  <img className="py-[30px]" src={group_20} alt="group 20" />
                  <h1 className="py-[10px] text-accent font-[500] text-[24px]">
                    Choose packages
                  </h1>
                  <p className="text-paragraph text-sm pb-[30px] leading-[28px]">
                    Businesses generally promote their brand,<br></br> products,
                    and services by identifying<br></br> audience or users.
                  </p>
                </div>
              </div>
              <div className="col-star-5 col-span-4">
                <div className="px-[30px]">
                  <img className="py-[30px]" src={group_20_1} alt="group 20" />
                  <h1 className="py-[10px] text-accent font-[500] text-[24px]">
                    Schedule appointment
                  </h1>
                  <p className="text-paragraph text-sm pb-[30px] leading-[28px]">
                    When you have important information to<br></br> pass onto
                    your people, text messaging<br></br> can be a great way to
                    do it.
                  </p>
                </div>
              </div>
              <div className="col-star-9 col-span-4">
                <div className="px-[30px]">
                  <img className="py-[30px]" src={group_20_2} alt="group 20" />
                  <h1 className="py-[10px] text-accent font-[500] text-[24px]">
                    Grow together
                  </h1>
                  <p className="text-paragraph text-sm pb-[30px] leading-[28px]">
                    Texting can sometimes come across as an<br></br> impersonal
                    way to communicate, it<br></br>
                    can be highly beneficial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#060640] text-white ">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-5  py-[85px]">
            <div className="col-start-1 col-span-6 items-center justify-center">
              <img src={logo_1} alt="logo-bizpro" />
              <p className="text-[#9090A7] py-[25px] leading-[28px]">
                This is a big one and i consider it one of the<br></br> most
                important things for a business.
              </p>
              <ul className="flex gap-4">
                <li>
                  <a href="#">
                    <img src={Facebook} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Instagram} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Linkdin} alt="linkdin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Twiter} alt="twitter" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-start-7 col-span-2 items-center justify-center">
              <p className="text-white text-lg font-medium mb-6">Quick Links</p>
              <ul className="grid gap-4 text-[#9090A7]">
                <li>
                  <a href="#"></a>Home
                </li>
                <li>
                  <a href="#"></a>About
                </li>
                <li>
                  <a href="#"></a>Appoinment
                </li>
                <li>
                  <a href="#"></a>Blog
                </li>
                <li>
                  <a href="#"></a>Contact
                </li>
              </ul>
            </div>
            <div className="col-start-9 col-span-2">
              <p className="text-white text-lg font-medium mb-6">Company</p>
              <ul className="grid gap-5 text-[#9090A7]">
                <li>
                  <a href="#"></a>About
                </li>
                <li>
                  <a href="#"></a>Contact
                </li>
                <li>
                  <a href="#"></a>Careets
                </li>
                <li>
                  <a href="#"></a>Prees
                </li>
              </ul>
            </div>
            <div className="col-start-11 col-span-2">
              <p className="text-white text-lg font-medium mb-6">Information</p>
              <ul className="grid gap-5 text-[#9090A7]">
                <li>
                  <a href="#"></a>Pravacy Policy
                </li>
                <li>
                  <a href="#"></a>Terms & Condition
                </li>
                <li>
                  <a href="#"></a>FAQ
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#000020] py-[35px]">
          <ul className=" container mx-auto flex items-center justify-between text-white">
            <li>Copyright © 2021 Bizpro</li>
            <li> All Rights Reserved</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
