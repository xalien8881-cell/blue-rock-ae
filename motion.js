(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const mark = document.querySelector(".brand-mark");
  if (!mark) return;
  mark.animate(
    [{ letterSpacing: "0em" }, { letterSpacing: "0.04em" }, { letterSpacing: "0em" }],
    { duration: 4200, iterations: Infinity, easing: "ease-in-out" }
  );
})();
