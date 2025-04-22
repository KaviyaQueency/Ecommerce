import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
background: #007bff;
color: white;
padding: 10px 20px;
font-size: 16px;
border: none;
border-radius: 6px;
cursor: pointer;
margin-top:10px;

&:hover {
  background: #0056b3;
}`;

const Container = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
transition: 0.3s;
width: 40%;
margin: 100px auto;
display: flex;
justify-content: center;
padding: 20px;
`;

const ButtonCenterAlign = styled.div`
 display:flex;
 justify-content:center;
`;
function Form() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    const [isvalid, setisvalid] = useState(false)
    const navigate = useNavigate();

    useEffect(
        () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isEmailValid = emailRegex.test(email);
            const isPasswordValid = password.length > 8;

            setisvalid(isEmailValid && isPasswordValid)

        }, [email, password]
    )

    const submitForm = (e) => {
        e.preventDefault();
        if (isvalid) {
            const userDetails = {
                email: email,
                password: password,
            };
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
            navigate('/mainForm');

        }
    }

    return (
        <Container><form onSubmit={submitForm}>
            <ButtonCenterAlign>
                <h2>Login</h2>
            </ButtonCenterAlign>
            <div>
                <div>Email:</div>
                <input type="text" value={email} onChange={(e) => setemail(e.target.value)}></input>
                <div>Password:</div>
                <input type="text" value={password} onChange={(e) => setpassword(e.target.value)}></input>
            </div>
            <ButtonCenterAlign>
                <Button>Submit</Button>
            </ButtonCenterAlign>
        </form>
        </Container>
    )
}

export default Form;