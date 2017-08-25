const request = require('request');

// request('https://www.google.com', function (error, response, body){
//     console.log('error', error);
//     console.log('statusCode:', response.statusCode); // Print the response status code if a response was received 
//     console.log('body:', body); 
// });

// Request to Github to my username
/* request({
    url: 'https://api.github.com/users/jcpr765',
    headers: {
        'Accept' : 'application/vnd.github.v3+json',
        'User-Agent': 'request'
    }
}, function (error, response, body){
    console.log('error', error);
    //console.log('statusCode:', response.statusCode); // Print the response status code if a response was received 
    console.log('body:', body); 
}); */
// Request to Github to 'expressjs; repos
/*
request({
    url: 'https://api.github.com/users/expressjs/repos',
    headers: {
        'Accept' : 'application/vnd.github.mercy-preview+json',
        'User-Agent': 'request'  
    }
}, function (error, response, body){
    console.log('error: ', error);
    console.log('statusCode: ', response.statusCode);
    console.log('body: ', body);

}); 
*/

// Request to Github to create a gist
/*
let form = {
    "description": "This is a test file created using the Github API through the Express Framework.",
	"public": false,
    "files": {
		"juan_express_test_gist.txt": {
			"content": "This is a test with the Express Framework"
		}
	}
	
};

let options = {
    "url" : "https://api.github.com/gists",
    "headers": {
        "Content-Type" : "application/json",
        "User-Agent" : "request"
    },
    "form" : JSON.stringify(form)
}

request.post(options, function(error, response, body){
    console.log('error: ', error);
    console.log('statusCode: ', response.statusCode);
    console.log('body: ', body);
});
*/

//Request the README of a repository

/*
request({
    url: 'https://api.github.com/repos/jcpr765/Node-Excersises/readme',
    headers: {
        'User-Agent': 'request'
    }
}, function (error, response, body){
    console.log('error', error);
    console.log('statusCode:', response.statusCode); // Print the response status code if a response was received 
    console.log('body:', body); 
});
*/
let form = {
    
}

let options = {
    "url" : "https://api.github.com/jcpr765/repos",
    headers = {
        'User-Agent' : 'request'
    }
}