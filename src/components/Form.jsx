import { createUseStyles } from 'react-jss';
import useGlobalStyles from '../styles/useGlobalStyles';
import { Container, Row, Col } from 'react-grid-system';

import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

const useStyles = createUseStyles({
  container: {
    padding: 100,
    backgroundImage: 'url("/static/leaf1.svg")',
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  },
  leftContainer: {
    padding: 40
  },
  rightContainer: {
    padding: 40,
    backgroundColor: 'rgba(0,0,0,0.4)'
  }
})

const Description = () => {
  const style = useStyles();
  const globalStyle = useGlobalStyles();

  return (
    <Container className={style.container}>
      <Row>
        <Col md={6} className={style.leftContainer}>
          <div style={{
            padding: '70px 0',
            width: '90%',
            margin: 'auto'
          }}>
            <p className={globalStyle.paragraph}>Tampakan is part of each one of us. </p>
            <p className={globalStyle.paragraph}>Altogether, we stand up for Tampakan, for Mindanao, and our homeland.</p>
            <p className={globalStyle.paragraph}>We must take heed to be heard!</p>
            <p className={globalStyle.paragraph}><b>Sign the petition!</b></p>
          </div>
        </Col>
        <Col md={6} className={style.rightContainer}>
          <h1 style={{ color: 'white', fontWeight: 700, fontSize: 40, marginBottom: 40 }}>Sign the Petition!</h1>
          <Form>
            <Input label="First Name" floatingLabel={true} />
            <Input label="Last Name" floatingLabel={true} />
            <Input label="Email Address" type="email" floatingLabel={true} />
            <Button variant="raised">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Description;