/* ==================== CSS CASCADE ALGORITHM ==================== */

/*
The cascade algorithm decides which CSS rule will be applied when multiple CSS rules target the same element and property.

It considers origin, importance, specificity and order to resolve conflicts.
*/


/* ==================== 1. SPECIFICITY ==================== */

/*
Specificity is a priority system that determines which CSS selector wins when multiple selectors target the same element and set the same property.

A selector with higher specificity overrides a selector with lower specificity.
*/

/*
Specificity order (lowest to highest):

1. Universal Selector (*)                     = 0
2. Element Selector (h1, p, div)              = 1
3. Class Selector (.box)                      = 10
4. Attribute Selector ([type="text"])        = 10
5. Pseudo-class (:hover, :focus)              = 10
6. ID Selector (#header)                      = 100
7. Inline Style (style="color: red;")         = 1000

Note: These are simplified specificity scores.
Pseudo-elements have the same weight as element selectors.
*/

/*
When multiple selectors have the same specificity, the CSS rule written later generally wins.

Example:
If two class selectors set the same color, the one written later in the CSS will be applied.
*/

/*
When selectors have different specificity, the selector with higher specificity wins, even if the lower-specificity rule is written later.
*/


/* ==================== 2. POSITION AND ORDER ==================== */

/*
When competing CSS declarations have the same origin, importance and specificity, the declaration appearing later in the CSS wins.

This is also called the source order rule.
*/


/* ==================== 3. ORIGIN ==================== */

/*
CSS rules can come from different sources:

1. User Agent Stylesheet: Default styles provided by the browser.
2. User Stylesheet: Styles added by the user through browser settings or extensions.
3. Author Stylesheet: Styles written by the website developer.

Author styles generally override normal user-agent styles.

For example, browsers provide default styles for headings, paragraphs, buttons and links.
We can override these styles by writing our own CSS rules.
*/


/* ==================== 4. IMPORTANCE (!IMPORTANT) ==================== */

/*
The !important flag gives a CSS declaration higher priority than normal declarations.

It can override normal inline styles, ID selectors, class selectors and element selectors.

Example:
color: red !important;

Even if an inline style sets color to blue, the important declaration can win when it participates in the same cascade origin and layer rules.

If multiple declarations use !important, the cascade still considers origin, layers, specificity and source order.

Avoid using !important frequently because it makes CSS conflicts harder to manage.
*/


/* ==================== IMPORTANT PRACTICES ==================== */

/*
1. Prefer external CSS files to keep HTML and CSS separate.

2. Avoid unnecessary inline styles because they make styling harder to maintain and reuse.

3. Use classes for styling reusable elements.

4. Avoid unnecessarily complex selectors and excessive specificity.

5. Write CSS carefully to reduce conflicts and avoid repeatedly overriding previous styles.

6. Use !important only when genuinely necessary.

7. Understand the existing styles before adding new rules.
*/

/*
User Agent Stylesheet:

A User Agent Stylesheet is a collection of default CSS rules provided by the browser.

These styles are automatically applied to HTML elements even when we do not write any CSS.

For example:
- h1 elements have a default font size and bold text.
- p elements have default margins.
- Buttons have default styles.
- Lists have default padding or margins.

We can override these default styles by writing our own CSS rules.

Example:
If the browser gives a heading a default margin, we can change or remove it using our own CSS.

The universal selector (*) is commonly used to reset default margins and padding.

Example:
* {
    margin: 0;
    padding: 0;
}
*/