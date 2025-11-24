document.addEventListener('DOMContentLoaded', () => {
  // 라이트박스 생성
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = '<img alt="">';
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');

  // 유틸
  const openLightbox = (src) => {
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  };
  // 갤러리 내 좌우 화살표로 대표 이미지 전환
  document.querySelectorAll('.news-gallery').forEach(gallery => {
    const mainImg = gallery.querySelector('.news-main-photo img');
    const thumbs = Array.from(gallery.querySelectorAll('.news-thumbnails img'));
    const prevBtn = gallery.querySelector('.news-arrow.prev');
    const nextBtn = gallery.querySelector('.news-arrow.next');

    if (!mainImg || thumbs.length === 0) return;

    let currentIndex = 0;

    const showImage = (index) => {
      currentIndex = index;
      const targetThumb = thumbs[currentIndex];
      if (targetThumb) {
        mainImg.src = targetThumb.src;
      }
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (thumbs.length <= 1) return;
        const nextIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
        showImage(nextIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (thumbs.length <= 1) return;
        const nextIndex = (currentIndex + 1) % thumbs.length;
        showImage(nextIndex);
      });
    }

    // 썸네일 클릭 시 대표 이미지도 해당 이미지로 변경
    thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        showImage(index);
      });
    });
  });
  // 썸네일 클릭
  document.querySelectorAll('.news-thumbnails img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', (e) => {
      e.preventDefault();
      const full = img.dataset.full || img.src; // data-full 우선
      openLightbox(full);
    });
  });

  // 대표 이미지도 클릭 확대 (원하면 유지, 아니면 이 블록 삭제)
  document.querySelectorAll('.news-main-photo img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', (e) => {
      e.preventDefault();
      const full = img.dataset.full || img.src;
      openLightbox(full);
    });
  });

  // 배경 클릭 시 닫기
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // 이미지 클릭은 닫기 방지
  lightboxImg.addEventListener('click', (e) => e.stopPropagation());

  // ESC로 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
      closeLightbox();
    }
  });
});
