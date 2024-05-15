import "../Components/HomePage.css"

import { DataStorage } from "./Storage"

let FirstSection = () => {

    return (
        <div className="section">

            {
                DataStorage.map((val,index) => {
                    return <div className="imageparagraph" key = {index}>
                        <img src={val.img} alt="" className="film" />
                        <div className="bodyCombined">
                            <div className="heading">{val.heading}</div>
                            <small className="paragraph">{val.paragraph}</small>
                            <div className="foot">{val.foot}</div>
                        </div>
                    </div>
                })
            }

        </div>
    )
}

export default FirstSection