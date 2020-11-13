import { createUseStyles } from 'react-jss';
import useGlobalStyles from '../styles/useGlobalStyles';
import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';

const useStyles = createUseStyles({
  container: {
    paddingBottom: 100
  },
  leftContainer: {
    padding: 40
  },
  rightContainer: {
    padding: 40
  }
})

const Description = () => {
  const style = useStyles();
  const globalStyle = useGlobalStyles();

  return (
    <Container className={style.container}>
      <Row>
        <Col md={6} className={style.leftContainer}>
          <center>
            <img src="/static/tampakanlogo.svg" alt="Tampakan" style={{ width: '80%' }} />
          </center>
        </Col>
        <Col md={6} className={style.rightContainer}>
          <Hidden xs sm>
            <div style={{
              padding: '80px 0'
            }}>
              <p className={globalStyle.paragraph}><b>Tayo Tayo Para Sa Tampakan</b> is an initiative of the Ateneo de Davao University to show resistance towards the commencement of the Tampakan Project of the Sagittarius Mines, Inc. situated between Tampakan in South Cotabato and Kiblawan in Davao del Sur. The said project aims to exploit the world’s largest undeveloped copper-gold deposit affecting 11 Blaan communities, 4 provinces, 4 municipalities, and 9 barangays in Mindanao. </p>
              <p className={globalStyle.paragraph}>This movement demands ecological justice and integrity that Mindanao deserves in order to preserve its uniquely and beautifully diverse culture, people, and environment.</p>
            </div>
          </Hidden>
          <Visible xs sm>
            <div>
              <p className={globalStyle.paragraph}><b>Tayo Tayo Para Sa Tampakan</b> is an initiative of the Ateneo de Davao University to show resistance towards the commencement of the Tampakan Project of the Sagittarius Mines, Inc. situated between Tampakan in South Cotabato and Kiblawan in Davao del Sur. The said project aims to exploit the world’s largest undeveloped copper-gold deposit affecting 11 Blaan communities, 4 provinces, 4 municipalities, and 9 barangays in Mindanao. </p>
              <p className={globalStyle.paragraph}>This movement demands ecological justice and integrity that Mindanao deserves in order to preserve its uniquely and beautifully diverse culture, people, and environment.</p>
            </div>
          </Visible>
        </Col>
      </Row>
    </Container>
  );
}

export default Description;