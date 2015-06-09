Introduction to HTML
===

## HTML in a nut shell

HTML is like dialogue. You need to have a beginning quote and an end quote. An end tag is always denoted by have a `/` before the tagname, like so:

    <tagname attribute="value">content</tagname>

\* There are a few exceptions to this general rule:

    <br>
    <hr>
    <img>

## Elements

### Headers

Headers should **never** be used simply solely to make text bigger and bold. While visually that may be all they do, for assistive devices, headers have a greater significance and represent different sections of a website.

    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>

### Paragraph

    <p>This is another paragraph.</p>

#### Line Breaks

Line breaks allow you force a line break instead of having to start a new paragraph. The reason you would want to do this is because by default, there is spacing between paragraphs but with line breaks, there will be no spacing since it's not a new paragraph.

In general, line breaks could and should be avoided if possible; CSS can be used to achieve the same goals.

    <br>

##### Example

    <p>
        1685 Main St<br>
        Santa Monica, CA 90401<br>
        (310) 393-9975
    </p>

\- vs \-


    <p>1685 Main St</p>
    <p>Santa Monica, CA 90401</p>
    <p>(310) 393-9975</p>


### Link

    <a href="http://google.com" title="Visit google">This is a link</a>

- **href** - The URL to an external website or another page
- **title** - What will appear when you hover over a link
    - While not *mandatory*, use it in order to aid assistive devices such as screen readers.

### Images

    <img src="http://placehold.it/300x100" alt="A placeholder image" width="300" height="100">

- **src** - The URL to the image
- **alt** - A literal description of the image or it's purpose. Imperative for assistive devices and should the image fail to load.
- **width** & **height** - Self-explanatory

### Attributes

Attributes are the things that go inside of the tag, they are **not** the content. For future reference:

    <tag attribute="value">content</tag>

All attributes will go inside of the actual tag (in between the < and the >) with a space separating each different attribute. Each attribute will typically have a value, and that value **must** be surrounded by "".

#### Common Attributes

- **class** - A reference to a set of CSS rules
    
- **id** - A reference for JavaScript to easily access this element

- **style** - Add some style rules quickly; this is to be avoided but it's nice to know.

- **title** - Whatever will appear when you hover an element (e.g. an image, link, or button)

## Formating

__bold__ -> `<strong>bold</strong>`

_italicized_ -> `<em>italicized</em>`

<small>i'm small!</small> -> `<small>i'm small!</small>`

<mark>highlighted text</mark> -> `<mark>highlighted</mark>`

<del>i got deleted</del> -> `<del>i got deleted</del>`

## Extras

### Embedding YouTube videos

    <iframe class="youtube-player" type="text/html" width="640" height="385" src="http://www.youtube.com/embed/VIDEO_ID" allowfullscreen frameborder="0"></iframe>

### Having fun with colors

    <style>
        background-color: black;
        color: white;
    </style>

\* __Notice__: CSS can be saved in the same page and this should never be done in a real website. At the moment this only for this activity.

    <p style="color: orange">im orange</p>

Another way to do quick style changes is using the `style` attribute part for a specific tag.

\* __Notice__: You should also avoid inline style changes whenever building a website. This is here for the sake of knowledge and this activity.

## Sample

Look at `template.html`