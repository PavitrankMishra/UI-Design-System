import './App.css'
import Typography from './Components/Typography'
import TextInput from './Components/TextInput'
import Alert from "./Components/Alert"
import Checkbox from './Components/Checkbox'

function App() {

  return (
    <>
      <div className='flex flex-col items-center mt-5 gap-6'>
        <Typography variant="h1" size="large" className='text-blue-600'>Typography 1</Typography>
        <Typography variant="h2" size='medium' className='text-red-500'>Typography 2</Typography>
        <Typography variant="h3" size="small" className='text-green-500'>Typography 3</Typography>
        <Typography variant="h4" size="large" className='text-orange-400'>Typography 4</Typography>
        <Typography variant="h5" size='medium' className='text-amber-400'>Typography 5</Typography>
        <Typography variant="h6" size="small" className='text-cyan-700'>Typography 6</Typography>
        <TextInput label="Name" required placeholder="Enter your name" fullWidth />
        <TextInput label="Email" required placeholder="Enter your email" fullWidth />

        <Alert title="Success" description="Saved successfully!" variant="success" className="bg-green-100 text-green-800 p-2.5 border-2 rounded-lg" />
        <Alert title="Warning" description="Are you sure?" variant="warning" className="bg-yellow-100 text-yellow-800 p-2.5 border- 2 rounded-lg" />
        <Alert title="Error" description="Something went wrong!" variant="error" className="bg-red-100 text-red-800 p-2.5 border-2 rounded-lg" />
        <Alert title="Info" description="Take note of this update." variant="info" className="bg-blue-100 text-blue-800 p-2.5 border-2 rounded-lg" />

        <div className="flex flex-col items-start gap-2 mt-4">
          <Checkbox label="Test Checkbox 1" />
          <Checkbox label="Test Checkbox 2" />
          <Checkbox label="Test Checkbox 3" />
        </div>
      </div>
    </>
  )
}

export default App
