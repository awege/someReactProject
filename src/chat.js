import React, { Component } from "react";
import "./css/chat.css";
import { getAllFacts } from "./getFact.js";

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAllComments: false,
            author: false,
            number: 0,
            value: '',
            submitClicked: false
        };
        this.everyFact = getAllFacts();
        this.toggleChat = this.toggleChat.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleChat() {
        this.setState({ showAllComments: !this.state.showAllComments });
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const newAuthor = this.props.nickname[0];
        const newFact = this.state.value.toString();
        const newFactToAdd = {
            Author: newAuthor,
            text: newFact
        };
        this.everyFact.push(newFactToAdd);
        event.preventDefault();
        this.setState({
            submitClicked: true,
            value: '',
        });
    }

    render() {
        const everyFactsLenngth = this.everyFact.length;
        const facts = this.everyFact;
        return (
            <div className="Chat">
                <div className="Chat-header">
                    <h2> Chat </h2>
                </div>
                <div className="Chat-buttons">
                    <button onClick={this.toggleChat}>
                        {this.state.showAllComments ? 'Hide Chat' : 'Show Chat'}
                    </button>
                </div>
                <div className="IncomeQuiz-InputContainer-selectedNumbers">
                    {this.state.showAllComments ? Array.from(new Array(everyFactsLenngth), (x, i) => i + 1).map(idx => (
                        <div className="ChatList">
                            <div className="ChatNickname">{facts[idx-1].Author}:</div>
                            <div className="ChatText"> {facts[idx-1].text}</div>
                        </div>
                    )): ''}
                </div>
                { this.state.showAllComments ?
                <hr className="ChatLine" /> : ''}
                {this.state.showAllComments ?
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Comment
                        <input 
                            className="newChatMessage"
                            type="text"
                            name="value"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input className="submitBtn" type="submit" value="Comment" />
                </form>: '' }
            </div>

        );
    }
}
