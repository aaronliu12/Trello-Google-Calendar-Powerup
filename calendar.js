//553ddbec529764b6ed91f8c2
//LaPK2PDp
//553ddc74455d9bcdf5a600fc

//     var loadedCards = function(cards) {
//     console.log(cards);
//       $.each(cards, function(index, value) {
//         $('#boards')
//           .append($("<option></option>")
//           .attr("value",value.id)
//           .text(value.name)); 
//       });
//     };
//     var loadCards = function() {
//       //Get the users boards
//       Trello.get(
//         '/members/me/boards/553ddc74455d9bcdf5a600fc/cards',
//         loadedCards,
//         function() { console.log("Failed to load boards"); }
//       );
//     };
//    
// 
//     
//    
//     
// 
//     
//     
//     Trello.authorize({
//       type: "popup",
//       name: "Trello dashboard",
//       scope: {
//         read: true,
//         write: false },
//       expiration: "never",
//       success: loadCards,
//       error: function() { console.log("Failed authentication"); }
//     });

TrelloPowerUp.initialize({
			'board-buttons': function(t, board) {
				
				return [
				{
					icon: './images/trello-icon-F6F6F6.svg',
					text: "Student's Google Calendar",
					// Pass a URL instead of a callback to make a simple link

					//url: 'https://calendar.google.com/calendar/b/render?aaronliu12@gmail.com#main_7',
					callback: function(t, board) {
						//var board = t.board('name');
						t.board('name').then(function(board) {
							localStorage.setItem("boardname", board.name);
							console.log(board.name);
						});

						t.overlay({url: "./connect.html"
						})

				}
				}
				];
			},
			'card-badges': function(t, card) {
				if(card.context.card === '563b532e4e998410d0d88e62') {
					return [{
						icon: './images/trello-icon-999.svg',
						text: '4'
					}];
				} else {
					return [];
				}
			},
			'card-detail-badges': function(t, card) {
				console.log("rendering card detail badge");
				console.log(card);
				return [{
					title: "Card Badge",
					text: 'OK'
					
					
				}];
			},
			'attachment-sections': function(t, options) {
				var attachments = options.entries;
				console.log(attachments.length + " attachments found.");
				console.log("This card has attachments ", attachments);
				var claims = [];

				for (var i = attachments.length - 1; i >= 0; i--) {
					attachment = attachments[i];
					if(attachment.url === 'https://trello.com/') {
						claims.push(attachment);
						console.log("Claiming attachment: " + attachment.id);
					}
				}

				if(claims.length === 0) {
					console.log('No attachments claimed');
					return [];
				}
				
				return {
					claimed: claims,
					icon: './images/trello-icon.png',
					title: function(){
						return 'Attachment Section Title';
					},
					content: {
						type: 'iframe',
						url: t.signUrl('./attachment-section.html', { url: claims[0].url })
					}
				};
			},	
			  'show-settings': function(t, options){
    				return t.popup({
      					title: 'Settings',
      					url: './settings.html',
      					height: 184
    					});
  				},


				/*
				Here's a sample with two sections:

				return [{
					claimed: claims,
					icon: './images/trello-icon-999.svg',
					title: "Attachment Section Title",
					content: {
						type: 'iframe',
						url: t.signUrl('./attachment-section.html')
					}
				},
				{
					claimed: claims,
					icon: './images/trello-icon-999.svg',
					title: "Attachment Section 2 Title",
					content: {
						type: 'iframe',
						url: t.signUrl('./attachment-section.html')
					}
				}];
				*/
			'attachment-thumbnail': function(t, attachment) {
				if(attachment.url == "https://developers.trello.com/") {
					return {
						url: "https://developers.trello.com/",
						openText: "Open With Sample",
						image: {
							url: './images/trello-icon.png',
							logo: './images/trello-icon.png'
						},
						initialize: {
							type: 'iframe',
							url: t.signUrl(TrelloPowerUp.util.relativeUrl('authorize-link.html'))
						}
					};
				} else {
					throw t.NotHandled("Not a handled URL");
				}
			},
			'card-buttons': function(t, card) {
				return [
				// Button with a nested popup callback
				{
					icon: './images/trello-icon-999.svg',
					text: "Student's Google Calendar",
					callback: function(t, card) {
						t.popup({
							title: 'Options',
							items: [

								{
									text: 'Calendar',
									callback: function(t) {
										t.overlay({url: "./connect.html"});
										t.closePopup();
									}
								}

							]
						});
					}
				}];
			},
			'format-url': function(t, options) {
				if(options.url.length > 20) {
					return {
						icon: './images/trello-icon.png'

					};
				} else {
					throw t.NotHandled("Not a handled URL");
				}
			},
			'card-from-url': function(t, options) {
				return {
					name: 'All New Cards have this name',
					desc: 'All New cards have this description'
				};
			},


		});
