import {useState} from 'react'

export default function useCounter(intialValue = 0) {
    const [count,setCount] = useState(intialValue);

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(intialValue)
    }

    return [count, increment, decrement, reset]
}
