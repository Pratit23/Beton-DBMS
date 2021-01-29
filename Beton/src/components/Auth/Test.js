import React, { useEffect } from 'react';
import './css/component.css'
import './css/demo.css'
// import './css/normalize.css'


const Test = () => {
    
    const script = document.createElement('script');
    script.src = "./js/modernizr.custom.js";
    script.async = true;
    document.body.appendChild(script);
    const script0 = document.createElement('script');
    script0.src = "./js/customTwo.js";
    script0.async = true;
    document.body.appendChild(script0);
    useEffect(()=>{
        

        window.$( document ).ready(function() {
            const script1 = document.createElement('script');
            const script2 = document.createElement('script');
            const script3 = document.createElement('script');
            const script4 = document.createElement('script');
            const script5 = document.createElement('script');
            const script6 = document.createElement('script');
            const script7 = document.createElement('script');

            // adding script tags src
            script1.src = "./js/imagesloaded.pkgd.min.js";
            script1.async = true;
            script2.src = "./js/masonry.pkgd.min.js";
            script2.async = true;
            script3.src = "./js/dynamics.min.js";
            script3.async = true;
            script4.src = "./js/classie.js";
            script4.async = true;
            script5.src = "./js/animOnScroll.js";
            script5.async = true;
            script6.src = "./js/main.js";
            script6.async = true;
            script7.src = "./js/CustomOne.js";
            script7.async = true;

            // adding them to the DOM
            document.body.appendChild(script1);
            document.body.appendChild(script2);
            document.body.appendChild(script3);
            document.body.appendChild(script4);
            document.body.appendChild(script5);
            document.body.appendChild(script6);
            document.body.appendChild(script7);

            // remove `em bruh
            return () => {
                document.body.removeChild(script);
                document.body.removeChild(script0);
                document.body.removeChild(script1);
                document.body.removeChild(script2);
                document.body.removeChild(script3);
                document.body.removeChild(script4);
                document.body.removeChild(script5);
                document.body.removeChild(script6);
                document.body.removeChild(script7);
            }
        });
    }, []);

    return(
        <div id = "body-sign" className="demo-1">
            <main>
                <header className="codrops-header">
                    <h1>Sign Up</h1>
                    <p>Already have an account? <a>Log in</a>
                    </p>
                </header>
                <div className="isolayer isolayer--scroll1 isolayer--shadow">
                    <ul className="grid grid--effect-flip">
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1.jpg")} alt="01" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2_1.jpg")} alt="021" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3.jpg")} alt="03" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4_2.jpg")} alt="042" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_1.jpg")} alt="011" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2.jpg")} alt="02" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3_1.jpg")} alt="031" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4.jpg")} alt="04" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_2.jpg")} alt="012" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2_2.jpg")} alt="022" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3_2.jpg")} alt="032" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_3.jpg")} alt="013" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4_1.jpg")} alt="041" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1.jpg")} alt="01" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2_1.jpg")} alt="021" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3.jpg")} alt="03" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4_2.jpg")} alt="042" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_1.jpg")} alt="011" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2.jpg")} alt="02" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3_1.jpg")} alt="031" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4.jpg")} alt="04" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_2.jpg")} alt="012" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2_2.jpg")} alt="022" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3_2.jpg")} alt="032" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_3.jpg")} alt="013" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4_1.jpg")} alt="041" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1.jpg")} alt="01" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2_1.jpg")} alt="021" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3.jpg")} alt="03" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4_2.jpg")} alt="042" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_1.jpg")} alt="011" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2.jpg")} alt="02" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3_1.jpg")} alt="031" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4.jpg")} alt="04" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_2.jpg")} alt="012" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2_2.jpg")} alt="022" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3_2.jpg")} alt="032" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_3.jpg")} alt="013" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4_1.jpg")} alt="041" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1.jpg")} alt="01" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2_1.jpg")} alt="021" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3.jpg")} alt="03" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4_2.jpg")} alt="042" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_1.jpg")} alt="011" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2.jpg")} alt="02" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3_1.jpg")} alt="031" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4.jpg")} alt="04" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_2.jpg")} alt="012" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2_2.jpg")} alt="022" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3_2.jpg")} alt="032" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_3.jpg")} alt="013" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4_1.jpg")} alt="041" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1.jpg")} alt="01" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2_1.jpg")} alt="021" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3.jpg")} alt="03" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4_2.jpg")} alt="042" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_1.jpg")} alt="011" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2.jpg")} alt="02" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3_1.jpg")} alt="031" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4.jpg")} alt="04" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_2.jpg")} alt="012" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2_2.jpg")} alt="022" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3_2.jpg")} alt="032" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_3.jpg")} alt="013" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4_1.jpg")} alt="041" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1.jpg")} alt="01" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2_1.jpg")} alt="021" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3.jpg")} alt="03" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4_2.jpg")} alt="042" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_1.jpg")} alt="011" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2.jpg")} alt="02" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3_1.jpg")} alt="031" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4.jpg")} alt="04" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_2.jpg")} alt="012" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2_2.jpg")} alt="022" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3_2.jpg")} alt="032" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_3.jpg")} alt="013" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4_1.jpg")} alt="041" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3_2.jpg")} alt="032" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_3.jpg")} alt="013" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4_1.jpg")} alt="041" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1.jpg")} alt="01" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2_1.jpg")} alt="021" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3.jpg")} alt="03" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4_2.jpg")} alt="042" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_1.jpg")} alt="011" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2.jpg")} alt="02" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3_1.jpg")} alt="031" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4.jpg")} alt="04" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_2.jpg")} alt="012" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/JulienLavallee">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/2_2.jpg")} alt="022" />
                                <span className="grid__title">Julien Lavallee</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/creativemints">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/3_2.jpg")} alt="032" />
                                <span className="grid__title">Mike | Creative Mints</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/forefathers">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/1_3.jpg")} alt="013" />
                                <span className="grid__title">Forefathers</span>
                            </a>
                        </li>
                        <li className="grid__item">
                            <a className="grid__link" href="https://dribbble.com/Radium">
                                <img className="grid__img layer" src={require("./img/canvas.png")} alt="Canvas Dummy" />
                                <img className="grid__img layer" src={require("./img/wireframe.png")} alt="Wireframe Dummy" />
                                <img className="grid__img layer" src={require("./img/Dribbble1/4_1.jpg")} alt="041" />
                                <span className="grid__title">Cosmin Capitanu</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </main>
            
        </div>
    )

}

export default Test