import React from 'react';
import OptionCard from 'components/OptionCard';
import IOption from 'models/IOption';

function TestCard ({question, options, handleCheck }: IProps){
    return(
        <div className='TestCard'>
            <div className='testNameField'>
                {question}
            </div>
            <div className='selectionField'>
                {options.map((option: IOption) =>(
                    <OptionCard {...option} handleCheck={handleCheck}/> /* text={option.text} key={option.id} */
                ))}
            </div>
        </div>
    )
}

interface IProps{
    id?: string,
    question: string,
    options: IOption[],
    handleCheck?: (event: any) => void
}

export default TestCard;
