

 var query = prompt ('Are you vegan?')
if (query === 'Yes'){alert('Good for you!')
}else if (query === 'yes'){alert('Good for you!')
}else if (query ==='No'){alert('You might want to be one!')
}else if (query ==='no'){alert('You might want to be one!')
}else {alert('Welcome to vegans world')}



var query = prompt('Wanna check a vegan recipe?')

if(query === 'yes' || query ==='Yes'){
  document.write('<a href="https://www.instagram.com/p/CDu7JoVHPVl/?igshid=1k7slp9cbfemj">Vegan Buritos</a>')
}else if(query === 'no' || query ==='No'){
  document.write('<h1>' + 'You must know that it is totally worth it!'+'</h1>')
}else {alert('Thank you!')}

var ingredient = prompt('What is the most used vegan ingredient?')
while (ingredient !=='Coconut milk' && ingredient !=='flour'){ingredient = prompt('Could you try one more time?')}


var recipesnumber = prompt('How many vegan recipes do you wanna see?')
var img
for (i = 0; i < recipesnumber; i++){

  if (ingredient == 'flour'){img = '<img src= "7.jpeg">'}
  else if (ingredient == 'Coconut milk'){img = '<img src="5.jpeg">'}

}
  
document.write(img)



