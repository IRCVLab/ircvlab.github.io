---
title: "IRCVLab - R&D"
layout: textlay
sitemap: false
permalink: /rnd.html
---

<h1>R&D Projects</h1>

{% comment %}
  Separate working projects and terminated projects.
  Assumes project.status is "working" for active projects and "done" for terminated.
{% endcomment %}
{% assign workingProjects = site.data.rnd | where:"status", "working" %}
{% assign terminatedProjects = site.data.rnd | where:"status", "done" %}

<h2>Working Projects</h2>
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

<h2>Terminated Projects</h2>
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


<style>
  /* 전체 제목 간격 조정 */
  h1 {
    margin-bottom: 40px;
  }
  h2 {
    margin-top: 40px;
    margin-bottom: 20px;
  }

  /* 연구 프로젝트 컨테이너: 이미지와 텍스트를 한 줄에 배치하고 수직 가운데 정렬 */
  .research-project {
    display: flex;
    align-items: center; /* 수직 가운데 정렬 */
    margin-bottom: 20px;
    padding: 10px;
    /* background: #f9f9f9; 밝은 배경색 */
    /* border-radius: 8px; */
    /* box-shadow: 0 2px 4px rgba(0,0,0,0.1); */
  }

  /* 이미지 크기 고정 및 오른쪽 여백 추가 */
  .research-project .project-image img {
    height: 150px;
    width: 350px;
    object-fit: contain;
    margin-right: 20px;
  }

  /* 텍스트 부분을 수직 가운데 정렬 및 보기 좋게 스타일링 */
  .research-project .project-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* 프로젝트 제목 스타일 */
  .project-title {
    font-size: 1.5em;
    margin: 0;
    color: #333;
  }

  /* 프로젝트 기간 및 설명 스타일 */
  .project-duration,
  .project-description {
    font-size: 1em;
    color: #666;
    margin: 5px 0;
  }
</style>