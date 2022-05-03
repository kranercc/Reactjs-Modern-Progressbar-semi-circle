import React, { Component } from 'react'
import "./Progress_Bar.css"
export default class Progress_Bar extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    componentDidMount() {
        let progress_bar = document.getElementById(this.props.name+"progress");
        let bar = document.getElementById(this.props.name + "_bar");
        let val = document.getElementById(this.props.name + "_span");
        let perc = parseInt(val.textContent, 10);
        let in_front = parseInt(perc + 2);
        let back = parseInt(perc - 2);
        let correct = parseInt(perc);

        let p = 0;
        let progress = setInterval(() => {
            p += 1;
            bar.style.transform = `rotate(${45 + p * 1.8}deg)`;
            val.textContent = p;
            if (p >= perc) {
                clearInterval(progress);

                // GO IN FRONT
                let in_front_progress = setInterval(() => {
                    p += 1;
                    bar.style.transform = `rotate(${45 + p * 1.8}deg)`;
                    val.textContent = p;
                    if (p >= in_front) {
                        clearInterval(in_front_progress);
                        // GO BACKWARDS
                        let back_progress = setInterval(() => {
                            p -= 1;
                            bar.style.transform = `rotate(${45 + p * 1.8}deg)`;
                            val.textContent = p;
                            console.log(p, back)
                            if (p <= back) {
                                clearInterval(back_progress);

                                // GO TO CORRECT

                                let correct_progress = setInterval(() => {
                                    p += 1;
                                    bar.style.transform = `rotate(${45 + p * 1.8}deg)`;
                                    val.textContent = p;
                                    if (p >= correct) {
                                        clearInterval(correct_progress);
                                    }
                                }, 30);
                            }
                        }, 30);

                    }
                }, 30);

            }
        }, 30);






    }

    render() {
        return (
            <div>

                <div id={this.props.name+"progress"} className="progress">
                    <div className="barOverflow">
                        <div id={this.props.name + "_bar"} className="bar"></div>
                    </div>
                    <span id={this.props.name + "_span"}>{this.props.progvalue}</span>%
                </div>
            </div>
        )
    }
}
