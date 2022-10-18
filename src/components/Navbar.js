import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { BiSortUp } from 'react-icons/bi';
import { Button, Select, Flex } from '@chakra-ui/react'
import { algorithms } from '../algorithms/constants';

const Navbar = (props) => {
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} height={'6vh'} paddingRight={20} paddingLeft={20} backgroundColor={'rgb(31,31,31)'} marginBottom={'2vh'}>
            <Flex>
                <BiSortUp size={50} color={'white'} />
            </Flex>

            <Flex gap={5}>
                <Button
                    onClick={props.onShuffleArray}
                    width='200px'
                    disabled={props.isAnimating}
                    backgroundColor='white'
                >Shuffle</Button>
                <Select color='white' disabled={props.isAnimating} value={props.algorithm} onChange={(e) => props.onChangeAlgorithm(e.target.value)}>
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
                    onClick={props.onAnimate}
                    isLoading={props.isAnimating}
                    width='200px'
                    backgroundColor='white'
                    // loadingText='Animating'
                    spinnerPlacement='end'>Animate</Button>
            </Flex>

            <Flex>
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/patricktrp/sorting-visualizer'>
                    <FaGithubSquare size={40} color={'white'} />
                </a>
                <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/patrick-treppmann/'>
                    <FaLinkedin size={40} color={'white'} />
                </a>
            </Flex>
        </Flex >
    )
};

export default Navbar;