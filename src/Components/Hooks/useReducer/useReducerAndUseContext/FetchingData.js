import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchingData() {
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState('')
  const [post,setPost] = useState({})

  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      setLoading(false)
      setPost(response.data)
      setError('')
    })
    .catch(error => {
      setLoading(false)
      setPost({})
      setError('Something went wrong')
    })
  },[])
  return (
    <>
      <h5>Hello I am FetchingData Components</h5>
      {loading ? 'Loading' : <h5>{post.title}</h5>}
      {error ? error : null}
    </>
  )
}

export default FetchingData