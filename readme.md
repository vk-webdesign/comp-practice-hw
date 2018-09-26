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
