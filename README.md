# filament-andrewmrn
Filament package for react-native-template-andrewm

Based on the `filament-jordandrn` package but optimised for the `react-native-template-andrewm`.

## Usage

Add the following code to your package.json

```
"config": {
    "filament": {
      "package": "filament-andrewmrn"
    }
  }
```

If using `react-native-template-andrewm` this is automatically set for you when you run `setup.js` after the template init.

## Differences

### Components 
* Removes redux integration when creating a component. Components are created based on the noredux files in `/source/screenAndComponent`. 
* Includes **storybook** integration. Automatically adding import statements and a sample `storiesOf` code.