export let handleHoverToolTip = (refContainer, e) => {
  console.log(e.type);
  if (e.type == "mouseenter") {
    refContainer.current.style.transform = "scale(1)";
    refContainer.current.style.transition = "0.3s";
    refContainer.current.style.opacity = "1";
    refContainer.current.textContent = "click to edit";
  }
  if (e.type == "mousemove") {
    refContainer.current.style.display = "block";
    refContainer.current.style.position = "absolute";
    refContainer.current.style.top = e.clientY - 50 + "px";
    refContainer.current.style.left = e.clientX - 50 + "px";
    refContainer.current.style.transform = "scale(1)";
    refContainer.current.style.transition = "none";
  }
  if (e.type == "mouseleave") {
    refContainer.current.style.opacity = "0";
    refContainer.current.style.transition = "0.2s";
  }
};
