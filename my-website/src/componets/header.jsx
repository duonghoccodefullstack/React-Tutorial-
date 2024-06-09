import React from "react";
import SlideShow from "./slideShow";
const Header = () => {

 
    
  return (
    
    <>
      <nav className="pl-20 bg-yellow-900  w-full h-12  flex gap-20 ">
        {/* <img src="./public/assets/logo.jpg" className="w-20 z-0 absolute top-0" alt="" /> */}
        <h1 className="pt-3 text-white font-sans cursor-pointer">
          AKZ Factory
        </h1>
        <div className="flex relative">
          <input
            type="text"
            className="w-96 border-solid rounded-md h-10 pl-3 pr-10 mt-1 
        "
          />
          <img
            src="./public/assets/search.png"
            alt=""
            className="h-6 w-auto absolute right-2 top-3 cursor-pointer"
          />
        </div>
        <div className="flex space-x-10">
          <button className="text-white hover:text-yellow-300">
            Đăng Nhập
          </button>
          <div className="flex pt-3 mt-1 space-x-2 bg-white p-3 text-yellow-900 rounded-md h-10">
            <a href="#"> Giỏ Hàng</a>
            <img
              src="./public/assets/shopping-cart.png"
              className="h-6 w-auto pb-2 "
              alt=""
            />
          </div>
        </div>
        <div className="p-3 mt-1 bg-white h-10 rounded-md ">
        Hotline:0983.801.386

        </div>
      </nav>
      <nav>
        <ul className="bg-yellow-200 flex  px-0 ">
          <li className="hover:bg-yellow-800 hover:text-white px-0 py-2 block ml-20">
            <a href="" className="p-2">
              Trang Chủ
            </a>
          </li>
          <li className="hover:bg-yellow-800 hover:text-white px-0 py-2">
            <a href="" className="p-2">
              Sản Phẩm
            </a>
          </li>
          <li className="hover:bg-yellow-800 hover:text-white p-2">
            <a href="" className="p-2">
              Tin Tức
            </a>
          </li>
          <li className="hover:bg-yellow-800 hover:text-white p-2">
            <a href="" className="p-2">
              Tranh động lực
            </a>
          </li>
          <li className="hover:bg-yellow-800 hover:text-white p-2">
            <a href="" className="p-2">
              Tranh Thư Pháp
            </a>
          </li>
          <li className="hover:bg-yellow-800 hover:text-white p-2">
            <a href="" className="p-2">
              Đồ Đecor Trang Trí
            </a>
          </li>
          <li className="hover:bg-yellow-800 hover:text-white p-2">
            <a href="" className="p-2">
              Đèn Trang Tri
            </a>
          </li>
          <li className="hover:bg-yellow-800 hover:text-white p-2">
            <a href="" className="p-2">
              Hàng mới về
            </a>
          </li>
          <li className="hover:bg-yellow-800 hover:text-white p-2">
            <a href="" className="p-2">
              Bảng dán treo tường
            </a>
          </li>
        </ul>
      </nav>
      <nav className="bg-yellow-900 h-9 w-full pl-40 flex gap-20 justify-evenly">
        <div className="flex pt-1">
          <img src="./public/assets/maps-and-flags.png" className="h-6 w-auto" alt="" />
          <p className="pt-1">Xem hàng tại: Số nhà jqk , Nam từ Liêm, Hà Nội</p>
        </div>
        <div className="flex pt-1">
          <img src="./public/assets/valid.png" alt="" />
          <p className="pt-1">Hướng Dẫn Thanh Toán</p>
     
        </div>
      </nav>

          <div  className="">
     
      <SlideShow  />
    </div>
    </>
    
  );
  
};
export default Header;
