---
title: "News | IRCV Lab"
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
<div class="news-full">
{% assign allnews = site.data.news_2025 | concat: site.data.news_2024 | concat: site.data.news_2023 %}
{% for article in allnews %}
<div class="news-item">
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
{% assign mainId = "main-photo-" | append: forloop.index0 %}
<div class="news-gallery">
<div class="news-main-photo">
<img src="{{ article.photos[0] }}" alt="{{ article.headline }}" id="{{ mainId }}">
</div>
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
</div>