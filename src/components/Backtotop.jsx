import React, { useEffect, useState } from 'react';
import { Arrowtop } from '../common/icon';
const Backtotop = () => {
    const scrolltotop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const [visible, setvisible] = useState(false);
    const togglevisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 500) {
            setvisible(true);
        }
        else if (scrolled <= 500) {
            setvisible(false);
        };
    };
    useEffect(() => {
        window.addEventListener('scroll', togglevisible);
        return () => {
            window.removeEventListener('scroll', togglevisible)
        }
    }, [])
    return (
        <div onClick={scrolltotop} className="items-center justify-center sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] rounded-full fixed right-[2%]  bottom-[2%] cursor-pointer bg-blue z-10 hover:shadow-arrow duration-300" style={{ display: visible ? 'flex' : 'none' }}>            
            <Arrowtop/>            
        </div>
    )
}

export default Backtotop;