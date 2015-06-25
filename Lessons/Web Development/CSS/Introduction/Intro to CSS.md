# Cascading Style Sheets

Styles can be applied to either generic HTML tags or specific classes. One of the main goals of CSS is to be able to reuse as much as you can, within reason.

## Resources

- [Bootstrap](http://getbootstrap.com/)
- [Brackets](http://brackets.io/)
- [FontAwesome](http://fortawesome.github.io/Font-Awesome/icons/)
- [Zeal](http://zealdocs.org/)

## Syntax

Classes

```css
.class_name {
    rule: value;
}
```

HTML tags

```css
div {
    rule: value;
}
```

### Vocabulary

With the examples above, each code block with `{}` will be defined as a "set of rules" and each line inside the `{}` will be defined as a single rule.

## Topics

### Inspector Tools

Inspector tools (or developer tools) are included in all browsers and are used to figure out issues with CSS in the browser making debugging easier. It also allows you to make quick changes locally.

### Types of CSS classes

#### Regular

Regular CSS classes are the most used classes and is what you will be using the most. These should be as generic as possible and ideally should be as reusable as possible.

**Example**

```css
.red-bg {
    background-color: #FF0000;
    color: #FFFFFF;
}
```

#### Combined Classes

Combined classes are classes that are meant to be used together and will not work by themselves. These can be thought of as "modifiers" as in they are modifying the style of an element but not adding any significant.

**Example**

```css
.red-bg.dark {
    background-color: #A10000;
}
```

#### Pseudo-classes

Selectors are special "modes" or statuses that CSS classes can have.

**Usages**

- When something is being hovered over
- When something has been clicked
- When something is odd or even in a list

##### Available Pseudo-classes

- `:active`
- `:after`
- `:before`
- `:checked`
- `:disabled`
- `:enabled`
- `:first-child`
- `:hover`
- `:last-child`
- `:nth-child`
- `:only-child`
- `:visited`

```css
.class_name:hover {
    color: #0000FF;
}
```

#### Adjacent Siblings

Used when an element is a direct child to a parent.

**Example**

```css
div > h1 {
    margin-top: 0;
}
```

```html
<div>
    <h1>Platypi</h1>
    <p>...</p>
    <h1>Uber Bus</h1>
</div>
```

#### Direct descendants

Used when an element is a direct sibling to another object.

**Example**

CSS

```css
p + p
{
   font-weight: bold;
}
```

HTML

Here the style would apply to the second <p>

```html
<div>
   <p></p>
   <p></p>
</div>
```

### Expanding CSS classes

Specifying CSS classes to be used in very specific situations. *Notice the space.*

```css
nav ul.primary {
    float: left;
}

nav ul.secondary {
    float: right;
}
```

## Usage

### Fonts, Colors, & Backgrounds

- `background-color`
- `background-image`
- `background-repeat`
- `background-position`
- `color`
- `font-family`
- `font-size`
- `font-style`
- `font-weight`

### Borders, Circles, & Padding vs Margin

- `border`
    - Syntax: `<width> <type> <color>`
- `border-radius`
- `margin`
- `padding`

## Bootstrap

A CSS framework and grid system creating mobile-first websites

### Concepts

- Columns
    - `col-xs-*`
    - `col-sm-*`
    - `col-md-*`
    - `col-lg-*`
- Mobile first/responsive

## Font Awesome

Once it's been loaded, you have access to a whole range of icons that can be resized indefinitely.
