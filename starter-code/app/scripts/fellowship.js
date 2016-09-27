console.log('Linked.');


// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  var middleEarth = document.createElement('Section')
  middleEarth.id = 'middle-earth'

  for (var i = 0; i < lands.length; i++){
    var land = document.createElement('article')
    var landHeader1 = document.createElement('h1')
    landHeader1.textContent = lands[i]
    land.appendChild(landHeader1)
    middleEarth.appendChild(land)
  }

  document.body.appendChild(middleEarth)
  console.log(body)
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  var hobbitsList = document.createElement('ul')

  for (var i = 0; i < hobbits.length; i++) {
    var hobbitItem = document.createElement('li')
    hobbitItem.textContent = hobbits[i]
    hobbitItem.className = 'hobbit'
    hobbitsList.appendChild(hobbitItem)
    }

  var shire = document.querySelector('article')
  shire.appendChild(hobbitsList)
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
}

makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {

  var theRing = document.createElement('div')
  theRing.id = 'the-ring'
  theRing.className = 'magic-imbued-jewelry'

  theRing.addEventListener('click', nazgulScreech)

  var frodo = document.querySelector('li')
  frodo.appendChild(theRing)
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}

keepItSecretKeepItSafe()


// Part 4


function makeBuddies() {
  var buddiesTag = document.createElement('aside')
  var buddiesList = document.createElement('ul')
  buddiesList.id = 'buddies-list'

  for (var i = 0; i < buddies.length; i++){
    var buddiesItem = document.createElement('li')
    buddiesItem.textContent = buddies[i]
    buddiesList.appendChild(buddiesItem)
  }
  buddiesTag.appendChild(buddiesList)

  var rivendell = document.querySelector('article:nth-Child(2)')
  rivendell.appendChild(buddiesTag)
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}

makeBuddies()

// Part 5


function beautifulStranger() {
  var buddiesL = document.querySelector('#buddies-list')
  var strider = buddiesL.querySelector('li:nth-Child(4)')
  strider.textContent = 'Aragorn'
  // change the 'Strider' textnode to 'Aragorn'
}

beautifulStranger()

// Part 6

function leaveTheShire() {
  var hobbitsAll = document.querySelectorAll('.hobbit')
  var rivendell = document.querySelector('article:nth-Child(2)')
  for (var i = 0; i < hobbitsAll.length; i++) {
    rivendell.appendChild(hobbitsAll[i])
  }
  // assemble the hobbits and move them to Rivendell
}

leaveTheShire()
// Part 7


function forgeTheFellowShip() {
  var theFellowship = document.createElement('div')
  theFellowship.id = 'the-fellowship'
  var rivendell = document.querySelector('article:nth-Child(2)')
  rivendell.appendChild(theFellowship)

  var hobbitsAll = document.querySelectorAll('.hobbit')
  for (var i = 0; i < hobbitsAll.length; i++) {
  theFellowship.appendChild(hobbitsAll[i])
  alert(hobbitsAll[i].textContent + ' has joined the Fellowship!')

  // if (i === hobbitsAll.length - 1) { break }
  }

  var buddiesL = document.querySelector('#buddies-list')
  var buddyItem = buddiesL.querySelectorAll('li')
  for (var x = 0; x < buddyItem.length; x++) {
  theFellowship.appendChild(buddyItem[x])
  alert(buddyItem[x].textContent + ' has joined the Fellowship!')

  // if (x === buddyItem.length - 1) { break }
  }
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip()


// Part 8


function theBalrog () {
  var theFellowship = document.querySelector('#the-fellowship')
  // var buddiesL = document.querySelector('#buddies-list')
  var gandalf = theFellowship.querySelector('li:nth-child(5)')
  gandalf.textContent = 'Gandalf the White'
  gandalf.style.backgroundColor = 'white'
  gandalf.style.border = '1px solid grey'
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}

theBalrog()

// Part 9

function hornOfGondor() {
alert('The Horn of Gondor has been blown!')
alert("Boromir's been killed by the Uruk-hai!")

var theFellowship = document.querySelector('#the-fellowship')
var boromir = theFellowship.querySelector('li:nth-child(9)')
boromir.style.textDecoration = 'line-through'
boromir.remove()
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}

hornOfGondor()


// Part 10

function itsDangerousToGoAlone(){

  var mordor = document.querySelector('article:nth-Child(3)')
  var theFellowship = document.querySelector('#the-fellowship')
  var frodo = theFellowship.querySelector('li:nth-child(1)')
  var sam = theFellowship.querySelector('li:nth-child(2)')
  mordor.appendChild(frodo)
  mordor.appendChild(sam)

  var mountDoom = document.createElement('div')
  mountDoom.id = 'mount-doom'
  mordor.appendChild(mountDoom)
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

itsDangerousToGoAlone()
// Part 11

function weWantsIt() {
  var mordor = document.querySelector('article:nth-Child(3)')
  var gollum = document.createElement('div')
  gollum.id = 'gollum'
  mordor.appendChild(gollum)

  var theRing = document.querySelector('#the-ring')
  gollum.appendChild(theRing)

  var mountDoom = document.querySelector('#mount-doom')
  mountDoom.appendChild(gollum)
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}

weWantsIt()
// Part 12

function thereAndBackAgain() {
  var gollum = document.querySelector('#gollum')
  var theRing = document.querySelector('#the-ring')
  gollum.remove()
  theRing.remove()

  var mordor = document.querySelector('article:nth-Child(3)')

  mordor.style.setProperty('background','url("")')

  var hobbitsAll = document.querySelectorAll('.hobbit')
  var shire = document.querySelector('article:first-child')
  for (var i = 0; i < hobbitsAll.length; i++) {
  shire.appendChild(hobbitsAll[i])
  }
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}

thereAndBackAgain()
