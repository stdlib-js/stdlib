# toVirtualDOM

> Convert Markdown to [Virtual DOM][virtual-dom].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var toVirtualDOM = require( '@stdlib/tools/markdown/to-vdom' );
```

#### toVirtualDOM( markdown )

Converts a Markdown `string` or [`Buffer`][node-buffer] to a [Virtual DOM][virtual-dom] tree.

```javascript
var vtree = toVirtualDOM( '# Beep\n\n> Boop!' );
// returns <VTree>
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var toHTML = require( 'vdom-to-html' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var toVirtualDOM = require( '@stdlib/tools/markdown/to-vdom' );

var file = join( __dirname, 'examples', 'fixtures', 'fixture.md' );

file = readFileSync( file, {
    'encoding': 'utf8'
});
if ( file instanceof Error ) {
    throw file;
}

var vtree = toVirtualDOM( file );
console.log( toHTML( vtree ) );
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

```bash
Usage: markdown-to-vdom [options] [markdown]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ markdown-to-vdom '# Beep\n\n> Boop!'
```

To use as a standard stream,

```bash
$ echo $'# Beep\n\n> Boop!' | markdown-to-vdom
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[node-buffer]: https://nodejs.org/api/buffer.html

[virtual-dom]: https://github.com/Matt-Esch/virtual-dom

</section>

<!-- /.links -->
