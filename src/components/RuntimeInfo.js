import CountUp from 'react-countup';

const RuntimeInfo = (props) => {
    const duration = props.duration / 1000;
    return (
        <div>
            <h3>Comparisons</h3>
            <CountUp end={props.comparisons} duration={duration} />
            <h3>Swaps</h3>
            <CountUp end={props.swaps} duration={duration} />
        </div>
    )
};

export default RuntimeInfo;