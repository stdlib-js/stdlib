<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# REPL Presentation

> Run a [REPL][@stdlib/repl] presentation.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This package allows building presentations using only a [REPL][@stdlib/repl] environment.

<!-- TODO: display animated presentation GIF and/or link to an ASCI cast -->

### Features

-   Easy to write and minimal slide markup.
-   Built-in navigation commands to move and jump between slides.
-   Slide fragments (i.e., incremental slides).
-   Progress display.
-   Text alignment (left, right, centered, flush) and horizontal rules.
-   ANSI colors and styling.
-   Emoji support.
-   Executable slide code.
-   Programmatic interface.
-   Command-line interface (CLI).
-   Watch mode with automatic reload (aka, "hot reloading").

### Authoring

A [REPL][@stdlib/repl] presentation source file is a text file which includes minimal markup for delineating slides, slide fragments, speaker notes, code, text alignment, and styling. 

#### Slides

To delineate a new slide, use three dashes `---`.

```text

This is the first slide.

---

This is the second slide.

```

Leading and trailing whitespace between slides is **removed**.

#### Slide Fragments

To delineate a slide fragment (i.e., incremental slide), use two dashes `--`.

```text

This is an incremental slide.

--

...which includes some more text

--

...and even more text

--

...and even more text

```

Leading and trailing whitespace between slide fragments is **removed**. To manually space slide fragments, use the ANSI escape cope `\s`.

```text

List items are separated by blank lines...
\s

--

• Item 1.
\s

--

• Item 2.
\s

--

• Item 3.

--

\s
...by using the ANSI escape code to reset styling.

```

#### Code Blocks

To delineate slide code, use three backticks.

````text

This is a slide with code.

```
var x = 3.14;
```

````

By default, code blocks are assumed to be JavaScript. To explicitly specify the code block language, include the language identifier after the first set of backticks.

````text

This is a slide with code.

```javascript
var x = 3.14;
```

````

Only JavaScript code blocks are runnable. To run JavaScript code on the current slide, invoke the presentation command `runSlide()` at the [REPL][@stdlib/repl] prompt.

#### Speaker Notes

To delineate speaker notes, use three tildes `~~~` **after** a slide's content and **before** delineating the next slide.

```text

This is a slide

~~~

...with speaker notes.

```

#### Text Alignment

To align text, use the following markup at the **start** of a content line to align

| Character Sequence | Description   |
| ------------------ | ------------- |
| `\|`               | Centered      |
| `<`                | Left-aligned  |
| `<<`               | Left-flushed  |
| `>`                | Right-aligned |
| `>>`               | Right-flushed |

For example,

```text

| This text is center-aligned.

---

< This text is left-aligned.

---

<< This text is left-flushed.

---

> This text is right-aligned.

---

>> This text is right-flushed.

```

The space separating the alignment character sequence from the text is **required**.

#### ANSI Colors and Styling

To apply ANSI colors and styling, use the following markup

| Escape Code | Description      |
| ----------- | ---------------- |
| `\x`        | Foreground color |
| `\X`        | Background color |
| `\*`        | Bold             |
| `\_`        | Underlined       |
| `\!`        | Reverse colors   |
| `\s`        | Reset to normal  |

For example,

```text

\rThis text is colored red.\s

---

\gThis text is colored green.\s

---

\YThe text background is yellow.\s

---

\bThis text is bold.\s

---

\_This text is underlined.\s

---

\!This text has inverted colors.\s

---

\_\*This text is both underlined and bold.\s\s

```

#### Emoji

To include an [emoji][@stdlib/datasets/emoji], insert the relevant [emoji code][@stdlib/datasets/emoji-code-picto]. For example,

```text

:books: :grinning: :+1: :man: :woman:

```

Note, however, that [emoji][@stdlib/datasets/emoji] support is **limited** to [emoji][@stdlib/datasets/emoji] which are **two** columns wide. Accordingly, not all [emoji][@stdlib/datasets/emoji] are supported.

