import 'animate.css';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/img/heli.png';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Tactical Unit', 'Flight-Crew', 'Helfer'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='aligh-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <div className='tagline' style={{ marginRight: 20 }}>
                    Pete Spencer | 52442 <br />
                    <strong>Alter</strong>
                    <span> 54</span>
                    <br /> <strong>DN</strong>
                    <span> 79</span>
                    <br />
                  </div>
                  <div className='tagline'>
                    OOC
                    <br />
                    <strong>Name:</strong>
                    <span> Timo</span>
                    <br />
                    <strong>Alter:</strong>
                    <span> 35</span>
                    <br />
                    <strong>Ort:</strong> <span> Berlin</span>
                  </div>

                  <h1>
                    {`Hi! Ich bin Pete`}{' '}
                    <div
                      className='txt-rotate'
                      dataPeriod='1000'
                      data-rotate='[ "Tactical Unit", "Flight-Crew", "Helfer" ]'
                    >
                      <span className='wrap'>{text}</span>
                    </div>
                  </h1>
                  <h2>Bewerbung zum "Leitenden Oberarzt Tactical Unit"</h2>
                  <p>
                    hiermit bewerbe ich mich um die Position des{' '}
                    <strong className='text-success'>
                      Leitenden Oberarztes der Tactical Unit
                    </strong>{' '}
                    des Los Santos Medical Department (LSMD). Mit über 50 Jahren
                    auf der Insel und einer unerschütterlichen Karriere in der
                    Strafverfolgung und Notfallmedizin bringe ich das Wissen,
                    die Erfahrung und die Integrität mit, die diese
                    verantwortungsvolle Position erfordert.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img src={headerImg} alt='Header Img' />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
