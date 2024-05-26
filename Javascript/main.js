
const sections = document.querySelectorAll('.section');
//const secBtns = document.querySelector('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
  //individual active-btn button class click event
  for(let i = 0; i < secBtn.length; ++i){
    secBtn[i].addEventListener('click', function() {
      let currentBtn = document.querySelector('.active-btn');
      currentBtn.classList.remove('active-btn');
      this.classList.add('active-btn');
    });
  }

  //section active class
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if(id) {
      // remove selected from other btns 
      secBtn.forEach((btn) => {
        btn.classList.remove('active')
      });
      e.target.classList.add('active');
      //hide other sections
      sections.forEach((section) => {
        section.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  })
}
pageTransitions();