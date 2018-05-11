import { facts } from './facts.js'

export function getAllFacts(){
    const fact = JSON.parse('{"Facts": [{ "Author": "Superdevaaja","text": "Carrots are orange"},{"Author": "Superdevaaja","text": "Jarno is a good driver"},{"Author": "Esko","text": "Esko on burgeri"}]}');
    return fact.Facts;
    
};


