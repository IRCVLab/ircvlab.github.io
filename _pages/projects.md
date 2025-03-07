---
title: "Projects | IRCV Lab"
layout: textlay
sitemap: false
permalink: /projects.html
---

## Projects

{% comment %}
  Separate working projects and terminated projects.
  Assumes project.status is "working" for active projects and "done" for terminated.
{% endcomment %}
{% assign workingProjects = site.data.rnd | where:"status", "working" %}
{% assign terminatedProjects = site.data.rnd | where:"status", "done" %}

### Working Projects
{% for project in workingProjects %}
<div class="research-project">
<div class="project-image">
<img src="{{ site.url }}{{ site.baseurl }}{{ project.image }}" alt="{{ project.title }}">
</div>
<div class="project-info">
<h2 class="project-title">{{ project.title }}</h2>
<p class="project-duration">{{ project.duration }}</p>
{% if project.discription %}
<p class="project-description">{{ project.discription }}</p>
{% endif %}
</div>
</div>
{% endfor %}

### Terminated Projects
{% for project in terminatedProjects %}
<div class="research-project">
<div class="project-image">
<img src="{{ site.url }}{{ site.baseurl }}{{ project.image }}" alt="{{ project.title }}">
</div>
<div class="project-info">
<h2 class="project-title">{{ project.title }}</h2>
<p class="project-duration">{{ project.duration }}</p>
{% if project.discription %}
<p class="project-description">{{ project.discription }}</p>
{% endif %}
</div>
</div>
{% endfor %}