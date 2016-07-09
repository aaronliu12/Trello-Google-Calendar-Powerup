  var t = TrelloPowerUp.iframe();
  $(document).ready(function(){

    //document.getElementById("#frame").src = "https://calendar.google.com/calendar/embed?src=" + emailfirst + "%40" + emailsecond + "&ctz=Asia/Taipei";
    $('#MyButton').click(function(){
       var frame = document.getElementsByTagName("iframe")[0];
       frame.remove();
       var button = document.getElementById("MyButton");
       button.remove();
       t.closeOverlay();
    });
  });
; 
  
  
  
 