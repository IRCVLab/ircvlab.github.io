---
title: "News"
layout: textlay
excerpt: "IRCV Lab at Hanyang University."
sitemap: false
permalink: /allnews.html
---

# News

{% for article in site.data.news_2025 %}
<p>{{ article.date }} <br>
<em>{{ article.headline }}</em>
</p>
{% endfor %}

{% for article in site.data.news_2024 %}
<p>{{ article.date }} <br>
<em>{{ article.headline }}</em></p>
{% endfor %}

{% for article in site.data.news_2023 %}
<p>{{ article.date }} <br>
<em>{{ article.headline }}</em></p>
{% endfor %}
