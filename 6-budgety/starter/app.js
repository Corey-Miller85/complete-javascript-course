 var budgetController = (function() {
  // some code
 })();

 var UIController = (function() {
  
  // some code

 })();

 var controller = (function(budgetCtrl, UICtrl) {
   
  document.querySelector('.add__btn').addEventListener('click', function() {
    // 1. get the field input data

    // 2. add the item to the budget controller

    //3. add the item to the UI

    // 4. calculate the budget

    // 5. Display the budget in the UI


  });

  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
      console.log('enter was pressed.')
    }
  });
  
 })(budgetController,UIController);