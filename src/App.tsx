import './App.css'
import Typography from './Components/Typography'

function App() {

  return (
    <>
      <div className='flex flex-col items-center mt-5'>
        <Typography variant="h1" size="large">Typography 1</Typography>
        <Typography variant="h2" size='large'>Typography 2</Typography>
        <Typography variant="h3" size="large">Typography 3</Typography>
        <Typography variant="h4" size="large">Typography 4</Typography>
        <Typography variant="h5" size='large'>Typography 5</Typography>
        <Typography variant="h6" size="large">Typography 6</Typography>
      </div>
    </>
  )
}

export default App
