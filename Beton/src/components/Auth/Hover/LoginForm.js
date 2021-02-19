import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { loginQuery } from '../../../queries/query'
import M from 'materialize-css'


const LoginForm = (props) => {
    useEffect(() => {
        const $ = (s, o = document) => o.querySelector(s);
        const $$ = (s, o = document) => o.querySelectorAll(s);

        const login = $("#login-form");
        const passwordContainer = $(".password", login);
        const password = $("input", passwordContainer);
        const passwordList = $(".dots", passwordContainer);
        const submit = $("button", login);

        password.addEventListener("input", (e) => {
            if (password.value.length > $$("i", passwordList).length) {
                passwordList.appendChild(document.createElement("i"));
            }
            submit.disabled = !password.value.length;
            passwordContainer.style.setProperty(
                "--cursor-x",
                password.value.length * 10 + "px"
            );
        });

        let pressed = false;

        password.addEventListener("keydown", (e) => {
            if (
                pressed ||
                login.classList.contains("processing") ||
                (password.value.length > 14 && e.keyCode != 8 && e.keyCode != 13)
            ) {
                e.preventDefault();
            }
            pressed = true;

            setTimeout(() => (pressed = false), 50);

            if (e.keyCode == 8) {
                let last = $("i:last-child", passwordList);
                if (last !== undefined && last) {
                    last.classList.add("remove");
                    setTimeout(() => last.remove(), 50);
                }
            }
        });

        password.addEventListener("select", function () {
            this.selectionStart = this.selectionEnd;
        });

        login.addEventListener("submit", (e) => {
            M.toast({ html: "Give us a moment while we check your credentials" })
            e.preventDefault();

            if (!login.classList.contains("processing")) {
                login.classList.add("processing");
                setTimeout(async () => {
                    // password check is here
                    // let cls = password.value == "password" ? "success" : "error";
                    // console.log(password.value);
                    const email = document.querySelector('#login-email').value;
                    let result = await props.loginQuery({
                        variables: {
                            email,
                            password: password.value
                        }
                    })
                    console.log(result)
                    let cls = "";
                    if (result.data.login) {
                        console.log(result.data.login)
                        cls = "success";
                        localStorage.setItem("token", result.data.login.token)
                        props.props.history.push('/homepage');
                    } else {
                        cls = "error";
                    }

                    login.classList.add(cls);
                    setTimeout(() => {
                        login.classList.remove("processing", cls);
                        if (cls == "error") {
                            password.value = "";
                            passwordList.innerHTML = "";
                            submit.disabled = true;
                        }
                    }, 2000);
                    setTimeout(() => {
                        if (cls == "error") {
                            passwordContainer.style.setProperty("--cursor-x", 0 + "px");
                        }
                    }, 600);
                }, 1500);
            }
        });

    }, [])
    return (
        <>
            <div className="signInContainer valign-wrapper center-align" >
                <div id="login-form-wrapper">
                    <form id="login-form" style={{ margin: '100px', marginLeft: '150px' }}>
                        <svg className="logo">
                            <use xlinkHref="#logo" />
                        </svg>

                        <h1>Log In</h1>

                        <div className="input email">
                            <input type="text" placeholder="" id="login-email" required />
                            <label>Email</label>
                        </div>

                        <div className="input password">
                            <div className="dots"></div>
                            <input type="password" placeholder="" required />
                            <label>Password</label>
                            <div className="cursor"></div>
                            <div className="line">
                                <svg>
                                    <use xlinkHref="#line" />
                                </svg>
                            </div>
                            <div className="tick">
                                <svg>
                                    <use xlinkHref="#tick" />
                                </svg>
                            </div>
                        </div>
                        <button type="submit" disabled>
                            <svg viewBox="0 0 16 16">
                                <circle strokeOpacity=".1" cx="8" cy="8" r="6"></circle>
                                <circle className="load" cx="8" cy="8" r="6"></circle>
                            </svg>
                            <span>Submit</span>
                        </button>


                        <div className="signUpHeady">
                            <p>Don't have an account? <NavLink to="/signup" style={{ cursor: "pointer" }}>Sign up</NavLink></p>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="logo">
                                <path d="M33.0457936,22 L44,22 C44,34.1502645 34.1912695,44 22.0915872,44 C16.0417461,44 10.5646429,41.5375661 6.6,37.5563492 L14.3462931,29.7786761 C16.3285751,31.7689899 19.0669207,33 22.0915872,33 C25.1013453,33 27.827598,31.7810952 29.8075146,29.8080513 L22,22 L33.0457936,22.001001 C33.0457936,22.0006673 33.0457936,22.0003337 33.0457936,22 Z M21.9084128,0 C27.958756,0 33.4362661,2.4628426 37.400987,6.44464202 L29.6552,14.2228233 C27.6728001,12.2316284 24.9338388,11 21.9084128,11 C15.8585716,11 10.9542064,15.9248678 10.9542064,22 L10.954,22 L0,22 C0,9.8497355 9.8087305,0 21.9084128,0 Z"></path>
                            </symbol>
                            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 22" id="line">
                                <path d="M0,11 L180,11 C240,11.00344 300,13.6718267 360,19.00516 C450,27.00516 450,-4.99483997 540,3.00516003 C600,8.33849336 660,11.00344 720,11 L900,11"></path>
                            </symbol>
                            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 28" id="tick">
                                <path d="M3,12.5026479 L7,16.5026479 L13,9.50264792 C29.6216402,-12.0066881 40.3541164,26.00516 19,26.0026479 L-3.37507799e-13,26.0026479"></path>
                            </symbol>
                        </svg>
                    </form>
                </div>
            </div>

        </>
    )
}

export default compose(
    graphql(loginQuery, { name: "loginQuery" })
)(LoginForm)
