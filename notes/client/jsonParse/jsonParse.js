//PARSING THE RETRIEVED CALL JSON OBJECT 


if(Meteor.isClient)
{


    Template.showMe.helpers({

 //STEP 2       
'showParse': function(){
        var theInfo = Session.get('outputDUPCount');

        // This will search through the created data object inside the 2nd for loop we can run calculations or add to database
               $.each(theInfo, function(index){
                $.each(theInfo[index], function(key, value){
                      console.log(key + ": " + value );
                });
                 });
        }

    });


//STEP 1
//THIS MAKES A CALL TO THE API AND RETRIEVES A RESPONSE.DATA OBJECT THAT ADDS ALL ITEMS WITH THE BELOW PARAMETERS FOR PARSING IN THE SHOWPARSE HELPER ABOVE
	Template.showMe.events({

		'click [class="bomb"]': function(e){
			event.preventDefault();
			console.log('say hi');
     ///////////////////////////////////////////////////
        //showDUPCount
        HTTP.call( 'GET', 'https://opendata.miamidade.gov/resource/dj6j-qg5t.json', {
            params: {
                "case_owner": "Animal_Services",
                "created_year_month": "20159",
                "ticket_status": "DUP",

                //"$select": "count(case_owner)"
            },
        }, 


        function( error, response ) {
            if ( error ) {
                console.log( error );
            } else {
                console.log( response.data );
                Session.set('outputDUPCount', response.data);

                console.log("end");
            }
        });

     

		} //Close click bomb function







	}); // Close showMe.events

} // Close isClient