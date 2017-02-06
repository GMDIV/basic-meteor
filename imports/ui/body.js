import {Template} from 'meteor/templating';

import "./body.html";

//Template is for using the Template function. body is referring to body.html. Helpers accepts an object
//A helper takes data and sets it up for reference in the specified file - Template. (body.html) .helpers
//Each of its properties can be referenced for placing their key on the page.
//When using 'helpers', you can just use {{hello}} instead of {{>hello}} 
Template.body.helpers({     
	hello: "Helllooooo!"
});


//events when you click an element with the 'test' class, this event will trigger a function - this console.log
Template.body.events({
	'click .test': function(event){
		console.log('Heyyyy. You clicked me!!!')
	}
})