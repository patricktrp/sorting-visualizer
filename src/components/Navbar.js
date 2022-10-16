import styles from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={styles.nav}>
            <button disabled={props.isAnimating} onClick={props.onShuffleArray}>Shuffle</button>
            {/* <button disabled={props.isAnimating} onClick={props.onSortArray}>Sort</button> */}
            <button disabled={props.isAnimating} onClick={props.onAnimate}>Animate</button>
            <select disabled={props.isAnimating} value={props.algorithm} onChange={(e) => props.onChangeAlgorithm(e.target.value)}>
                <option value="bubbleSort">Bubblesort</option>
                <option value="selectionSort">Selection Sort</option>
                <option value="insertionSort">Insertion Sort</option>
                <option value="quickSort">Quicksort</option>
                <option value="mergeSort">Mergesort</option>
                <option value="heapSort">Heapsort</option>
            </select>
            <input type='range' value={props.currentSize} onChange={(e) => props.onChangeArraySize(e.target.value)} min={5} max={250} disabled={props.isAnimating} />
        </div>
    )
};

export default Navbar;