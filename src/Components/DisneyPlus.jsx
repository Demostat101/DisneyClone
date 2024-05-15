import { Storage1 } from "./Storage"
import Logo from "../assets/AllLogo.png"
import "../Components/HomePage.css"

let DisneyPlus = () => {
    return(

        <div className="DisneyPlus">

            <div className="DisneyTitle">What's on Disney<sup>+</sup></div>

            <div className="disneyPlusBody">
                {
                    Storage1.map((val,index) => {

                        return <div className="hoverhovetTexx" key={index}>

                            <div className="hovetText" >

                                <div className="imagebody">
                                 <div className=".Child imagePlus"><img className="pictures" src={val.img} alt="" /></div>
                                </div>


                            </div>

                            <div className="underText">{val.text}</div>

                        </div> 
                    })
                }
            </div>

            <img src={Logo} alt="" className="Disneylogo" />

            <button className="disneybtn">SUBSCRIBE NOW<sup>*</sup></button>

            <div className="disneyplusFooter">*Terms and Condition Apply | Plans start from just £4.99 a month</div>

        </div>
    )
}

export default DisneyPlus