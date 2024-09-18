# Basic Native Things
### 1. How an native app is rendered?
*index.js*
```javascript
AppRegistry.registerComponent(appName, () => App);
```
This code will convert the native app into ios and android application
***

### 2. Native Components
``` 1. SafeAreaView:```  is a React Native component that ensures content is rendered within the safe area boundaries of a device, avoiding areas like notches, status bars, and the edges of screens on iOS and some Android devices. It helps ensure that important content is not obscured by device-specific UI elements.

```2. View:```  in React Native is a core component used as a container to hold other UI components or layout elements. It is the most basic building block for layout, similar to a ```<div>``` in web development. View supports style, layout, touch handling, and accessibility, allowing you to structure and design your app's user interface.

```3. Text:``` in React Native is a component used to display textual content. It allows for rendering, styling, and formatting text, such as headings, paragraphs, or labels. You can nest Text components inside each other, and it supports properties like font size, color, alignment, and more to control the appearance of the text within your app.

***
# Native Styling Components

```1. StyleSheet: ``` in React Native is an abstraction similar to CSS Stylesheets, used to define and manage styles for components. It helps create a centralized and reusable styling system, improving performance by optimizing the style application. Styles are written as JavaScript objects using camelCase property names.

```2. useColorScheme:``` this gives info about the current mode (dark/light) of the device.

```3. flex```: The flex in native is exactly the opposite of the web. alignItems works left to right and justifyContent works top to bottom.