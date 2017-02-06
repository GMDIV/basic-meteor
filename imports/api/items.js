import {Mongo} from 'meteor/mongo';

//in command line, initiate with "meteor mongo"
//Then to insert:
//db.items.insert({text:"Heyyyy"});

const Items = new Mongo.Collection('items');
export default Items;