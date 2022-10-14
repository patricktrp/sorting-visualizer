import styles from './Bar.module.css';

const Bar = (props) => {
    return (
        <div className={styles.bar} style={{
            width: '7px',
            backgroundColor: 'salmon',
            height: (props.value + 40) * 4 + 'px',
            marginRight: '2px'
        }}>

        </div>
    )
};

export default Bar;