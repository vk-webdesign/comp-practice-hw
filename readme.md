#### What code draws the blades of grass?
> function draw() {
>   stroke(random(60, 70), 100, 90);
>   line(x, height-10, x + random(-10, 10), height-10-random(h));
>   
>   x = x + 10;
>   
>   if (x > width) {
>     x = random(10);
>     h = h + 3;
>   }

The above code draws the blades of grass!


#### What code makes the "lawnmower" come by? How often does it come by?
>   if (random() > 0.999) {
>     noStroke();
>     fill(255);
>     rect(-1, -1, width+2, height-15);
>     h = 10;
>   }

The above code chops the blades of grass. It does so if the code randomly generates a number higher than 0.999


#### What's the point of the h variable?

*The h variable* 


#### What do the three numerical arguments of colorMode do?

The three numerical arguments adjust Hue, Saturation, and Brightness in that order.


#### What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?

The -10 draws the elements up from the bottom of the canvas.


#### If an array has 5 elements in it, what are the valid index values for the array? (Hint: what's always the first index value?)
> var myArray = [ 10, 20, 30, 40, 50 ];

> myArray = [1];
> myArray = [2];
> myArray = [3];
> myArray = [4];
> myArray = [5];


#### What is the difference between a for loop and a while loop?
A while loop, cycles through its nested code over and over again until it's parameters have been met.
The for loop, cycles through its parameters and then applies its nested code with the set parameters. The for loop also condenses lines of code and is much more common, and recommended for use.


#### Use Google or your favorite search website to figure out what the three parts of a for loop are called in JavaScript.
[Initialization] is executed (one time) before the execution of the code block. This may show up as a variable used within the loop.

[condition] defines the conditions for executing the code block. When to start, and when to stop.

[final-expression] is executed (every time) after the code block has been executed. Usually used to update a counter value.


#### How does code refer to the number of elements (aka "entries") in an array? (Hint: it shows up in the code you modified!)
Arrays in p5 show up as a variable set with a list of numbers, seperated by comma, and surrounded by brackets. 

> ex
> var x = [1, 5, 10];
To refer to a specific number in this array:
> x[1] = 1 in the array
> x[2] = 5 in the array
> x[3] = 10 in the array
