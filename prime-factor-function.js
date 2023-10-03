let maxNumber = 0;
const results = document.querySelector('.js-results')
let count = 0;
let inputNumber = document.querySelector('.js-number-input');
const tree = document.querySelector(`.js-entire-tree`);
const webscreen = document.body;
 
let finalMinArray = [];
let finalMaxArray = [];
let allPrimeFactors = [];
let toggle = false;

function primeFactorize() {   
  toggle = true;
  
  for (let i = 2; i <= Math.round(maxNumber / 2); i++) {
    if (maxNumber % i === 0) {
      toggle = false; 
      break;
    } 
  }

  if (toggle === true) {
    return;
  }

  let secondArray = [];

  for (let i = 2; i <= Math.round(maxNumber / 2); i++) {
    if (maxNumber % i === 0) {
      secondArray.push(i);
    }
  };

  maxNumber = Math.max(...secondArray);
  finalMaxArray.push(maxNumber);
  finalMinArray.push(Math.min(...secondArray));
}      


document.querySelector('.js-submit-number')
  .addEventListener('click', () => {
    finalMinArray = [];
    finalMaxArray = [];
    allPrimeFactors = [];
    toggle = false;
    count = 0; 
    tree.innerHTML = '';
    document.querySelector('.js-error-handling').innerHTML = ``;


    maxNumber = inputNumber.value;
    if (inputNumber.value >= 100000001) {
      tree.innerHTML = ''; 
    } else while (toggle === false) {
      primeFactorize();
    };

    for (let i = 0; i <= finalMinArray.length - 1; i++) {
      allPrimeFactors.push(finalMinArray[i]);
    };

    let lastPrimeValue = finalMaxArray.length - 1;
    allPrimeFactors.push(finalMaxArray[lastPrimeValue]);
    localStorage.setItem('allPrimeFactors', JSON.stringify(allPrimeFactors));
    results.innerHTML = `Prime Factors: ${allPrimeFactors}`;
    tree.innerHTML = 
      `<div class="tree">
        <p class="number"><span class="prime-number">${finalMinArray[count]}</span></p>
        <div class="right-tree">
          <p class="number"><span class="number-${count}">${finalMaxArray[count]}</span></p>
          <div class="tree js-remove">
            <div class="center-diagonal">
              <img class="first-diagonal" src="images/thick_white_line.png">
            </div>
            <div class="center-diagonal">
              <img class="second-diagonal" src="images/thick_white_line.png">
            </div>
          </div>

          <div class="tree js-remove">
            <p class="number"><span class="prime-number">${finalMinArray[count + 1]}</span></p>
            <div class="right-tree tree-${count}">
              <p class="number"><span class="number-${count + 1}">${finalMaxArray[count + 1]}</span></p>
            </div>
        
          </div>
        </div>
      </div>`;
    
    if (!finalMinArray[0]) {
      tree.innerHTML = ''; 
      document.querySelector('.js-error-handling').innerHTML = 'Number cannot be factored';
    }

    if (!finalMinArray[1]) {
      let remove1 = document.querySelectorAll('.js-remove');
      remove1.forEach(() => {
        document.querySelector('.js-remove').remove();
      })
    };

    if (inputNumber.value >= 100000001) {
      document.querySelector('.js-error-handling').innerHTML = 'Number exceeds maxlength';
    };
    

    for (let i = 1; i < finalMinArray.length - 1; i++) {
      let repeat = document.querySelector(`.tree-${count}`);
      count++;
      repeat.innerHTML = `
      <p class="number"><span class="number-${count}">${finalMaxArray[count]}</span></p>
      <div class="tree">
        <div class="center-diagonal">
          <img class="first-diagonal" src="images/thick_white_line.png">
        </div>
        <div class="center-diagonal">
          <img class="second-diagonal" src="images/thick_white_line.png">
        </div>
      </div>

      <div class="tree">
        <p class="number"><span class="prime-number">${finalMinArray[count + 1]}</span></p>
        <div class="right-tree tree-${count}">
          <p class="number"><span class="number-${count + 1}">${finalMaxArray[count + 1]}</span></p>
        </div>
    
      </div>`;
    };

    if (inputNumber.value < 100000001 && finalMinArray[0]) {
      let wrapYellowRing = document.querySelector(`.number-${count + 1}`);
      
      if (wrapYellowRing === null) {
        wrapYellowRing = document.querySelector(`.number-${count}`);
      };

      while (wrapYellowRing === null) {
        if (!wrapYellowRing.matches(`number-0`))
        wrapYellowRing = document.querySelector(`number-${count - 1}`)
      };

      wrapYellowRing.classList.add('prime-number');
    };
  });

