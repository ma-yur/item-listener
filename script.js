// query selectors

const form = document.querySelector('.form_add');
const itemList = document.querySelector('.item_list');
const deleteBtn =document.querySelector(".delete_btn")
const filter = document.querySelector(".filter_input")





// functions
function addItem(e){

    e.preventDefault();
    let input = document.querySelector(".submit_input")
    let newItem = input.value
    if(newItem !==""){
        var li = document.createElement('li');
        li.className = 'item';
        li.appendChild(document.createTextNode(newItem));
      
        var deleteBtn = document.createElement('button');
      
        deleteBtn.className = 'delete_btn';
        deleteBtn.appendChild(document.createTextNode('X'));
      
        li.appendChild(deleteBtn);
      
        itemList.appendChild(li);
        input.value = ""
    }

}

function removeItem(e){

    if(e.target.classList.contains("delete_btn")){
        console.log("btn");
        var li = e.target.parentElement;
        console.log(li);
        itemList.removeChild(li)
    }

  }


function filterItems(e){

    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });

}


form.addEventListener("submit",addItem)
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

