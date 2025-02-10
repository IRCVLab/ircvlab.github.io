document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(function(thumbnail) {
      thumbnail.addEventListener('click', function() {
        // data-target 속성으로 어떤 대표 이미지를 바꿀지 결정
        const targetId = thumbnail.getAttribute('data-target');
        const mainPhoto = document.getElementById(targetId);
        if (mainPhoto) {
          mainPhoto.src = thumbnail.src;
        }
      });
    });
  });