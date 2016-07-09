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
  
  
  
    var boardname = localStorage.getItem("boardname");
  	var array = [];
  	array = boardname.split(" ");
    var email = array[array.length-1];
    var emailarray = []
    emailarray = email.split("@");
    var emailfirst = emailarray[0];
    var emailsecond = emailarray[1];
   	var iframe = document.createElement("iframe");
    iframe.src = "https://calendar.google.com/calendar/embed?src=" + emailfirst + "%40" + emailsecond + "&ctz=Asia/Taipei";
    iframe.width = 800;
    iframe.height = 600;
    iframe.frameborder = 0;
    iframe.scrolling = "no";
    var frame = document.getElementById("frame");
    frame.appendChild(iframe);