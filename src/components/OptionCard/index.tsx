import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function OptionCard({id, optionText, handleCheck}: IProps) {
  
/*   const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    alert("x")
  }; */

  return (
    <div className='optionsCmpt'>
      <FormControl component="fieldset" className='formControl'>
        <FormGroup>
            <FormControlLabel
                control={
                    <Checkbox
                        /* checked={state.checkedB} */
                        /* onChange={handleChange} */
                        onChange={handleCheck}
                        name={optionText}
                        color="primary"
                    />
                }
                label={optionText}
        />
        </FormGroup>
      </FormControl>
    </div>
  );
}

interface IProps{
    id?: string,
    optionText: string
    handleCheck?: (event: any)=>void
}
