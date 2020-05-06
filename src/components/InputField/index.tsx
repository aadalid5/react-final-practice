import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function InputField ({onInputChange, onButtonClick}:IProps){
    return(
        <div>
            <form className='inputCmpt'>
                <TextField label="Enter name" variant="outlined" onChange={onInputChange}/>
            </form>
            <Button variant="contained" onClick={onButtonClick}>Enter the test</Button>
        </div>

    )
}

interface IProps{
    onInputChange: (ev: any)=> void,
    onButtonClick: () => void
}

export default InputField ;