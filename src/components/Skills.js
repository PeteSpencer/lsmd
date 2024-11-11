import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';
import meter1 from '../assets/img/meter1.svg';
import meter3 from '../assets/img/meter3.svg';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <p>
                Meine Kollegen schätzen meine unermüdliche Einsatzbereitschaft
                und mein Mitgefühl, das aus meiner Kindheit resultiert, in der
                ich Zeuge vieler schwieriger Schicksale wurde. Diese Erfahrungen
                führten dazu, dass ich mich dem Schutz und der Sicherheit der
                Menschen verschrieb. Mein Bruder, der stets mein Anker war und
                ist, hat mich zusätzlich gelehrt, wie wichtig familiäre Werte
                und Verantwortung sind – Werte, die ich in meinem Beruf täglich
                einbringe.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='owl-carousel owl-theme skill-slider'
              >
                <div className='item'>
                  <img src={meter1} alt='Image' />
                  <h5>Führungsstärke</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='Image' />
                  <h5>Geduld</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='Image' />
                  <h5>Integrität</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='Image' />
                  <h5>Einsatzbereitschaft</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  );
};
