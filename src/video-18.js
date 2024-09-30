//In this vide we'll create a basic registration form and handle the form values by using useState hooks

import React,{useState} from "react";

function RegistrationForm()
{
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [city,setCity] = useState('');
    const [email,setEmail] = useState(null);
    const [terms,setTerms] = useState(false);

    function getFormData(e)
    {
        e.preventDefault();
        console.warn(firstName,lastName,email,city,terms);
    }

    function clearFormData(){
        setFirstName('');
        setLastName('');
        setEmail('');
        setCity('');
        setTerms(false);
    }

    return (
        <div className='App'>
            <form onSubmit={getFormData}>
                <div className='card'>
                    <h4>Registration Form</h4>
                    <hr></hr>
                    <label>First Name:</label>
                    <input type='text' value={firstName} placeholder="First Name"
                           onChange={(e) => {
                               setFirstName(e.target.value)
                           }}/>
                    <br/>
                    <br/>

                    <label>Last Name:</label>
                    <input type='text' value={lastName} placeholder="Last Name"
                           onChange={(e) => {
                               setLastName(e.target.value)
                           }}/>
                    <br/>
                    <br/>

                    <label>Email:</label>
                    <input type='text' value={email} placeholder="Email"
                           onChange={(e) => {
                               setEmail(e.target.value)
                           }}/>

                    <br/>
                    <br/>

                    <select onChange={(e) => {
                        setCity(e.target.value)
                    }}  value={city}>
                        <option value=''>Select City</option>
                        <option value='Lhr'>Lahore</option>
                        <option value='Khi'>Karachi</option>
                    </select>

                    <br/>
                    <br/>
                    <label>Terms & Conditions</label>
                    <input type='checkbox' checked={terms}
                           onChange={(e) => {
                               setTerms(e.target.checked)
                           }}/>


                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
                <button type='button' className='btn btn-primary' onClick={clearFormData}>Clear Form</button>
            </form>

        </div>
    )


}

export default RegistrationForm