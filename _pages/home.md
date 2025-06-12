---
title: "IRCV Lab"
layout: homelay
excerpt: "IRCV Lab at Hanyang University."
sitemap: false
permalink: /
---


<canvas id="confetti-canvas" style="position:fixed;left:0;top:0;width:100vw;height:100vh;pointer-events:none;z-index:9999;"></canvas>
<script>
// Confetti animation by @crashmaxoff (MIT)
// https://codepen.io/crashmaxoff/pen/abvKqXz
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let W = window.innerWidth, H = window.innerHeight;
canvas.width = W; canvas.height = H;
window.addEventListener('resize', () => {
  W = window.innerWidth; H = window.innerHeight;
  canvas.width = W; canvas.height = H;
});
const colors = ['#f44336','#e91e63','#9c27b0','#2196f3','#4caf50','#ffeb3b','#ff9800','#795548'];
function ConfettiPiece() {
  this.x = Math.random() * W;
  this.y = Math.random() * -H;
  this.w = 8 + Math.random() * 8;
  this.h = 8 + Math.random() * 8;
  this.color = colors[Math.floor(Math.random()*colors.length)];
  this.speed = 2 + Math.random() * 3;
  this.angle = Math.random() * 2 * Math.PI;
  this.spin = (Math.random()-0.5) * 0.2;
  this.tilt = Math.random() * 1.5;
}
ConfettiPiece.prototype.draw = function() {
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.rotate(this.angle);
  ctx.fillStyle = this.color;
  ctx.fillRect(-this.w/2, -this.h/2, this.w, this.h);
  ctx.restore();
};
ConfettiPiece.prototype.update = function() {
  this.y += this.speed;
  this.angle += this.spin;
  this.x += Math.sin(this.angle) * this.tilt;
  if(this.y > H + 20) {
    this.y = -10;
    this.x = Math.random() * W;
  }
};
let confetti = [];
for(let i=0; i<120; i++) confetti.push(new ConfettiPiece());
function loop() {
  ctx.clearRect(0,0,W,H);
  confetti.forEach(c=>{
    c.update();
    c.draw();
  });
  requestAnimationFrame(loop);
}
loop();
</script>


<a href="https://waymo.com/open/challenges/" target="_blank">
    <img src="images/way.png" style="max-width: 100%; height: auto; border-radius: 0" >
</a>

<span style="color: #007bff; font-weight: bold;">IRCV</span>

#### Advancing Intelligent Perception for Autonomous Systems
At the IRCV Lab, we are dedicated to pioneering research in perception, sensor fusion, and data-centric AI for autonomous driving. Our mission is to develop robust, real-world AI-driven solutions that enhance the safety and efficiency of autonomous vehicles and intelligent systems.


<div markdown="0" id="carousel" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="hover" >
    <!-- Menu -->
    <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
        <li data-target="#carousel" data-slide-to="4"></li>
        <li data-target="#carousel" data-slide-to="5"></li>
        <li data-target="#carousel" data-slide-to="6"></li>                
    </ol>

    <!-- Items -->
    <div class="carousel-inner" markdown="0">
        <div class="item active">
            <img src="{{ site.url }}{{ site.baseurl }}/images/home-slider/building.jpg" alt="Slide 0" />
            <div class="carousel-caption">
            </div>
        </div>
        <div class="item">            
            <img src="{{ site.url }}{{ site.baseurl }}/images/home-slider/2024-06-22_CVPR2024.jpg" alt="Slide 1" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/home-slider/2024-07-11_Lab_seminar.jpg" alt="Slide 2" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/home-slider/2024-07-26_MT_1.jpg" alt="Slide 3" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/home-slider/2024-07-26_MT_2.jpg" alt="Slide 4" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/home-slider/2024-08-14_KCCV2024.jpg" alt="Slide 5" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/home-slider/2024-10-23_IRC_kickoff.jpg" alt="Slide 6" />
        </div>        
    </div>
  <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<hr style="border: none; border-top: 1px solid #ccc;" />


<span style="color: #007bff; font-weight: bold;">AI and Robotics</span>

#### Innovation at the Intersection of Machine Learning and Robotics
Through cutting-edge research in object detection, semantic segmentation, and autonomous navigation, we aim to create AI-powered systems that operate seamlessly in urban landscapes, ensuring efficiency, reliability, and human-centered interactions.

<hr style="border: none; border-top: 1px solid #ccc;" />
<span style="color: #007bff; font-weight: bold;">Smart Mobility</span>

#### Bridging AI and Robotics for Safe Navigation
We specialize in 3D scene understanding, trajectory prediction, and adaptive sensor fusion to enable intelligent decision-making in complex environments. By integrating multi-modal sensor data from RGB cameras, thermal imaging, and LiDAR, we push the boundaries of next-generation autonomous mobility.

<hr style="border: none; border-top: 1px solid #ccc;" />
<span style="color: #007bff; font-weight: bold;">Data-Centric</span>

#### Data-Centric AI for Reliable Autonomous Driving
Our lab focuses on dataset distillation, parameterization, and deep learning-driven perception to enhance AI's generalization across diverse and challenging scenarios. We develop novel learning frameworks to improve autonomous vehicle perception and planning in dynamic environments.

<hr style="border: none; border-top: 1px solid #ccc;" />


We are currently seeking motivated graduate students to join our collaborative research efforts in this exciting field!

Our lab is affiliated with the [Department of Automotive Engineering](https://ae.hanyang.ac.kr) at [Hanyang University](https://www.hanyang.ac.kr).
