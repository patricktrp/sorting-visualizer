import Bar from './Bar';
import styles from './Visualizer.module.css';

const Visualizer = (props) => {
    return (
        <div className={styles.visualizer}>
            {props.numbers.map((num) => {
                return <Bar value={num} key={Math.random()} />;
            })}
        </div>
    )
};

export default Visualizer;