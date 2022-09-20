import './Content.css'
import { Routes, Route } from 'react-router-dom'

import About from '../../views/example/About'
import Home from '../../views/example/Home'
import Param from '../../views/example/Param'
import NotFound from '../../views/example/NotFound'

const Content = props => (
    <main className='Content'>
        <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/param/:id" element={<Param />}/>
            <Route path="/" element={<Home />}/> 
            <Route path="*" element={<NotFound />}/> 
        </Routes>
    </main>
)

export default Content