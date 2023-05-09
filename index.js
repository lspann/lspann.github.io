//Preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

//cursor
const cursor = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    function mouseStopped(){
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

//Navigation
let toggleMenu = document.querySelector('.toggleMenu');
let navigation = document.querySelector('.navigation');
toggleMenu.onclick = function(){
    navigation.classList.toggle('active');
}

//Text animation
const resolver = {
    resolve: function resolve(options, callback) {
      // The string to resolve
      const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
      const combinedOptions = Object.assign({}, options, {resolveString: resolveString});
      
      function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      
      function randomCharacter(characters) {
        return characters[getRandomInteger(0, characters.length - 1)];
      };
      
      function doRandomiserEffect(options, callback) {
        const characters = options.characters;
        const timeout = options.timeout;
        const element = options.element;
        const partialString = options.partialString;
  
        let iterations = options.iterations;
  
        setTimeout(() => {
          if (iterations >= 0) {
            const nextOptions = Object.assign({}, options, {iterations: iterations - 1});
  
            // Ensures partialString without the random character as the final state.
            if (iterations === 0) {
              element.textContent = partialString;
            } else {
              // Replaces the last character of partialString with a random character
              element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
            }
  
            doRandomiserEffect(nextOptions, callback)
          } else if (typeof callback === "function") {
            callback(); 
          }
        }, options.timeout);
      };
      
      function doResolverEffect(options, callback) {
        const resolveString = options.resolveString;
        const characters = options.characters;
        const offset = options.offset;
        const partialString = resolveString.substring(0, offset);
        const combinedOptions = Object.assign({}, options, {partialString: partialString});
  
        doRandomiserEffect(combinedOptions, () => {
          const nextOptions = Object.assign({}, options, {offset: offset + 1});
  
          if (offset <= resolveString.length) {
            doResolverEffect(nextOptions, callback);
          } else if (typeof callback === "function") {
            callback();
          }
        });
      };
  
      doResolverEffect(combinedOptions, callback);
    } 
  }
  
  const strings = [
    'Oh hey! My name is Lizzy.',
    'I am currently an undergraduate at the University of Colorado Boulder studying Creative Technology & Design.',
    'In the future I would like to become a Game Graphics Designer/Game Designer.',
    'Here you will find just general information about me, my hobbies, and my studies.',
    'I hope you find my page very fun to interact with.',
    'Click around and see what you can find out!',
  ];
  
  let counter = 0;
  
  const options = {
    // Initial position
    offset: 0,
    // Timeout between each random character
    timeout: 5,
    // Number of random characters to show
    iterations: 10,
    // Random characters to pick from
    characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
    // String to resolve
    resolveString: strings[counter],
    // The element
    element: document.querySelector('[data-target-resolver]')
  }
  
  // Callback function when resolve completes
  function callback() {
    setTimeout(() => {
      counter ++;
      
      if (counter >= strings.length) {
        counter = 0;
      }
      
      let nextOptions = Object.assign({}, options, {resolveString: strings[counter]});
      resolver.resolve(nextOptions, callback);
    }, 1000);
  }
  
  resolver.resolve(options, callback);

// Loading Animation
var points = [],
    velocity2 = 5, // velocity squared
    canvas = 
document.getElementById('container'),
  context = canvas.getContext('2d'),
  radius = 5,
  boundaryX = 200,
  boundaryY = 200,
  numberOfPoints = 30;

init();

function init() {
  // create points
  for (var i = 0; i<numberOfPoints; i++) {
    createPoint();
  }
  // create connections
  for (var i = 0, l=points.length; i<l; i++) {
    var point = points[i];
    if(i == 0) {
      points[i].buddy = points[points.length-1];
    } else {
      points[i].buddy = points[i-1];
    }
  }
  
  // animate
  animate();
}

function createPoint() {
  var point = {}, vx2, vy2;
  point.x = Math.random()*boundaryX;
  point.y = Math.random()*boundaryY;
  // random vx 
  point.vx = (Math.floor(Math.random())*2-1)*Math.random();
  vx2 = Math.pow(point.vx, 2);
  // vy^2 = velocity^2 - vx^2
  vy2 = velocity2 - vx2;
  point.vy = Math.sqrt(vy2) * (Math.random()*2-1);
  points.push(point);
}

function resetVelocity(point, axis, dir) {
  var vx, vy;
  if(axis == 'x') {
    point.vx = dir*Math.random();  
    vx2 = Math.pow(point.vx, 2);
  // vy^2 = velocity^2 - vx^2
  vy2 = velocity2 - vx2;
  point.vy = Math.sqrt(vy2) * (Math.random()*2-1);
  } else {
    point.vy = dir*Math.random();  
    vy2 = Math.pow(point.vy, 2);
  // vy^2 = velocity^2 - vx^2
  vx2 = velocity2 - vy2;
  point.vx = Math.sqrt(vx2) * (Math.random()*2-1);
  }
}

function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = '#97badc';
  context.fill();  
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.strokeStyle = '#8ab2d8'
  context.stroke();
}  

function draw() {
  for(var i =0, l=points.length; i<l; i++) {
    // circles
    var point = points[i];
    point.x += point.vx;
    point.y += point.vy;
    drawCircle(point.x, point.y);
    // lines
    drawLine(point.x, point.y, point.buddy.x, point.buddy.y);
    // check for edge
    if(point.x < 0+radius) {
      resetVelocity(point, 'x', 1);
    } else if(point.x > boundaryX-radius) {
      resetVelocity(point, 'x', -1);
    } else if(point.y < 0+radius) {
      resetVelocity(point, 'y', 1);
    } else if(point.y > boundaryY-radius) {
      resetVelocity(point, 'y', -1);
    } 
  }
}

function animate() {
  context.clearRect ( 0 , 0 , 200 , 200 );
  draw();
  requestAnimationFrame(animate);
}

//Hamburger  Menu
$(document).ready(function(){

    //toggle menu
    $('.hamburger-container').click(function(){
      $('#menu').slideToggle();
    });
  
    //to fix issue that toggle adds style(hides) to nav
    $(window).resize(function(){
      if(window.innerWidth > 1024) {
        $('#menu').removeAttr('style');
      }
    });
  
    //icon animation
    var topBar = $('.hamburger li:nth-child(1)'),
      middleBar = $('.hamburger li:nth-child(2)'),
      bottomBar = $('.hamburger li:nth-child(3)');
  
    $('.hamburger-container').on('click', function() {
      if (middleBar.hasClass('rot-45deg')) {
        topBar.removeClass('rot45deg');
        middleBar.removeClass('rot-45deg');
        bottomBar.removeClass('hidden');
      } else {
        bottomBar.addClass('hidden');
        topBar.addClass('rot45deg');
        middleBar.addClass('rot-45deg');
      }
    });
  
  });