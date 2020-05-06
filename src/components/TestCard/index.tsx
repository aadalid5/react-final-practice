import React from 'react';
import OptionCard from 'components/OptionCard';

function TestCard ({text, code, options, select}: IProps){
    return(
        <div className='TestCard'>
            <div className='testNameField'>
                {text}
            </div>
            <div className='codeField'>
                {code}
            </div>
            <div className='selectionField'>
                <OptionCard />
            </div>
        </div>
    )
}

interface IProps{
    text: string,
    code: any,
    options: any[],
    select: boolean
}

export default TestCard;