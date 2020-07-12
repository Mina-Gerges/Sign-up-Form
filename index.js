window.onload = WinLoad;

function WinLoad() {    

    // Create a container for validation rule names.
    var ruleNames = [];
    var forEach = Array.prototype.forEach;
    
    var ruleElements = document.querySelectorAll('[data-rule]');
    
    forEach.call(ruleElements, function(element){ 
      var ruleName = element.getAttribute('data-rule');
      if (ruleNames.indexOf(ruleName) === -1) {
          ruleNames.push(ruleName);
      }
    });

    // Validate all labels 
    var validate = function() {
      var messageElements = document.querySelectorAll("label span");
      
      forEach.call(messageElements, function(element){
        element.style.display = "none";
      });

      document.getElementById('signUpForm').checkValidity();
  };

  // Validation Fail
  var validationFail = function(e) {
    var element, validity;
    
    element = e.currentTarget;
    validity = element.validity;

    if (!validity.valid) {
      console.log(element, "invalid", validity);
      ruleNames.forEach(function(ruleName) {
        checkRule(validity, ruleName, element);
      });

      e.preventDefault();
    }
  };

  var checkRule = function(state, ruleName, element) {  
    console.log(ruleName, state[ruleName])   ; 
  if (state[ruleName]) {
    
    var rules = element
                      .nextElementSibling
                      .querySelectorAll('[data-rule="' + ruleName + '"]');
    
    forEach.call(rules, function(rule){
      rule.style.display = "block";
    });
   }
  };
  
  var inputElements = document.querySelectorAll('input:not(button)');
  forEach.call(inputElements, function(input) {
      input.oninvalid = validationFail;
      input.oninput = validate;
  });
  
  document.getElementById('claim').addEventListener('click', validate, false);
}