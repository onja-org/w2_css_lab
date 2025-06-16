const fs = require('fs');
const cheerio = require('cheerio');

// --- Global Variables for Loaded Files ---
let html = '';
let css = '';
let $; // Cheerio object

// --- Helper Functions (Consolidated) ---

/**
 * Checks for the presence of a CSS property with any non-empty value for a given selector.
 * @param {string} selector - The CSS selector (e.g., '.my-class', 'div#my-id').
 * @param {string} property - The CSS property name (e.g., 'display', 'background-color').
 * @returns {boolean} True if the property is found with a non-empty value for the selector, false otherwise.
 */
function hasCssProperty(selector, property) {
  const pattern = new RegExp(`${selector}\\s*{[^}]*${property}\\s*:\\s*[^;]+;?[^}]*}`, 'i');
  return pattern.test(css);
}

/**
 * Checks if a CSS property has a specific value pattern for a given selector.
 * @param {string} selector - The CSS selector.
 * @param {string} property - The CSS property name.
 * @param {string} valuePattern - A regex pattern for the expected value (e.g., 'flex', '16px', 'center').
 * @returns {boolean} True if the property is found with the matching value pattern, false otherwise.
 */
function hasSpecificCssValue(selector, property, valuePattern) {
    const pattern = new RegExp(`${selector}\\s*{[^}]*${property}\\s*:\\s*${valuePattern}[^;]*;?[^}]*}`, 'i');
    return pattern.test(css);
}

/**
 * Checks if a CSS rule (selector with curly braces) exists in the CSS content.
 * @param {string} selector - The CSS selector.
 * @returns {boolean} True if the selector's rule block is found, false otherwise.
 */
function hasCssRule(selector) {
  const pattern = new RegExp(`${selector}\\s*{[^}]*}`, 'i');
  return pattern.test(css);
}

/**
 * Specifically checks for the presence of the `grid-template-areas` property with at least one quoted string value.
 * @param {string} selector - The CSS selector for the grid container.
 * @returns {boolean} True if `grid-template-areas` is found with quoted values, false otherwise.
 */
function checkGridTemplateAreas(selector) {
    const pattern = new RegExp(`${selector}\\s*{[^}]*grid-template-areas\\s*:\\s*(["'][^"']*["']\\s*)+\\s*;?[^}]*}`, 'i');
    return pattern.test(css);
}

// --- Initial File Loading and Error Handling ---
try {
  html = fs.readFileSync('index.html', 'utf8');
  css = fs.readFileSync('styles.css', 'utf8');
  $ = cheerio.load(html); // Load HTML with Cheerio after files are read
} catch (error) {
  if (error.code === 'ENOENT') {
    console.error(`❌ Error: Required file not found. Make sure 'index.html' and 'styles.css' are in the same directory.`);
  } else {
    console.error(`❌ An unexpected error occurred while reading files: ${error.message}`);
  }
  process.exit(1); // Exit if files are not found
}

// --- Main Test Execution ---
console.log('--- Running All Combined Lab Tests ---');

// =======================================================
// ===== Lab 1: Basic CSS Structure & Selectors Tests ====
// =======================================================
console.log('\n\n===== Lab 1: Basic CSS Structure & Selectors =====');

// HTML Checks
console.log('\n--- HTML Elements (Lab 1) ---');
console.assert(
  $('head link[rel="stylesheet"][href="styles.css"]').length > 0,
  '❌ Lab 1 HTML: Missing `<link rel="stylesheet" href="styles.css" />` in `<head>`.'
);
console.assert(
  $('div.box').length > 0,
  '❌ Lab 1 HTML: Missing a `<div>` with the class `box`.'
);
console.assert(
  $('div#unique-box').length > 0,
  '❌ Lab 1 HTML: Missing a `<div>` with the ID `unique-box`.'
);

// CSS Checks
console.log('\n--- CSS Styles (Lab 1) ---');
console.assert(
  hasSpecificCssValue('body', 'background-color', '(lightblue|rgb\\(173,\\s*216,\\s*230\\)|#ADD8E6|lightgrey)'),
  '❌ Lab 1 CSS: `body` background-color is not `lightblue` or `lightgrey`.'
);
console.assert(
  hasSpecificCssValue('h1', 'color', 'blue'),
  '❌ Lab 1 CSS: `h1` text color is not `blue`.'
);
console.assert(
  hasCssProperty('.box', 'background-color'),
  '❌ Lab 1 CSS: `.box` is missing `background-color`.'
);
console.assert(
  hasCssProperty('#unique-box', 'background-color'),
  '❌ Lab 1 CSS: `#unique-box` is missing `background-color`.'
);
console.assert(
  hasCssProperty('.box', 'padding'),
  '❌ Lab 1 CSS: `.box` is missing `padding`.'
);


// =======================================================
// ===== Lab 2: CSS Units & Sizes and Box Model Tests ====
// =======================================================
console.log('\n\n===== Lab 2: CSS Units & Sizes and Box Model =====');

