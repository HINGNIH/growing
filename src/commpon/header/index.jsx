import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { HeaderWrap } from './style';

const Header = () => {
    return (
        <HeaderWrap>
            <div className='inner'>
                <h1>
                    <Link to='/'>
                      <img src='./images/growing_logo.png' alt='' />
                    </Link>
                </h1>
                <NavBar />
            </div>
        </HeaderWrap>
    );
};

export default Header;
