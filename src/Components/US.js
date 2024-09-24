
import { useState, useEffect } from 'react'


const Lab = () => {
  const [count, setCount] = useState(0)
    useEffect(() => {
      console.log(count);
    }, [count])
    return (
      <>
        <button className="btn btn-outline-success" onClick={() => {
          setCount(count + 4)
        }}>True</button>
        <button className="btn btn-outline-danger" onClick={() => {
          setCount(count - 1)
        }}>False</button>
        <h1>{count}</h1>
      </>
    )
  }

export default Lab