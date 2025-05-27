import React, { useState } from "react";
import layer1 from "./layer-1.svg";
import pillsSec71 from "./pills-sec7-1.png";
import "./style.css";
import styled from 'styled-components';
import Navbar from "../../../../shared/components/Navbar";
import FooterMain from "../../../../shared/components/Footer";

const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

export const Tablets = (): JSX.Element => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
     <PageContainer>
      <Navbar 
        scrolled={scrolled} 
        mobileMenuOpen={mobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />
    <div className="tablets">
      <div className="div-2">
        <div className="liquid-vital-qi">
          <div className="overlap-group">
            <p className="liquid-vital-qi-a">
              <span className="span">
                Liquid Vital Qi
                <br />
              </span>

              <span className="text-wrapper-5">
                A fluid lifeforce-energy concept.
              </span>
            </p>

            <img className="layer" alt="Layer" src={layer1} />

            <div className="flexcontainer">
              <p className="text">
                <span className="text-wrapper-6">
                  Aging isn’t about the years that pass.
                  <br />
                </span>
              </p>

              <p className="text">
                <span className="text-wrapper-6">
                  It’s about what happens inside your cells.
                  <br />
                </span>
              </p>

              <p className="text">
                <span className="text-wrapper-6">
                  Every day, your body is either regenerating or breaking down.
                  <br />
                </span>
              </p>

              <p className="text">
                <span className="text-wrapper-6">
                  Every moment, your cells are either thriving or declining.
                  <br />
                </span>
              </p>

              <p className="text">
                <span className="text-wrapper-6">
                  What if you could shift the balance—not just slow aging, but
                  actively reverse its effects?
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="overlap">
          <div className="stars-hero">
            <div className="overlap-2">
              <div className="frame">
                <div className="text-wrapper-7">Buy Tablets</div>
              </div>

              <div className="text-wrapper-8">Introducing LVQ+</div>

              <p className="p">H2 + NAD Fusion Tablets</p>
            </div>
          </div>

          <div className="underwater-hero">
            <div className="overlap-3">
              <p className="now-in-your-water">
                <span className="text-wrapper-9">Now in </span>

                <span className="text-wrapper-10">Your Water</span>

                <span className="text-wrapper-9">.</span>
              </p>

              <p className="a-tablet-unlike">
                <span className="text-wrapper-11">
                  A Tablet Unlike Anything Before.
                  <br />
                  Drop. Dissolve.{" "}
                </span>

                <span className="text-wrapper-12">Transform</span>

                <span className="text-wrapper-11">.</span>
              </p>
            </div>
          </div>

          <div className="mid-hero-text">
            <div className="overlap-4">
              <div className="rectangle" />

              <p className="text-wrapper-13">
                A first-of-its-kind breakthrough in longevity science.
              </p>
            </div>

            <p className="text-wrapper-14">The Power of the Stars</p>
          </div>

        
          <div className="rectangle-2" />

          <div className="flexcontainer-2">
            <p className="span-wrapper">
              <span className="text-wrapper-15">
                Waiting on updated content and image ideas
                <br />
              </span>
            </p>

            <p className="span-wrapper">
              <span className="text-wrapper-16">Page layout changing.</span>
            </p>
          </div>
        </div>

        
        <div className="section-four">
          <div className="overlap-5">
            <p className="molecular-hydrogen">
              <span className="span">
                Molecular Hydrogen (H2)
                <br />
              </span>

              <span className="text-wrapper-5">The Element of Life.</span>
            </p>

            <div className="flexcontainer-3">
              <p className="text-2">
                <span className="text-wrapper-17">
                  Lighter than air. Stronger than time.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-17">
                  The first element in existence. The fuel of stars.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-17">
                  Now, a game-changer for human longevity.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-17">
                  Selectively neutralizes oxidative stress—the #1 cause of
                  aging.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-17">
                  Penetrates deep into cells, crossing the blood-brain barrier
                  for ultimate bioavailability.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-17">
                  Supercharges mitochondria, boosting energy, endurance, and
                  cellular function.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="section-five">
          <div className="overlap-6">
            <p className="NAD-the-spark-of">
              <span className="span">
                NAD+ <br />
              </span>

              <span className="text-wrapper-5">
                The Spark of Cellular Energy.
              </span>
            </p>

            <div className="flexcontainer-4">
              <p className="text-2">
                <span className="text-wrapper-17">
                  The molecule that powers life itself.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-17">
                  NAD+ is essential for every cellular function—but it declines
                  with age. LVQ+ restores it.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-17">
                  Energizes every cell, improving focus, metabolism, and
                  recovery.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-17">
                  Drives mitochondrial function, the engine of life and
                  longevity.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-17">
                  Supports DNA repair, keeping your cells younger, longer.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="section-six">
          <div className="overlap-7">
            <p className="resveratrol-the">
              <span className="span">Resveratrol</span>

              <span className="text-wrapper-5"> The Longevity Molecule.</span>
            </p>

            <div className="flexcontainer-5">
              <p className="text-2">
                <span className="text-wrapper-17">
                  The science of anti-aging, in a single sip.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-17">
                  A powerhouse polyphenol found in red grapes and ancient
                  superfoods, known for extending lifespan.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-17">
                  Activates Sirtuins, the master longevity genes.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-17">
                  Enhances DNA repair and cardiovascular health.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-17">
                  Mimics fasting benefits, improving metabolic function.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-16">
                  The molecule of youth, in every drop.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="section-seven">
          <div className="overlap-8">
            <p className="spermidine-the">
              <span className="span">Spermidine</span>

              <span className="text-wrapper-5">
                {" "}
                The Cellular Renewal Catalyst
              </span>
            </p>

            <div className="flexcontainer-6">
              <p className="text-2">
                <span className="text-wrapper-17">
                  The key to longevity, found in centenarians.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-17">
                  A natural compound that stimulates autophagy, the body’s
                  ability to clean and regenerate damaged cells.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-17">
                  Supports brain health, immune function, and cellular repair.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-17">
                  Triggers deep cellular detoxification.
                  <br />
                </span>
              </p>

              <p className="text-2">
                <span className="text-wrapper-17">
                  Found in populations with exceptional longevity.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="overlap-9">
          <div className="CTA">
            <div className="overlap-10">
              <div className="text-wrapper-18">The Future of Longevity</div>

              <p className="start-your-tablet">
                <span className="span">
                  Start your tablet subscription today
                </span>

                <span className="text-wrapper-19">
                  {" "}
                  or join the revolution and become a{" "}
                </span>

                <span className="text-wrapper-20">brand partner</span>

                <span className="text-wrapper-19">.</span>
              </p>

              <div className="text-wrapper-21">Monthly Subscription €xx.xx</div>

              <div className="text-wrapper-22">LVQ+</div>

              <div className="div-wrapper">
                <div className="text-wrapper-23">Start Subscription</div>
              </div>
            </div>
          </div>

          <img className="pills" alt="Pills" src={pillsSec71} />
        </div>
      </div>
    </div>
    <FooterMain/>
        </PageContainer>

  );
};
