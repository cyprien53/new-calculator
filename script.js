function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  let displayValue = document.getElementById('display').value;
  document.getElementById('display').value = displayValue.slice(0, -1);
}

function calculate() {
  let displayValue = document.getElementById('display').value;
  try {
    let result = eval(displayValue);
    document.getElementById('display').value = result;
  } catch (error) {
    alert('Erreur de calcul ! Veuillez vérifier votre entrée.');
    clearDisplay();
  }
}