webscreen.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    finalMinArray = [];
    finalMaxArray = [];
    allPrimeFactors = [];
    toggle = false;
    count = 0; 
    tree.innerHTML = '';
    document.querySelector('.js-error-handling').innerHTML = ``;


    maxNumber = inputNumber.value;
    if (inputNumber.value >= 100000001) {
      tree.innerHTML = ''; 
    } else while (toggle === false) {
      primeFactorize();
    };

    for (let i = 0; i <= finalMinArray.length - 1; i++) {
      allPrimeFactors.push(finalMinArray[i]);
    };

    let lastPrimeValue = finalMaxArray.length - 1;
    allPrimeFactors.push(finalMaxArray[lastPrimeValue]);
    localStorage.setItem('allPrimeFactors', JSON.stringify(allPrimeFactors));
    results.innerHTML = `Prime Factors: ${allPrimeFactors}`;
    tree.innerHTML = 
      `<div class="tree">
        <p class="number"><span class="prime-number">${finalMinArray[count]}</span></p>
        <div class="right-tree">
          <p class="number"><span class="number-${count}">${finalMaxArray[count]}</span></p>
          <div class="tree js-remove">
            <div class="center-diagonal">
              <img class="first-diagonal" src="images/thick_white_line.png">
            </div>
            <div class="center-diagonal">
              <img class="second-diagonal" src="images/thick_white_line.png">
            </div>
          </div>

          <div class="tree js-remove">
            <p class="number"><span class="prime-number">${finalMinArray[count + 1]}</span></p>
            <div class="right-tree tree-${count}">
              <p class="number"><span class="number-${count + 1}">${finalMaxArray[count + 1]}</span></p>
            </div>
        
          </div>
        </div>
      </div>`;
    
    if (!finalMinArray[0]) {
      tree.innerHTML = ''; 
      document.querySelector('.js-error-handling').innerHTML = 'Number cannot be factored';
    }

    if (!finalMinArray[1]) {
      let remove1 = document.querySelectorAll('.js-remove');
      remove1.forEach(() => {
        document.querySelector('.js-remove').remove();
      })
    };

    if (inputNumber.value >= 100000001) {
      document.querySelector('.js-error-handling').innerHTML = 'Number exceeds maxlength';
    };
    

    for (let i = 1; i < finalMinArray.length - 1; i++) {
      let repeat = document.querySelector(`.tree-${count}`);
      count++;
      repeat.innerHTML = `
      <p class="number"><span class="number-${count}">${finalMaxArray[count]}</span></p>
      <div class="tree">
        <div class="center-diagonal">
          <img class="first-diagonal" src="images/thick_white_line.png">
        </div>
        <div class="center-diagonal">
          <img class="second-diagonal" src="images/thick_white_line.png">
        </div>
      </div>

      <div class="tree">
        <p class="number"><span class="prime-number">${finalMinArray[count + 1]}</span></p>
        <div class="right-tree tree-${count}">
          <p class="number"><span class="number-${count + 1}">${finalMaxArray[count + 1]}</span></p>
        </div>
    
      </div>`;
    };
    if (inputNumber.value < 100000001 && finalMinArray[0]) {
      let wrapYellowRing = document.querySelector(`.number-${count + 1}`);
      
      if (wrapYellowRing === null) {
        wrapYellowRing = document.querySelector(`.number-${count}`);
      };

      while (wrapYellowRing === null) {
        if (!wrapYellowRing.matches(`number-0`))
        wrapYellowRing = document.querySelector(`number-${count - 1}`)
      };

      wrapYellowRing.classList.add('prime-number');
    } 
  }
});

//use number-${count} on the p class
//this should get the final value of that 
//add the yellow circle class to the classlist of number-count

if (!localStorage.getItem('allPrimeFactors')) {
  results.innerHTML = ``;
} else {
  results.innerHTML = `Prime Factors: ${localStorage.getItem('allPrimeFactors')}`;
  if (results.innerHTML === `Prime Factors: [null]`) {
    results.innerHTML = `Prime Factors: `;
  }
}



