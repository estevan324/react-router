import './Content.css'
import { Routes, Route } from 'react-router-dom'

import About from '../../views/example/About'
import Home from '../../views/example/Home'

const Content = props => (
    <main className='Content'>
        <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/" element={<Home />}/>
        </Routes>
    </main>
)

export default Content