---
title: "Projects | IRCV Lab"
layout: textlay
sitemap: false
permalink: /projects.html
---

{% assign workingProjects = site.data.project | where: "status", "working" %}
{% assign terminatedProjects = site.data.project | where: "status", "done" %}

<div class="projects-page" markdown="0">
  <section class="projects-section" aria-labelledby="ongoing-projects-title">
    <div class="projects-section__heading">
      <div>
        <span class="projects-section__index">01</span>
        <h2 id="ongoing-projects-title">Ongoing Projects</h2>
      </div>
    </div>

    <div class="project-grid project-grid--ongoing">
      {% for project in workingProjects %}
      <article class="project-card project-card--ongoing">
        <div class="project-card__topline">
          <span class="project-status"><i aria-hidden="true"></i> In progress</span>
          <span class="project-number">P{{ forloop.index | prepend: '0' | slice: -2, 2 }}</span>
        </div>
        <div class="project-card__body">
          <p class="project-company">{{ project.company }}</p>
          <h3 class="project-title">{{ project.title }}</h3>
          {% if project.description or project.discription %}
          <p class="project-description">{{ project.description | default: project.discription }}</p>
          {% endif %}
        </div>
        <footer class="project-card__meta">
          <span class="project-duration"><i class="fas fa-calendar-alt" aria-hidden="true"></i>{{ project.duration }}</span>
          {% if project.ack %}
          <span class="project-ack"><span>ACK</span>{{ project.ack }}</span>
          {% endif %}
        </footer>
      </article>
      {% endfor %}
    </div>
  </section>

  <section class="projects-section projects-section--completed" aria-labelledby="completed-projects-title">
    <div class="projects-section__heading">
      <div>
        <span class="projects-section__index">02</span>
        <h2 id="completed-projects-title">Completed Projects</h2>
      </div>
    </div>

    <div class="project-grid">
      {% for project in terminatedProjects %}
      <article class="project-card project-card--done">
        <div class="project-card__topline">
          <span class="project-status"><i class="fas fa-check" aria-hidden="true"></i> Completed</span>
          <span class="project-number">P{{ forloop.index | prepend: '0' | slice: -2, 2 }}</span>
        </div>
        <div class="project-card__body">
          <p class="project-company">{{ project.company }}</p>
          <h3 class="project-title">{{ project.title }}</h3>
          {% if project.description or project.discription %}
          <p class="project-description">{{ project.description | default: project.discription }}</p>
          {% endif %}
        </div>
        <footer class="project-card__meta">
          <span class="project-duration"><i class="fas fa-calendar-check" aria-hidden="true"></i>{{ project.duration }}</span>
          {% if project.ack %}
          <span class="project-ack"><span>ACK</span>{{ project.ack }}</span>
          {% endif %}
        </footer>
      </article>
      {% endfor %}
    </div>
  </section>
</div>
