import React,{useState} from 'react';
import InputField from 'components/InputField'


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
            <InputField onInputChange={onInputChange} onButtonClick={onButtonClick} />
        </div>
    )
}

export default Home;