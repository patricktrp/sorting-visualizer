import CountUp from 'react-countup';
import { Box } from '@chakra-ui/react';
import Card from './UI/Card';
import {
    Stat,
    StatLabel,
    StatNumber
} from '@chakra-ui/react'

const RuntimeInfo = (props) => {
    const duration = props.duration / 1000;
    return (
        <Box>
            <Card>
                <Stat>
                    <StatLabel>Comparisons</StatLabel>
                    <StatNumber>{props.duration !== 0 ? <CountUp end={props.comparisons} duration={duration} /> : 0}</StatNumber>
                </Stat>
            </Card>
            <Card>
                <Stat>
                    <StatLabel>Swaps</StatLabel>
                    <StatNumber>{props.duration !== 0 ? <CountUp end={props.swaps} duration={duration} /> : 0}</StatNumber>
                </Stat>
            </Card>
        </Box>
    )
};

export default RuntimeInfo;