#### Horizontal Rules

To insert horizontal rules, use the following markup at the **start** of a line

| Character Sequence | Description   |
| ------------------ | ------------- |
| `/`                | Content width |
| `//`               | Full screen   |

For example, to insert a horizontal rule spanning the content width

```text

Rule length matches the length of this sentence.

/

More content below.

```

To insert a horizontal rule spanning the slide width

```text

Rule spans the slide width.

//

More content below.

```

The default rule character is `-`. To specify an alternative rule character sequence, provide a pattern. For example,

```text

/=+

//=+

```

Custom patterns can include Unicode and ANSI colors. For example,

```text

/\r=\s\**\s\r=\b=\s\**\s\b=

//\r=\s\**\s\r=\b=\s\**\s\b=

```

And lastly, custom patterns can include [emoji][@stdlib/datasets/emoji]. For example,

```text

/ :grinning: :+1:

// :grinning: :+1:

```

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

* * *

<section class="usage">

## Usage

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var Presentation = require( '@stdlib/repl/presentation' );
```

#### Presentation( \[text,] repl\[, options] )

Returns a [REPL][@stdlib/repl] presentation instance for running a presentation in a provided [`repl`][@stdlib/repl].

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Close the REPL:
repl.close();
```

The function accepts the following `options`:

-   **borderTop**: top border character sequence. Default: `'*'`.
-   **borderBottom**: bottom border character sequence. Default: `'*'`.
-   **borderLeft**: left border character sequence. Default: `'* '`.
-   **borderRight**: right border character sequence. Default: `' *'`.
-   **counter**: slide counter. Can either be `true`, `false`, or `'progress'`. Default: `false`.
-   **width**: presentation width. If `null`, the presentation width is either computed based on the screen size (if a [REPL][@stdlib/repl] output stream is TTY) or set to `80` characters. Default: `null`.
-   **height**: presentation height. If `null`, the presentation height is either computed based on the screen size (if a [REPL][@stdlib/repl] output stream is TTY) or set to `25` rows. Default: `null`.
-   **workspace**: [REPL][@stdlib/repl] workspace name. A presentation instance adds presentation commands to the specified workspace, thus allowing presentation navigation and interaction. Default: `'presentation'`.
-   **load**: file path specifying a presentation file to load. If a presentation `text` is provided, this option is **ignored**.
-   **autoClear**: `boolean` indicating whether to automatically clear the screen before writing a rendered slide to the [REPL][@stdlib/repl]. Default: `true`.
-   **loop**: `boolean` indicating whether to "loop" a presentation (i.e., proceed to the first slide after the last slide and have the last slide precede the first slide). Default: `false`.

To initialize a presentation upon instantiating a `Presentation` instance, **either** provide a `string` as the first argument containing the presentation text to render **or** set the `load` option to specify a presentation file to load.

#### Presentation.prototype.currentSlide

Returns the current presentation slide index.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Return the current presentation slide index:
var idx = pres.currentSlide;

// ...

// Close the REPL:
repl.close();
```

**Note**: the returned index is the **nominal** (i.e., one-based) slide index.

#### Presentation.prototype.end()

Jumps to the last fragment of the last slide.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Jump to the last fragment of the last slide:
pres.end();

// ...

// Close the REPL:
repl.close();
```

#### Presentation.prototype.first()

Jumps to the first slide.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Jump to the first slide:
pres.first();

// ...

// Close the REPL:
repl.close();
```

#### Presentation.prototype.firstFragment()

Jumps to the first fragment of the current slide.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Jump to the first fragment of the current slide:
pres.firstFragment();

// ...

// Close the REPL:
repl.close();
```

#### Presentation.prototype.height

Returns the presentation height.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// Return the presentation height:
var height = pres.height;

// Close the REPL:
repl.close();
```

#### Presentation.prototype.jump( n )

Jumps a specified number of slides.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Jump to the third previous slide:
pres.jump( -3 );

// ...

// Jump to the slide after the next:
pres.jump( 2 );

// ...

// Close the REPL:
repl.close();
```

