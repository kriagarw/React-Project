import React, { Component } from 'react'

export class Calculator extends Component {

    constructor(props) {
        super(props)

        this.state = {
            buttons: [{
                clearScr: "C",
                openBracket: "(",
                closeBraket: ")",
                mod: "%",
                num7: 7,
                num8: 8,
                num9: 9,
                divide: "/",
                num4: 4,
                num5: 5,
                num6: 6,
                mul: "*",
                num1: 1,
                num2: 2,
                num3: 3,
                sub: "-",
                dot: ".",
                num0: 0,
                equal: "=",
                add: "+"
            }],
            inputValue: 0,
            inputPrevValue: ""
        }
    }

    handleButton(q) {

        if (q === "C") {
            this.setState({ inputValue: 0, inputPrevValue: "" })
        }
        else if (q === "=") {

            this.setState({
                inputPrevValue: this.state.inputValue,
                inputValue: eval(this.state.inputValue)
            })
        }
        else {
            console.log(String(q));
            this.setState({
                inputValue: (this.state.inputValue === 0 ? String(q) : this.state.inputValue + q)
            })
        }

    }

    render() {

        return (
            <div>
                <h1>Calculator</h1>

                <div className="calculator">
                    <div className="inputScreen">
                        <div>
                            <input type="text" name="screenPrev" value={this.state.inputPrevValue}></input>
                        </div>
                        <div >
                            <input type="text" name="screen" className="result" value={this.state.inputValue}></input>
                        </div>
                    </div>
                    <div className="btnBox">
                        {this.state.buttons.map(button => (
                            <div>
                                <div>
                                    <button onClick={() => this.handleButton(button.clearScr)} name={button.clearScr} className="btns newCss">{button.clearScr}</button>
                                    <button onClick={() => this.handleButton()} name={button.openBracket} className="btns">{button.openBracket}</button>
                                    <button onClick={() => this.handleButton(button.closeBraket)} name={button.closeBraket} className="btns">{button.closeBraket}</button>
                                    <button onClick={() => this.handleButton(button.mod)} name={button.mod} className="btns">{button.mod}</button>
                                </div>

                                <div>
                                    <button onClick={() => this.handleButton(button.num7)} name={button.num7} className="btns">{button.num7}</button>
                                    <button onClick={() => this.handleButton(button.num8)} name={button.num8} className="btns">{button.num8}</button>
                                    <button onClick={() => this.handleButton(button.num9)} name={button.num9} className="btns">{button.num9}</button>
                                    <button onClick={() => this.handleButton(button.divide)} name={button.divide} className="btns">{button.divide}</button>
                                </div>

                                <div>
                                    <button onClick={() => this.handleButton(button.num4)} name={button.num4} className="btns">{button.num4}</button>
                                    <button onClick={() => this.handleButton(button.num5)} name={button.num5} className="btns">{button.num5}</button>
                                    <button onClick={() => this.handleButton(button.num6)} name={button.num6} className="btns">{button.num6}</button>
                                    <button onClick={() => this.handleButton(button.mul)} name={button.mul} className="btns">{button.mul}</button>
                                </div>

                                <div>
                                    <button onClick={() => this.handleButton(button.num1)} name={button.num1} className="btns">{button.num1}</button>
                                    <button onClick={() => this.handleButton(button.num2)} name={button.num2} className="btns">{button.num2}</button>
                                    <button onClick={() => this.handleButton(button.num3)} name={button.num3} className="btns">{button.num3}</button>
                                    <button onClick={() => this.handleButton(button.sub)} name={button.sub} className="btns">{button.sub}</button>
                                </div>

                                <div>
                                    <button onClick={() => this.handleButton(button.dot)} name={button.dot} className="btns">{button.dot}</button>
                                    <button onClick={() => this.handleButton(button.num0)} name={button.num0} className="btns">{button.num0}</button>
                                    <button onClick={() => this.handleButton(button.equal)} name={button.equal} className="btns bgcolor">{button.equal}</button>
                                    <button onClick={() => this.handleButton(button.add)} name={button.add} className="btns">{button.add}</button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div >
        )
    }
}

export default Calculator