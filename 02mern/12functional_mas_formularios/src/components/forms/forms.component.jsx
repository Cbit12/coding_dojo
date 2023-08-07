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

    let [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------
    const handleChangeInfo = (event) => {
        const { name, value} =event.target;
        setInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));

        // Validate the input and set error messages
        const newErrors = {...errors};
        if (name === "firstName" || name === "lastName") {
            if (value.trim().length < 2) {
            newErrors[name] = "Field must have at least 2 characters";
            } else {
            newErrors[name] = "";
            }
        }

        if (name === "email") {
            if (value.trim().length < 5) {
            newErrors[name] = "Field must have at least 5 characters";
            } else {
            newErrors[name] = "";
            }
        }

        if (name === "password" || name === "confirmPassword") {
            if (value.trim().length < 8) {
            newErrors[name] = "Password must have at least 8 characters";
            } else {
            newErrors[name] = "";
            }
        }

        // Validate password match
        if (name === "confirmPassword") {
        if (value !== info.password) {
        newErrors[name] = "Passwords do not match";
        } else {
        newErrors[name] = "";
        }
        }

        setErrors(newErrors);
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
                    {errors.firstName && <span>{errors.firstName}</span>}
                </div>
                <div>
                    <label htmlFor="">Last Name:</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        value={info.lastName} 
                        onChange={handleChangeInfo}
                    />
                    {errors.lastName && <span>{errors.lastName}</span>}
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={info.email} 
                        onChange={handleChangeInfo}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={info.password} 
                        onChange={handleChangeInfo}
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label htmlFor="">Confirm Password:</label>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        value={info.confirmPassword} 
                        onChange={handleChangeInfo}
                    />
                    {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
            </form>
        </div>
    )
}

export default Form;