#### Presentation.prototype.jumpTo( n )

Jumps to a specified slide, where `n` is the nominal (i.e., one-based) slide number.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Jump to the fourth slide:
pres.jumpTo( 4 );

// ...

// Close the REPL:
repl.close();
```

#### Presentation.prototype.last()

Jumps to the last slide.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Jump to the last slide:
pres.last();

// ...

// Close the REPL:
repl.close();
```

#### Presentation.prototype.lastFragment()

Jumps to the last fragment of the current slide.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Jump to the last fragment of the current slide:
pres.lastFragment();

// ...

// Close the REPL:
repl.close();
```

#### Presentation.prototype.length

Returns the presentation length (i.e., number of slides).

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Return the presentation length:
var len = pres.length;

// ...

// Close the REPL:
repl.close();
```

#### Presentation.prototype.load( file )

Loads a presentation from a `file`.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Load a presentation from a file:
try {
    pres.load( './path/to/presentation.txt' );
} catch ( error ) {
    console.error( error.message );
}

// ...

// Close the REPL:
repl.close();
```

**Note**: relative file paths are resolved relative to the current working directory.

#### Presentation.prototype.next()

Moves the presentation to the next slide or slide fragment.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Move to the next slide or slide fragment:
pres.next();

// ...

// Close the REPL:
repl.close();
```

#### Presentation.prototype.nextSlide()

Moves the presentation to the next slide.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Move to the next slide:
pres.nextSlide();

// ...

// Close the REPL:
repl.close();
```

#### Presentation.prototype.prev()

Moves the presentation to the previous slide or slide fragment.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Move to the previous slide or slide fragment:
pres.prev();

// ...

// Close the REPL:
repl.close();
```

#### Presentation.prototype.prevSlide()

Moves the presentation to the previous slide.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Move to the previous slide:
pres.prevSlide();

// ...

// Close the REPL:
repl.close();
```

#### Presentation.prototype.reload()

Reloads a presentation.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Reload a presentation:
try {
    pres.reload();
} catch ( error ) {
    console.error( error.message );
}

// ...

// Close the REPL:
repl.close();
```

#### Presentation.prototype.render()

Renders the current presentation slide.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Render the current presentation slide:
var slide = pres.render();
if ( slide === null ) {
    console.log( 'Unable to render slide.' );
}

// ...

// Close the REPL:
repl.close();
```

#### Presentation.prototype.run( done )

Runs any code on the current presentation slide.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Run any code on the current slide:
pres.run( done );

function done() {
    // Close the REPL:
    repl.close();
}
```

#### Presentation.prototype.show()

Shows a presentation slide (i.e., writes a rendered slide to the presentation [REPL][@stdlib/repl])

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Show the current presentation slide:
pres.show();

// ...

// Close the REPL:
repl.close();
```

#### Presentation.prototype.slideHeight

Returns the presentation content height.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// Return the presentation slide content height:
var h = pres.slideHeight;

// Close the REPL:
repl.close();
```

#### Presentation.prototype.slideWidth

Returns the presentation content width.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// Return the presentation slide content width:
var h = pres.slideWidth;

// Close the REPL:
repl.close();
```

#### Presentation.prototype.unwatch( \[error] )

Stops watching a presentation file for changes.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Watch a presentation source file:
try {
    pres.watch();
} catch ( error ) {
    console.error( error.message );
}

// ...

// Stop watching a presentation source file:
pres.unwatch();

// ...

// Close the REPL:
repl.close();
```

#### Presentation.prototype.watch()

Watches a presentation source file for changes.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// ...

// Watch a presentation source file:
try {
    pres.watch();
} catch ( error ) {
    console.error( error.message );
}

// ...

// Close the REPL:
repl.close();
```

**Note**: the method does **not** track source file "renames". If the source presentation file is renamed, watching stops.

#### Presentation.prototype.width

Returns the presentation width.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );

// Return the presentation width:
var width = pres.width;

// Close the REPL:
repl.close();
```

