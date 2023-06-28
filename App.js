import React from "react"

export default function App() {
    const [isUpDown, setIsUpDown] = React.useState("Up")
    const [isTrueFalse, setIsTrueFalse] = React.useState("True")
    const [isRightWrong, setIsRightWrong] = React.useState("Right")
    
    function changeUpDown() {
        setIsUpDown(prevState => !prevState)
    }
    
    function changeTrueFalse() {
        setIsTrueFalse(prevState => !prevState)
        // 等于 if， 等于 setIsTrueFalse(prevState => prevState ? false : true)
    }
    
    function changeRightWrong() {
        setIsRightWrong(prevState => !prevState)
    }
    
    return (
        <div>
            <h1 className="state--title">BinaryPicker</h1>
            <h3 className="state--title">Binary choices are decisions that have two possible outcomes or options.</h3>
            <h1 className="state--title">Click to Change</h1>
            <div className="state">
                <div onClick={changeUpDown} className="state--value">
                    <h1>{isUpDown ? "Up" : "Down"}</h1>
                </div>
                <div onClick={changeTrueFalse} className="state--value">
                    <h1>{isTrueFalse ? "True" : "False"}</h1>
                </div>
                <div onClick={changeRightWrong} className="state--value">
                    <h1>{isRightWrong ? "Right" : "Wrong"}</h1>
                </div>
            </div>
        </div>
    )
}
// can be yes or no, without true or false