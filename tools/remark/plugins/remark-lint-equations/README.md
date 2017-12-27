# Lint Equations

> [remark][remark] plugin to lint Markdown equation elements.

<section class="usage">

## Usage

```javascript
var lint = require( '/path/to/@stdlib/tools/remark/plugins/remark-lint-equations' );
```

#### lint()

Attaches a [remark][remark] plugin which, when provided a Markdown abstract syntax `tree`, lints equation elements.

<!-- eslint-disable no-useless-escape -->

```javascript
var remark = require( 'remark' );

var str = '<!-- <equation class="equation" label="" align="center" raw="|x| = \begin{cases} x & \textrm{if}}\ x \geq 0 \\ -x & \textrm{{if}\ x < 0\end{cases}" alt=""> -->\n\n<!-- </equation> -->';

remark().use( lint ).process( str, done );

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Finished!' );
}
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-sync -->

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var remark = require( 'remark' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var lint = require( '/path/to/@stdlib/tools/remark/plugins/remark-lint-equations' );

// Load a Markdown file:
var fpath = join( __dirname, 'fixtures', 'file.txt' );
var file = readFileSync( fpath );

// Lint equations:
remark().use( lint ).process( file.toString(), done );

function done( error ) {
    if ( error ) {
        throw error;
    }
    console.log( 'Finished!' );
}
```

</section>

<!-- /.examples -->

<section class="links">

[remark]: https://github.com/wooorm/remark

</section>

<!-- /.links -->
