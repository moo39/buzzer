"use client"
import React, { useState } from 'react';
import '../../Css/Login3page.css';
import Login1 from '@/app/componants/Login1';
import Login2 from '@/app/componants/Login2';

const Login3Page = () => {
    const [currentpage, setCurrentpage] = useState(1);
    return (
        <div>
            {currentpage === 1 && (
                <Login1 setCurrentpage={setCurrentpage}/>
            )}
            {currentpage === 2 && (
                <Login2 />
            )}
        </div>

    );
};

export default Login3Page;