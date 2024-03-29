import React, { useState } from "react"

const Form = (props) => {

    // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
    let [info, setInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------
    const handleChangeInfo = (e) => {
        let { name, value } = e.target;
        let infoToUpdate = { ...info, [name]: value };
        setInfo(infoToUpdate);
        };

    // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
    return(
        <div>
            <form>
                <div>
                    <label htmlFor="">First Name:</label>
                    <input 
                        type="text" 
                        name="firstName"
                        value={info.firstName} 
                        onChange={handleChangeInfo}
                    />
                </div>
                <div>
                    <label htmlFor="">Last Name:</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        value={info.lastName} 
                        onChange={handleChangeInfo}
                    />
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={info.email} 
                        onChange={handleChangeInfo}
                    />
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={info.password} 
                        onChange={handleChangeInfo}
                    />
                </div>
                <div>
                    <label htmlFor="">Confirm Password:</label>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        value={info.confirmPassword} 
                        onChange={handleChangeInfo}
                    />
                </div>
            </form>
            <h4>Your Form Data</h4>
            <p>First Name: {info.firstName}</p>
            <p>Last Name: {info.lastName}</p>
            <p>Email: {info.email}</p>
            <p>Password: {info.password}</p>
            <p>Confirm Password: {info.confirmPassword}</p>
        </div>
    )
}

export default Form;