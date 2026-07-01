import styles from "./DashboardCard.module.scss";

interface Props {

    title: string;

    value: string | number;

}

function DashboardCard({

    title,

    value

}: Props) {

    return (

        <div className={styles.card}>

            <h3 className={styles.title}>{title}</h3>

            <h1 className={styles.value}>{value}</h1>

        </div>

    );

}

export default DashboardCard;