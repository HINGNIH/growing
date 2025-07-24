
import {  Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './commpon/Layout';
import NotFiles from './pages/notfile';
import Main from './pages/main';

import { Exhibition} from './pages';
import ScrollButtons from './components/scrollbutton/ScrollButtons';
const App = () => {
    return (
        <>
            <Router>
                <GlobalStyle />
                <ScrollButtons />  
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path='/exhibition' element={<Exhibition />}/>

                     
                    </Route>

                    <Route path='*' element={<NotFiles />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
