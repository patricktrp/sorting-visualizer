import { Box } from '@chakra-ui/react';
import colors from '../../colors';

const Card = (props) => {
    return (
        <Box color={'white'} backgroundColor={colors.secondaryBackground} borderRadius={'15px'} margin={'0 15px 15px 15px'} padding={'15px'} {...props}>
            {props.children}
        </Box>
    )
}

export default Card;