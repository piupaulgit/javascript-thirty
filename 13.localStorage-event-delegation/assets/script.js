const addItems = document.querySelector('.add-items')
const itemList = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem('items')) || []

// functions
function addItem(e){
    e.preventDefault()
    const itemName = this.querySelector('[name="item"]').value;
    let item = {
        name : itemName,
        done : false
    }
    items.push(item)
    genarateList(items, itemList)
    localStorage.setItem('items', JSON.stringify(items))
    addItems.reset()
}

function genarateList(plates = [], plateList){
    const innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.name}</label>
            </li>
        `
    }).join('')
    plateList.innerHTML = innerHTML;
}

function toggleDone(e){
    const el = e.target;
    if(!el == document.querySelector('input')) return;
    const dataIndex = el.dataset.index;
    items[dataIndex].done = !items[dataIndex].done;

    localStorage.setItem('items', JSON.stringify(items));
    genarateList(items, itemList);
    
}

genarateList(items, itemList)


// events listerens
addItems.addEventListener('submit', addItem)
itemList.addEventListener('click', toggleDone)