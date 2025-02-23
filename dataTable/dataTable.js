

let currentPage = 0;

function updateActiveButtonStates() {
  const pageButtons = document.querySelectorAll('.pagination button');
  pageButtons.forEach((button, index) => {
    if (index === currentPage) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const content = document.querySelector('.content');
  const itemsPerPage = 10;
  const items = Array.from(content.getElementsByTagName('tr')).slice(1);

  function showPage(page) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    items.forEach((item, index) => {
      item.classList.toggle('hidden', index < startIndex || index >= endIndex);
    });
  }

  function createPageButtons() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';

    for (let i = 0; i < totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i + 1;
      pageButton.addEventListener('click', () => {
        currentPage = i;
        showPage(currentPage);
        updateActiveButtonStates();
      });
      paginationContainer.appendChild(pageButton);
    }
  }

  createPageButtons();
  showPage(currentPage);
  updateActiveButtonStates();
});

function searchTable() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let table = document.querySelector('table');
  let rows = table.getElementsByTagName('tr');

  for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName('td');
    let match = false;

    for (let j = 0; j < cells.length; j++) {
      if (cells[j].textContent.toLowerCase().includes(input)) {
        match = true;
        break;
      }
    }

    rows[i].classList.toggle('hidden', !match);
  }

  const content = document.querySelector('.content');
  const itemsPerPage = 10;
  const items = Array.from(content.getElementsByTagName('tr'))
    .slice(1)
    .filter((item) => !item.classList.contains('hidden'));

  function showPage(page) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    items.forEach((item, index) => {
      item.classList.toggle('hidden', index < startIndex || index >= endIndex);
    });
  }

  currentPage = 0;
  showPage(currentPage);

  const paginationContainer = document.querySelector('.pagination');
  const pageButtons = paginationContainer.querySelectorAll('button');
  const totalPages = Math.ceil(items.length / itemsPerPage);

  pageButtons.forEach((button, index) => {
    if (index >= totalPages) {
      button.remove();
    } else {
      button.textContent = index + 1;
      button.addEventListener('click', () => {
        currentPage = index;
        showPage(currentPage);
        updateActiveButtonStates();
      });
    }
  });

  for (let i = pageButtons.length; i < totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i + 1;
    pageButton.addEventListener('click', () => {
      currentPage = i;
      showPage(currentPage);
      updateActiveButtonStates();
    });
    paginationContainer.appendChild(pageButton);
  }

  updateActiveButtonStates();
}
  



