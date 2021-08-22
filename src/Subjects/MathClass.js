import { Component } from "react";

class MathClass extends Component{

    showquiz()
    {
        console.log("What is the value of Pi:");
    }

    render()
    {
        return(
            <div>
                <button onClick={this.showquiz}>Show Quiz</button>
            </div>
        )
    }
}

export default MathClass