import styles from './Navbar.module.css';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { BiSortUp } from 'react-icons/bi';
import { Button, Select, Input, Flex } from '@chakra-ui/react'

const Navbar = (props) => {
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} height={'6vh'} borderBottom={'1px solid grey'} paddingRight={20} paddingLeft={20}>
            <Flex>
                <BiSortUp size={50} color={'#c2203f'} />
            </Flex>

            <Flex gap={5}>
                <Button
                    onClick={props.onShuffleArray}
                    disabled={props.isAnimating}
                    colorScheme='teal'
                    variant='outline'
                >Shuffle</Button>
                {/* <button disabled={props.isAnimating} onClick={props.onSortArray}>Sort</button> */}
                <Select disabled={props.isAnimating} value={props.algorithm} onChange={(e) => props.onChangeAlgorithm(e.target.value)}>
                    <option value="bubbleSort">Bubblesort</option>
                    <option value="selectionSort">Selection Sort</option>
                    <option value="insertionSort">Insertion Sort</option>
                    <option value="quickSort">Quicksort</option>
                    <option value="mergeSort">Mergesort</option>
                    <option value="heapSort">Heapsort</option>
                </Select>
                <Input type='range' value={props.currentSize} onChange={(e) => props.onChangeArraySize(e.target.value)} min={10} max={300} disabled={props.isAnimating} />
                <Button
                    onClick={props.onAnimate}
                    isLoading={props.isAnimating}
                    loadingText='Animating'
                    colorScheme='teal'
                    variant='outline'
                    spinnerPlacement='end'>Animate</Button>
            </Flex>

            <Flex>
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/patricktrp/sorting-visualizer'>
                    <FaGithubSquare size={40} color={'#c2203f'} />
                </a>
                <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/patrick-treppmann/'>
                    <FaLinkedin size={40} color={'#c2203f'} />
                </a>
            </Flex>
        </Flex >
    )
};

export default Navbar;