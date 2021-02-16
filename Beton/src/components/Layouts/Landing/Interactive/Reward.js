import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Reward.scss';

const Reward = ({ onClick }) => {

    useEffect(() => {
        "use strict";
        const svg = document.querySelector('.like');
        const inner = document.querySelector('.inner');
        const outer = document.querySelector('.outer');
        const sparkles = [...document.querySelector('.sparkles').children];
        const filled = document.querySelector('.filled');
        const stroke = document.querySelector('.stroke');
        const playspeed = 1;
        const keyframes = [
            /*  0 */ 0.00,
            /*  1 */ 0.10,
            /*  2 */ 0.20,
            /*  3 */ 0.25,
            /*  4 */ 0.30,
            /*  5 */ 0.35,
            /*  6 */ 0.40,
            /*  7 */ 0.60,
            /*  8 */ 0.65,
            /*  9 */ 0.70,
            /*  10 */ 0.75,
            /*  11 */ 0.76,
            /*  12 */ 1.00,
        ];
        const timespan = (start, end) => ({
            delay: keyframes[start] * (1 / playspeed),
            duration: (keyframes[end] - keyframes[start]) * (1 / playspeed),
        });
        let liked = false;
        const toggle = () => {
            if (liked) {
                gsap.fromTo(stroke, { opacity: 0 }, Object.assign({ opacity: 1 }, timespan(0, 2)));
                gsap.to(filled, Object.assign({ opacity: 0 }, timespan(0, 2)));
            }
            else {
                gsap.set([stroke, filled], { opacity: 0 });
                gsap.fromTo(outer, { opacity: 1, scale: 0.3, svgOrigin: '50 50' }, Object.assign({ opacity: 1, scale: 1 }, timespan(0, 1)));
                outer.querySelectorAll('*').forEach((path) => {
                    gsap.fromTo(path, { fill: '#000' }, Object.assign({ fill: path.getAttribute('fill') }, timespan(0, 4)));
                });
                inner.querySelectorAll('*').forEach((path) => {
                    gsap.fromTo(path, { fill: '#000' }, Object.assign({ fill: path.getAttribute('fill') }, timespan(0, 1)));
                });
                gsap.fromTo(inner, { scale: 0.3, opacity: 1, svgOrigin: '50 50' }, Object.assign({ scale: 1 }, timespan(0, 5)));
                gsap.to([inner, outer], Object.assign({ scale: 0, opacity: 0 }, timespan(6, 9)));
                gsap.fromTo(filled, { scale: 0, svgOrigin: '50 50', opacity: 1, }, Object.assign({ scale: 1, ease: 'back.out(2)' }, timespan(6, 12)));
                gsap.fromTo(sparkles.slice(0, 4), { strokeDashoffset: -5 }, Object.assign({ strokeDashoffset: -15 }, timespan(6, 10)));
                gsap.fromTo(sparkles.slice(4, 8), { strokeDashoffset: -5 }, Object.assign({ strokeDashoffset: -15 }, timespan(5, 9)));
                gsap.fromTo(sparkles.slice(8, 12), { strokeDashoffset: -5 }, Object.assign({ strokeDashoffset: -15 }, timespan(4, 8)));
                gsap.fromTo(sparkles.slice(12, 16), { strokeDashoffset: -5 }, Object.assign({ strokeDashoffset: -15 }, timespan(3, 7)));
                gsap.fromTo(sparkles.slice(16, 20), { strokeDashoffset: -5 }, Object.assign({ strokeDashoffset: -15 }, timespan(2, 6)));
            }
            svg.style.pointerEvents = 'none';
            setTimeout(() => { svg.style.pointerEvents = ''; }, liked ? 200 : 700);
            liked = !liked;
        };
        svg.addEventListener('click', toggle);
        toggle();
    }, []);

    return (
        <>
            <svg className="like" viewBox="0 0 100 100" style={{ margin: "0 auto" }} onClick={onClick}>
                <g className="outer">
                    <path d="M49.4762 24.8435L50.0337 53.8589L30.0804 12.5438L49.4762 24.8435Z" fill="#DF235E" />
                    <path d="M11.0734 26.9749L50.0337 53.8578L30.0804 12.5427L11.0734 26.9749Z" fill="#FFAC1F" />
                    <path d="M11 50.7572L50.0348 53.8578L11.0734 26.976L11 50.7572Z" fill="#23B062" />
                    <path d="M23.2504 63.0306L50.0348 53.8578L11 50.7572L23.2504 63.0306Z" fill="#DF235E" />
                    <path d="M23.2493 63.0306L50.0348 53.8578L34.9948 74.821L23.2493 63.0306Z" fill="#13161A" />
                    <path d="M34.9959 74.8199L49.4751 89.3013L50.0337 53.8589L34.9959 74.8199Z" fill="#DF235E" />
                    <path d="M49.4751 89.3013L64.3399 74.5318L50.0348 53.8589L49.4751 89.3013Z" fill="#23B062" />
                    <path d="M50.0348 53.8589L75.9178 63.0306L64.3399 74.5329L50.0348 53.8589Z" fill="#FFAC1F" />
                    <path d="M50.0348 53.8578L75.9178 63.0317L89.0718 49.9609L50.0348 53.8578Z" fill="#1CB762" />
                    <path d="M50.0348 53.8589L89.0718 49.962L87.8342 26.9749L50.0348 53.8589Z" fill="#DF235E" />
                    <path d="M68.8195 12.5438L50.0348 53.8589L87.8342 26.976L68.8195 12.5438Z" fill="#FFAC1F" />
                    <path d="M49.4751 24.8435L68.8195 12.5438L50.0337 53.8589L49.4751 24.8435Z" fill="#13161A" />
                </g>
                <g className="inner">
                    <path d="M35.4146 23.8803L49.6167 33.0642L50.0231 54.1243L35.4146 23.8803Z" fill="#FFAC1F" />
                    <path d="M21.8692 34.6996L35.4158 23.8828L50.0231 54.1243L21.8692 34.6996Z" fill="#DF235E" />
                    <path d="M21.8692 34.6984L50.0231 54.1243L21.6047 51.8671L21.8692 34.6984Z" fill="#13161A" />
                    <path d="M21.6047 51.8671L50.0219 54.1243L31.0699 60.6144L21.6047 51.8671Z" fill="#FFAC1F" />
                    <path d="M31.0699 60.6144L50.0231 54.1243L39.6043 68.6461L31.0699 60.6144Z" fill="#23B062" />
                    <path d="M50.0219 54.1243L49.6455 78.0043L39.6055 68.6449L50.0219 54.1243Z" fill="#FFAC1F" />
                    <path d="M50.0231 54.1243L49.6467 78.0043L59.9393 68.4549L50.0231 54.1243Z" fill="#13161A" />
                    <path d="M50.0231 54.1243L68.3751 60.6264L59.9393 68.4537L50.0231 54.1243Z" fill="#DF235E" />
                    <path d="M78.4416 51.2875L68.3751 60.6264L50.0231 54.1231L78.4416 51.2875Z" fill="#13161A" />
                    <path d="M78.4416 33.9132V51.2887L50.0231 54.1255L78.4416 33.9132Z" fill="#FFAC1F" />
                    <path d="M63.6972 24.1088L78.4416 33.9131L50.0231 54.1243L63.6972 24.1088Z" fill="#DF235E" />
                    <path d="M49.6155 33.0642L63.6972 24.1088L50.0219 54.1243L49.6155 33.0642Z" fill="#22B061" />
                </g>
                <g className="sparkles">
                    <path d="M84 13V8" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M84 13H89" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M84 13H79" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M84 13V18" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M85 68V63" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M85 68H90" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M85 68H80" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M85 68V73" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M75 80V75" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M75 80H80" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M75 80H70" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M75 80V85" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M11 70V65" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M11 70H16" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M11 70H6" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M11 70V75" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M9 14V9" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M9 14H14" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M9 14H4" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                    <path d="M9 14V19" stroke="#FFDCA1" strokeWidth="1.875" strokeLinecap="round" />
                </g>
                <path className="filled" d="M50.0025 75.0544H49.9677C43.5416 74.935 25 58.1821 25 42.3149C25 34.6922 31.2817 28 38.4416 28C44.1387 28 47.9699 31.9307 50 34.7917C52.0251 31.9357 55.8563 28 61.5559 28C68.7208 28 75 34.6922 75 42.3173C75 58.1796 56.4559 74.9325 50.0299 75.0495H50.0025V75.0544Z" fill="#E0245E" />
                <path className="stroke" d="M50.0025 75.0544H49.9677C43.5416 74.935 25 58.1821 25 42.3149C25 34.6922 31.2817 28 38.4416 28C44.1387 28 47.9699 31.9307 50 34.7917C52.0251 31.9357 55.8563 28 61.5559 28C68.7208 28 75 34.6922 75 42.3173C75 58.1796 56.4559 74.9325 50.0299 75.0495H50.0025V75.0544ZM38.4441 31.7342C33.2695 31.7342 28.7342 36.68 28.7342 42.3198C28.7342 56.5999 46.2335 71.1685 50.005 71.3227C53.7815 71.1685 71.2758 56.6023 71.2758 42.3198C71.2758 36.68 66.7405 31.7342 61.5658 31.7342C55.2766 31.7342 51.7639 39.0384 51.734 39.1106C51.1618 40.5087 48.8581 40.5087 48.2834 39.1106C48.2486 39.0359 44.7383 31.7342 38.4466 31.7342H38.4441Z" fill="#8899A6" />
            </svg>
        </>
    )
}

export default Reward
