import { facts } from './facts.js'
export function getOneFact(number){
    const fact = JSON.parse('{"Facts": [{ "Author": "Superdevaaja","text": "Carrots are orange"},{"Author": "Superdevaaja","text": "Jarno is a good driver"},{"Author": "Esko","text": "Esko on burgeri"}]}');
    console.log(fact.Facts[number]);
    return fact.Facts[number];
    
};

export function getAllFacts(){
    const fact = JSON.parse('{"Facts": [{ "Author": "Superdevaaja","text": "Carrots are orange"},{"Author": "Superdevaaja","text": "Jarno is a good driver"},{"Author": "Esko","text": "Esko on burgeri"}]}');
    console.log(fact.Facts);
    return fact.Facts;
    
};


