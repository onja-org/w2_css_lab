# Lab 2 - CSS Units & Sizes and Box Model

## 📌 Objective:
Understand and apply different CSS units for sizing elements and learn how the CSS Box Model affects element layout.

## Task (10 minutes):

### 📐  Part 1: CSS Units & Sizes
In this section, you will explore different CSS units that can be used to define sizes and measurements.

1. **Update your `index.html` file.**<br>
Create a simple HTML layout with the following elements:
   - A container `<div>` with three child `<div>` elements.
   - Each child `<div>` will represent a box.
 
    Example:

    ```html
        <div class="container">
            <div class="box">Box 1</div>
            <div class="box">Box 2</div>
            <div class="box">Box 3</div>
        </div>
    ```

2. **For the `.box` elements**:
    - Use `px` to set a fixed width of 150px and height of 100px.
    - Set the padding of each box to `20px`.
    - Apply a border of `2px solid black`.
    - Use `margin` in percentage (`%`) to create spacing between the boxes (try `5%`).
    - Use `em` for the font size inside the boxes, making it `1.5em` relative to the font size of the box.


###  📦 Part 2: Understanding the CSS Box Model

The CSS Box Model is a fundamental concept that defines the structure and layout of HTML elements. It consists of four main areas:

- **Content:** The actual content of the element (e.g., text or images).
- **Padding:** Space between the content and the border. Padding is inside the element's box.
- **Border:** The border surrounding the padding (if any).
- **Margin:** Space outside the border, creating space between the element and other elements.

- Here's an example of how the Box Model looks:

    ```css
    div {
        width: 300px; /* content width */
        padding: 20px; /* padding inside the box */
        border: 5px solid black; /* border around the content and padding */
        margin: 30px; /* margin outside the border */
    }
    ```

- In this example:
    - The total width of the element would be `300px (content) + 40px (padding on both sides) + 10px (border on both sides) = 350px`.
    - The total height will follow a similar calculation if `height` is applied.

### 🔶 Let's practice now: (Your tasks)
For the `.container` elements you created in part 1
   - Set a `width` of `500px` for the content area.
   - Add `padding` of `20px` to create space inside the box around the content.
   - Apply a `border` of `5px solid black` to the box.
   - Add a `margin` of `30px` to separate the box from other elements.
   - Set a `background-color` to `lightblue` to visually highlight the box.
   - Set a `font-size` of `16px` inside the box to make the text readable

## Outcome:
By completing this practice activity, you will have:
- Created a simple layout using various CSS units (`px`, `%`, `em`, `vw`, `vh`).
- Applied the CSS Box Model to a `<div>` element, understanding how padding, borders, and margins affect its layout.
- Gained insight into how the `width` of an element includes the content, padding, and border.
- Experimented with the effects of margin and how it creates space between the box and surrounding elements.