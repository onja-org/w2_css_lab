# Lab 1 - Basics CSS structure & Selectors

## Objective: 
Introduction to Basic CSS structure and Selectors.

## Task: (10 minutes)
☄️ 1. **Create a styles.css file:**
    -   Create a separate file named styles.css in the same directory as index.html.

    - Link the CSS file to the HTML by adding this line inside the `<head>` tag of index.html:


        ```html
        <link rel="stylesheet" href="styles.css" />

        ```
<br>


☄️ 2. **Apply styles in the styles.css file**:<br>
In the `styles.css` file, add the following styles:

- Change the background color of the page to `lightblue`. You can use one of the following methods to set the background color:

    - Using the colour name: `lightblue`
    - Using the **RGB** value for lightblue:  `rgb(173, 216, 230)` 
    - Using the **Hex Code** for lightblue: `#ADD8E6`

-   Change the text color of the `<h1>` element to `blue.

       ```css
        /* Change the font family of all text */
        body {
        background-color: lightgrey;
        font-family: Arial, sans-serif;
        }

        /* Style the <p> tag */
        p {
        font-size: 18px;
        line-height: 1.5;
        }

        /* Apply a margin to the <h1> tag */
        h1 {
        margin: 20px;
        }
    ```

<br>


☄️ 3. **Add div elements in `index.html`:**
- Inside the `<body>`, add the following `<div>` elements with the class `box` and the ID `unique-box`:

    ```html
        <div class="box">
            This is a box with a background color and padding using a class selector.
        </div>

        <div id="unique-box">
            This is a box with a different background color and padding using an ID selector.
        </div>
    ```

<br>


☄️ 4. **Update `styles.css` file to style the `<div>` using a class selector and an ID selector**:<br>
- Open your `styles.css` file and add the following styles: 

    ```css
        /* Style the <div> using a class selector */
        .box {
        background-color: lightblue;
        padding: 10px;
        }

        /* Style the <div> using an ID selector */
        #unique-box {
        background-color: lightgreen;
        padding: 15px;
        border-radius: 8px;
        }
    ```


<br>


☄️ 5. **Test your changes**:<br>
Open the `index.html` file in a browser to check if the background color of the page is light grey and the text color of the `<h1>` is `Blue`.


## Outcome:
By the end of this lab, you should have:

- Created an external CSS file and linked it to the HTML.
- Applied basic styling using CSS to change the background and text colors.
- Applied global styles to all text using the body selector.
- Styled the `<p>` tag by adjusting its font size and line height.
- Added a margin to the `<h1>` element to control its spacing.
- Used a **class selector** (`.box`) to style a `<div>` element with a background color and padding.
- Used an **ID selector** (`#unique-box`) to style another `<div>` element with a different background color, padding, and border radius.