import { useState, useEffect, } from 'react';
import MobHeader from "./image-header-mobile.jpg";
import DeskHeader from './image-header-desktop.jpg';
import Image from './Image';
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
                    <Image url={MobHeader} />
                    <Content />
                </>) :
                (<>
                    <Content />
                    <Image url={DeskHeader} />
                </>)
            }
        </main>
    );
}

export default Card;
