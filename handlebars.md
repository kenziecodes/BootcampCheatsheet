#handlebars

views directory is very important. it needs the viiews  and the layouts directory

you have to pass an object into handlebars

this code is required every time you use handlebars
```
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
```

