# gulpfile-angular
Gulpfile used to minify Angular frontend

## Install packages
> npm install

## What's inside?
| Package      	        | Used                                                                |
| ----------------------|---------------------------------------------------------------------|
| [gulp-jshint][1]      | To detect errors and potential problems in all of javascript files. |
| [gulp-concat][2]      | To concatenate all the `.js` files.                                 |
| [gulp-ng-annotate][3] | To solve Angular dependency injection problems after minification.  |
| [gulp-uglify][4]      | To concatenate all the `.js` files in a single `app.js` file.       |
| [gulp-uglifycss][5]   | To concatenate all the `.css` files in a single `app.css` file.     |
| [gulp-flatten][6]     | To copy files from different folders to a single folder.            |

[1]:https://www.npmjs.com/package/gulp-jshint
[2]:https://www.npmjs.com/package/gulp-concat
[3]:https://www.npmjs.com/package/gulp-ng-annotate
[4]:https://www.npmjs.com/package/gulp-uglify
[5]:https://www.npmjs.com/package/gulp-uglifycss
[6]:https://www.npmjs.com/package/gulp-flatten
