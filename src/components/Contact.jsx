import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {openingHours, socials} from "../../constants/index.js";
import {SplitText} from "gsap/all";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#contact h2', {type: 'words'});

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top top',
        end: 'bottom top',
      },
      ease: 'power1.inOut',
      scrub: true,
    });

    timeline.from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
    }).from('#contact h3, #contact p', {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
    }).to('#f-right-leaf', {
      y: '-50',
      duration: 1,
      ease: 'power1.inOut',
    }, 0).to('#f-left-leaf', {
      y: '50',
      duration: 1,
      ease: 'power1.inOut',
    }, 0);
  })

  return (
    <footer id="contact">
      <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
      <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>10 Downing Street, London SW1A 2AA</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>velvetpour@cocktails.com</p>
        </div>

        <div>
          <h3>
            OPEN EVERY DAY
            {openingHours.map((time) => (
              <p key={time.day}>
                {time.day} : {time.time}
              </p>
            ))}
          </h3>
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt="social icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Contact
