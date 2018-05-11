import React, { Component } from "react";
import './css/loadContent.css';

export default class LoadContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      harry: 'Throughout the series, Harry is described as having his fathers perpetually untidy black hair, his mothers bright green eyes, and a lightning bolt-shaped scar on his forehead.',
      hermione: 'Hermiones most prominent features include her prodigious intellect and cleverness. She is levelheaded, book-smart, and very logical. Throughout the series, Hermione uses the skills of a librarian to gather the information necessary to defeat Voldemort. When in doubt, it is to the library that Hermione turns.[36] She is often bossy yet unfailingly dutiful and loyal to her friends—a person who can be counted on. Rowling stated that Hermione is a person that, never strays off the path; she always keeps her attention focused on the job that must be done. Despite Hermiones intelligence and bossy attitude, Rowling says that Hermione has quite a lot of vulnerability in her personality,[38] as well as a sense of insecurity underneath, feels, utterly inadequate... and to compensate, she tries to be the best at everything at school, projecting a false confidence that can irritate people. During her Defence against the Dark Arts exam at the end of Harry Potter and the Prisoner of Azkaban, Hermione reveals that her biggest fear is failure, after a Boggart takes the form of Professor McGonagall and tells her that she has failed all her exams.',
      ron: 'Rowling in an interview described Ron as very funny but insensitive and immature, saying Theres a lot of immaturity about Ron, and thats where a lot of the humor comes from. As his first exercise with the actors who portray the central trio, Alfonso Cuarón, who directed the third film in the series, Prisoner of Azkaban, assigned them to write an autobiographical essay about their character, written in the first person, spanning birth to the discovery of the magical world, and including the characters emtional experience. Of Rupert Grints essay, Cuarón recalls, Rupert didnt deliver the essay. When I questioned why he didnt do it, he said, Im Ron; Ron wouldnt do it. So I said, Okay, you do understand your character.[10] Commenting on Rons character development in the final book, Rowling explained that Ron is the most immature of the three main characters, but in part seven he grows up. He was never strong footed, people see him mostly as Harrys friend; his mother had actually wanted a girl and in the last book he finally has to acknowledge his weaknesses. But its exactly that which makes Ron a man.',
    };
     
  } 
  render(){
    const character = this.props.character;
    let currentText = '';
    if (character === 'Harry') {
      currentText = this.state.harry;
    }
    if (character === 'Ron') {
      currentText = this.state.ron;
    }
    if (character === 'Hermione') {
      currentText = this.state.hermione;
    }
    return(
      <div className="Potter-text">
        <h2> {character} </h2>
        <p> {currentText} </p>
      </div>
    );
  }

}