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
}