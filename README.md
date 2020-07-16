# Dropzone config for uploading and directly displaying uploaded image.

![](https://media.giphy.com/media/RG4VtpAV5rXu15FVi8/giphy.gif)

This repo is meant for those who wan't a quick and easy dropzone configuration without spedning too much time researching the API.

- The configuration allows users to upload images and then directly dsiplay them in the html.
- The readme also discusses how to remove `404 resource not found` errors in dropzone. This is particularly usefuel when no server-side requests are made and we only want to use dropzone for it's nice UI.

## How to run

First install dropzone and its dependencies.

- node.js: `npm install dropzone`.
- Website: [dropzonejs.com](https://www.dropzonejs.com/#installation)

## Remove 404 resource not found from dropzone

Note this is a hacky fix and makes changes to the dropzone source code. This should only be used if the dropzone in question doesn't make any server-side requests i.e. We only want to use the nice UI to upload files locally.

Either you can copy the dropzone moduel included in this repo (not recommended). Or you can make the changes yourself by following the below steps.

After dropzone and its dependencies have been installed locally.

- Goto `dropzone.js` and `commnad+f` to this line `this.emit("error", file, message, xhr);` and comment it out.

- In the minimised file `dropzone.min.js`, `commnad+f` to this line `this.emit("error",s,t,n)` and delete it.

## Styling

```html
<link
  rel="stylesheet"
  href="./node_modules/dropzone/dist/min/dropzone.min.css"
/>
<link rel="stylesheet" href="./css/style.css" />
```

Gives the classic dotted blue border dropzone style.
