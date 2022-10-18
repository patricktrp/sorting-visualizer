import colors from '../colors';

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
        // heightOfBar = viewPortHeight * 0.8 / (maxValue + 20) * (props.value + 2);
        heightOfBar = viewPortHeight * 0.8 / (maxValue + 25) * (props.value + 2);
        // heightOfBar = (viewPortHeight - 40) * 0.8 / (maxValue) * (props.value);
    }

    return (
        <div style={{
            width: (widthOfBar - 2) + 'px',
            backgroundColor: props.color === 'base' ? colors.primaryColor : props.color,
            height: heightOfBar + 'px',
            marginRight: '2px',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px'
        }}>

        </div>
    )
};

export default Bar;