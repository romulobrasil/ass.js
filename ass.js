/* 
 * =================================
 * Ass.JS
 * http://romulobrasil.com
 * Copyright (c) 2016 Rômulo Brasil
 * =================================
 */

"use strict";
var Ass = function() {
    return {
        init : function() {          
            
            var ass = document.getElementById('romae');            
            var css = { 
                "background" : "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAASCAYAAAG7hmlcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REI3Nzg1NzlGOTNFMTFFNTg5RDU5NDhEMTNCMzlEMUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REI3Nzg1N0FGOTNFMTFFNTg5RDU5NDhEMTNCMzlEMUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQjc3ODU3N0Y5M0UxMUU1ODlENTk0OEQxM0IzOUQxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQjc3ODU3OEY5M0UxMUU1ODlENTk0OEQxM0IzOUQxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plmsm8gAAAWBSURBVHjaYvj//z8DCDPM+/8TxsaGWRgQoBREMM5n6IDyy4H4LBCvBvOgpi3CZxoIAwQQTKEtECsTY/Wh/4kMjEBr/4NsB+LdQOwCYgPFQc5RApm2G4iZCVkNEECMYGI+w1ugbiEgTgKaMB/IPwqkraE2dAJxBQMOALIRGTBBBYVBTgQyZwANARl8A5d+aKj9RwpBFAAQQGAXwjnzGd5B/SnIQCZgARrCDKR/AvF7oEFCKLbNB7ugAxqwRHkZFCuiQEGQwSVAvBjIrwbyH2Hx6j0gngXlg2IM5AsloB5BJMMZQWH4BMoH0XVAXIakABQh76HcMCgNEnMFYmMkC0BAGewrYFJ4BqR7gbgbaAATA4UAIIBQIgUp7DiA1G2gBbJIYp+BfF4kvguSlj3kOgA9DtABE9Sy/9DIhoFGIK6ByrEDcS+WiN4NNHwP1HHIvgQ5XAlNLcwzgkhsbB7F5EMzngQ0b4BS4ycgfg3Ek4AOWIGk8RSQb4bE/w+N91VIjv+Pxq5AShf/saj7j5zgoGbCQAUojcHKmr1AjgCS5aFAShxIzwPSIPEZyI5DMnQ1UA3IonfQksUVKQeAxEORlL9HYp+F0veQQpYBycNnoRmAASAAc1XMklAUhX1KtClBS4uBDrkELlFbg29rDB1tkqApCHpvERwi8Ce4BdVi0db0HB11jZaEaHJIcSsI7Dv1XTkcniAU1IXDefe+d8/93j3fOV8sBwnyFm6f00tsqCb+YMwrkgncNkA9cr4HV8d8J4YrnZ8AWLRIjlkoH+RB0oFjkHu4LdMhA/aakSX+b44kDsvCV4Wk0mEpKikCEeJuwt4w3TV7O+RJRYmKrVLfrNkf8b+1dPbjK7aK5QZFOnXqBOAS/Av8GWwVlgaYbkzwgKRu8vAn3qrjTUQtanNNv5tyTyRxGKvHuFPbZs7xfAIbMmXrWkHxvgS3hrUrleIcqzSkpESsYgesSe8RSKCq3CPosuKxb7jpuRRfwD9jYRmWhRXlxiimGdgGA9yYGxxQvVsE21ep9lUrmTfKBOp6pcSvEFioU3yAxZbZ/Mp0XcOOhJP45l2DUz0sT5AhD3UNemy+75seeKjSLX3vi8tM72CWPYh7Af4B1qCS1GB32HCa+AfjU4B2rOcVoiiMzkSzkBozSjaUYcOKZqkm1Cj5B5SdhdnasbFTjFKkZKYsWJIFCwu9kmwsRn4slGQs7TwLbMav89W5fK73ZiZJydw63de7975373nf/c65zzdR+yTvYVSrgOTJC0A20hN9VjNT0Q0wiAWeBf5BqfYgqQXVANAOhIA7YJfxvABMg5zJIiQfojoxGuDjgO3iqmTwq6WUkJXUEbW4Ee6fLeAaWGQmE8PVDYjY1ZNQP/Li3NOXJd47Qd0K8sOkmQcyfzICsXDRuWXalSmPfsfos4d6E0jgOkGiqogoyd0XqcAzTn5gbl7R6lD4XdWeZfKNqISbZltERXhSJeBR0461BJRKpDB3V539x+1dgvbsFwJxU7ZdCINE9hpISJjy1Qb0AT0cIye2MaCAcS8eUVgH1KLtvgg5M+rnxHtUcuEBRuIoF+0ol3RFn9BqjY0q6VznwqNq3C1NSFApWVIRHFeEJzG3K649pRRN5pMRt2WcvvaqTcApLp+BJaADEAIOgFkM6EXdDzwK0SLJPuTt8Et1lrOF1TnbNuUxj3uuiqCYJfH2kSfvcwwyRORosuKEfQCNKfJNnyOvPG1ERP5KnBv35VNCVNwhyZe0FKLCNUAjP8YaINH3UGYCN+fBHOEwMlKMtldO3FVOMc1+8W+mhrzl+yMez0oqm22/39Em0ljpbXYQU7jh8w9EBnZJdKHPZaBSPvtAWvo5blU5vRWYM8JU1XlgBeQVKrR9lDeju0K+vYjDggAAAABJRU5ErkJggg==) no-repeat",
                "bottom"      : "0",
                "height"      : "30px",
                "line-height" : "50px",
                "overflow"    : "hidden",                
                "position"    : "fixed",
                "right"       : "0",
                "text-indent" : "100px",
                "transition"  : "width 0.8s ease-in-out",
                "width"       : "27px",
                "z-index"     : "99999999",
                "text-indent" : "-9999px"
            }

            var attr = "";
            for (var i in css) {
                if (css.hasOwnProperty(i)) {
                    attr += i + ": " + css[i] + "; ";
                }
            }
            
            ass.setAttribute('style', "" + attr + "");            
            document.body.appendChild(ass); 
           
            ass.addEventListener('mouseover', function() {
                ass.style.width = '80px';
            });

            ass.addEventListener('mouseout', function() {
                ass.style.width = '27px';
            });
       }
    };
}();
Ass.init();