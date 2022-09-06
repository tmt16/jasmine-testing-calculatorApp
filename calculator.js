window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  const values  = { amount: 30000, years: 15, rate: 3.5 };
  const UIamount = document.getElementById("loan-amount");
  UIamount.value = values.amount;
  const UIyears = document.getElementById("loan-years");
  UIyears.value = values.years;
  const UIrate = document.getElementById("loan-rate");
  UIrate.value = values.rate;
  update();
}

function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

function calculateMonthlyPayment(values) {

  const principal = parseFloat(values.amount);
  const calculatedInterest = parseFloat(values.rate) / 100 / 12;
  const calculatedPayment = parseFloat(values.years) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayment);

  return (
    ((principal * x * calculatedInterest) / (x - 1)).toFixed(2)
    )
}

function updateMonthly(monthly) {

  const monthlyPaymentSection = document.getElementById("monthly-payment");

  monthlyPaymentSection.innerHTML = "$" + monthly;
}