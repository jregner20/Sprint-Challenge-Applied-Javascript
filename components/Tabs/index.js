// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// axios.get("https://lambda-times-backend.herokuapp.com/topics")
// .then(response => {
//     console.log(response);
//     Tab(response.data);
// })

const tabSelector = document.querySelector(".topics");

function Tab(obj){

    const tab = document.createElement('div');

    tab.classList.add('tab');

    tab.textContent = obj;
    console.log(obj);

    // const tabSelector = document.querySelector(".topics");
    // tabSelector.appendChild(tab);

    return tab;
}
// console.log(data.topics);
    axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        response.data.topics.forEach(element => {
        tabSelector.appendChild(Tab(element));
        })
        // console.log(response);
        // Tab(response.data);
    });