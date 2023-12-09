
import { styled, Box, Typography } from '@mui/material';
import './banner.css'

const Image = styled(Box)`
    width: 100%;
    background: 
        linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), /* Add your gradient colors and stops */
        url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    
`;

const Banner = () => {

  return (
    <Image className='image'>
      <div className='text_container'>
        <Heading> 
        <span className='first_title'>Spider'<sup>$</sup></span>
        <span className='second_title'>Blog</span>
        </Heading>
      <SubHeading className='below_text'>It's about building a loyal following over time</SubHeading>
      </div>
    </Image>
  )
}

export default Banner;