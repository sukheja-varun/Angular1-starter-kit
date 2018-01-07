# Angular1-start-kit 

> This is a ready to go angular openSource repo with all the necessary configs done for you.


![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=102)
[![GitHub version](https://badge.fury.io/gh/sukheja-varun%2FAngular1-starter-kit.svg)](https://badge.fury.io/for/gh/sukheja-varun/Angular1-starter-kit)
[![HitCount](http://hits.dwyl.io/sukheja-varun/Angular1-starter-kit.svg)](http://hits.dwyl.io/sukheja-varun/Angular1-starter-kit)
[![NSP Status](https://nodesecurity.io/orgs/sukheja-varun/projects/c45455c1-e7f3-485a-baef-5aa39bf6067e/badge)](https://nodesecurity.io/orgs/sukheja-varun/projects/c45455c1-e7f3-485a-baef-5aa39bf6067e)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![MIT License](https://img.shields.io/github/license/sukheja-varun/Angular1-starter-kit.svg)](https://github.com/sukheja-varun/Angular1-starter-kit/blob/master/LICENSE)

[![bitHound Code](https://www.bithound.io/github/sukheja-varun/Angular1-starter-kit/badges/code.svg)](https://www.bithound.io/github/sukheja-varun/Angular1-starter-kit)
[![bitHound Overall Score](https://www.bithound.io/github/sukheja-varun/Angular1-starter-kit/badges/score.svg)](https://www.bithound.io/github/sukheja-varun/Angular1-starter-kit)
[![bitHound Dependencies](https://www.bithound.io/github/sukheja-varun/Angular1-starter-kit/badges/dependencies.svg)](https://www.bithound.io/github/sukheja-varun/Angular1-starter-kit/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/sukheja-varun/Angular1-starter-kit/badges/devDependencies.svg)](https://www.bithound.io/github/sukheja-varun/Angular1-starter-kit/master/dependencies/npm)




## Jump to Section

* [Features](#features)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Setup](#setup)
* [Run Application](#run-application)
* [Code](#code)
* [License](#license)

## Features
[[Back To Top]](#jump-to-section)

* Grunt for task management
* SASS enabled to css writing easy.
* ESLINT setup, auto-corrects your silly mistakes of comma, quotes, semi-colon,etc.
* Minification of css and js files.
* Readme-generator makes it easy to write nice modular readme.
* Templates setup, coverts your HTML templates to js, which helps in reducing HTML request made on server. 
  


## Prerequisites
[[Back To Top]](#jump-to-section)

Make sure you have NodeJs installed in your system.

You can download installer directly from official [NodeJs site](https://nodejs.org/en/#download). If you do not wish to use installer for downloading then [click here](https://nodejs.org/en/download/package-manager/) to view other options

Still finding it difficult to install node, check this [blog](http://blog.teamtreehouse.com/install-node-js-npm-windows), to find step wise installation.

## Installation
[[Back To Top]](#jump-to-section)

You can either download the project from [GIT releases](https://github.com/sukheja-varun/Angular1-starter-kit/releases) or just git clone it using below mentioned commands. 

### Clone with SSH
Clone this repo to use using SSH
```git
git clone git@github.com:sukheja-varun/Angular-openSource.git
```
OR
### Clone with HTTPS
Clone this repo to use using HTTPS

```git
git clone https://github.com/sukheja-varun/Angular-openSource.git
```


## Setup
[[Back To Top]](#jump-to-section)

Now when you have this project in your local machine. Now lets setup it to make it run.

### Install Dependencies
```npm
npm install
```
It installs all the mentioned **dependencies** and **dev-dependencies** mentioned in **package.json** and after completion run ```bower install``` to install dependencies and dev-dependencies mentioned in **bower.json**

##### NPM Dependencies
None

##### NPM Dev-Dependencies
  *  grunt v1.0.1 - Grunt helps you manage your project tasks. [Read more](https://gruntjs.com)
  *  grunt-angular-templates v1.1.0 - A grunt plugin to help you to cache your HTML template and much more. [Read More](https://www.npmjs.com/package/grunt-angular-templates)
  *  grunt-contrib-clean v1.1.0 - A grunt plugin to clean files and folders. [Read More](https://www.npmjs.com/package/grunt-contrib-clean)
  *  grunt-contrib-compass v1.1.1 - A grunt plugin for compiling Sass to CSS using Compass. [Read More](https://www.npmjs.com/package/grunt-contrib-compass)
  *  grunt-contrib-concat v1.0.1 - A grunt plugin to concat files. [Read More](https://www.npmjs.com/package/grunt-contrib-concat)
  *  grunt-contrib-copy v1.0.0 - A grunt plugin to copy files and folders. [Read More](https://www.npmjs.com/package/grunt-contrib-copy)
  *  grunt-contrib-cssmin v2.2.1 - A grunt plugin to minify css files. [Read More](https://www.npmjs.com/package/grunt-contrib-cssmin)
  *  grunt-contrib-uglify v3.3.0 - A grunt plugin to minify ja files. [Read More](https://www.npmjs.com/package/grunt-contrib-uglify)
  *  grunt-contrib-watch v1.0.0 - A grunt plugin to run predefined tasks whenever watched file patterns are added, changed or deleted. [Read More](https://www.npmjs.com/package/grunt-contrib-watch)
  *  grunt-readme-generator v0.3.41 - A grunt plugin to generate a dynamic readme.md from partial markdown files in readme folder. [Read More](https://www.npmjs.com/package/grunt-readme-generator)
  *  gruntify-eslint v4.0.0 - A grunt plugin to validate and auto-correct files using Eslint . [Read More](https://www.npmjs.com/package/gruntify-eslint)
  *  eslint-plugin-angular v3.1.1 - An Eslint plugin to add ESLint rules for your angular project . [Read More](https://www.npmjs.com/package/eslint-plugin-angular)

##### Bower Dependencies
Angular JS v1.6.7

##### Bower Dev-Dependencies
None


```NOTE: To change version of any node dependencies or add new dependency you need to update package.json and similarly change bower.json for bower dependencies.```



## Run Application
[[Back To Top]](#jump-to-section)

Just run grunt command to create a build for you. Once it runs you can see files genrated in the **dist** folder.
This command also copies the generated files in the **lib** folder under **demo** folder, making easy for you to run demo.

```
grunt
```

To run the demo, just go to **demo** folder and open ```index.html``` file in any browser.

You are free to setup any web server for your project.

## Code
[[Back To Top]](#jump-to-section)

### To code
To start coding just dive into **src** folder and start editing or adding files and your code.
Whenever you make any code changes you can see files getting generated into **dist** folder.
In case you do not find the desired code into js and css files under **dist* folder, you need to make necessary changes in the grunt file.

### To write readme
You can see README.md in the project root folder which is actually generated using files present in the **readme** folder.
You can edit the md files in readme folder but if you add or delete a md file from readme folder, make sure to make changes in the below section.

```
 order: {
                    // Title of the piece and the File name goes here
                    // "Filename" : "Title"
                    "features.md": "Features",
                    "prerequisites.md": "Prerequisites",
                    "installation.md": "Installation",
                    "setup.md": "Setup",
                    "run.md": "Run Application",
                    "code.md": "Code",
                    "legal.md": "License",
                }
```

You can find this code snippet in the ```readme_generator``` plugin mentioned in Gruntfile.js

## License
[[Back To Top]](#jump-to-section)

Copyright © 2017 sukheja-varun 

This software is licensed under [MIT License](https://github.com/sukheja-varun/Angular-Responsive-ImageSlider/blob/develop/LICENSE).

