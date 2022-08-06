import React, {useState, useEffect} from "react"

export default function Colorpicker(){
    
    const [firstColor, setFirstColor] = useState("#9f0909")
    const [secondColor, setSecondColor] = useState("#b69f2b")
    const [degree, setDegree] = useState("50")
    const [innerText, setInnerText] = useState(`background: linear-gradient(${degree}deg, ${firstColor} , ${secondColor})`)

    function handleFirstColor(event){
        const {value} = event.target
        setFirstColor(value)
    }

    function handleSecondColor(event){
        const {value} = event.target
        setSecondColor(value)
    }
    
    function handleDegreeChange(event){
        const {value} = event.target
        setDegree(value)
    }

    useEffect(() => {
        setInnerText(`background: linear-gradient(${degree}deg, ${firstColor} , ${secondColor})`)
    }, [degree, firstColor, secondColor])

     return (
        <div className="gradient-container">
            <div className="gradient">
                <div style={{height: "200px", margin: "20px", background: `linear-gradient(${degree}deg, ${firstColor} , ${secondColor})`}}></div>
                <div className="textArea"><textarea readOnly value={innerText} style={{height: "130px", width: "300px"}} /></div>
            </div>
            <div className="gradient-select">
                <h1 style={{margin: "20px"}}>Options</h1>
                <div className="colors"><p>Color One:</p><p>{firstColor}</p><input className="inputs" onChange={handleFirstColor} type="color" name="firstColor" id="firstColor" value={firstColor}/></div><br/>
                <div className="colors"><p>Color Two:</p><p>{secondColor}</p><input className="inputs" onChange={handleSecondColor} type="color" name="secondColor" id="secondColor" value={secondColor} /></div><br />
                <div className="colors"><p>Angle:</p><input style={{width: "40px"}} onChange={handleDegreeChange} className="inputs" type="number" name="textArea" value={degree} /></div>
            </div>
        </div>
    )
}