* * *

### Commands

[REPL][@stdlib/repl] instances running a [REPL][@stdlib/repl] presentation support the following commands within the presentation workspace...

#### blank()

Renders a blank screen.

```text
In [1]: blank();
```

#### currentSlide

Returns the nominal current presentation slide index (one-based).

```text
In [1]: var idx = currentSlide;
```

#### end()

Jumps to the last fragment of the last presentation slide.

```text
In [1]: end();
```

#### first()

Jumps to the first presentation slide.

```text
In [1]: first();
```

#### firstFragment()

Jumps to the first fragment of the current presentation slide.

```text
In [1]: firstFragment();
```

#### jump( n )

Jumps a specified number of slides.

```text
In [1]: jump( 2 ); // jump two slides forward

In [2]: jump( -2 ); // jump two slide backward
```

#### jumpTo( n )

Jumps to a specified presentation slide, where `n` is the nominal presentation slide index (one-based).

```text
In [1]: jumpTo( 2 ); // jump to the second slide
```

#### last()

Jumps to the first fragment of the last presentation slide.

```text
In [1]: last();
```

#### lastFragment()

Jumps to the last fragment of the current presentation slide.

```text
In [1]: lastFragment();
```

#### loadPresentation( file )

Loads a presentation from a file.

```text
In [1]: loadPresentation( './path/to/presentation.txt' );
```

**Note**: relative file paths are resolved relative to the current working directory.

#### next()

Moves to the next presentation slide or slide fragment.

```text
In [1]: next();
```

#### nextSlide()

Moves to the next presentation slide.

```text
In [1]: nextSlide();
```

#### numSlides

Returns the number of presentation slides.

```text
In [1]: var len = numSlides;
```

#### pres()

Prints presentation help text and shortcuts.

```text
In [1]: pres();
```

#### prev()

Moves to the previous presentation slide or slide fragment.

```text
In [1]: prev();
```

#### prevSlide()

Moves to the previous presentation slide.

```text
In [1]: prevSlide();
```

#### redraw()

Redraws the current presentation slide.

```text
In [1]: redraw();
```

#### reloadPresentation()

Reloads a presentation.

```text
In [1]: reloadPresentation();
```

#### renderSlide()

Renders the current presentation slide.

```text
In [1]: var str = renderSlide();
```

#### runSlide()

Runs slide code.

```text
In [1]: runSlide();
```

#### unwatch( \[error] )

Stops watching a source presentation file for changes.

```text
In [1]: unwatch();
```

#### watch()

Watches a source presentation file for changes.

```text
In [1]: watch();
```

**Note**: "Renaming" a source file is **not** tracked. If a source presentation file is renamed, watching stops.

* * *

### Shortcuts

| Command            | Shortcut | Description                                   |
| ------------------ | -------- | --------------------------------------------- |
| blank              | b        | Render a blank screen.                        |
| end                | L        | Jump to the last fragment of the last slide.  |
| first              | f        | Jump to the first slide.                      |
| firstFragment      | ff       | Jump to the first slide fragment.             |
| jump               | g        | Jump a specified number of slides.            |
| jumpTo             | j        | Jump to a specified slide.                    |
| last               | l        | Jump to the first fragment of the last slide. |
| lastFragment       | lf       | Jump to the last slide fragment.              |
| loadPresentation   | lp       | Load a presentation.                          |
| next               | n        | Move to the next slide or slide fragment.     |
| nextSlide          | N        | Move to the next slide.                       |
| pres               | h        | Print presentation help text.                 |
| prev               | p        | Move to the previous slide or slide fragment. |
| prevSlide          | P        | Move to the previous slide.                   |
| redraw             | rd       | Redraw the current slide.                     |
| reloadPresentation | rlp      | Reload the current presentation.              |
| runSlide           | r        | Run slide code.                               |
| unwatch            | uw       | Stop watching a source file for changes.      |
| watch              | w        | Watch a source file for changes.              |

