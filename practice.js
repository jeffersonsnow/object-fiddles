//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

var me = {
name: "Jefferson Snow",
age: 31,
};  //Code here
alert(me.name);



//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  band: "Radiohead",
  food: "Burritos",
  person: "Callie",
  book: "Game of Thrones",
  movie: "Aliens",
  holiday: "Christmas"
};  //Code here


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.
favoriteThings.car = "Viper";
favoriteThings.brand = "TOR";
  //Code here


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.
favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";
  //Code here




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backPack = {};
var item = "firstPocket";
backPack[item] = "chapstick";
backPack.color = "gray";
  //Code here

//After you do the above, alert your entire backPack object.

alert(backPack);  //Code here

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backPack);  //Code here




//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var alsoMe = {
  name: "Jefferson Snow",
  age: 31,
  height: "6 feet 2 inches",
  gender: "Male",
  married: "Yes",
  eyeColor: "Hazel",
  hairColor: "Brown"
};  //Code Here

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for(var key in alsoMe){
  alert(alsoMe[key]);
}  //Code Here




//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

var album = {
  airbag: "4:52",
  sayItAintSo: "4:19",
  helicopter: "3:12",
  redRocks: "4:41",
  onlyInDreams: "8:14"
};  //Code Here

//Now, loop through your album object alerting every song title individually.

  for(var key in album){
    alert(key);
  }//Code Here




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {
  utah: 3000000,
  california: 56000000,
  texas: 35000000,
  delaware: 900000,
  wyoming: 400000,
};  //Code Here

//Now, loop through your states object and if the states population is greater than 30K, alert that state.
for(var key in states){
  if(states[key] > 30000){
    alert(key);
  }
}
  //Code Here




//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
};
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

for(var key in user1){
  if(user1[key]){
    continue;
  } else {
    delete user1[key];
  }
}//Code Here

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  user1.name = "Jefferson Snow";
  user1.username = "jeffersonsnow";
  user1.pwHash = "abc123";//Code Here




//NEXT PROBLEM




var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

user2.name = "Tyler S. McGinnis";
user2.email = "tyler.mcginnis@devmounta.in";//Code Here

//Now call the sayName method that's on the user object which will alert the users email

user2.sayName();  //Code Here




//NEXT PROBLEM




//Create an empty object called methodCollection.

var methodCollection = {};  //Code Here

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function alertHello(){
  alert("hello");
};
methodCollection.logHello = function logHello(){
  console.log("hello");
};
//Code Here

//Now call your alertHello and logHello methods.

methodCollection.alertHello();
methodCollection.logHello();//Code Here



//NEXT PROBLEM



// Create a function called makePerson which takes in name, birthday, ssn as its
// parameters and returns a new object with all of the information that you passed in.

function makePerson(name, birthday, ssn){
  var person = {};
  person.name = name;
  person.birthday = birthday;
  person.ssn = ssn;
  return person;
}  //Code Here



//NEXT PROBLEM



// Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object and returns that object so that whenever you invoke makeCard, you get a brand new credit card.

function makeCard(cardNumber, expirationDate, securityCode){
  var card = {};
  card.cardNumber = cardNumber;
  card.expirationDate = expirationDate;
  card.securityCode = securityCode;
  return card;
}  //Code Here



//NEXT PROBLEM



/* As of this point you should have a makePerson and a makeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard. While Object.assign would give you the answer, specRunner requires an answer without using it.
*/

function bindCard(person, card){
  var newObj = {};
  for (var key in person){
    newObj[key] = [key];
  }
  for (var prop in card){
    newObj[prop] = [prop];
  }
  return newObj;
}  //Code Here