// HTML Checks
console.log('\n--- HTML Elements (Lab 2) ---');
const container2 = $('div.container');
console.assert(
  container2.length > 0,
  '❌ Lab 2 HTML: Missing a `<div>` with the class `container`.'
);
if (container2.length > 0) {
  const boxes2 = container2.find('div.box');
  console.assert(
    boxes2.length === 3,
    `❌ Lab 2 HTML: Expected 3 child \`<div>\` elements with class \`box\` inside \`.container\`, but found ${boxes2.length}.`
  );
}

// CSS Checks
console.log('\n--- CSS Styles (Lab 2) ---');
console.assert(
  hasSpecificCssValue('.box', 'width', '150px'),
  '❌ Lab 2 CSS: `.box` should have `width` of `150px`.'
);
console.assert(
  hasSpecificCssValue('.box', 'height', '100px'),
  '❌ Lab 2 CSS: `.box` should have `height` of `100px`.'
);
console.assert(
  hasSpecificCssValue('.box', 'padding', '20px'),
  '❌ Lab 2 CSS: `.box` should have `padding` of `20px`.'
);
console.assert(
  hasSpecificCssValue('.box', 'border', '2px\\s+solid\\s+black'),
  '❌ Lab 2 CSS: `.box` should have `border` of `2px solid black`.'
);
console.assert(
  hasSpecificCssValue('.box', 'margin', '5%'),
  '❌ Lab 2 CSS: `.box` should have `margin` of `5%`.'
);
console.assert(
  hasSpecificCssValue('.box', 'font-size', '1\\.5em'),
  '❌ Lab 2 CSS: `.box` should have `font-size` of `1.5em`.'
);
console.assert(
  hasSpecificCssValue('.container', 'width', '500px'),
  '❌ Lab 2 CSS: `.container` should have `width` of `500px`.'
);
console.assert(
  hasSpecificCssValue('.container', 'background-color', '(lightblue|rgb\\(173,\\s*216,\\s*230\\)|#ADD8E6)'),
  '❌ Lab 2 CSS: `.container` should have `background-color` of `lightblue`.'
);


// ==========================================================
// ===== Lab 3: CSS Typography & List Styles Tests ========
// ==========================================================
console.log('\n\n===== Lab 3: CSS Typography & List Styles =====');

// HTML Checks
console.log('\n--- HTML Elements (Lab 3) ---');
const ulElement3 = $('ul');
console.assert(
  ulElement3.length > 0,
  '❌ Lab 3 HTML: Missing an `<ul>` element.'
);
if (ulElement3.length > 0) {
  console.assert(
    ulElement3.find('li').length >= 3,
    `❌ Lab 3 HTML: Expected at least 3 \`<li>\` items inside \`<ul>\`, but found ${ulElement3.find('li').length}.`
  );
}

// CSS Checks
console.log('\n--- CSS Styles (Lab 3) ---');
console.assert(
  hasCssProperty('body', 'font-family'),
  '❌ Lab 3 CSS: `body` is missing `font-family`.'
);
console.assert(
  hasSpecificCssValue('body', 'font-size', '16px'),
  '❌ Lab 3 CSS: `body` should have `font-size` of `16px`.'
);
console.assert(
  hasSpecificCssValue('body', 'line-height', '1\\.5'),
  '❌ Lab 3 CSS: `body` should have `line-height` of `1.5`.'
);
console.assert(
  hasSpecificCssValue('body', 'letter-spacing', '0\\.5px'),
  '❌ Lab 3 CSS: `body` should have `letter-spacing` of `0.5px`.'
);
console.assert(
  hasSpecificCssValue('body', 'word-spacing', '1px'),
  '❌ Lab 3 CSS: `body` should have `word-spacing` of `1px`.'
);
console.assert(
  hasSpecificCssValue('ul', 'list-style-type', 'none'),
  '❌ Lab 3 CSS: `<ul>` should have `list-style-type: none`.'
);
console.assert(
  hasCssProperty('ul', 'list-style-image'),
  '❌ Lab 3 CSS: `<ul>` should have `list-style-image` applied.'
);


// =======================================================
// ===== Lab 4: CSS Display & Float Tests ================
// =======================================================
console.log('\n\n===== Lab 4: CSS Display & Float =====');

// HTML Checks
console.log('\n--- HTML Elements (Lab 4) ---');
console.assert($('div.block').length > 0, '❌ Lab 4 HTML: Missing `div.block`.');
console.assert($('div.inline-block').length > 0, '❌ Lab 4 HTML: Missing `div.inline-block`.');
console.assert($('div.used-box').length > 0, '❌ Lab 4 HTML: Missing `div.used-box`.');
console.assert($('div.used-box div.extra-box').length > 0, '❌ Lab 4 HTML: Missing `div.extra-box` inside `used-box`.');

