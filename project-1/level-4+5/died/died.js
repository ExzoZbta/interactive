const scrollbarThumb = document.querySelector('.scrollbar-thumb');
const scrollContent = document.querySelector('.scroll-content');
let isDragging = false;
let startY;
let startScrollTop;

scrollbarThumb.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.clientY;
  startScrollTop = scrollContent.scrollTop;
  e.preventDefault(); // Prevent text selection during drag
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaY = e.clientY - startY;
  const scrollOffset = (deltaY / scrollbarThumb.parentNode.clientHeight) * scrollContent.scrollHeight;
  scrollContent.scrollTop = startScrollTop + scrollOffset;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
