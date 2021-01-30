import React, { useEffect } from 'react';
import './HoveredLogin.css';
import LoginForm from './LoginForm';
import { TweenMax } from 'gsap';
import CornerBlob from './CornerBlob';

const HoveredLogin = () => {

    useEffect(()=>{
        window.$('html').mousemove(function(e){
		
            var wx = window.$(window).width();
            var wy = window.$(window).height();
            
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            
            var newx = x - wx/2;
            var newy = y - wy/2;
            
            // window.$('span').text(newx + ", " + newy);
            
            window.$('#wrapper div').each(function(){
                var speed = window.$(this).attr('data-speed');
                if(window.$(this).attr('data-revert')) speed *= -1;
                TweenMax.to(window.$(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
                
            });
            
        });
    }, []);

    return (
        <>
            {/*<CornerBlob />*/}
            <div id="contaianer">
                <section id="wrapper">
                    <div className="p1" data-speed="0.02" data-revert="true"></div>
                    <div className="p2" data-speed="0.04"></div>
                    <div className="p3" data-speed="0.02"></div>
                    <div className="letra valign-wrapper" data-speed="0">
                        <LoginForm />
                        
                    </div>
                </section>
            </div>
            
 
        </>
    )
}

export default HoveredLogin
