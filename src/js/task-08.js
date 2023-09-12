
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const elements = loginForm.elements;

    const formData = {};

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.name) {
        formData[element.name] = element.value;
      }
    }

    if (!formData.email || !formData.password) {
      alert("All fields must be filled in");
    } else {
      console.log(formData);

      loginForm.reset();
    }
  });





