import { Route, Routes } from 'react-router-dom'
import { Lifegame } from '@src/lifegame/Lifegame'

function App() {
  return (
    <Routes>
      <Route path="/lifegame" element={<Lifegame />} />
    </Routes>
  );
}

export default App
