import React, { useEffect } from 'react';
import './ProgressCard.scss';
import M from 'materialize-css'

const ProgressCard = ({ dispatch, one, two, three, style1, style2, current, machine }) => {
    
    useEffect(()=>{
        window.$('.tabbar li a').on('moveIt', function(e) {
            e.preventDefault();

            let that = window.$(this),
                li = that.parent(),
                ul = li.parent();
        
            if(!ul.hasClass('move') && !li.hasClass('active')) {
                ul.children('li').removeClass('active');
        
                ul.css('--x-n', li.position().left + li.outerWidth() / 2 + 'px');
                li.addClass('move');
                ul.addClass('move');
        
                setTimeout(() => {
                    ul.removeClass('move');
                    li.removeClass('move').addClass('active');
                    ul.css('--x', li.position().left + li.outerWidth() / 2 + 'px');
                }, 1200);
            }
        
        });
        
    }, []);

    useEffect(()=>{
        window.$('.tabbar li a').on('click', function(e) {
            e.preventDefault();
            // getting the index
            let index = window.$('.tabbar li a').index(this);
            // console.log("index", index, "current", step, current)
            switch(index){
                case 0: {
                    if(current == "Select" || current == "Report"){
                        dispatch("initial")
                        document.querySelectorAll('.tabbar li a')[0].dispatchEvent(new CustomEvent('moveIt'))
                    }else{
                        M.toast({ html: "Hold your horses mate! Let's get this information first?" })
                        // do nothing;
                    }
                    break;
                }
                case 1:{
                    if (current == "Report"){
                        dispatch("location")
                        dispatch('next')
                        dispatch('next')
                        dispatch('next')
                        document.querySelectorAll('.tabbar li a')[1].dispatchEvent(new CustomEvent('moveIt'))
                    }else{
                        M.toast({ html: "Hold your horses mate! We'll walk you through it. Easy" })
                        // do nothing lmaoo
                    }
                    break;
                }
                case 2:{
                    M.toast({ html: "See, we can't go there without taking information from here first!" })
                    // do nothing for anything bruh
                    break;
                }
                default: {
                    // do nothing lmaoo
                    break;
                }
            }
        
        });

        return () => {
            window.$('.tabbar li a').off('click')
        }
    })

    return (
        <>
            <div className="frame">
                <ul className="tabbar" style={{ "--x-n": style1, "--x": style2 }}>
                    <li className={one}>
                        <a href="" className="box">
                            <div>
                                <svg>
                                    <use xlinkHref="#box" />
                                </svg>
                                <em></em>
                            </div>
                        </a>
                    </li>
                    <li className={two}>
                        <a href="" className="home">
                            <div>
                                <svg>
                                    <use xlinkHref="#home" />
                                </svg>
                            </div>
                        </a>
                    </li>
                    <li className={three}>
                        <a href="" className="calendar">
                            <div>
                                <svg>
                                    <use xlinkHref="#calendar" />
                                </svg>
                                <em></em>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="box">
                    <path d="M4.2715356,6.86557078 C3.79533783,7.1301251 3.5,7.63205601 3.5,8.1768067 L3.5,15.8231933 C3.5,16.367944 3.79533783,16.8698749 4.2715356,17.1344292 L11.2715356,21.0233181 C11.7245694,21.2750036 12.2754306,21.2750036 12.7284644,21.0233181 L19.7284644,17.1344292 C20.2046622,16.8698749 20.5,16.367944 20.5,15.8231933 L20.5,8.1768067 C20.5,7.63205601 20.2046622,7.1301251 19.7284644,6.86557078 L12.7284644,2.97668189 C12.2754306,2.72499645 11.7245694,2.72499645 11.2715356,2.97668189 L4.2715356,6.86557078 Z"></path>
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="home">
                    <path d="M3.66781808,10.0753614 C3.5610739,10.1702451 3.5,10.3062472 3.5,10.4490661 L3.5,20 C3.5,20.8284271 4.17157288,21.5 5,21.5 L19,21.5 C19.8284271,21.5 20.5,20.8284271 20.5,20 L20.5,10.4490661 C20.5,10.3062472 20.4389261,10.1702451 20.3321819,10.0753614 L12.9965458,3.55479593 C12.4282167,3.04961457 11.5717833,3.04961457 11.0034542,3.55479593 L3.66781808,10.0753614 Z"></path>
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="calendar">
                    <path d="M5,4.5 C4.17157288,4.5 3.5,5.17157288 3.5,6 L3.5,19 C3.5,19.8284271 4.17157288,20.5 5,20.5 L19,20.5 C19.8284271,20.5 20.5,19.8284271 20.5,19 L20.5,6 C20.5,5.17157288 19.8284271,4.5 19,4.5 L5,4.5 Z"></path>
                </symbol>
            </svg>

        </>
    )
}

export default ProgressCard
