import { useState, useEffect, } from 'react';
import Content from './Content';

function Card() {
    const [width, setWidth] = useState(0);

    const resizeUpdate = (e) => {
        let newWidth = e.target.innerWidth;
        setWidth(newWidth);
    }

    // add eventListener for resize
    useEffect(() => {
        let newWidth = window.innerWidth;
        setWidth(newWidth);

        window.addEventListener('resize', resizeUpdate);

        return () => {
            window.removeEventListener('resize', resizeUpdate);
        }
    }, []);

    return (
        <main className="card">
            {
                width <= 1100 ?
                (<>
                    <div className="header"></div>
                    <Content />
                </>) :
                (<>
                    <Content />
                    <div className="header"></div>
                </>)
            }
        </main>
    );
}

export default Card;
