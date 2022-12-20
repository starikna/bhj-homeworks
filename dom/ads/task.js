
function changeRotator () {
    const rotatorArr = Array.from(document.querySelectorAll(".rotator__case"));

       let itemActive = document.querySelector(".rotator__case_active");
       console.log(itemActive);
       
       let i = rotatorArr.findIndex((item) => item === itemActive);
       console.log(i);

       rotatorArr[i].classList.toggle("rotator__case_active");
       let countItem = ++i;
       console.log(countItem);

       (countItem < rotatorArr.length) ?
       i = countItem :
       i = countItem - rotatorArr.length; 
       
       rotatorArr[i].classList.toggle("rotator__case_active");
       
}

setInterval(() => {
    changeRotator();
}, 1000);

// __________________________________________________________________________________
// class Banner {
//   constructor(container) {
//     this.container = container;
//     this.rotator = container.querySelector('.rotator');
//     this.cases = this.rotator.children;
//     this.currentCase = this.rotator.querySelector('.rotator__case_active');
//     this.currentCaseIndex = Array.from(this.cases).indexOf(this.currentCase);
    
//     this.rotate = this.spanRotator.bind(this);
    
//     this.interval = setInterval(this.rotate, 1000);
//   }

//   spanRotator() {
//     this.cases[this.currentCaseIndex].classList.remove('rotator__case_active');
    
//     this.currentCaseIndex++;
//     if (this.currentCaseIndex > this.cases.length - 1) {
//       this.currentCaseIndex = 0;
//     }
//     this.cases[this.currentCaseIndex].classList.add('rotator__case_active');    
    
//   }
// } 

// document.querySelectorAll('p').forEach(banner => new Banner(banner));