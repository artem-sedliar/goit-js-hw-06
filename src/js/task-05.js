 const nameInput = document.getElementById("name-input");
  const nameOutput = document.getElementById("name-output");

  nameInput.addEventListener("input", (event) => {
    const inputValue = event.target.value;

    if (inputValue.trim() === "") {
      nameOutput.textContent = "Anonymous";
    } else {
      nameOutput.textContent = inputValue;
    }
  });