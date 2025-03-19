#  Lab 4: (3:00 - 4:00) - Flexbox Basics

## Objective:
Use Flexbox to create a simple layout.


# Task (10 minutes):

1. **In your `index.html`, create a container `<div>`** with multiple child `<div>` elements (e.g., 3 boxes).  
   Inside your `index.html`, add the following code:

   ```html
   <div class="flex-container">
     <div class="box">Box 1</div>
     <div class="box">Box 2</div>
     <div class="box">Box 3</div>
   </div>


2. In the `styles.css` file, add the following styles to the container and its children:

    ```css
    /* Apply flexbox layout to the container */
    .flex-container {
   
    height: 100vh; /* Optional: Make the container fill the viewport height */
    }

    /* Style the individual boxes */
    .box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    border: 2px solid darkblue;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    }
    ```
3. Apply `display: flex;` to the `.flex-container` to enable Flexbox layout.
4. Use `justify-content: space-between;` to evenly space out the child elements horizontally.
5. Use `align-items: center;` to vertically align the child elements in the center.


## Test the Layout:

Save the styles.css file.
Refresh the browser with your index.html file and observe how the boxes are aligned. The child elements should be spaced out horizontally with even gaps, and vertically centered within the container.


## Optional Adjustment:

Adjust the sizes of the boxes in the `.box` class as needed to see how Flexbox handles the layout with varying sizes.
