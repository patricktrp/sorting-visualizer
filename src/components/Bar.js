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
        heightOfBar = viewPortHeight * 0.8 / (maxValue + 7) * (props.value + 2);
    }

    return (
        <div style={{
            width: (widthOfBar - 2) + 'px',
            backgroundColor: props.color === 'base' ? 'rgb(187,134,252)' : props.color,
            height: heightOfBar + 'px',
            marginRight: '2px',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px'
        }}>

        </div>
    )
};

export default Bar;