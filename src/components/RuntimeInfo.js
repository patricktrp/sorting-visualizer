import CountUp from 'react-countup';

const RuntimeInfo = (props) => {
    const duration = props.duration / 1000;
    return (
        <div>
            <h3>Comparisons</h3>
            {props.duration !== 0 ? <CountUp end={props.comparisons} duration={duration} /> : 0}
            <h3>Swaps</h3>
            {props.duration !== 0 ? <CountUp end={props.swaps} duration={duration} /> : 0}
        </div>
    )
};

export default RuntimeInfo;