Lesson 1
========

Overview
--------

- Install Software
- Sign up for GitHub
    - Add team members
- Introduction to Git
    - Configure GitHub app
    - Learn how to use GitHub app
- Introduction to Markdown
    - Learn how to use app
    - How to write markdown
- Introduction to HTML
    - What is it?
    - Tags
- Introduction to CSS
    - Rules
    - Classes
- Create first page

Install Software
----------------

For today, we're installing the following:

- GitHub App

- MarkDown Pad

- Sublime or Brackets

Sign up for GitHub
------------------

1. [Sign up](https://github.com/join) for GitHub

    - Free plan

2. Add team members to your GitHub teams

3. Fill out GitHub profile

    - Setup your real name (optional-ish)

4. Change your team name and description

Introduction to Git
-------------------

### What is Git?

Git is a distributed revision control system. In other words, because we will be working with code, we want to be able to keep a history of all our changes and know who to blame when part of the code is broken. Breaking code is not something to worry about and sharing code is easy. Blah blah blah...

### Configure your account with the GitHub app

1. Sign in

2. Set up identity

    - The information that will be used to identify you each time you contribute something to the respository

3. Clone your repository

    - ...\Documents\Github\repository
    
4. Make a change

5. Sync it

6. Pull it

Introduction to MarkDown
------------------------

### What is Markdown?

> Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).

As the quote says, you simply write your notes with a specific set of symbols and you'll be able to easily convert it to HTML and make it look pretty.

This document is written entirely in markdown.

### Quick HTML Entity Reference

Some symbols have different meanings in HTML, so to use these symbols you have to use the codes for them. I've listed a few common ones here.

    &  |  &amp;
    ©  |  &copy;
    ®  |  &reg;
    ¡  |  &iexcl;
    ¿  |  &iquest;

    ¼  |  &frac14;
    ½  |  &frac12; -or- &half;
    ¾  |  &frac34;

    <  |  &lt;
    >  |  &gt;

    «  |  &laquo;
    »  |  &raquo;

    ²  |  &sup2;
    ³  |  &sup3;
    °  |  &deg;

### Sample Time!

Look at `Sample.md`

Introduction to HTML
--------------------

### HTML in a nut shell

    <tagname>content</tagname>

\* There are a few exceptions to this general rule:

    <br>
    <hr>
    <img>

### Elements

#### Headers

    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>

#### Paragraph

    <p>This is another paragraph.</p>

##### Line Breaks

Line breaks allow you force a line break instead of having to start a new paragraph.

    <br>

###### Example

    <p>
        1685 Main St<br>
        Santa Monica, CA 90401<br>
        (310) 393-9975
    </p>

\- vs \-

    <p>1685 Main St</p>
    <p>Santa Monica, CA 90401</p>
    <p>(310) 393-9975</p>

#### Link

    <a href="http://google.com" title="Visit google">This is a link</a>

#### Images

    <img src="http://placehold.it/300x100" alt="A placeholder image" width="300" height="100">

#### Attributes

Attributes are the things that go inside of the tag, they are __not__ the content. For future reference:

    <tag>content</tag>

All attributes will go inside of the actual tag (in between the < and the >) with a space separating each different attribute. Each attribute will typically have a value, and that value __must__ be surrounded by "".

##### Common Attributes

- class

    A reference to a set of CSS rules (we'll get to this later)
    
- id

    A reference for JavaScript to easily access this element (we'll get to this later)

- style

    Add some style rules quickly (we'll get to this today, hopefully)

- title

    Whatever will appear when you hover an element (e.g. an image, link, or button)

### Formating

__bold__ -> `<strong>bold</strong>`

_italicized_ -> `<em>italicized</em>`

<small>i'm small!</small> -> `<small>i'm small!</small>`

<mark>highlighted text</mark> -> `<mark>highlighted</mark>`

<del>i got deleted</del> -> `<del>i got deleted</del>`

### Sample Time! ...Again

Look at `index.html`