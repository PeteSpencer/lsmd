import 'animate.css';
import { Col, Container, Row } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import contactImg from '../assets/img/pete.png';

export const Vision = () => {
  return (
    <section className='contact' id='vision'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                  src={contactImg}
                  alt='Contact Us'
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Meine Vision</h2>
                  <p>
                    Als{' '}
                    <strong className='text-primary'>
                      Leitender Oberarzt der Tactical Unit
                    </strong>{' '}
                    möchte ich mein Wissen und meine Erfahrung nutzen, um die
                    medizinischen Protokolle weiterzuentwickeln und eine engere
                    Zusammenarbeit zwischen der medizinischen Abteilung und den
                    Strafverfolgungsbehörden zu fördern. Ich strebe danach,
                    innovative und effektive Ansätze in der Notfallmedizin zu
                    etablieren, um in kritischen Situationen Leben zu retten und
                    die Effizienz unserer Einsätze zu maximieren. Ich freue mich
                    darauf, meine Fähigkeiten in den Dienste des LSMD zu
                    vertiefen und die Tactical Unit mit meiner Erfahrung und
                    meiner Führungsstärke zu unterstützen.
                    <br />
                    <br />
                    Ich bedanke mich für das Vertrauen und die gute
                    Zusammenarbeit in der Vergangenheit und blicke mit großer
                    Freude in die Zukunft.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
