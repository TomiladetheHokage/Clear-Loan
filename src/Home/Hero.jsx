import styles from './Style/Hero.module.css';
import Form from "../Components/Form.jsx";

const Hero = () => {
    return(
        <>
            <h1 className={styles['hero-header']}>
                SIMPLE LOAN CALCULATOR
            </h1>


            <Form/>

        </>
    )
}
export default Hero