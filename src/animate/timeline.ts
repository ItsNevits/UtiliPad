import { gsap } from "gsap";

export function animateCountUp(selector: string, targetNumber?: number) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    let target: number;

    if (targetNumber !== undefined) {
      target = targetNumber;
    } else if (el.hasAttribute("data-target")) {
      target = parseInt(el.getAttribute("data-target") || "0", 10);
    } else {
      target = parseInt(el.textContent || "0", 10);
    }

    if (isNaN(target)) return;

    gsap.fromTo(
      el,
      { innerText: 0 },
      {
        innerText: target,
        duration: 2,
        ease: "power1.out",
        snap: { innerText: 1 },
        onUpdate: () => {
          el.textContent = Math.ceil((el as any).innerText).toString();
        },
      }
    );
  });
}

export function animateSequenceItems(selector: string) {
  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) {
    return;
  }

  gsap.set(elements, { opacity: 0 });

  // Animar todos los elementos con stagger
  gsap.to(elements, {
    opacity: 1,
    ease: "power3.out",
    duration: 0.15,
    stagger: 0.15,
  });
}
