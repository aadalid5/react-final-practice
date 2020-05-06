import React,{useState} from 'react';
import InputField from 'components/InputField'
import OptionCard from 'components/OptionCard';

function Home (){
    const [user, setUser] = useState('');

    function onInputChange(event:any){
        setUser(event.target.value)
    }

    function onButtonClick(){
        console.log(user)
    }
    return (
        <div className='homeCmpt'>
            <InputField onInputChange={onInputChange} onButtonClick={onButtonClick}/>
            <OptionCard/>
        </div>
    )
}

export default Home;