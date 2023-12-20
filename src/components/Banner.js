import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../styles/banner.css";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  
  const period = 2000; 

  useEffect(() => {
    const toRotate = [
      "Web Developer",
      "Branding",
      "Social Media",
      "Web Designer",
      "UI/UX Designer",
    ];
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(300 - Math.random() * 100); // Speed for typing next word
      } else {
        setDelta(isDeleting ? 100 : 200); // Speed for typing and deleting
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, loopNum, isDeleting]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Next step for your brands </span>
                  <h1>
                    {`Hi! We're Nxtep, your creative nexus for `}
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='["Web Developer", "Branding", "Social Media", "Web Designer", "UI/UX Designer"]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <a href="#connect" className="no-underline">
                    <button>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {window.innerWidth >= 768 && (
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