// CSS Checks
console.log('\n--- CSS Styles (Lab 4) ---');
console.assert(hasSpecificCssValue('.block', 'display', 'block'), '❌ Lab 4 CSS: `.block` needs `display: block`.');
console.assert(hasSpecificCssValue('.inline-block', 'display', 'inline-block'), '❌ Lab 4 CSS: `.inline-block` needs `display: inline-block`.');
console.assert(hasSpecificCssValue('.extra-box', 'display', 'none'), '❌ Lab 4 CSS: `.extra-box` needs `display: none`.');
console.assert(hasSpecificCssValue('.used-box', 'float', 'left'), '❌ Lab 4 CSS: `.used-box` needs `float: left`.');
console.assert(hasSpecificCssValue('div', 'float', 'right'), '❌ Lab 4 CSS: Another `div` needs `float: right`.');
console.assert(hasCssProperty('div', 'clear'), '❌ Lab 4 CSS: A `div` needs the `clear` property.');


// ==========================================================
// ===== Lab 5: CSS Columns Layout & Positioning Tests ====
// ==========================================================
console.log('\n\n===== Lab 5: CSS Columns Layout & Positioning =====');

// HTML Checks
console.log('\n--- HTML Elements (Lab 5) ---');
const columnContainer5 = $('div.container');
console.assert(columnContainer5.length > 0, '❌ Lab 5 HTML: Missing `div.container` for columns layout.');
if (columnContainer5.length > 0) {
  console.assert(columnContainer5.find('p').length >= 3, '❌ Lab 5 HTML: `.container` should have at least 3 `<p>` elements inside.');
}
const stickyElement5 = $('.sticky-element');
console.assert(stickyElement5.length > 0, '❌ Lab 5 HTML: Missing `div` with class `sticky-element`.');

// CSS Checks
console.log('\n--- CSS Styles (Lab 5) ---');
console.assert(hasCssProperty('.container', 'column-count'), '❌ Lab 5 CSS: `.container` needs `column-count`.');
console.assert(hasCssProperty('.container', 'column-gap'), '❌ Lab 5 CSS: `.container` needs `column-gap`.');
console.assert(hasCssProperty('.container', 'column-rule'), '❌ Lab 5 CSS: `.container` needs `column-rule`.');
console.assert(hasSpecificCssValue('.sticky-element', 'position', 'sticky'), '❌ Lab 5 CSS: `.sticky-element` needs `position: sticky`.');
console.assert(hasCssProperty('.sticky-element', 'top'), '❌ Lab 5 CSS: `.sticky-element` needs a `top` value.');
console.assert(hasCssProperty('.sticky-element', 'z-index'), '❌ Lab 5 CSS: `.sticky-element` or another positioned element needs `z-index`.');


// ==========================================================
// ===== Lab 6: Flexbox Layout & Grid Layout Tests ========
// ==========================================================
console.log('\n\n===== Lab 6: Flexbox Layout & Grid Layout =====');

// HTML Checks
console.log('\n--- HTML Elements (Lab 6) ---');
const flexContainer6 = $('div.flex-container');
console.assert(flexContainer6.length > 0, '❌ Lab 6 HTML: Missing `div` with class `flex-container`.');
if (flexContainer6.length > 0) {
  console.assert(flexContainer6.find('div').length >= 3, '❌ Lab 6 HTML: `.flex-container` should have at least 3 child `div` elements.');
}
const gridContainer6 = $('div.grid-container');
console.assert(gridContainer6.length > 0, '❌ Lab 6 HTML: Missing `div` with class `grid-container`.');

// CSS Checks
console.log('\n--- CSS Styles (Lab 6) ---');
console.assert(hasSpecificCssValue('.flex-container', 'display', 'flex'), '❌ Lab 6 CSS: `.flex-container` needs `display: flex`.');
console.assert(hasSpecificCssValue('.flex-container', 'justify-content', 'center'), '❌ Lab 6 CSS: `.flex-container` needs `justify-content: center`.');
console.assert(hasSpecificCssValue('.flex-container', 'align-items', 'center'), '❌ Lab 6 CSS: `.flex-container` needs `align-items: center`.');
console.assert(hasSpecificCssValue('.flex-container', 'flex-direction', 'column'), '❌ Lab 6 CSS: `.flex-container` needs `flex-direction: column`.');
console.assert(hasCssProperty('.flex-container', 'overflow') || hasCssProperty('div', 'overflow'), '❌ Lab 6 CSS: An element (e.g., `.flex-container`) needs the `overflow` property.');

console.assert(hasSpecificCssValue('.grid-container', 'display', 'grid'), '❌ Lab 6 CSS: `.grid-container` needs `display: grid`.');
console.assert(hasCssProperty('.grid-container', 'grid-template-columns'), '❌ Lab 6 CSS: `.grid-container` needs `grid-template-columns`.');
console.assert(hasCssProperty('.grid-container', 'grid-template-rows'), '❌ Lab 6 CSS: `.grid-container` needs `grid-template-rows`.');
console.assert(checkGridTemplateAreas('.grid-container'), '❌ Lab 6 CSS: `.grid-container` needs `grid-template-areas` with named areas.');


console.log('\n\n--- All Combined Lab Tests Completed ---');