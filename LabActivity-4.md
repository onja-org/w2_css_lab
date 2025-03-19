# Lab 4 - CSS Display & Float

## 📌 Objective:
Understand how to control the display of elements and the use of `float` property.

## Tasks:

### 📀 Part 1. Display:
- In the `index.html` file create a `div` element and set its display property to `block`. Add text inside it.<br>
Example:

  ```html 
    <div class="block">
      This is a block-level element.
    </div>
  ```

- Create another `div` and set its display property to `inline-block`, and add text inside it as well.

- After you've created your `<div>`s, add this following code below.
  ```html 
    <div class="used-box">
      I use this box, do not remove it!

      <!-- Box to remove -->
      <div class="extra-box">
        This is just an extra element.
      </div>
    </div>
    ```
-  Display property to `none` to get rid of the extra box.

<br>


### 🛶 Part 2. Float:
Still on the `used-box` part:
- Apply `float: left` to the `used-box` element. 
- Create a new `<div>` below that `used-box` element and apply `float: right`.
- finally, you can use the `clear` property to stop the floating effect after the floated elements.

## Outcome:
You will learn how the `display` and `float` properties impact element layout and structure.
