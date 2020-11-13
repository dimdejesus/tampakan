import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'url("/static/maincut.svg")',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    height: 'clamp(100vh, 100vw, 130vh)',
    position: 'relative',
    padding: 0,
  },
  headerContainer: {
    position: 'relative',
    height: '35vh',
    width: '100vw',
    padding: 0,
    margin: 0,
  },
  clouds: {
    backgroundImage: 'url("/static/clouds.svg")',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '25vh',
    width: '100vw',
    position: 'absolute',
  },
  logo: {
    backgroundImage: 'url("/static/tampakanlogotype.svg")',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '25vh',
    top: '2vh',
    left: '10vw',
    width: '80vw',
    position: 'absolute'
  },
  counterContainer: {
    width: '100vw',
    height: '100vh',
    color: '#004E3C',
    textAlign: 'center',
    verticalAlign: 'middle',
    padding: 0,
    margin: 0,
  },
  counterText: {
    fontSize: 'clamp(100%, 2rem + 6vw, 7rem)',
    fontWeight: 800,
    padding: 0,
    margin: 0,
  },
})

const Landing = () => {
  const style = useStyles();

  return (
    <>
      <div className={style.container}>
        <div className={style.headerContainer}>
          <div className={style.clouds} />
          <div className={style.logo} />
        </div>
        <div className={style.counterContainer}>
          <h1 className={style.counterText}>192,168,254</h1>
          <h2>signatures</h2>
        </div>
      </div>
    </>
  );
}

export default Landing;