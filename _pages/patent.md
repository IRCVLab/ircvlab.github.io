---
title: "Patent | IRCV Lab"
layout: textlay
sitemap: false
permalink: /patent/
---

{% assign registeredPatents = site.data.patent | where: "status", "Registered" %}
{% assign filedPatents = site.data.patent | where: "status", "Filed" %}

<div class="projects-page patents-page" markdown="0">
  <section class="projects-section" aria-labelledby="registered-patents-title">
    <div class="projects-section__heading">
      <div>
        <span class="projects-section__index">01</span>
        <h2 id="registered-patents-title">Registered Patents</h2>
      </div>
    </div>

    <div class="project-grid">
      {% for patent in registeredPatents %}
      <article id="patent-{{ patent.registrations.first.number }}" class="project-card patent-card">
        <div class="project-card__topline">
          <span class="project-status patent-status"><i class="fas fa-certificate" aria-hidden="true"></i> Registered</span>
          <span class="project-number">No. {{ forloop.index | prepend: '0' | slice: -2, 2 }}</span>
        </div>
        <div class="project-card__body">
          <h3 class="project-title">{{ patent.title }}</h3>
          {% if patent.title_ko %}
          <p class="patent-title-ko">{{ patent.title_ko }}</p>
          {% endif %}
          {% if patent.inventors %}
          <p class="patent-inventors">{% include patent_inventor_list.html inventors=patent.inventors %}</p>
          {% endif %}
        </div>
        <footer class="project-card__meta patent-reg-list">
          {% for reg in patent.registrations %}
          <span class="patent-reg">
            <span class="patent-reg__country">{{ reg.country }}</span>
            <span class="patent-reg__number">{{ reg.number }}</span>
            <span class="patent-reg__date">{{ reg.date }}</span>
          </span>
          {% endfor %}
        </footer>
      </article>
      {% endfor %}
    </div>
  </section>

  <section class="projects-section" aria-labelledby="filed-patents-title">
    <div class="projects-section__heading">
      <div>
        <span class="projects-section__index">02</span>
        <h2 id="filed-patents-title">Filed Patents</h2>
      </div>
    </div>

    <div class="project-grid">
      {% for patent in filedPatents %}
      <article id="patent-{{ patent.registrations.first.number }}" class="project-card patent-card patent-card--filed">
        <div class="project-card__topline">
          <span class="project-status patent-status patent-status--filed"><i class="fas fa-file-signature" aria-hidden="true"></i> Filed</span>
          <span class="project-number">No. {{ forloop.index | prepend: '0' | slice: -2, 2 }}</span>
        </div>
        <div class="project-card__body">
          <h3 class="project-title">{{ patent.title }}</h3>
          {% if patent.title_ko %}
          <p class="patent-title-ko">{{ patent.title_ko }}</p>
          {% endif %}
          {% if patent.inventors %}
          <p class="patent-inventors">{% include patent_inventor_list.html inventors=patent.inventors %}</p>
          {% endif %}
        </div>
        <footer class="project-card__meta patent-reg-list">
          {% for reg in patent.registrations %}
          <span class="patent-reg">
            <span class="patent-reg__country">{{ reg.country }}</span>
            <span class="patent-reg__number">{{ reg.number }}</span>
            <span class="patent-reg__date">{{ reg.date }}</span>
          </span>
          {% endfor %}
        </footer>
      </article>
      {% endfor %}
    </div>
  </section>
</div>
