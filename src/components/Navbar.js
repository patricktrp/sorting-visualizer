import styles from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={styles.nav}>
            <button onClick={props.onShuffleArray}>Shuffle</button>
            <button onClick={props.onSortArray}>Sort</button>
            <button onClick={props.onAnimate}>Animate</button>
            <input type='range' value={props.currentSize} onChange={(e) => props.onChangeArraySize(e.target.value)} min={5} max={150}/>
        </div>
    )
};

export default Navbar;