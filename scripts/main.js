let sidebarItems = document.querySelectorAll('.sidebar a');
sidebarItems.forEach(item => {
    item.addEventListener('click', (event) => {
        sidebarItems.forEach(item => {
            item.classList.remove('active');
        });

        event.target.classList.add('active')
    });
});


let subnavItems = document.querySelectorAll('.sub-navbar a');
subnavItems.forEach(item => {
    item.addEventListener('click', (event) => {
        subnavItems.forEach(item => {
            item.classList.remove('active');
        });

        event.target.classList.add('active')
    });
});