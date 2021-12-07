
// Function and Variable declarations






let  searchValue;
let random;

function randomNumGenerator() {
 random = Math.floor(Math.random() *200);
}





const getSearchValue =(e)=>{
    searchValue = e.target.value;
    console.log(searchValue);
}

const addItem =()=> {
     
    let item = document.createElement('div');
  
    item.className = 'car1'

    item.innerHTML = '<h2>'+searchValue.toLowerCase()+'<h2>';
    // var container = document.querySelector('.section-bottom .list-holder');
    // let h1 = document.querySelector(".list-holder h1");
    // container.insertBefore(car1,h1);
    
}





let addValue = document.querySelector(".btn2").addEventListener('click', addItem);;

let searchBar = document.querySelector("#input1").addEventListener('keydown', getSearchValue);