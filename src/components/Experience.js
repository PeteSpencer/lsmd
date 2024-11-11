import 'animate.css';
import { Col, Container, Row } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Experience = () => {
  return (
    <section className='project' id='projects'>
      <Container className='container text-start'>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Beruflicher Werdegang und Erfahrung</h2>
                  <p>
                    Ich begann meine Laufbahn bei der San Andreas Highway Patrol
                    (<strong className='text-success'>SAHP</strong>),
                    <br /> wo ich nicht nur als <strong>Master Seargent</strong>
                    , sondern auch als Mitglied der
                    <strong> Air Division</strong> diente. Dort sammelte ich
                    wertvolle Erfahrungen in der Koordination von
                    Luftüberwachung, heiklen Rettungseinsätzen und bei
                    Geiselnahmen als Einsatzleitung und Verhandlungsführung.
                    <br />
                    Meine Zeit in der SAHP hat meine Führungsqualitäten und
                    meine Fähigkeit, in kritischen Situationen schnell und
                    überlegt zu handeln, geschärft.
                    <br />
                    <br /> In meiner aktuellen Position als Mitglied der
                    <strong className='text-success'> Tactical Unit</strong> des
                    LSMD arbeite ich an der Schnittstelle zwischen
                    Notfallmedizin und taktischen Einsätzen. Hier bin ich
                    regelmäßig in lebensbedrohliche Situationen involviert, wie
                    Geiselnahmen und bewaffnete Einsätze, bei denen ich die
                    Strafverfolgungsbehörden unterstütze und Leben rette. Mein
                    Ziel ist es stets, die bestmögliche medizinische Versorgung
                    zu gewährleisten und Risiken zu minimieren.
                    <br />
                    <br />
                    Außerdem Engergiere ich mich seit kurzem stark in der{' '}
                    <strong className='text-success'>Flight-Crew</strong>. Ich
                    unterstütze die Aus- und Weiterbildung angehender Piloten
                    des LSMD.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  );
};
