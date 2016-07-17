
    var loadedBoards = function(boards) {
      $.each(boards, function(index, value) {
        $('#boards')
          .append($("<option></option>")
          .attr("value",value.id)
          .text(value.name)); 
      });
    };
    var loadBoards = function() {
      //Get the users boards
      Trello.get(
        '/members/me/boards/',
        loadedBoards,
        function() { console.log("Failed to load boards"); }
      );
    };
   

    
    var loadedCards = function(cards) {


      
      Trello.get(
        '/boards/' + boardId + '/cards',
        loadedCards,
        function() { console.log("Failed to load labels"); }
      );
    };
    
    console.log(loadedCards);

    
    
    Trello.authorize({
      type: "popup",
      name: "Trello dashboard",
      scope: {
        read: true,
        write: false },
      expiration: "never",
      success: loadBoards,
      error: function() { console.log("Failed authentication"); }
    });
