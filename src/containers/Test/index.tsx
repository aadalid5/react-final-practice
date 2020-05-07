import React, {useState} from 'react';
import TestCard from 'components/TestCard';
import IOption from 'models/IOption';

// ----------------------------------------------
const option1 = {
    id: "1231",
    optionText:"option1"
}
const option2 = {
    id: "1231",
    optionText:"option2"
}
const testCard_1 = {
    id: '1',
    question: 'question1 is ...',
    options: [option1, option2]
}
const testCard_2 = {
    id: '2',
    question: 'question2 is ...',
    options: [option1, option2]
}
const questions = [testCard_1, testCard_2];
// ----------------------------------------------


function Test () {
    const [state, setState] = useState([]);
    
    const handleCheck = (event:any) => {
        // const newState = [...state];
        // const newRecord = {question:question, option:option};
        // newState.push(newRecord);
        //setState({ ...state, [event.target.name]: event.target.checked });
        return
    };

    return (     
        <div>   
            {questions.map((question:IQuestion) => (
            <TestCard {...question} handleCheck={handleCheck} key={question.id}/>
            ))} 
        </div>
     
    )
}

interface IQuestion{
    id?: string,
    question: string,
    options: IOption[]
}



export default Test;