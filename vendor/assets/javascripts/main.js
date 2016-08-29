/*************MAIN PAGE****************/

//after entering starting city, show a map of city points within certain bound https://developers.google.com/maps/documentation/javascript/localization 
//need to think about how to correspond to the driving time slide-bar. Maybe by adjusting the size of the map (longer driving time, bigger map scales), and call search()
initDisplay(){

}

searchHotel
searchResto
searchPlace


//input: a list of places 
//output: a list of corresponding descriptions
listDetails(list places){

}
	

//re-do search when the map is dragged/button[re-search] is clicked
	//should be called in the main function, and after this function is executed, should re-do search on hotel/restaurant/places and re-display details
search(){

}


//show different colors of different places in center of the city
displayAll(){

}


//input: a json object, either hotel/restaurant/places.
//output: the details of the place from corresponding API, also the (link of) image of the place(?)
getDetail(){

}
	

//constantly update the route at the bottom of the map, for user’s reference. Everytime button[add to route] or button[delete from route] is clicked, the showcase is updated
	//input: addition/deletion of the city. Start with one single starting point.
showRoute(json city, action add/delete){

}
	
