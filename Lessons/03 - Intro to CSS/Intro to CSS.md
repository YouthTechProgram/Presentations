# Lesson 2

## What is CSS?

Yesterday we saw some HTML to structure the page but it looked pretty ugly. This is where CSS comes in. It makes HTML look pretty.

## Syntax

Classes in CSS

    .class_name {
        /* rules */
    }

HTML Elements in CSS

    body {
        /* rules */
    }

## Rules

All the rules will always follow this syntax:

    rule-name: value(s);

### Some rules to play with

    background-color
    color
    font-family
    font-size
    font-style
    font-weight
    margin
    padding
    text-align
    text-decoration

### Page Layout

CSS

    display
    float

HTML

    article
    div
    footer
    header
    nav
    section

#### Important Classes

- Clearfix

        .clearfix:after {
            content: "";
            display: table;
            clear: both;
        }

- Wrapper

        .wrapper {
            margin: 0 auto;
            width: 1000px;
        }

## Loading CSS Externally

### Our own style sheets

We'll start using external files to load all of our CSS.

    <link href="../assets/css/styles.css" rel="stylesheet" type="text/css">

### Font Awesome

Visit the [Font Awesome website](http://fortawesome.github.io/Font-Awesome/). We'll be using them a lot for icons.