* * *

### Events

A [REPL][@stdlib/repl] presentation emits the following events...

#### 'watch'

This event is emitted upon watching a source presentation file.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

function onWatch() {
    console.log( 'Watching a source file.' );
}

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );
pres.on( 'watch', onWatch );

// ...

// Close the REPL:
repl.close();
```

#### 'change'

When watching a source presentation file, this event is emitted whenever a source presentation file changes.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

function onChange() {
    console.log( 'Source file changed.' );
}

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );
pres.on( 'change', onChange );

// ...

// Close the REPL:
repl.close();
```

#### 'unwatch'

This event is emitted upon no longer watching a source presentation file.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );

function onUnwatch( error ) {
    console.log( 'No longer watching a source file.' );
    if ( error ) {
        console.error( error.message );
    }
    // Include logic to, e.g., restart watching a source presentation file...
}

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Create a new REPL presentation:
var pres = new Presentation( repl );
pres.on( 'unwatch', onUnwatch );

// ...

// Close the REPL:
repl.close();
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="notes">

## Notes

-   Multiple presentations can be run simultaneously within the same [REPL][@stdlib/repl] environment. To do so, assign each presentation instance to a unique workspace.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint-disable stdlib/no-redeclare -->

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var debug = require( '@stdlib/streams/node/debug-sink' );
var REPL = require( '@stdlib/repl' );
var Presentation = require( '@stdlib/repl/presentation' );

function onExit() {
    console.log( '' );
    console.log( 'REPL closed.' );
}

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});
repl.on( 'exit', onExit );

// Create a new REPL presentation:
var pres = new Presentation( repl, {
    'counter': 'progress'
});

// Load a presentation file:
pres.load( join( __dirname, 'examples', 'presentation.txt' ) );

// Get the number of slides:
var len = pres.length;

// Render the first slide:
pres.show();

// Automate the slide show:
setTimeout( next, 100 );

function next() {
    // If we are finished with the slide show, close the REPL...
    if ( pres.currentSlide === len ) {
        return repl.close();
    }
    pres.next().show();
    setTimeout( next, 100 );
}
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: stdlib-repl-presentation [options] [<filepath>]

Options:

  -h, --help                    Print this message.
  -V, --version                 Print the package version.
      --border-top <str>        Top border. Default: '*'.
      --border-bottom <str>     Bottom border. Default: '*'.
      --border-left <str>       Left border. Default: '* '.
      --border-right <str>      Right border. Default: ' *'.
      --counter <value>         Show slide counter.
      --width <width>           Presentation width.
      --height <height>         Presentation height.
      --workspace <workspace>   REPL workspace name. Default: presentation.
      --input-prompt <prompt>   Input prompt. Default: 'In [%d]: '.
      --output-prompt <prompt>  Output prompt. Default: 'Out[%d]: '.
      --padding <padding>       Empty lines between commands. Default: 1.
      --save <filepath>         File to save REPL command history.
      --logfile <filepath>      File to log REPL commands and printed output.
      --timeout <timeout>       Milliseconds before terminating a command.
      --quiet                   Disable printing of REPL logs and diagnostics.
      --no-autoclear            Disable automatic clearing when rendering.
      --loop                    Loop a presentation.
      --watch                   Watch the source presentation file for changes.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   Use as a [standard stream][standard-streams] is **not** currently supported on Windows.
-   If provided presentation text over `stdin`, the `filepath` argument and the `watch` option are **ignored**.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ stdlib-repl-presentation ./path/to/presentation.txt
```

To use as a [standard stream][standard-streams],

```bash
cat ./path/to/presentation.txt | stdlib-repl-presentation
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[@stdlib/repl]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/repl

[@stdlib/datasets/emoji]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/emoji

[@stdlib/datasets/emoji-code-picto]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/emoji-code-picto

</section>

<!-- /.links -->
