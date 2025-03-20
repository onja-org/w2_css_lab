# Lab 6 - Flexbox Layout & Grid Layout

## 📌 Objective:
Working with Flexbox to center elements and control overflow, and used CSS Grid to build complex grid layouts.
## Task 

### 🔶 Part 3: Flexbox Layout 🔶🔶🔶
- Create a container `div` with at least 3 child div elements.
- Set the container’s display property to `flex`.
- Center the child elements both `vertically and horizontally`.
- Use `the flex-direction` property to change the layout from` row `to `column`.
- Use `justify-content `and `align-items` to add space between elements and control alignment.
- Control the overflow of a `div` using overflow property.
Example:

```css
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
```


### 🟪 Part 4: Grid Layout 🟪🟪🟪
- Create a container `div` and define a grid with two columns using `grid-template-columns`.
- Define rows using `grid-template-rows`.
- Apply `grid-template-areas` to define named grid areas.

Example:

```css
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "header header" "content sidebar" "footer footer";
  }
```