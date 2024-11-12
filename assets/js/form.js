  // Selecciona todos los radios y el botón
  const debtLinks = document.querySelectorAll('.debt-link');
  const radios = document.querySelectorAll('input[name="listGroupRadio"]');
  const payButton = document.getElementById('payButton');
  const contentPayment = document.getElementById('payment')
  const paymentTotal = document.getElementById('payment-total')

  // Agrega un event listener a cada radio
  radios.forEach(radio => {
    radio.addEventListener('change', () => {

      const selectedValue = document.querySelector('input[name="listGroupRadio"]:checked').value;
      console.log('valorrrr',selectedValue);

      // paymentTotal.innerHTML = selectedValue;


      if (document.querySelector('input[name="listGroupRadio"]:checked')) {
        contentPayment.classList.remove('disabled');
      }
    });
  });
