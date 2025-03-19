# Lab 1: (0:00 - 1:00) - Setting Up Basic HTML and CSS Structure

## Objective: 
Introduction to CSS and a basic HTML and CSS structure setup.

## Task: (10 minutes)
1. **Create an index.html file**:
    - Start by creating a new file called index.html.

    - Add the following basic HTML structure:
    ```html
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Basic HTML and CSS</title>
            </head>
            <body>
                <h1>My First Heading</h1>
                <p>This is a sample paragraph to style with CSS.</p>
            </body>
            </html>
        ```

<br>

2. **Create a styles.css file:**
    -   Create a separate file named styles.css in the same directory as index.html.

    - Link the CSS file to the HTML by adding this line inside the `<head>` tag of index.html:


        ```html
        <link rel="stylesheet" href="styles.css" />

        ```


<br>


3. **Apply styles in the styles.css file**:<br>
In the `styles.css` file, add the following styles:

    -   Change the background color of the page to `lightgrey`.
    -   Change the text color of the `<h1>` element to `blue.

        ```css
            body {
            background-color: lightblue;
            }

            h1 {
            color: darkgreen;
            }
        ```

<br>


4. **Test your changes**:<br>
Open the `index.html` file in a browser to check if the background color of the page is light grey and the text color of the `<h1>` is `Blue`.

## Outcome:
By the end of this lab, you should have:

- Set up a basic HTML structure.
- Created an external CSS file and linked it to the HTML.
- Applied basic styling using CSS to change the background and text colors.