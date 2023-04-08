import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config"
function Signup(){
    const [showPassword, setShowPassword]=useState(false);
    const navigate=useNavigate();
    const [formValue, setFormValue]=useState({
        email:"",
        password:"",
    });
    const handleSignUp = async() => {
        try {
            const { email, password } = formValue;
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
          } catch (error) {
            console.log(error);
          }
    };
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
      });
    return <Container showPassword={showPassword}>
    <BackgroundImage />
    <div className="content">
    <Header signin="0"/>
    <div className="body flex column a-center j-center">
        <div className="text flex column">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>ready to watch? Enter your email to create or restart membership.</h6>
        </div>
        <div className="form">
            <input type="email" placeholder="Email Address" name="email" value={formValue.email} onChange={(e)=>setFormValue({
                ...formValue,
                [e.target.name]:e.target.value,})}/>
            {showPassword && <input type="password" placeholder="Password" name="password" value={formValue.password} onChange={(e)=>setFormValue({
                ...formValue,
                [e.target.name]:e.target.value,})}/>}
            {!showPassword && <button onClick={()=>setShowPassword(true)}>Get Started <i class="fa-solid fa-angle-right"></i></button> }
        </div>
        {showPassword && <button onClick={handleSignUp}>Log In</button>}
    </div>
    </div>
    </Container>;
}
const Container = styled.div`
position:relative;
.content{
    position:absolute;
    top:0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    height:100vh;
    width:100vw;
    display:grid;
    grid-template-rows:15vh 85vh;
    .body{
        gap:1rem;
        .text{
            gap:1rem;
            color:white;
            text-align:center;
            font-size:1.8rem;
            h1{
                padding:2 20rem;
            } 
        }
        .form{
            display:grid;
            grid-template-columns:${({showPassword})=>showPassword?"1fr 1fr" : "2fr 1fr"};
            width:60%;
            input{
                color:white;
                background-color: rgba(8, 7, 7, 0.5);
                border:1px solid grey;
                border-radius :0.2rem;
                padding:1.2rem;
                font-size:1.2rem;
                &:focus{
                    outline: 2px solid white;
                }
            }
            button{
                padding:0.5rem 1rem;
                background-color:#e50914;
                border:none;
                cursor:pointer;
                color:white;
                font-weight: bolder;
                font-size:1.5rem
            }
        }
        button{
                padding:0.5rem 1rem;
                background-color:#e50914;
                border:none;
                cursor:pointer;
                color:white;
                border-radius:0.2rem;
                font-weight: bolder;
                font-size:1.05rem
            }
    }
}`;

export default Signup;