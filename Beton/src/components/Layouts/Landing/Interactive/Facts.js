import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './css/component.css'
import './css/demo.css'


const Facts = () => {
    const script = document.createElement('script');
    script.src = "./js/modernizr.custom.js";
    script.async = true;
    document.body.appendChild(script);
    const script0 = document.createElement('script');
    script0.src = "./js/customTwo.js";
    script0.async = true;
    document.body.appendChild(script0);
    useEffect(() => {
        window.$(document).ready(function () {
            const script1 = document.createElement('script');
            const script2 = document.createElement('script');
            const script3 = document.createElement('script');
            const script4 = document.createElement('script');
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
            script6.src = "./js/main.js";
            script6.async = true;
            script7.src = "./js/CustomThree.js";
            script7.async = true;

            // adding them to the DOM
            document.body.appendChild(script1);
            document.body.appendChild(script2);
            document.body.appendChild(script3);
            document.body.appendChild(script4);
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
                document.body.removeChild(script6);
                document.body.removeChild(script7);
            }
        });
    });

    return (
        <div id="body-sign" className="demo-2">
            <main>
                <section className="section section--cards">
                    <h2 className="section__heading">Symmetric Wisdom</h2>
                    <p className="section__subtitle">It is to this violence of the rain that we must attribute the verdure at the
                        bottom of the thickest woods.</p>
                    <div className="isolayer isolayer--deco3">
                        <ul className="grid">
                            <li className="grid__item">
                                <a className="grid__link" href="#">
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                </a>
                            </li>
                            <li className="grid__item">
                                <a className="grid__link" href="#">
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                </a>
                            </li>
                            <li className="grid__item">
                                <a className="grid__link" href="#">
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                </a>
                            </li>
                            <li className="grid__item">
                                <a className="grid__link" href="#">
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                </a>
                            </li>
                            <li className="grid__item">
                                <a className="grid__link" href="#">
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                </a>
                            </li>
                            <li className="grid__item">
                                <a className="grid__link" href="#">
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                </a>
                            </li>
                            <li className="grid__item">
                                <a className="grid__link" href="#">
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                </a>
                            </li>
                            <li className="grid__item">
                                <a className="grid__link" href="#">
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                </a>
                            </li>
                            <li className="grid__item">
                                <a className="grid__link" href="#">
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                </a>
                            </li>
                            <li className="grid__item">
                                <a className="grid__link" href="#">
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                </a>
                            </li>
                            <li className="grid__item">
                                <a className="grid__link" href="#">
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                </a>
                            </li>
                            <li className="grid__item">
                                <a className="grid__link" href="#">
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                </a>
                            </li>
                            <li className="grid__item">
                                <a className="grid__link" href="#">
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                </a>
                            </li>
                            <li className="grid__item">
                                <a className="grid__link" href="#">
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                </a>
                            </li>
                            <li className="grid__item">
                                <a className="grid__link" href="#">
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                </a>
                            </li>
                            <li className="grid__item">
                                <a className="grid__link" href="#">
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                    <div className="layer"><span className="decoletter">A</span><span className="deconumber">23</span></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Facts
