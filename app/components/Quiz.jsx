import React, { Component } from 'react'

export default class Quiz extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: "",
            submitted: false,
            correct: false
        }

        this.radio = this.radio.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    radio(e) {
        this.setState({ selected: e.target.value }, () => {
            console.log(this.state)
        })
    }

    handleClick() {
        this.setState({ submitted: true })
        this.state.selected === this.props.data.answer1 ? this.setState({ correct: true }) : this.setState({ correct: false })
    }

    handleReset() {
        this.setState({submitted: false, correct: false, selected: ""})
    }

    render() {
        return (
            <div className="container">
                <div className="quiz">
                    <div className="quiz-content">
                        <div className="quiz-content__question">
                            <p>{this.props.data.question}</p>
                            <img src={this.props.data.imgsrc} />
                        </div>

                        <div className="quiz-content__answers">
                            <form>
                                <label>
                                    <div className={`${this.state.submitted && this.state.selected === this.props.data.answer1 ? 'quiz-content__answers-single--selected' : ""} quiz-content__answers-single`}>
                                        <input type="radio" name="answer" value={this.props.data.answer1} onClick={this.radio} />
                                        {
                                            this.state.selected === this.props.data.answer1 ? 
                                            <i className="material-icons">radio_button_checked</i> :
                                            <i className="material-icons">radio_button_unchecked</i>
                                        }
                                        <p>{this.props.data.answer1}</p>
                                    </div>
                                </label>
                                <label>
                                    <div className={`${this.state.submitted && this.state.selected === this.props.data.answer2 ? 'quiz-content__answers-single--selected' : ""} quiz-content__answers-single`}>
                                        <input type="radio" name="answer" value={this.props.data.answer2} onClick={this.radio} />
                                        {
                                            this.state.selected === this.props.data.answer2 ? 
                                            <i className="material-icons">radio_button_checked</i> :
                                            <i className="material-icons">radio_button_unchecked</i>
                                        }
                                        <p>{this.props.data.answer2}</p>
                                    </div>
                                </label>
                            </form>
                        </div>

                        <div className="quiz-content__submit" style={{visibility: this.state.submitted ? "hidden" : "visible"}}>
                            <input type="submit" disabled={this.state.selected === ""} onClick={this.handleClick} />
                        </div>

                { this.state.submitted &&
                    <div className="quiz-content__bottom">
                        <div className="quiz-content__results">
                            {
                                this.state.correct ?
                                    <div className="quiz-content__results--correct">
                                        <div><i className="material-icons">done</i>
                                        <p>Correct</p></div>
                                        <p>{this.props.data.correctAnswer}</p>
                                    </div>
                                    :
                                    <div className="quiz-content__results--incorrect">
                                        <div><i className="material-icons">clear</i>
                                        <p>Incorrect</p></div>
                                        <p>{this.props.data.wrongAnswer}</p>
                                    </div>
                            }
                        </div>
                        <div className="quiz-content__results--again">
                            <button onClick={this.handleReset}><span><i className="material-icons">replay</i><p>take again</p></span>
                            </button>
                        </div>
                    </div>
                }
                    </div>
                </div>
            </div>
        )
    }
}
