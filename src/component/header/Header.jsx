
import { AppBar, Toolbar, styled, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import img from '../account/1.png'
import './header.css'


import { useNavigate } from 'react-router-dom';
import { Start } from '@mui/icons-material';
const Image = styled('img')({
  // display: 'flex',
  // margin:"0",
  // padding:"0"
  
});

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    // justify-content: center;
    // align-item:center;

    // & > a {
    //     padding: 15px;
    //     color: #000;
    //     text-decoration: none;
    //     font-weight:bold;
    // },a:hover{
    //   color:red;
    // }
`

const Header = () => {

  const navigate = useNavigate();

  const logout = async () => navigate('/account');

  return (
    <Component>
      <Container className='container'>
          <div>
            <Link to='/'>
          <Image className='img_logo banner' src={img} alt="icon" />
            </Link>
          </div>
         <div>
         <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/contact'>CONTACT</Link>
          <Link to='/account'>LOGOUT</Link>
         </div>
            
      </Container>
       
    </Component>
  )
}

export default Header;