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
