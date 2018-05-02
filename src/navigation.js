import React, { Component } from "react";
import "./css/navigation.css";
import { getOneFact, getAllFacts } from "./getFact.js";

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText1: false,
            showText2: false,
            fact: false,
            author: false,
            number: 0,
            allFacts: false,
            value: '',
            authorChange: '',
            submitClicked: false
        };
        this.everyFact = getAllFacts();
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick1() {
        this.setState({ showText1: true });
        if (this.state.number < 3) {
            console.log(this.state.number);
            const facts = getOneFact(this.state.number);
            this.setState({ fact: facts.text });
            this.setState({ author: 'Author: ' + facts.Author })
            const newNumber = this.state.number + 1;
            this.setState({ number: newNumber });
        }
    }
    handleClick2() {
        this.setState({ showText2: true });
        const facts = this.everyFact;
        let factString = '';
        for (let i = 0; i < facts.length; i++) {
            factString += facts[i].text + ' Author: ' +
                facts[i].Author + ' ';
        }
        this.setState({ allFacts: factString });

    }
    /*
    handleChange(event) {
        this.setState({value: event.target.value});
      }*/
    /*
    factChange = ({ value }) => {
        this.setState({
            factChange: value,
        });
    }*/
    handleChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
    handleSubmit(event) {
        const newAuthor = this.state.authorChange.toString();
        const newFact = this.state.value.toString();
        console.log(newAuthor);
        this.everyFact.push(`{Author: ${newAuthor}}{text: ${newFact}}`);
        alert('A fact was submitted: ' + this.state.value+ ' Author: ' + this.state.authorChange);
        event.preventDefault();
        this.setState({
            submitClicked: true
          });
      }

    render() {
        return (
            <div className="Navigation">
                <div className="Navigation-header">
                    <h1> Click buttons to reveal the truth </h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Fact:
                        <input type="text" name="value" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Author:
                        <input type="text" name="authorChange" value={this.state.authorChange} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div className="Navigation-buttons">
                    <button onClick={this.handleClick1}>
                        {this.state.showText1 ? 'Get another fact' : 'Get one fact'}
                    </button>
                    <button onClick={this.handleClick2}>
                        {this.state.showText2 ? 'Me king' : 'Get all facts'}
                    </button>

                </div>
                <div className="Navigation-fact">
                    <h2> {this.state.fact} </h2>
                    <p> {this.state.author} </p>
                </div>
                <div className="Navigation-allFacts">
                    <p> {this.state.allFacts} </p>
                </div>
            </div>

        );
    }
}
