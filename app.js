
var query = prompt ('Are you vegan?')
if (query === 'Yes'){alert('Good for you!')
}else if (query === 'yes'){alert('Good for you!')
}else if (query ==='No'){alert('You might want to be one!')
}else if (query ==='no'){alert('You might want to be one!')
}else {alert('Welcome to vegans world')}



var query = prompt('Wanna check a vegan recipe?')

if(query === 'yes'){
  document.write('<a href="https://www.instagram.com/p/CDu7JoVHPVl/?igshid=1k7slp9cbfemj">Vegan Buritos</a>')
}else if(query ==='Yes'){ document.write('<a href="https://www.instagram.com/p/CDu7JoVHPVl/?igshid=1k7slp9cbfemj">Vegan Buritos</a>')

}else if(query === 'no'){
  document.write('<h1>' + 'You must know that it is totally worth it!'+'</h1>)')
}else if (query === 'No'){
  document.write('<h1>' + 'You must know that it is totally worth it!'+'</h1>)')
}else {alert('Thank you!')}

var ingredient = prompt('What is the most used vegan ingredient?')
while (ingredient !=='Coconut milk' && ingredient !=='Rice'){ingredient = prompt('Could you try one more time?')}


var query = prompt('how many')
for (i = 0 ; i<query; i=i+1){document.write('<img src="5.jpeg">')}