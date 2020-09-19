import React from 'react';

import { useState } from 'react'

function LoginInput() {

    const [user, setUser] = useState({
        email: null,
        emailErr: false,
        password: null,
        passwordErr: false
    })

    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);

    const emailError = "Invalid Email"
    const passwordError = "Inavlaid Password"


    const handleEmail = (event) => {
        const email = event.target.value
        if (emailRegex.test(email)) {

            setUser((prevData) => {
                return {
                    ...prevData,
                    email: email, emailErr: false
                }
            })
        }
        else {
            setUser((prevData) => {
                return {
                    ...prevData,
                    email: email, emailErr: true
                }
            })

        }

    }

    const handlePassword = (event) => {
        const password = event.target.value
        if (passwordRegex.test(password)) {
            setUser((prevData) => {
                return {
                    ...prevData,
                    password: password, passwordErr: false
                }
            })
        }
        else {
            setUser((prevData) => {
                return {
                    ...prevData,
                    password: password, passwordErr: true
                }
            })

        }
    }

    const submit = () => {
        alert("Submitted Successfully")
    }

    return (
        <div className="relative loginCont1 grid grid-cols-2">

            <div className="col-span-1 p-5 box-border border-r border-gray-900 ">

                <div className="wlcm">welcome back !</div>
                <div className="loginHead2 capitalize">Please enter your account here </div>

                <div className="mt-10">
                    <div className=" mt-5 mb-12">

                        <input type="email" className="inputText" placeholder="Email"
                            onChange={(event) => handleEmail(event)} />
                        <span class="bar"></span>
                        <label>Email</label>
                        {user.emailErr && <p className="errTag">{emailError}</p>}

                    </div>

                    <div className="mt-6">
                        <input type="password" className="inputText" placeholder="Password"
                            onChange={(event) => handlePassword(event)} />

                        <span class="bar"></span>
                        <label>Password</label>
                        {user.passwordErr && <p className="errTag">{passwordError}</p>}

                        <a href="/" className=" text-green-600 float-left mb-1 ml-10 mt-1 text-xs desktop">Forgot password?</a>

                    </div>
                </div>


                <div className="w-full text-center mt-10">
                    <button onClick={submit} className="submit w-2/3 mr-3 btn" type="submit"
                        disabled={(user.emailErr || user.passwordErr) ? true : false} >Submit</button>
                </div>

                <span className="hr1">Or</span>
                <div class="social">
                    <div class="socialMedia">
                        <a href="https://www.facebook.com/signup" aria-label="Facebook" className="mr-4">
                            <svg data-swarm-icon="true" viewBox="0 0 28 28" fill="#3182ce">
                                <path d="M26.5 14c0-6.904-5.596-12.5-12.5-12.5S1.5 7.096 1.5 14c0 6.24 4.571 11.41 10.547 
                                12.348v-8.735H8.873V14h3.174v-2.754c0-3.133 1.866-4.863 4.721-4.863 1.368 0 2.798.244 
                                2.798.244v3.076H17.99c-1.553 0-2.037.964-2.037 1.952V14h3.467l-.554 3.613h-2.913v8.735C21.93
                                25.41 26.5 20.24 26.5 14">
                                </path>
                            </svg>
                            <span>Register with Facebook</span>
                        </a>
                    </div>
                    <div class="socialMedia">
                        <a
                            href="https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F&flowName=GlifWebSignIn&flowEntry=AddSession">
                            <img class="google" src="./google-hangouts.png"/> 
                            <span>Register with Google</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-span-1 mb-20">
                <img src="./lp2.png" />
                <div className="loginCont2">
                    don't have an account yet ?
                        </div>
                <div className="w-full text-center mt-10">
                    <button className="wishToAttend wishToAttendBtn w-2/3 mr-3">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default LoginInput

// <div className="loginHead1">kommunita</div>