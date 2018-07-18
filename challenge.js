// # the-dom-challenge
// To begin comment out the script tag linking to `index.min.js` in the html file.
// Write your code in `challenge.js`
//
// ## Deliverables
//
// 1. As a user, i should see the timer increment every second once the page has loaded
// 2. As a user, i can manually increment and decrement the counter as i like
// 3. As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
// 4. As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
// 5. As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"



let timer = 0
let interval;
let counter = document.getElementById('counter')
document.addEventListener('DOMContentLoaded', function(e){
  interval = setInterval(increment, 1000)
  function increment(){
    counter.innerText = timer++;
  }
})

let button1 = document.getElementById('-')

button1.addEventListener('click',function(e){
  counter.innerText = parseInt(counter.innerText) -1;
  // console.log(timer,counter)
})


let button2 = document.getElementById('+')

button2.addEventListener('click',function(e){
  counter.innerText = parseInt(counter.innerText) + 1;
  // console.log(timer,counter)
})

let pauseButton = document.getElementById('pause')

let paused = false; //means timer is still going
pauseButton.addEventListener('click', function(e){
  if (paused === false){
    paused = true
    clearInterval(interval);
  }
  else {
    paused = false;
    interval = setInterval(increment, 1000)
    function increment(){
      counter.innerText = timer++;
    }
  }
})

// let likes = 0
let likeObj = {}
let likeButton = document.getElementById('<3')
likeButton.addEventListener('click', function(e){
  if (counter.innerText in likeObj === false){
    likeObj[counter.innerText] = 1;
  }
  else if (counter.innerText in likeObj){
    likeObj[counter.innerText] += 1;
  }
  console.log(likeObj)
})

let comment = document.getElementById('comment-form')
comment.addEventListener('submit', function(e){
  e.preventDefault();
  let inputValue = comment.children[0].value
  let heading = document.querySelector('h3')
  let p = document.createElement('p')
  p.innerHTML = inputValue
  heading.appendChild(p)
})
