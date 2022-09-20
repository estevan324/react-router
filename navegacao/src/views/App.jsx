
import './App.css'

import Menu from '../components/layoult/Menu'
import Content from '../components/layoult/Content'

import { BrowserRouter} from 'react-router-dom'

const App = props => (
    <div className="App">
        <BrowserRouter>
            <Menu />
            <Content />
        </BrowserRouter>
    </div>
)

export default App