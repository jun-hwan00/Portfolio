import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Landing from './pages/Landing'
import Generic from './pages/Generic'
import Elements from './pages/Elements'

// function App(){
//   return (
//     <>
//       <Header />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/landing" element={<Landing />} />
//           <Route path="/generic" element={<Generic />} />
//           <Route path="/elements" element={<Elements />} />
//         </Routes>
//       </main>
//       <Footer />
//     </>
//   )
// }
function App() {
  return (
    <div>
      <h1>React 작동 테스트</h1>
      <p>이 화면이 보이면 React는 정상 작동</p>
    </div>
  );
}
export default App
