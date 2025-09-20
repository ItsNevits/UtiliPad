import { gsap } from "gsap";
import splitType from "split-type";

export function animateCharacters(selector: string) {
  const split = new splitType(selector, { types: "chars" });

  if (!split.chars || split.chars.length === 0) return;

  split.chars.forEach((char, index) => {
    gsap.from(char, {
      y: gsap.utils.random(-150, 150),
      x: gsap.utils.random(-300, 300),
      rotate: gsap.utils.random(-360, 360),
      scale: gsap.utils.random(0.5, 1.5),
      opacity: 0,
      duration: 0.75,
      delay: index * 0.05,
      ease: "back.out(1.7)",
    });

    char.addEventListener("mouseenter", charsHover);

    function charsHover() {
      gsap
        .timeline()
        .to(char, {
          y: gsap.utils.random(-20, 20),
          x: gsap.utils.random(-20, 20),
          rotate: gsap.utils.random(-15, 15),
          scale: gsap.utils.random(1.1, 1.3),
          ease: "back.out(1.7)",
          duration: 0.3,
          onStart: () => char.removeEventListener("mouseenter", charsHover),
        })
        .to(char, {
          y: 0,
          x: 0,
          scale: 1,
          rotate: 0,
          delay: 0.5,
          ease: "back.out(1.7)",
          onComplete: () => char.addEventListener("mouseenter", charsHover),
        });
    }
  });
}
