---
title: "Publications | IRCV Lab"
layout: gridlay
excerpt: "IRCVLab -- Publications."
sitemap: false
permalink: /publications/
---


## Publications

<p style="text-align:right; margin-right: 5vw">
  <sup>*</sup> first author <br>
  <sup>&dagger;</sup> corresponding author

</p>

{% assign current_year = "" %}
{% for publi in site.data.publist %}

{% if publi.pubdate.year != current_year %}
{% assign current_year = publi.pubdate.year %}
<h3 class="pub-year-group">{{ current_year }}</h3>
{% endif %}

<div class="pub-entry">

{% if publi.marked %}<span style="color: crimson">‣</span>{% endif %}
{%- assign paper_url = "" -%}
{%- for lnk in publi.links -%}
  {%- if lnk.type == "paper" -%}{%- assign paper_url = lnk.url -%}{%- endif -%}
{%- endfor -%}
{%- if paper_url == "" -%}{%- assign paper_url = publi.link.url -%}{%- endif -%}
{%- if paper_url and paper_url != "" -%}
  <a href="{{ paper_url }}" class="publi_title">{{ publi.title }}</a>
{%- else -%}
  <span class="publi_title">{{ publi.title }}</span>
{%- endif -%}
<br/>
{% include publication_author_list.html -%}
<span class="publi_journal">{{ publi.journal }}</span>
({{ publi.pubdate.year }}){% if publi.vip %}, {{ publi.vip }}{% endif %}<br/>

{%- for lnk in publi.links -%}
{%- if lnk.type == "paper" -%}{%- assign icon = "fas fa-file-alt" -%}
{%- elsif lnk.type == "pdf" -%}{%- assign icon = "fas fa-file-pdf" -%}
{%- elsif lnk.type == "project" -%}{%- assign icon = "fas fa-globe" -%}
{%- elsif lnk.type == "video" -%}{%- assign icon = "fas fa-video" -%}
{%- elsif lnk.type == "youtube" -%}{%- assign icon = "fab fa-youtube" -%}
{%- elsif lnk.type == "code" -%}{%- assign icon = "fab fa-github" -%}
{%- elsif lnk.type == "slides" -%}{%- assign icon = "fas fa-chalkboard-teacher" -%}
{%- else -%}{%- assign icon = "fas fa-link" -%}
{%- endif -%}
<a href="{{ lnk.url }}" class="pub-btn pub-btn--{{ lnk.type }}" target="_blank" rel="noopener"><i class="{{ icon }}"></i> {{ lnk.type | capitalize }}</a><br>
{%- endfor %}

{%- if publi.awards %}
<span class="pub-badge pub-badge--award"><i class="fas fa-trophy"></i> {{ publi.awards }}</span>
{%- endif %}
{%- if publi.news2 %}
<br><span class="pub-badge pub-badge--award"><i class="fas fa-trophy"></i> {{ publi.news2 }}</span>
{%- endif %}

<span class="pub-citations" style="display:none"
  data-doi="{{ publi.doi }}"
  data-s2id="{{ publi.semantic_scholar_id }}"
  data-title="{{ publi.title }}">
  <span class="pub-badge pub-badge--cite"><i class="fas fa-quote-right"></i> <span class="cite-count"></span></span>
</span>

</div>

{% endfor %}

<script>
(async () => {
  const delay = ms => new Promise(r => setTimeout(r, ms));
  const items = document.querySelectorAll('.pub-citations');

  for (const el of items) {
    const doi   = (el.dataset.doi   || '').trim();
    const s2id  = (el.dataset.s2id  || '').trim();
    const title = (el.dataset.title || '').trim();

    // strip "doi.org/" or "https://doi.org/" prefix if present
    const cleanDoi = doi.replace(/^(https?:\/\/)?doi\.org\//i, '');

    let url;
    if (cleanDoi)                 url = `https://api.semanticscholar.org/graph/v1/paper/DOI:${cleanDoi}?fields=citationCount`;
    else if (s2id && s2id !== '') url = `https://api.semanticscholar.org/graph/v1/paper/${s2id}?fields=citationCount`;
    else continue; // title 검색은 오매핑 위험으로 제외

    try {
      const res  = await fetch(url);
      if (!res.ok) { await delay(300); continue; }
      const data = await res.json();
      const count = data.citationCount;
      if (typeof count === 'number' && count > 0) {
        el.querySelector('.cite-count').textContent = 'Cited by ' + count;
        el.style.display = 'inline';
      }
    } catch (_) {}
    await delay(300);
  }
})();
</script>
