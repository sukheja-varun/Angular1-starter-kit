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