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
            
            var ass = document.createElement('a');
            ass.href = 'http://www.romae.com.br';
            ass.className = 'romae';
            ass.title = 'Romae - Web Thinking';
            ass.target = '_blank';
            ass.innerHTML = 'Romae - Agência de Marketing Digital em Fortaleza';
            
            var css = { 
                "background" : "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAAUCAYAAAGL9kEFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpERDJFQkJFMERBM0IxMUUzQTA0NkY1RjhCMTFEMkZFNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMUMzNERGRURBNzMxMUU1ODBDRUY5RTk0OUYxQ0I5NiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMUMzNERGRERBNzMxMUU1ODBDRUY5RTk0OUYxQ0I5NiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmRhMGEwMDBhLTc1NzItNGU3MS1iNzBkLTVkYzg5YTU3MDc2YyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmQ3ZmEzM2FiLTIyZGQtMTE3OS1hNzI0LWUx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) no-repeat",
                "bottom"      : "0",
                "height"      : "30px",
                "line-height" : "50px",
                "overflow"    : "hidden",                
                "position"    : "fixed",
                "right"       : "0",
                "text-indent" : "100px",
                "transition"  : "width 0.8s ease-in-out",
                "width"       : "27px",
                "z-index"     : "99999999"                
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
                ass.style.width = '85px';
            });

            ass.addEventListener('mouseout', function() {
                ass.style.width = '27px';
            });
       }
    };
}();
Ass.init();


