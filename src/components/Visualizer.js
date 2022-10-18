import Bar from './Bar';
import { Flex } from '@chakra-ui/react';

const Visualizer = (props) => {
    const colors = props.colors;

    return (
        <Flex justifyContent={'center'} alignItems={'flex-end'} height={'80vh'} backgroundColor={'rgb(31,31,31)'} borderRadius={'15px'} paddingLeft={'30px'} paddingRight={'30px'} paddingBottom={'40px'}>
            {props.numbers.map((num, idx) => {
                return <Bar value={num} key={Math.random()} length={props.numbers.length} color={colors.hasOwnProperty(idx) ? colors[idx] : 'base'} />;
            })}
        </Flex>
    )
};

export default Visualizer;