// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    // create elements

    const head = document.createElement('div');
    const dateSp = document.createElement('span');
    const titleH = document.createElement('h1');
    const tempSp = document.createElement('span');
    
    // create structure

    head.appendChild(dateSp);
    head.appendChild(titleH);
    head.appendChild(tempSp);

    // create class names

    head.classList.add('header');
    dateSp.classList.add('date');
    tempSp.classList.add('temp');

    // create content

    dateSp.textContent = 'March 28, 2019';
    titleH.textContent = 'Lambda Times';
    tempSp.textContent = '98 Degrees';

    const selector = document.querySelector('.header-container');
    selector.appendChild(head);

    return head;
}

Header();