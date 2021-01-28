import React, { useEffect } from 'react';
import './DeleteSpam.scss';

const DeleteSpam = ({ onClick }) => {

    useEffect(()=>{
        document.querySelectorAll('.button-spam').forEach(button => button.addEventListener('click', e => {
            if(!button.classList.contains('delete-spam')) {
                button.classList.add('delete-spam');
                setTimeout(() => button.classList.remove('delete-spam'), 3200);
            }
            e.preventDefault();
        }));
        
    }, [])

    return (
        <>
            <button onClick={onClick} className="button-spam" style={{ margin: "0 auto", backgroundColor: "#2B3044 !important" }}>
                <div className="trash-spam">
                    <div className="top-spam">
                        <div className="paper-spam"></div>
                    </div>
                    <div className="box-spam"></div>
                    <div className="check-spam">
                        <svg viewBox="0 0 8 6">
                            <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
                        </svg>
                    </div>
                </div>
                <span>Delete Spam</span>
            </button>
        </>
    )
}

export default DeleteSpam
