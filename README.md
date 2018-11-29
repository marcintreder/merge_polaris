# UXPin Merge – Experimental Mode – Test Version of Shopify Polaris Repository

UXPin Merge is a revolutionary technology that lets users import (and keep in sync) coded React.js components from GIT repositories to UXPin editor("http://uxpin.com"). The imported components are 100% identical to components used by developers during the development process. It means that components are going to look and, function (interactions, data) identical to the real product experienced by the users. 

To make the first steps in the world of Merge easy, we've prepared this boilerplate repository with examples of components that shows the power of Merge:
* Configurable Button with multiple styling options
* Select with nested components
* Icon with access to dozens of SVG icons
* Table that automatically renders from a provided objects and adds sorting

All the components are built with React.js and styled with Emotion. Styles are using tokens stored in JSON files.

## Installation

This test version of Shopify Polaris needs node and npm installed to run. Once you're ready clone the repository and install all the dependencies (`npm install`). 

## What is Merge Experimental Mode
![alt text](https://preview.ibb.co/fsq20L/merge-exp.png)

Merge Experimental Mode let's you render your React.js components in a dev version of UXPin Design Editor directly from your local environment. You can test your components and see how they're going to behave in UXPin Design Editor!

## Rendering Components in the browser

To start your adventure with Merge go to merge.uxpin.cloud and sign-up for a trial account. Stay logged in on the trial account before moving to the next step described below.

Ready? Time to render components!

Among the dependencies of this boilerplate you'll find `uxpin-merge` this tool prepares components for integration with UXPin. It has a built in development server that you can use to see the rendered components in the browser. To start the dev server use the following command:

```bash
npm start
```

UXPin Merge CLI has a built in watcher, so whenever you're changing something in code of the component you just have to wait for compilation and refresh the browser. If you're adding new compmonents you have to kill the process and start over. To avoid `ELIFECYCLE` error use:

```bash
killall -9 node
```

## Adding new components

Adding components to Merge is no different than creating normal React.js components. Merge accepts any standard approach to React. The only limitations that you should be aware of are:
* Components have to have default exports
* Components need to exist in separate directories
* Only one component is allowed per file and directory e.g. `./src/Button/Button.js`
* You have to add the component to uxpin.config.js file
* You have to prepare presets for every component (temporary restrictions to be replaced by jsx presets)
* If you want to render component in a dev server you also have to create a markdown file with a preview of the component (temporary restriction to be replaced by jsx presets)

Don't forget to add component to `uxpin.config.js` file. 

## Creating presets (temporary requirement)

Preset (to be replaced with JSX presets before the final release) is a JSON file that describes components in a structured way.

For example:

```json
{
  "rootId": "button4038267449",
  "elements": {
    "button4038267449": {
      "name": "Button",
      "props": {
        "stretched": true,
        "type": "error",
        "icon": {
          "uxpinPresetElementId": "icon3586913996"
        },
        "mode": "filled"
      }
    },
    "icon3586913996": {
      "name": "Icon",
      "props": {
        "size": "s",
        "icon": "TickerSvg"
      }
    }
  }
}
```

As you can see at the top of the structure you need a reference to `rootId`. That can be any string, but to make things easier a good practice is to use name of the element and random integers (easier to read and assures uniqueness). Subsequently, under the `elements` key, you will list all the components that are going to be rendered in Merge. Every component has to be identified by a unique id (root component has to repeat the id inside of the elements key) and has to have a `props` key that lists all the properties (leave empty if component doesn't have any props – `props: {}`).

In case of components that accept other components via props (like the icon props in the button presented above) you have to create "uxpinPresetElementId" (just like for the root element) and use the id as a reference under `elements` id. 

If there's more than one element listed in props, the preset will look in the following way (take a look at `children` prop):

```json
{
  "rootId": "select548853352",
  "elements": {
    "select548853352": {
      "name": "Select",
      "props": {
        "width": 300,
        "children": [
          {
            "uxpinPresetElementId": "selectitem2379554241"
          },
          {
            "uxpinPresetElementId": "selectitem230242005"
          },
          {
            "uxpinPresetElementId": "selectitem1081055471"
          }
        ]
      }
    },
    "selectitem2379554241": {
      "name": "SelectItem",
      "props": {
        "children": "Option1"
      }
    },
    "selectitem230242005": {
      "name": "SelectItem",
      "props": {
        "children": "Option2"
      }
    },
    "selectitem1081055471": {
      "props": {
        "children": "Option2"
      }
    }
  }
}

```

## Known Issues

1. <AppProvider /> wrapper is causing some problems with sizing of certain elements and makes Icon and DatePicker to 'jump' on rerender. This is going to be solved before the final release.
2. There's a problem with styles in the table. First column is not aligned perfectly with the rest of the table. It may be caused by the wrapper, or style interference (both to be solved before the final release).