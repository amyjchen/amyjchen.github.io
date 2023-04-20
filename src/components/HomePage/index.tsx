import { isDesktop } from 'react-device-detect';
import styled from 'styled-components';
import art from '../../assets/images/art_photo.png';
import write from '../../assets/images/write_photo.png';
import code from '../../assets/images/code_photo.png';


const HomePageWrapper = styled.div`
  text-align: center;
`;

const MissionWrapper = styled.div`
  padding: 0px ${isDesktop ? `18vw` : `8vw`};
  text-align: left;
`;

const ImageGrid = styled.div`
  padding: 20px 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

const Image = styled.img`
  width: 100%;
`;

const GridSection = styled.div`
  padding-bottom: 30px;
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <MissionWrapper>
        <h2> striving to learn as much as I can about everything and anything I can, to observe and listen, and, in response, to do good.</h2>
      </MissionWrapper>
      <ImageGrid>
        <GridSection>
          <Image src={art} />
          <h3>ART</h3>
          interaction, installation, and performance.
        </GridSection>
        <GridSection>
          <Image src={write} />
          <h3>WRITE</h3>
          poetry, short stories, letters, blogs, comics, etc.
        </GridSection>
        <GridSection>
          <Image src={code} />
          <h3>CODE</h3>
          full-stack software engineer.
        </GridSection>
      </ImageGrid>
    </HomePageWrapper>
  );
}

export default HomePage;