import React from 'react';
import '../headerBottomText/HeaderBottomText.scss';

function HeaderBottomText() {

    const goToTours = () => {
        window.location.href = "#tours";
    }

    return (<footer className="headerBottomText">
        <main onClick={goToTours}>
            <h3> Explore tours </h3>
            <div>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.4572 32.9167V7.91667" stroke="white" strokeWidth="1.2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M30.4978 22.8337L20.4578 32.917L10.4162 22.8337" stroke="white" strokeWidth="1.2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </main>
            </footer>);
}

export default HeaderBottomText;
