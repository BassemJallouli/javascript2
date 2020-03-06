alert('Hello happy world');
/** let's try javascript, again
 * multi-line comment.
 * 
 * Basic assignment:
 */
var Myvariable = '38.9587'; // Variable set as a string
console.log(Myvariable +5); // oop

Myvariable = parseFloat(Myvariable); // force to float
console.log(Myvariable); // Floating point number, decimal maintained

Myvariable = parseInt(Myvariable); // convert to integer
console.log(Myvariable); 

Myvariable =Number( Myvariable); // converted to any number type
console.log(Myvariable); // no change

Myvariable = Myvariable + 5;
console.log(Myvariable);

Myvariable = Myvariable.toString(); // convert back string
console.log(Myvariable);

var myArrayofDataTypes = [
    // booleans
    true,
    false,
    // null
    null,
    // Number (float/integer)
    34,
    168.793,
    //String
    'Hello happy world',
    // value not defined
    undefined,
    //not a number
    NaN,
    // an array in an array
    [1,2,3,4,5]
];

// Creating elements for a webpage. (Adding to the DOM)

// create datalist
var myDataList = document.createElement('DL');
// loop through an array

for (var i=0; i < myArrayofDataTypes.length; i++)
{
// create datalist title
var dataListTitle = document.createElement('DT'); 
dataListTitle.textContent = typeof myArrayofDataTypes[i]; // return the type
// create datalist data
var dataListData = document.createElement('DD'); 
dataListData.textContent = myArrayofDataTypes[i]; 
// add our new elements
myDataList.appendChild(dataListTitle);
myDataList.appendChild(dataListData);
}

var myHeadingText = 'Our-Data-Type:';
document.body.innerHTML += ` <!--Back ticks are used in js for multi-line strings -->
<h2> 
    Our data-Type TextDecoderStream:
    `+myHeadingText /*concatenating strings */+`
</h2>
`;
// add all of our datalist
document.body.appendChild(myDataList);
// get by id
var myHeading = document.getElementById('my-heading');
myHeading.title = 'This is a heading'; // tooltip attribute
// myHeading.style.color = 'darkgray'; // please avoid using inline style
myHeading.className = 'gray-text'; // use classes instead 

/**
 * Events
 **/
// We can add event-listeners to a targeted element.
 myHeading.addEventListener('mouseover', function(event)  // capture info
 {
    this.className = 'salmon-text'; // change event color

 });

 // We can add event-listeners to a targeted element.
 myHeading.addEventListener('mouseleave', function(event)  // capture info
 {
    this.className = 'indigo-text'; // change event color

 });

 // We can add event-listeners to a targeted element.
 myHeading.addEventListener( 'click', function(event)  // capture info
 {
     var bigClass = 'big-text'; 
     if (!this.className.includes (bigClass))
     {
         this.className += 'big-text';
     }
    this.className += ' big-text'; // remember must have a space between classes
 });

function addTwoNumbers ( x, y )
{
    x = Number(x);
    y = Number(y);

    return (x+y);
}

function currentDayString ()
{
    // new date object
    var date = new Date();
    // declare a string we can store 
    var dateString ='';
    dateString += date.getFullYear();
    dateString += '.';
    dateString += date.getMonth();
    dateString += '.';
    dateString += date.getDay();
    dateString += '.';
    return dateString;
}
// output to console
console.log('The current date is: \r\n' + currentDayString() ); // \r\n return new line 
 // this will  now output on two lines in your console.


