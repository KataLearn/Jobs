
import { MantineProvider } from "@mantine/core";
import { Jobs } from './pages/Jobs/Jobs';
import '@mantine/core/styles.css'
import './App.scss'

function App() {


  return (
    <MantineProvider >
      <Jobs/>
    </MantineProvider>
  )
}

export default App
