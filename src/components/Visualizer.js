import Bar from './Bar';
import styles from './Visualizer.module.css';

const Visualizer = (props) => {
    const colors = props.colors;

    return (
        <div className={styles.visualizer}>
            {props.numbers.map((num, idx) => {
                return <Bar value={num} key={Math.random()} length={props.numbers.length} color={colors.hasOwnProperty(idx) ? colors[idx] : 'base'} />;
            })}
        </div>
    )
};

export default Visualizer;