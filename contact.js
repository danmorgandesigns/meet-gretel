document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const subjectField = document.getElementById('subject');
  const thankYouModal = document.getElementById('thankYouModal');
  const modalOkButton = document.getElementById('modalOkButton');

  form.addEventListener('submit', async (e) => {
    // Validate form before submission
    if (!form.checkValidity()) {
      e.preventDefault();
      
      // Show validation errors
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        const errorSpan = input.parentElement.querySelector('.error-message');
        if (!input.validity.valid) {
          errorSpan.classList.remove('hidden');
          if (input.validity.valueMissing) {
            errorSpan.textContent = 'This field is required';
          } else if (input.validity.typeMismatch) {
            errorSpan.textContent = 'Please enter a valid email address';
          }
          input.classList.add('border-red-500');
        } else {
          errorSpan.classList.add('hidden');
          input.classList.remove('border-red-500');
        }
      });
      return false;
    }

    e.preventDefault(); // Intercept default submission

    // Append #gretel tag to subject
    if (subjectField.value && !subjectField.value.includes('#gretel')) {
      subjectField.value = subjectField.value.trim() + ' #gretel';
    }

    // Submit via fetch to Formspree
    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        // Show custom modal instead of Formspree's default
        thankYouModal.classList.remove('hidden');
        form.reset();
      } else {
        // Show error message div
        document.getElementById('errorMessage').classList.remove('hidden');
      }
    } catch (error) {
      document.getElementById('errorMessage').classList.remove('hidden');
    }
  });

  // Modal OK button handler
  modalOkButton.addEventListener('click', () => {
    thankYouModal.classList.add('hidden');
    window.location.href = 'index.html'; // Redirect to home
  });

  // Clear error messages on input
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => {
      const errorSpan = input.parentElement.querySelector('.error-message');
      if (input.validity.valid) {
        errorSpan.classList.add('hidden');
        input.classList.remove('border-red-500');
      }
    });
  });
});
