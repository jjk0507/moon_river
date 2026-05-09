import React,{useEffect} from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import logo from "../../assets/logo.svg"
import like from "../../assets/like.svg"
import user from "../../assets/user.svg"
import karzinka from "../../assets/karzinka.svg"
import cotegore from "../../assets/cotegore.svg"
const Nav = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <>
     <div className='w-full h-screen bg-[linear-gradient(to_right,#f5f5f5_60%,#1f1f1f_40%)] flex pt-[60px] items-start justify-between px-[162px]'>
      <img data-aos="fade-up" className='w-[258px] h-[53px]' src={logo} alt="" />
      <div className="imgs flex  gap-[40px]">
        <img  className='w-[22px] h-[19px]' src={like} alt="" />
        <img  className='w-[22px] h-[19px]' src={user} alt=""  /> 
        <div className='flex text-white gap-[10px]'>
          <img className='w-[22px] h-[19px]'  src={karzinka} alt="" />
          <p>1</p>
        </div>
         <img className='w-[22px] h-[19px] ml-[40px]'  src={cotegore} alt="" />
      </div>
      
      
      
    </div>
    </>
  )
}

export default Nav
