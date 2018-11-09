#### How many lines are drawn each frame? In other words, how often does the for loop run?
A line is drawn every 10 pixels from 10 pixels in from the left side of the canvas and 10 pixels in from the right side of the canvas. 400 / 10 = 40, 40 - 1 = 39. There should be 39 lines for this code.

#### What do the first, second, and third appearances of the number 10 do in the code?
The first 10 defined the variable x, and in this case x is used to have the first line start from 10 pixels in from the left edge of the canvas. The second 10 makes the loop end at 10 pixels in from the left edge of the canvas. The third 10 is the incrament to which the starting point of the lines repeat themselves; this loop will generate an element every 10 pixels.

#### How many times does the loop body run each frame, once the x and y arrays are full?
The loop runs as many time as X and Y have changed.

#### What are two ways of increasing the spacing between rings?
You can increase the size of increment, or … ahh I'm not sure, I can't seem to get this one :(.

#### How can you make the ellipse trail longer?
You can make the trail longer by decreasing the increment in the for loop.
