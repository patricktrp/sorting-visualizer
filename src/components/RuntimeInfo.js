import CountUp from 'react-countup';
import { Box } from '@chakra-ui/react';
import {
    Stat,
    StatLabel,
    StatNumber
} from '@chakra-ui/react'

const RuntimeInfo = (props) => {
    const duration = props.duration / 1000;
    return (
        <Box>
            <Box color={'white'} backgroundColor={'rgb(31,31,31)'} borderRadius={'15px'} margin={'0 15px 15px 15px'} padding={'15px'}>
                <Stat>
                    <StatLabel>Comparisons</StatLabel>
                    <StatNumber>{props.duration !== 0 ? <CountUp end={props.comparisons} duration={duration} /> : 0}</StatNumber>
                </Stat>
            </Box>
            <Box color={'white'} backgroundColor={'rgb(31,31,31)'} borderRadius={'15px'} margin={'15px'} padding={'15px'}>
                <Stat>
                    <StatLabel>Swaps</StatLabel>
                    <StatNumber>{props.duration !== 0 ? <CountUp end={props.swaps} duration={duration} /> : 0}</StatNumber>
                </Stat>
            </Box>

        </Box>
    )
};

export default RuntimeInfo;