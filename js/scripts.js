document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((el) => {
    hljs.highlightElement(el);
  });


  $(document).on('click', function(e){
    $("span#dark-mode").click(function(){
        var element = document.body;
        element.classList.toggle("dark-mode");

        document.getElementById('dark-mode-title').style.color == 'black' ? 
        document.getElementById('dark-mode-title').style.color = 'white' :
        document.getElementById('dark-mode-title').style.color = 'black'

  });


});

  });