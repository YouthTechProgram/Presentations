Markdown
========

Headings
--------

---

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

---

Paragraphs
----------

### Sample 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non scelerisque dui. Fusce vel erat eu eros euismod porttitor nec a orci. Sed consequat sodales neque, vel dictum erat adipiscing et. Vestibulum porttitor erat ac nibh semper viverra. Nulla placerat mauris in semper dictum. Phasellus volutpat arcu et dui dapibus pretium. Maecenas eget pharetra erat. Sed placerat neque metus, ut feugiat felis placerat sit amet. Praesent aliquam venenatis mollis. Maecenas sed lacus venenatis, tincidunt lorem at, porta ligula.

Quisque vel eros sed nisi blandit ornare quis ac est. Fusce aliquam arcu at eros pretium, non tristique velit volutpat. Donec ut erat eu lacus accumsan faucibus. Praesent elit quam, adipiscing eu tellus sit amet, eleifend venenatis erat. Nunc feugiat enim luctus, laoreet justo convallis, pretium libero. Donec nibh libero, molestie a tellus sit amet, pellentesque volutpat dui. Nam ligula nisl, dapibus ac pharetra ac, faucibus sit amet elit. Nulla faucibus laoreet aliquet. Phasellus luctus mauris magna, nec adipiscing odio blandit in.


### Sample 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et urna mauris. Cras a lorem nunc. Aenean tincidunt ultricies urna, at mollis dui vulputate vitae. Ut rhoncus, massa sit amet feugiat dapibus, risus libero aliquam arcu, lacinia hendrerit felis sem eu felis. Morbi egestas ullamcorper nulla, ac aliquet tortor sagittis sed.  
Phasellus tincidunt libero vitae risus accumsan dapibus. Nulla laoreet volutpat augue. Aliquam vestibulum at mauris vitae cursus. Ut augue libero, elementum in dui sed, feugiat ultricies nisi. Vivamus gravida sed ipsum id congue. Sed congue dui tellus, eu mollis leo congue in. Ut vel nisi eu nibh congue malesuada. Praesent suscipit enim sed mauris lacinia, in malesuada risus suscipit. Integer nec varius tortor. Cras rutrum eu sem at pretium. Praesent id bibendum tortor, nec ultricies urna.

Tables
------

Tables aren't officially supported in markdown but most parsers do support the following sytanx.

### What's Rendered

|                | 2013 | 2014 |
| -------------- | ---- | ---- |
| # Participants | 13   | 26   |

### Markup

```
|                | 2013 | 2014 |
| -------------- | ---- | ---- |
| # Participants | 13   | 26   |
```

Formatting
----------

#### How to Make links

[My link to google](http://google.com "Visit google!")

`[My link to google](http://google.com "Visit google!")`

#### How to make images

![an alt text](http://placehold.it/50x50 "you hovered over me")

`![an alt text](http://placehold.it/50x50 "you hovered over me")`

#### How to Bold

__I have been bolded__

`__bold__` or `**bold**`

#### How to Italicize

_I am italicized_

`_italicized_` or `*italicized*`

### How to make a horizontal line

---

```
---
```

#### How to make lists

##### Numbered List

1. Step 1
2. Step 2
3. Step 3

```
1. Step 1
2. Step 2
3. Step 3
```

##### Bullet Point

- Item 1
+ Item 2
* Item 3

```
- Item 1
+ Item 2
* Item 3
```

#### How to Quote

> This is a quote!
>
> > Hi!
> 
> and another line

```
> This is a quote!
>
> > Hi!
> 
> and another line
```

#### Code

Either using ` ``` ` or indenting 4 spaces to show a block of code. For displaying things inline, use a single `` ` to achieve something like `this`.

    ```
    All of this will be displayed as-is. Typically used for code or displaying markdown
    ```

#### Escaping the asterick and underscore

Because the asterisk and the underscore are used for bolding and italicizing, you will need to escape them if you to use them mid sentence just like this \*.

To escape a character, you simply have to add a `\` before it.

`\*`

If you want to escape a `\`, the same rule applies, escape it: `\\`

Here is a list of all the characters you can backslash in markdown:

    \   backslash
    `   backtick
    *   asterisk
    _   underscore
    {}  curly braces
    []  square brackets
    ()  parentheses
    #   hash mark
    +   plus sign
    -   minus sign (hyphen)
    .   dot
    !   exclamation mark

## Specification

There is the [CommonMark specification](http://spec.commonmark.org/0.20/) which has become the standard, except for the lack of tables support.