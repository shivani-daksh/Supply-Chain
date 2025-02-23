
const poNumbers = [
  '43-304-6107', '67-557-8464', '56-558-2843', '33-572-9423','48-268-6275', '72-867-7778', 
  '37-332-5302', '96-138-2180', '46-061-0521', '15-773-4870', '74-408-0512', '22-479-5205',
  '72-077-6993', '42-757-2990', '19-899-4205', '80-626-9772', '25-794-7802', '81-129-6177',
  '32-643-1821', '34-035-8000'
  ];
  
      function getRandomPONumbers(count) {
        const shuffled = poNumbers.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      }
  
      function populatePONumbers() {
        const poInputs = document.querySelectorAll('.po-input');
        const selectedPONumbers = getRandomPONumbers(7); // Select 7 random PO numbers
  
        poInputs.forEach((input, index) => {
          input.value = selectedPONumbers[index];
        });
      }
  
      // Populate PO numbers on page load
      window.onload = populatePONumbers;
  
      document.addEventListener("DOMContentLoaded", function () {
      // Hide popup and overlay on page load
      document.getElementById("popup").style.display = "none";
      document.getElementById("overlay").style.display = "none";
  
      function showPopup(event) {
        event.preventDefault(); // Prevent actual form submission

      //  console.log('working');

// ...
        let allFilled = true;
       const form = document.querySelector('form');
        const inputs = form.querySelectorAll("input[type='text'], select");

        // Check if any input is empty
        inputs.forEach((input) => {
            if (input.value.trim() === "" || input.value === "agent") {
                allFilled = false;
            }
        });

        if (allFilled) {

          document.querySelector('.popup-heading').textContent = 'Thank You';
          document.querySelector('.details').textContent = 'Your form has been submitted successfully.';
          document.querySelector('.fa-solid').classList.remove('fa-circle-xmark');
          document.querySelector('.fa-solid').classList.add('fa-check-circle');
        } else {
          document.querySelector('.popup-heading').textContent = 'Error';
          document.querySelector('.details').textContent = "Please fill in all fields before submitting.";
          document.querySelector('.fa-solid').classList.remove('fa-check-circle');
           document.querySelector('.fa-solid').classList.add('fa-circle-xmark');

        }

//...

        document.getElementById("popup").style.display = "flex";
        document.getElementById("overlay").style.display = "block";
      }
  
      function closePopup() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("overlay").style.display = "none";
      }
  
      document.querySelector(".submit-button").addEventListener("click", showPopup);
      document.querySelector(".ok-btn").addEventListener("click", closePopup);
    });
  