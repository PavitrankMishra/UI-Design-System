import './App.css'
import Typography from './Components/Typography'
import TextInput from './Components/TextInput'
import Alert from "./Components/Alert"
import Checkbox from './Components/Checkbox'

function App() {

  return (
    <>
      <div className='flex flex-col items-center mt-5'>
        <Typography variant="h1" size="large" className='text-blue-600'>Typography 1</Typography>
        <Typography variant="h2" size='large'>Typography 2</Typography>
        <Typography variant="h3" size="large">Typography 3</Typography>
        <Typography variant="h4" size="large">Typography 4</Typography>
        <Typography variant="h5" size='large'>Typography 5</Typography>
        <Typography variant="h6" size="large">Typography 6</Typography>
        <TextInput label='Name'></TextInput>
        <TextInput label='Email'></TextInput>
        <Alert title="Alert Info" description='This is description for test alert' variant='info' />
        <Alert title="Test Alert Success" description='This is description for test alert' variant='success' />
        <Alert title="Test Alert Warning" description='This is description for test alert' variant='warning' />
        <Alert title="Test Alert Error" description='This is description for test alert' variant='error' />
        <Checkbox label="Test Checkbox 1" />
        <Checkbox label="Test Checkbox 2" />
        <Checkbox label="Test Checkbox 3" />
      </div>
    </>
  )
}

export default App
