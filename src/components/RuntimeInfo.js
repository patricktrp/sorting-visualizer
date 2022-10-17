import CountUp from 'react-countup';
import { Box } from '@chakra-ui/react';

const RuntimeInfo = (props) => {
    const duration = props.duration / 1000;
    return (
        <Box>
            <Box color={'white'} backgroundColor={'rgb(31,31,31)'} borderRadius={'15px'} margin={'15px'} padding={'15px'}>
                <p color='#ddd'>Comparisons</p>
                {props.duration !== 0 ? <CountUp end={props.comparisons} duration={duration} /> : 0}
            </Box>
            <Box color={'white'} backgroundColor={'rgb(31,31,31)'} borderRadius={'15px'} margin={'15px'} padding={'15px'}>
                <p color='#ddd'>Swaps</p>
                {props.duration !== 0 ? <CountUp end={props.swaps} duration={duration} /> : 0}
            </Box>

        </Box>
    )
};

export default RuntimeInfo;