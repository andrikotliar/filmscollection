export const scroll = {
  methods: {
    scroll(scrollElem) {
      const elem = document.querySelector(scrollElem);
      let isDown = false;
      let startX;
      let scrollLeft;
      elem.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - elem.offsetLeft;
        scrollLeft = elem.scrollLeft;
      });
      elem.addEventListener('mouseleave', () => {
        isDown = false;
      });
      elem.addEventListener('mouseup', () => {
        isDown = false;
      });
      elem.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - elem.offsetLeft;
        const walk = (x - startX) * 2;
        elem.scrollLeft = scrollLeft - walk;
      });
    }
  }
}