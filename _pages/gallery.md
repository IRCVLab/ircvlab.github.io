---
title: "Gallery | IRCV Lab"
layout: gridlay
sitemap: false
permalink: /gallery
---

# Gallery

### 2025 Events
<br>
<!-- #### KCCV 2025 -->
<div markdown="0" class="gallery-event">
  <div class="row">
    <div class="col-sm-4">
      <a href="{{ site.url }}{{ site.baseurl }}/gallery/kccv2025" class="gallery-card">
        <div class="gallery-thumb" style="background-image:url('{{ site.url }}{{ site.baseurl }}/images/gallery/kccv2025/kccv1.jpg');"></div>
        <div class="gallery-meta">
            <h4 class="gallery-title">KCCV 2025</h4>
            <span class="gallery-cta">Open album →</span>
        </div>
        </a>
    </div>
  </div>
</div>

<style>
.gallery-event {
  margin-bottom: 30px;
}

.gallery-img {
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.gallery-img:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Gallery card styling */
.gallery-card {
  display: block;
  border-radius: 10px;
  overflow: hidden;
  background: #0f123a; /* 사이트 다크 톤과 조화 */
  box-shadow: 0 8px 24px rgba(0,0,0,0.16), 0 4px 10px rgba(0,0,0,0.10);
  transition: transform .2s ease, box-shadow .2s ease;
  text-decoration: none;
}
.gallery-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.18), 0 6px 16px rgba(0,0,0,0.12);
}
.gallery-thumb {
  width: 100%;
  padding-top: 62%; /* 16:10 비율 */
  background-size: cover;
  background-position: center center;
}
.gallery-meta {
  padding: 14px 16px 16px;
}
.gallery-title {
  margin: 0 0 6px 0;
  color: #fff;
  font-weight: 600;
}
.gallery-cta {
  color: #96ccff;
}
.gallery-card:hover .gallery-cta {
  color: #cde6ff;
}
@media (max-width: 767px) {
  .gallery-thumb { padding-top: 56%; }
}

.gallery-event h3 {
  color: #333;
  margin-bottom: 20px;
}
</style>

<script>
// Simple lightbox functionality
$(document).ready(function() {
  $('.gallery-img').click(function() {
    var src = $(this).attr('src');
    var alt = $(this).attr('alt');
    
    // Create lightbox overlay
    var lightbox = $('<div class="lightbox-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 9999; display: flex; align-items: center; justify-content: center;">' +
      '<div style="position: relative; max-width: 90%; max-height: 90%;">' +
      '<img src="' + src + '" alt="' + alt + '" style="max-width: 100%; max-height: 100%; border-radius: 8px;">' +
      '<button class="close-lightbox" style="position: absolute; top: -40px; right: 0; background: none; border: none; color: white; font-size: 30px; cursor: pointer;">&times;</button>' +
      '</div>' +
      '</div>');
    
    $('body').append(lightbox);
    
    // Close lightbox
    $('.lightbox-overlay, .close-lightbox').click(function() {
      $('.lightbox-overlay').remove();
    });
    
    // Prevent image click from closing
    $('.lightbox-overlay img').click(function(e) {
      e.stopPropagation();
    });
  });
});
</script>
