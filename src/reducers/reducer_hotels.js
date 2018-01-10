export default function () {
	return [
		{ name: 'The Paramount Hotel', 
		  stars: 5, 
		  description: "Paramount Hotel is located in Times Square, New York.  This hotel near Broadway features stunning accommodations, restaurants, the Diamond Horseshoe night club, as well as meetings and event space in New York City.",
		  address: "123 Happy Lane Road, NY NY 90202" },
		{ name: 'The Manhattan', stars: 3, description: ""},
		{ name: 'LaSalle Hotel', stars: 4, description: ""},
		{ name: 'Room Mate Grace', stars: 3, description: ""},
		{ name: 'Motel 6 Divine', stars: 1, description: ""},
		{ name: 'The Ritz Carlton', stars: 3, description: ""}
	]
}

// to allow it to be imported we got to export it!
// then we have to wire it up in index.js