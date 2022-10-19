import { Button, Flex, Select } from '@chakra-ui/react';
import { BiSortUp } from 'react-icons/bi';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { algorithms } from '../algorithms/constants';
import colors from '../colors';

const Navbar = (props) => {
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} height={'6vh'} paddingRight={20} paddingLeft={20} backgroundColor={'rgb(31,31,31)'} marginBottom={'2vh'}>
            <Flex>
                <BiSortUp size={'5vh'} color={'white'} />
            </Flex>

            <Flex gap={5} alignItems={'center'}>
                <Button
                    height='4vh'
                    onClick={props.onShuffleArray}
                    width='200px'
                    disabled={props.isAnimating}
                    backgroundColor='white'
                    _hover={{
                        background: colors.primaryColorShade,
                        color: 'white'
                    }}
                >Shuffle</Button>
                <Select 
                    height='4vh'
                    color='white' 
                    disabled={props.isAnimating} 
                    value={props.algorithm} 
                    onChange={(e) => props.onChangeAlgorithm(e.target.value)}>
                    <option className='test' style={{ backgroundColor: 'rgb(31,31,31)' }} value={algorithms.BUBBLE_SORT}>Bubblesort</option>
                    <option style={{ backgroundColor: 'rgb(31,31,31)' }} value={algorithms.SELECTION_SORT}>Selection Sort</option>
                    <option style={{ backgroundColor: 'rgb(31,31,31)' }} value={algorithms.INSERTION_SORT}>Insertion Sort</option>
                    <option style={{ backgroundColor: 'rgb(31,31,31)' }} value={algorithms.QUICK_SORT}>Quicksort</option>
                    <option style={{ backgroundColor: 'rgb(31,31,31)' }} value={algorithms.MERGE_SORT}>Mergesort</option>
                    <option style={{ backgroundColor: 'rgb(31,31,31)' }} value={algorithms.HEAP_SORT}>Heapsort</option>
                </Select>
                {/* <Slider>
                    <SliderTrack>
                        <SliderFilledTrack backgroundColor={'rgb(187,134,252)'} />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
                <Slider>
                    <SliderTrack>
                        <SliderFilledTrack backgroundColor={'rgb(187,134,252)'} />
                    </SliderTrack>
                    <SliderThumb />
                </Slider> */}
                {/* <Input type='range' value={props.currentSize} onChange={(e) => props.onChangeArraySize(e.target.value)} min={10} max={300} disabled={props.isAnimating} />
                <Input type='range' value={props.animationSpeed} onChange={(e) => props.onChangeAnimationSpeed(e.target.value)} min={10} max={150} disabled={props.isAnimating} /> */}
                <Button
                    height='4vh'
                    maxHeight={'50px'}
                    onClick={props.onAnimate}
                    isLoading={props.isAnimating}
                    width='200px'
                    backgroundColor='white'
                    // loadingText='Animating'
                    _hover={{
                        background: colors.primaryColorShade,
                        color: 'white',
                    }}
                >Animate</Button>
            </Flex>

            <Flex>
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/patricktrp/sorting-visualizer'>
                    <FaGithubSquare size={'5vh'} color={'white'} />
                </a>
                <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/patrick-treppmann/'>
                    <FaLinkedin size={'5vh'} color={'white'} />
                </a>
            </Flex>
        </Flex >
    )
};

export default Navbar;