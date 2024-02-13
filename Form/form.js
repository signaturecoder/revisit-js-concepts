
/**
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @param {string} passwordConfirm
 */
async function submitForm(
  username,
  email,
  password,
  passwordConfirm,
) {
  try {
    const response = await fetch(
      'https://www.greatfrontend.com/api/questions/sign-up',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          password_confirm: passwordConfirm,
        }),
      },
    );

    const { message } = await response.json();
    alert(message);
  } catch (_) {
    alert('Error submitting form!');
  }
}

// Write any JavaScript here.
function validateForm(e) {
    e.preventDefault();
    const $form = document.querySelector('form');
    console.log($form);
    const formData = new FormData($form);
    console.log(formData);
  }

document.addEventListener('submit', validateForm);

