---
title: "Team | IRCV Lab"
layout: gridlay
excerpt: "IRCVLab: Team members"
sitemap: false
permalink: /team/
---

## Professor
{% assign selected_categories = "principal-investigator" | split:',' %}
{% include team_list.html %}

---

<!-- ## Staff
{% assign selected_categories = "support" | split:',' %}
{% include team_list.html %} -->

### Postdoc
{% assign selected_categories = "postdoc" | split:',' %}
{% include team_list.html %}

---

### Ph.D. and Ph.D. Integrated Students
{% assign selected_categories = "phd-student,integrated-student" | split:',' %}
{% include team_list.html %}

---

### M.S. Students
{% assign selected_categories = "ms-student" | split:',' %}
{% include team_list.html %}

---

### Undergraduate Interns

<!-- Both former and current interns are represented on this list.

<div id="intern_list">
{% for person in site.data.alumni_interns -%}
{%- if prev_year != person.year_begin %}
#### {{ person.year_begin }}
{% else -%}
;
{% endif -%}
{%- if person.link %}<a href="{{ site.url }}{{ site.baseurl }}/team/{{ person.link }}">{{ person.name }}</a>{% else -%}
{{ person.name }} 
{%- endif -%}
{%- if person.year_begin != person.year_end %}
(–{{ person.year_end }})
{%- endif %}
{%- assign prev_year = person.year_begin -%}
{%- endfor %}
</div> -->

{% assign selected_categories = "intern" | split:',' %}
{% include team_list.html %}

<br/>


<!-- ## Former Members

{% assign alumni_by_leaving_date = site.data.alumni_members | sort: "end_date" | reverse %}

<div id="alumni_list">
{% for person in alumni_by_leaving_date -%}
<div>
<h5>{% if person.link -%}
<a href="{{ site.url }}{{ site.baseurl }}/team/{{ person.link }}">{{ person.name }}</a>
{%- else %}{{ person.name }}{% endif %}
<span>–
{% if person.position contains ',' -%}
as
{%- else -%}
as a
{%- endif %}
{{ person.position }}

({% if person.start_date[0] == person.end_date[0] %}{{ person.start_date[0] }}{% else %}{{ person.start_date[0] }}–{{ person.end_date[0] }}{% endif %})
</span>
</h5>
<div class="current_position">
{% if person.current %}Current Position: {{ person.current }}{% endif %}
</div>
</div>
{%- endfor %}
</div> -->


<script>
$('body').on('click', '.member-list-item[data-href]', function(){
    if (window.location.hash) {
        window.location.hash = $(this).data('href');
    } else {
        window.location.href = $(this).data('href');
    }
})
</script>
