[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ihfjUrzT)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11538561&assignment_repo_type=AssignmentRepo)
## MDDN 242 2023 Assignment 2

This is a simple code-driving font using only geometric shapes. I chose this typeface because I believed (with my proficiency in coding) that this approach can result in: a nice looking font, a font that is readable with code that uses less than 20 parameters.

Each of my letters is created with 5 shapes. Two arcs, two quadrilaterals, and a single circle. Not all shapes are needed to create a single letter however, some are simple enough to require two out of the five provided. As much as I wanted to use triangles, using more than one triangle quickly increased the parameter count towards the maximum

The 17 parameters per letter :
  * `arcX` : x location of first arc
  * `arcStart` : starting point of first arc
  * `arcEnd` : end point of first arc

  * `arc2X` : x location of second arc
  * `arc2Start` : starting point of second arc
  * `arc2End` : end point of second arc

  * `rect1_x` : x location of first rectangle
  * `rect1_y` : y location of first rectangle
  * `rect1_w` : width of first rectangle
  * `rect1_h` : height of first rectangle
  
  * `rect2_x` : x location of second rectangle
  * `rect2_y` : y location of second rectangle
  * `rect2_w` : width of second rectangle
  * `rect2_h` : height of second rectangle
  
  * `circle_x` : x location of circle
  * `circle_y` : y location of circle
  * `circle_r` : radius of circle
