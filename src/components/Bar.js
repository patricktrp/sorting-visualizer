import styles from './Bar.module.css';

const Bar = (props) => {
    let widthOfBar;
    let heightOfBar;
    if (typeof window.innerWidth !== 'undefined') {
        let viewPortWidth = window.innerWidth;
        widthOfBar = viewPortWidth * 0.8 / props.length;
    }

    if (typeof window.innerHeight !== 'undefined') {
        let viewPortHeight = window.innerHeight;
        const maxValue = props.length - 1;
        heightOfBar = viewPortHeight * 0.8 / (maxValue + 7) * (props.value + 2);
    }

    return (
        <div className={`${styles.bar} test`} style={{
            width: widthOfBar + 'px',
            backgroundColor: props.color === 'base' ? 'salmon' : props.color,
            // height: (props.value + 40) * 4 + 'px',
            height: heightOfBar + 'px',
            marginRight: '2px'
        }}>

        </div>
    )
};

export default Bar;