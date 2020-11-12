import HeroSlider, {
  Slide,
  Nav,
  OverlayContainer,
} from 'hero-slider';

export default function BasicSlider() {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      style={{
        color: '#FFF'
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: '90vmin',
      }}
    >
      <OverlayContainer
        style={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.33)',
          textAlign: 'center',
        }}
      >
      </OverlayContainer>
      <Slide
        background={{
          backgroundImage: 'https://imgs.mongabay.com/wp-content/uploads/sites/20/2020/03/09054203/Screen-Shot-2020-03-09-at-5.40.39-PM-1200x800.png',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
      />
      <Slide
        background={{
          backgroundImage: 'https://imgs.mongabay.com/wp-content/uploads/sites/20/2020/08/27022815/Tampakan8-768x512.jpg',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
      />
      <Slide
        background={{
          backgroundImage: 'https://assets2.rappler.com/images/parsons-brinckerhoff-visualization-tampakan-mine-20120727-1.jpg',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
      />
      <Slide
        background={{
          backgroundImage: 'https://www.mindanews.com/wp-content/uploads/2020/08/min31tampakan.jpg',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
      />
      <Nav />
    </HeroSlider>
  );
}