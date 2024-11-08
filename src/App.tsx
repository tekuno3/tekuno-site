import '@unocss/reset/eric-meyer.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from '@src/Home/Home'
import { Stack } from '@Components/Stack'


function App() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App
