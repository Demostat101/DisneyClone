import "../Components/HomePage.css"
import Menu from "../assets/icon-hamburger.svg"
import MenuClose from "../assets/icon-close.svg"
import DisneyLogo from "../assets/disney_logo.png"
import Swift from "../assets/swift.png"
import { HomePageStorage } from "./Storage"
import { useState } from "react"
import { menuContext } from "../contextFolder/Context"

let HomePage = () => {

    const {isClicked,handleClickChange} = menuContext()




    return(

        <div className="Home">

            <div className="NavBar">

                <div className="OpenClose" onClick={handleClickChange}>

                    { isClicked ? <img src={MenuClose} alt="" className="MenuClose"/> : <img src={Menu} alt="" className="Menu"/>}

                </div>

                <div className="disney"><a href="#"><img src={DisneyLogo} alt="" /></a></div>
                

               <ul id="Links" className={isClicked? "#Links active" : "#Links"}>

                    {
                        HomePageStorage.map((val,index)=>{

                            return <li className="disney" key={index}> {val.heading}

                            <div className="subLink">
    
                                <ul>
    
                                    <li onClick={handleClickChange}><a  href="#">{val.head}</a></li>
                                    <li onClick={handleClickChange}><a href="#">{val.find}</a></li>
                                    <li onClick={handleClickChange}><a href="#">{val.intro}</a></li>
                                    <li onClick={handleClickChange}><a href="#">{val.watch}</a></li>
                                    <li onClick={handleClickChange}><a href="#">{val.marvel}</a></li>
                                    <li onClick={handleClickChange}><a href="#">{val.national}</a></li>

                                </ul>
    
                            </div>
                        </li>
                        })
                    }


                        <li onClick={handleClickChange}><a href="#" className="anchor">SHOP</a></li>


                </ul>

            </div>

            <div className="HomeImages">

                <div className="imageContainer">
                    <div className="child backGroundImage"><img className="taylorImage" src="src/assets/OriginalTaylor.jpg" alt="" /></div>
                </div>

                <div className="textLogo">

                    <div className="imageText">
                        <img src={Swift} alt="" className="details" />
                        <p>includes "cardigan" and four additional acoustic songs. <br/> Now streaming on Disney<sup>+</sup></p>
                        <button className="Subscribe">SUBSCRIBE NOW<sup>*</sup></button>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default HomePage