# Lab 6: (5:00 - 6:00) - Responsive Design with Media Queries

## Objective:
Implement a basic responsive design using media queries.

## Task (10 minutes):
1. In your `styles.css`, add a media query that changes the background color to lightgray when the screen width is less than 600px:


    ```css
    @media (max-width: 600px) {
    body {
        background-color: lightgray;
    }
    }
    ```
2. Use another media query to stack the items in your Flexbox layout (from Lab 4) into a single column when the screen width is less than 800px:

    ```css 
    @media (max-width: 800px) {
    .flex-container {
        flex-direction: column;
    }
    }
    ```

## Test your Website:

- Resize the browser window to less than 600px and observe the background color change.
- Resize the window to less than 800px and see how the Flexbox layout items stack into a single column.
- Make sure your website adapts to different screen sizes accordingly.