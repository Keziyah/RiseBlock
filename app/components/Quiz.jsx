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
                                <div className="quiz-content__answers-single">
                                    <label>
                                        <input type="radio" name="answer" value={this.props.data.answer1} onClick={this.radio} />
                                        <p>{this.props.data.answer1}</p>
                                    </label>
                                </div>

                                <div className="quiz-content__answers-single">
                                    <label>
                                        <input type="radio" name="answer" value={this.props.data.answer2} onClick={this.radio} />
                                        <p>{this.props.data.answer2}</p>
                                    </label>
                                </div>
                            </form>
                        </div>

                        <div className="quiz-content__submit">
                            <input type="submit" disabled={this.state.selected === "" ? true : false} onClick={this.handleClick} />
                        </div>

                { this.state.submitted &&
                    <div>
                        <div className="quiz-content__results">
                            {
                                this.state.correct ?
                                    <div className="quiz-content__results--correct">
                                        <i className="material-icons">done</i>
                                        <p>{this.props.data.correctAnswer}</p>
                                    </div>
                                    :
                                    <div className="quiz-content__results--incorrect">
                                        <i className="material-icons">highlight_off</i>
                                        <p>{this.props.data.wrongAnswer}</p>
                                    </div>
                            }
                        </div>
                        <div className="quiz-content__results--again">
                            <span onClick={this.handleReset}><i className="material-icons">replay</i><p>take again</p></span>
                        </div>
                    </div>
                }
                    </div>
                </div>
            </div>
        )
    }
}
