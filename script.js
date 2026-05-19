const list = document.getElementById('infi-list');

function addItems(count) {
    const currentItems = list.children.length;
    for (let i = currentItems + 1; i <= currentItems + count; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        list.appendChild(li);
    }
}

addItems(10);

function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollTop + windowHeight >= documentHeight - 10) {
        addItems(2);
    }
}

window.addEventListener('scroll', handleScroll);