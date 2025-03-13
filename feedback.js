const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
  stars.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});

const form = document.getElementById('form');
const comment = document.getElementById('comment');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



const validateInputs = () => {
    const commentValue = comment.value.trim();

    if(commentValue === '') {
        setError(comment, 'Your comment is required');
    } else {
        setSuccess(comment);
        alert("Submitted. Thank you for your valued feedback!");
    }


};