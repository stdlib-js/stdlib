# JavaScript Examples

> [remark][remark] plugin to run JavaScript examples.

<section class="usage">

## Usage

```javascript
var run = require( '/path/to/@stdlib/tools/remark/plugins/remark-run-javascript-examples' );
```

#### run()

Attaches a [remark][remark] plugin which, when provided a Markdown abstract syntax `tree`, runs JavaScript examples.

```javascript
var remark = require( 'remark' );

var str = '## Examples\n\n```javascript\nconsole.log( "HELLO WORLD!" );\n```';

remark().use( run ).process( str, done );

function done( error ) {
    if ( error ) {
        throw error;
    }
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
var readSync = require( 'to-vfile' ).readSync;
var run = require( '/path/to/@stdlib/tools/remark/plugins/remark-run-javascript-examples' );

// Load a Markdown file:
var fpath = join( __dirname, 'examples', 'fixtures', 'simple.txt' );
var file = readSync( fpath, 'utf8' );

// Run examples:
remark().use( run ).process( file, done );

function done( error ) {
    if ( error ) {
        throw error;
    }
}
```

</section>

<!-- /.examples -->

<section class="links">

[remark]: https://github.com/wooorm/remark

</section>

<!-- /.links -->
