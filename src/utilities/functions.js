export const viewInFullscreen = (ref) => {
  ref.current.requestFullscreen
    ? ref.current.requestFullscreen()
    : ref.current.webkitRequestFullscreen
    ? ref.current.webkitRequestFullscreen()
    : ref.current.mozRequestFullscreen && ref.current.mozRequestFullscreen();
};
