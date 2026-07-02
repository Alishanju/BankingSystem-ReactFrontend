import styles from "./Card.module.scss";

import type { ReactNode } from "react";

interface Props{

    title:string;

    children:ReactNode;

}

const Card=({

    title,

    children

}:Props)=>{

    return(

        <div className={styles.card}>

            <h3>

                {title}

            </h3>

            {children}

        </div>

    );

};

export default Card;