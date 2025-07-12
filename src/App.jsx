import { useState } from 'react'

function App() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold'>Selamat datang di pembelajaran SMK NU Kejajar.</h1>
        <button onClick={handleClick}>{likes} like</button>
      </div>
    </>
  )
}

export default App
