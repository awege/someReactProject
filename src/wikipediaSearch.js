import React, { Component } from 'react';
import './css/wikipediaSearch.css';
import { fetchWiki, fetchWikiImage } from './wikiApi';

export default class WikiSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchTextChange: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const searchTextChanges = target.value;
    this.setState({
      searchTextChange: searchTextChanges,
    });
  }

  handleSubmit(event) {
    const currentText = this.state.searchTextChange.toString();
    event.preventDefault();
    const searchRes = fetchWiki(currentText).then(res => {
      this.props.setWikiRes(res)
      fetchWikiImage(res[1][0]).then(res => {
        if (res.query.pages.length > 0) {
          try{
            const image = res.query.pages[0].thumbnail.source;
            this.props.setWikiImage(image);
          } catch(e) {
            this.props.setWikiImage('');
          }
        }
      });
    });
    this.setState({
      searchText: currentText,
      searchTextChange: '',
    });
  }

  render() {
    return (
        <div className="WikiSearch">
            <div className="WikiSearch-header">
                <h2> Search wikipedia </h2>
            </div>
            <form onSubmit={this.handleSubmit}>
                    <input 
                        className="WikiSearchChangeField"
                        type="text"
                        name="searchTextChange"
                        value={this.state.searchTextChange}
                        onChange={this.handleChange}
                    />
                <input className="WikiSearch-submitBtn" type="submit" value="Search" />
            </form>
        </div>

    );
  }
}