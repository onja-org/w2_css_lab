# Lab 5 - CSS Columns Layout & Positioning

### Objective:
In this lab, you will learn creating multi-column layouts, applied different CSS positioning methods.

## Tasks :
### Part 1: Columns Layout

1. Create a container `div` with at least 3 paragraphs inside.
2. In the CSS, use the `column-count` property to define how many columns the content should have.
3. Add the `column-gap` property to adjust the space between columns.
4. Experiment with the `column-rule` property to add a rule (line) between columns.

Example:
  ```css
    .container {
      column-count: 3;
      column-gap: 20px;
      column-rule: 2px solid #000;
    }
  ```

### Part 2: Positioning
- Create a `div` element with some text inside.
- Apply different position properties (relative, absolute, static, sticky, fixed) and observe how they affect the layout.
- Make a `div` element sticky using `position: sticky` and set a `top` value.
- Experiment with `z-index` by positioning two elements on top of each other.
  Example:

  ```css
    .sticky-element {
      position: sticky;
      top: 0;
      z-index: 10;
    }
  ```

