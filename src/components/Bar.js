import styles from './Bar.module.css';

const Bar = (props) => {
    return (
        <div className={`${styles.bar} test`} style={{
            width: '7px',
            backgroundColor: props.color === 'base' ? 'salmon' : props.color,
            // height: (props.value + 40) * 4 + 'px',
            height: (props.value + 5) * 7 + 'px',
            marginRight: '2px'
        }}>

        </div>
    )
};

export default Bar;