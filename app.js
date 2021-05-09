var query = prompt ('Are you vegan?')

function queryAboutyou (){

if (query === 'Yes'){alert('Good for you!')
}else if (query === 'yes'){alert('Good for you!')
}else if (query ==='Nclearo'){alert('You might want to be one!')
}else if (query ==='no'){alert('You might want to be one!')
}else {alert('Welcome to vegans world')}

}
queryAboutyou()

var interest = prompt('Wanna check a vegan recipe?')
function request (){

if(interest === 'yes' || interest ==='Yes'){
  document.write('<a href="https://www.instagram.com/p/CDu7JoVHPVl/?igshid=1k7slp9cbfemj">Vegan Buritos</a>')

}else if(interest === 'no' || interest ==='No'){
  document.write('<h1>' + 'You must know that it is totally worth it!'+'</h1>)')




}else if(query === 'no' || query ==='No'){
  document.write('<h1>' + 'You must know that it is totally worth it!'+'</h1>)')
}else {alert('Thank you!')}

}
request()


var ingredient = prompt('What is the most used vegan ingredient?')
function type(){
while (ingredient !=='Coconut milk' && ingredient !=='flour'){ingredient = prompt('Could you try one more time?')}
}
type()

var recipesnumber = prompt('How many recipes do you wanna see?')

console.log(recipesnumber)
var img
function number(){
for (var i = 0; i < recipesnumber; i++){if(ingredient == 'Coconut milk'){img = '<img src = "5.jpeg">'
document.write(img)}
else if (ingredient == 'flour'){img = '<img src = "7.jpeg">'
document.write(img)}
}


}
number()


var img
for (var i = 0; i < recipesnumber; i++){if(ingredient == 'Coconut milk'){img = '<"4.jpeg">'}
else if (ingredient == 'flour'){img = '<"7.jpeg">'}
}

document. write(img)


