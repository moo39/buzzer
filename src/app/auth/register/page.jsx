"use client"
import React, { useState } from 'react';
import '../../Css/Login3page.css';
import SignUp1 from '@/app/componants/SignUp1';
import SignUp2 from '@/app/componants/SignUp2';

const Login3Page = () => {
    const [currentpage, setCurrentpage] = useState(1);
    return (
        <div>
            {currentpage === 1 && (
                <SignUp1 setCurrentpage={setCurrentpage}/>
            )}
            {currentpage === 2 && (
                <SignUp2 />
            )}
        </div>

    );
};

export default Login3Page;