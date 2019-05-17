# NodeJS
## Node basics
Say you have a file hello.js, containing this code:
```
let message = "Hello world";
console.log(message);
```
You can then run node from the command line like this to execute the program:
```
$ node hello.js
Hello world
```
If you run node without giving it a file, it provides you with a prompt at which you can type JavaScript code and immediately see the result.
```
$ node
> 1 + 1
2
> [-1, -2, -3].map(Math.abs)
[1, 2, 3]
> process.exit(0)
$
```
The exit method ends the process and can be given an exit status code, which tells the program that started node (in this case, the command line shell) whether the program completed successfully (code zero) or encountered an error (any other code).

### Paths in Node.js
When require is called, Node has to resolve the given string to an actual file that it can load. Pathnames that start with /, ./, or ../ are resolved relative to the current module’s path, where . stands for the current directory, ../ for one directory up, and / for the root of the file system. So if you ask for "./graph" from the file /tmp/robot/robot.js, Node will try to load the file /tmp/robot/graph.js.

The .js extension may be omitted, and Node will add it

### Installing with NPM
NPM’s main use is downloading packages. 

By default NPM installs packages under the current directory

When you run npm install without naming a package to install, NPM will install the dependencies listed in package.json

### File System
For example, the function called readFile reads a file and then calls a callback with the file’s contents.
```
let {readFile} = require("fs");
readFile("file.txt", "utf8", (error, text) => {
  if (error) throw error;
  console.log("The file contains:", text);
});
```
create a folder
```
fs.mkdir(path.join(__dirname, '/test'), {}, functioin(err) {
    if (err) throw err;
    console.log('Folder created...')
});`
```
### Basename
`console.log(path.basename(__filename));`
### Directory name
`console.log(path.basename(__filename));`
### File Extension
`console.log(path.extname(__filename));`
### Create path object
`console.log(path.parse(__filename).base);`
### Concatenate paths
`console.log(path.join(__dirname, 'test', 'hello.html'));`



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

in array.prototype use this to call the array

functions are just values

console.table()
this makes a table in node
this is baked into javascript and you do not need an aditional package.
# Review concepts later
