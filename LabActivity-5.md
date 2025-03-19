# Lab 5: (4:00 - 5:00) - CSS Grid Layout

## Objective:
Set up a basic CSS Grid layout.

## Task (10 minutes):

1. **In your `index.html`, create a container `<div>`** with four child `<div>` elements (e.g., 4 boxes).  
   Inside your `index.html`, add the following code:

   ```html
   <div class="grid-container">
     <div class="box">Box 1</div>
     <div class="box">Box 2</div>
     <div class="box">Box 3</div>
     <div class="box">Box 4</div>
   </div>

2. In the styles.css file, apply the following styles to the container and its children:

    ```css
    /* Apply grid layout to the container */
        .grid-container {
    
        gap: 10px; /* Optional: Add space between grid items */
        }

        /* Style the individual boxes */
        .box {
        padding: 20px;
        background-color: lightblue;
        border: 2px solid darkblue;
        text-align: center;
        }
    ```

3. Apply `display: grid;` to the `.grid-container` to enable CSS Grid.
4. Use` grid-template-columns: repeat(2, 1fr);` to create two equal-width columns.
5. Use `grid-template-rows: auto;` to adjust the row height automatically.

## Test the Layout:

Save the styles.css file.
Refresh the browser with your `index.html` file and check how the boxes are arranged in the grid.
