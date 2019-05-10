# NodeJS
node can run outside of a browser

### run node in terminal
node filename.js

if you do not have package JSON this is the first step
npm init -y

npm install

**NPM = Node Package Manager**

package JSON they are used a lot they are used to store commands 
it has a lot of functionality 

so much information is stores in the *node modules* we do not want to push it to github 

brand new node project steps
npm init - y
this builds my package JSON
npm install weather-js 
will add it to our 

JSON.stringify prevents [object object]
this wil take that object and turn it to a string
fs = file system
```
var fs = require("fs");
```

when you clone a new file down and you dont have all the demendencies you run npm-install too get them all downloaded

you need to use process.argv[] 



## downloading Axios
npm init-y
npm install axiois
touch app.js
code .
inside app.js
```
const axios = require("axios");
let artist = process.argv[2];
axios.get("https://nbivwoibewo/ + artist + /nfkownvvnrwuovruji")

```

