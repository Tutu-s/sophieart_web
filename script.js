// 스크롤할 때 feature-box가 보이면 애니메이션 재생
document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.feature-box');
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.style.animationPlayState = 'running';
      }
    });
  };
  // 처음, 그리고 스크롤할 때마다 체크
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);
});
