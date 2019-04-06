<!---
{"next":"Intro/codesandbox.md","title":"Basic HTML"}
-->

# Basic HTML

The simplest approach is to create an `index.html` page that contains a react development build.

You can copy and paste the following into a simple HTML page:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">

      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
      );

    </script>
  </body>
</html>
```

Just copy-pasta this code into your favorite code editor, save as `index.html` and then open up the browser and point it to your file! React will run locally!

## Important Notes

* This is NOT suitable for use in production
* The react resource being imported is a large development build of React
* Babel transform is occuring in the browser, which is very slow