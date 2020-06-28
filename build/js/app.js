// array for different reviews
const reviews = [
  {
    id: 1,
    name: "Anika Smith",
    job: "web Developer",
    img: "/build/img/photo-1493666438817-866a91353ca9.jpg",
    text: "hey\n i am Anika Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque corporis quidem quam, aliquam aliquid amet voluptate sint rem, obcaecati soluta, quisquam enim repellendus veniam quas saepe commodi! Libero, deleniti accusamus!",
  },
  {
    id: 2,
    name: "Adam John",
    job: "Back-End Devloper",
    img: "/build/img/photo-1456327102063-fb5054efe647.jpg",
    text: "hey\n i am Adam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque corporis quidem quam, aliquam aliquid amet voluptate sint rem, obcaecati soluta, quisquam enim repellendus veniam quas saepe commodi! Libero, deleniti accusamus!",
  },
  {
    id: 3,
    name: "Samntha Adam",
    job: "Graphic Designer",
    img: "/build/img/63.jpg",
    text: "hey\n i am Smantha Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque corporis quidem quam, aliquam aliquid amet voluptate sint rem, obcaecati soluta, quisquam enim repellendus veniam quas saepe commodi! Libero, deleniti accusamus!",
  },
];

// Elements call from HTML documnet
const userImage = document.getElementById('userImage'),
      userName = document.getElementById('customerName'),
      userJob = document.getElementById('jobTitle'),
      userInfo = document.getElementById('customerInfo'),

      nextBtn = document.querySelector('.next-btn'),
      prevBtn = document.querySelector('.previous-btn');
// starting item 
let currentItem = 0;

// intial item data of loaded document
window.addEventListener('DOMContentLoaded', function() {
  showCustomer(currentItem);
});

// function for setting items

function showCustomer(person) {
  const item = reviews[person];
  userImage.src = item.img;
  userName.textContent = item.name;
  userJob.textContent = item.job;
  userInfo.textContent = item.text;
};

// next button function

nextBtn.addEventListener('click', function() {
  currentItem++;
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  };
  showCustomer(currentItem);
});

//previous button function
prevBtn.addEventListener('click', function() {
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;
  };
  showCustomer(currentItem);
});


