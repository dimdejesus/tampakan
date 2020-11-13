import React from 'react';

import { createUseStyles } from 'react-jss';
import useGlobalStyles from '../styles/useGlobalStyles';
import { Container, Row, Col } from 'react-grid-system';

import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Checkbox from 'muicss/lib/react/checkbox';

import Modal from 'react-modal';

const useStyles = createUseStyles({
  container: {
    padding: 100,
    backgroundImage: 'url("/static/Leafcut.svg")',
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

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [openPrivacyPolicy, setOpenPrivacyPolicy] = React.useState(false);
  const [agreePolicy, setAgreePolicy] = React.useState(false);

  const [submitting, setSubmitting] = React.useState(false);

  return (
    <div className={style.container}>
      <Container>
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
            <Form onSubmit={(e) => { e.preventDefault() }}>
              <Input label="First Name" floatingLabel={true} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <Input label="Last Name" floatingLabel={true} value={lastName} onChange={(e) => setLastName(e.target.value)} />
              <Input label="Email Address" type="email" floatingLabel={true} value={email} onChange={(e) => setEmail(e.target.value)} />
              <Checkbox checked={agreePolicy} onChange={(e) => setAgreePolicy(e.target.checked)} label={<>I have read and agree to the <a href="/" style={{
                color: '#fff'
              }} onClick={(e) => {
                setOpenPrivacyPolicy(true);
                e.preventDefault();
              }}>Privacy Policy</a>.</>} style={{ marginTop: 40, marginBottom: 20 }} />
              <Button type="submit" variant="raised">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Modal
        isOpen={openPrivacyPolicy}
        onAfterOpen={() => setOpenPrivacyPolicy(true)}
        onRequestClose={() => setOpenPrivacyPolicy(false)}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <p className={globalStyle.paragraph}>Under the protection of the Republic Act 10173, also known as the Data Privacy Act, the information that you will be submitting in this form will be used for the Signature Drive of Tayo Tayo para sa Tampakan. The following information will be asked from you: 1) Name, and 2) E-mail</p>
        <p className={globalStyle.paragraph}>The information collected will only be used to quantify the number of people who are in support of this project. Moreover, only the number of respondents in this form will be used for the publicity materials of Tayo Tayo para sa Tampakan. The name and e-mail are collected for the purpose of reducing multiple submissions from the same respondent.</p>
        <p className={globalStyle.paragraph}>Should you have any concern, you may send an email to samahan@addu.edu.ph with the subject, Tampakan | Signature Drive .</p>
        <p className={globalStyle.paragraph}>By submitting this form, you have read, understood and agreed to the terms indicated above.</p>
        <Button variant="raised" onClick={() => setOpenPrivacyPolicy(false)}>Close</Button>
      </Modal>
    </div>
  );
}

export default Description;