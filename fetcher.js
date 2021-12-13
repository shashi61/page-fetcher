const fs = require('fs')
const request = require('request');
const content = 'Some content!'
const args = process.argv.slice(2);
for(let arg of args){
    request(arg, (error, response, body) => {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
  }
fs.writeFile('./index.html', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
