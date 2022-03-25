function myFunction(val) {
    let str = 'b'+val
    var x = document.getElementById(str);
      if (x.style.display === 'none' || x.style.display == '') {
          x.style.display = 'block';
      } else {
          x.style.display = 'none';
  
      }
//The keys are made by designing functions so that when there is no text, the text appears when pressed once, and when there is text, the text is hidden when pressed once.//
    }
