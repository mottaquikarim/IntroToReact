<!---
{"next":"about.md","title":"Local Environment"}
-->

# Local Environment


Because React performs many code transformations, it is imperative that our local environments have NodeJS and a few other packages preinstalled (babel, webpack, etc).

Assuming these packages are pre-installed, we can create our own custom task runners that will analyze our React code, transform it and "build" it. However, it easy enough to utilize **[Create React App](https://github.com/facebook/create-react-app)** to do the grunt work of pre-installing all the task runners for us.

Using `create-react-app`, we are able to do everything codesandbox allows us to do, but in our local machines. 