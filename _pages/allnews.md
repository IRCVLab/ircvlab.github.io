---
title: "News | IRCV Lab"
layout: textlay
excerpt: "IRCV Lab at Hanyang University."
sitemap: false
permalink: /allnews.html
---

<style>
.news-links {
  margin: 30px 0 53px 0;
  padding: 8px 10px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  display: inline-block;
}
.news-links a {
  margin-right: 5px;
  margin-top: 5px;
  display: inline-block;
}

.news-links p {
  margin: 0 0 4px 0;
}

.news-links a.news-link {
  padding: 2px 8px;
  border-radius: 4px;
  border: 0px solid #bfe1ffff;
  color: #001154ff;
  background-color: #f2f8fdff;
  text-decoration: underline;
  font-size: 0.85em;
}

.news-links a.news-link:hover {
  border-color: #999;
  background-color: #ececec;
  color: #111;
  font-weight: bold;
}
.news-tabs {
  margin: 15px 0;
}

.news-tab {
  display: inline-block;
  margin-right: 8px;
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
  cursor: pointer;
  font-size: 0.9em;
  font-weight: bold;
}

.news-tab.active {
  border-color: #bfe1ffff;
  background-color: #e6f4ff;
  
}

</style>

# News

{% comment %}
  Combine news from 2026, 2025, 2024, and 2023 into one array.
{% endcomment %}
{% assign allnews = site.data.news_2026 | concat: site.data.news_2025 | concat: site.data.news_2024 | concat: site.data.news_2023 %}

{% comment %}
  Optionally, if your date fields are in a sortable format (like ISO 8601), you can sort the combined array.
  For example:
  {% assign sorted_news = allnews | sort: "date" %}
  Then loop over sorted_news instead of allnews.
{% endcomment %}
<div class="news-tabs">
  <button class="news-tab active" data-year="all">All</button>
  <button class="news-tab" data-year="2026">2026</button>
  <button class="news-tab" data-year="2025">2025</button>
  <button class="news-tab" data-year="2024">2024</button>
  <button class="news-tab" data-year="2023">2023</button>
</div>

<div class="news-full">
{% assign allnews = site.data.news_2026 | concat: site.data.news_2025 | concat: site.data.news_2024 | concat: site.data.news_2023 %}
{% for article in allnews %}
{% assign year = article.date | split: " " | last %}
<div class="news-item" data-year="{{ year }}">
{% assign parts = article.headline | split: ":" %}
{% assign tagCandidate = parts[0] | strip %}
{% assign remainder = article.headline | remove_first: tagCandidate | remove_first: ":" | strip %}
{% if article.headline contains ":" %}
{% if tagCandidate contains "http" or tagCandidate contains "https" %}
<span class="news-headline-text">{{ article.headline }}</span>
{% else %}
<span class="news-tag">{{ tagCandidate }}</span><br>
<span class="news-headline-text">{{ remainder }}</span>
{% endif %}
{% else %}
<span class="news-headline-text">{{ article.headline }}</span>
{% endif %}

{% if article.description %}
<p class="news-description">{{ article.description }}</p>
{% endif %}

<p class="news-date">{{ article.date }}</p>

{% if article.photos %}
<div markdown="0">
  {% assign mainId = "main-photo-" | append: forloop.index0 %}
  <div class="news-gallery" data-gallery-id="{{ mainId }}">
    <div class="news-main-photo">
      <button class="news-arrow prev" type="button" aria-label="Previous image">&#10094;</button>
      <img src="{{ article.photos[0] }}" alt="{{ article.headline }}" id="{{ mainId }}">
      <button class="news-arrow next" type="button" aria-label="Next image">&#10095;</button>
    </div>
    <div class="news-thumbnails">
    {% for photo in article.photos %}
      <img src="{{ photo }}" alt="Thumbnail" data-target="{{ mainId }}" class="thumbnail">
    {% endfor %}
    </div>
  </div>
</div>
{% endif %}
{% if article.links %}
<div class="news-links">
  <p><strong>Related links</strong></p>
{% for link in article.links %}
<a href="{{ link.url }}" target="_blank" class="news-link">{{ link.title }}</a>
{% endfor %}
</div>
{% endif %}
</div>
{% endfor %}

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.news-tab');
    var items = document.querySelectorAll('.news-item');

    function filterByYear(year) {
      items.forEach(function (item) {
        var itemYear = item.getAttribute('data-year');
        if (year === 'all' || itemYear === year) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var year = tab.getAttribute('data-year');

        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');

        filterByYear(year);
      });
    });

    // 초기 상태: All 탭
    filterByYear('all');
  });
</script>

<script src="/js/news.js" type="module"></script>
</div>