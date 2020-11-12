import Landing from './components/Landing';
import Description from './components/Description';
import Slider from './components/Slider';
import Form from './components/Form';

import useGlobalStyles from './styles/useGlobalStyles';
import './styles/mui.css';

import { setConfiguration } from 'react-grid-system';
 
setConfiguration({ gutterWidth: 100 });

function App() {
  const style = useGlobalStyles();

  return (
    <div className={style.container}>
      <Landing />
      <Description />
      <Slider />
      <Form />
      <div className={style.footer}>
        Copyright 2020 SAMAHAN Central Board | Developed by SAMAHAN Creative Team and SAMAHAN System Development<br/>
        Web Design by <a href="https://twitter.com/sonroyaalmerol" target="_blank" rel="noopener noreferrer">Son Roy Almerol</a> and <a href="https://twitter.com/jeyowthreeshwa" target="_blank" rel="noopener noreferrer">Joeshua Dequiña</a>
      </div>
    </div>
  );
}

export default App;
