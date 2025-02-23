const email = 'admin@cybprocurementservices.com';
const password = 'propacksh!p';

// Function to handle login
function redirectToPage(event) {
  event.preventDefault(); // Prevent default form submission

  const emailInput = document.querySelector('.js-email-input');
  const passwordInput = document.querySelector('.js-password-input');
  const warningBox = document.querySelector('.js-warning');

  if (emailInput.value.trim() === email && passwordInput.value.trim() === password) {
    window.location.href = '../dataTable/dataTable.html';
  } else {
    warningBox.innerHTML = `
      <div class="warning">
        <p class="warning-para">Try Again. The Username or Password is Incorrect. &#9888;</p>
        <button class="ok-btn js-ok-btn">OK</button>
      </div>`;

    // Add event listener to the OK button
    document.querySelector('.ok-btn').addEventListener('click', () => {
      warningBox.innerHTML = ''; // Clear warning when OK is clicked
    });
  }
}