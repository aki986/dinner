document.getElementById('submit-meal').addEventListener('click', function () {
  const breakfastCalories = parseInt(document.getElementById('breakfast-calories').value) || 0;
  const lunchCalories = parseInt(document.getElementById('lunch-calories').value) || 0;
  const totalCalories = breakfastCalories + lunchCalories;

  const breakfastProtein = parseInt(document.getElementById('breakfast-protein').value) || 0;
  const lunchProtein = parseInt(document.getElementById('lunch-protein').value) || 0;
  const totalProtein = breakfastProtein + lunchProtein;

  document.getElementById('breakfast-cal-summary').textContent = breakfastCalories;
  document.getElementById('lunch-cal-summary').textContent = lunchCalories;
  document.getElementById('total-cal-summary').textContent = totalCalories;
  document.getElementById('total-protein-summary').textContent = totalProtein;

  alert('晩御飯の献立提案はこちら: バランスの取れた魚料理や野菜スープを検討してみてください！');
});
