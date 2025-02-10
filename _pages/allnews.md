---
title: "News"
layout: textlay
excerpt: "IRCV Lab at Hanyang University."
sitemap: false
permalink: /allnews.html
---

# News

{% comment %}
  Combine news from 2025, 2024, and 2023 into one array.
{% endcomment %}
{% assign allnews = site.data.news_2025 | concat: site.data.news_2024 | concat: site.data.news_2023 %}

{% comment %}
  Optionally, if your date fields are in a sortable format (like ISO 8601), you can sort the combined array.
  For example:
  {% assign sorted_news = allnews | sort: "date" %}
  Then loop over sorted_news instead of allnews.
{% endcomment %}

{% for article in allnews %}
<div class="news-item">
{% assign parts = article.headline | split: ":" %}
{% assign tagCandidate = parts[0] | strip %}
{% if parts.size > 1 %}
  {% if tagCandidate contains "http" or tagCandidate contains "https" %}
<!-- If the first part contains "http" or "https", output the whole headline -->
<span class="news-headline-text">{{ article.headline }}</span>
  {% else %}
<!-- Otherwise, split the headline into tag and text -->
<span class="news-tag">{{ tagCandidate }}</span><br>
<span class="news-headline-text">{{ parts[1] | strip }}</span>
  {% endif %}
{% else %}
<!-- If there is no colon, output the entire headline -->
<span class="news-headline-text">{{ article.headline }}</span>
{% endif %}

{% if article.description %}
<p class="news-description">{{ article.description }}</p>
{% endif %}

<p class="news-date">{{ article.date }}</p>
  

{% if article.photos %}
{% assign mainId = "main-photo-" | append: forloop.index0 %}
<div class="news-gallery">
<!-- 대표 이미지 영역 -->
<div class="news-main-photo">
<img src="{{ article.photos[0] }}" alt="{{ article.headline }}" id="{{ mainId }}">
</div>
<!-- 썸네일 영역 (슬라이더 형태) -->
<div class="news-thumbnails">
{% for photo in article.photos %}
<img src="{{ photo }}" alt="Thumbnail" data-target="{{ mainId }}" class="thumbnail">
{% endfor %}
</div>
</div>
{% endif %}
</div>
{% endfor %}

  <script src="/js/news.js" type="module"></script>
