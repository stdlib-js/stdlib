# ESLint

> [remark][remark] plugin to lint Markdown JavaScript code blocks using [ESLint][eslint].


<section class="usage">

## Usage

``` javascript
var plugin = require( '/path/to/@stdlib/tools/remark/plugins/remark-lint-eslint' );
```

#### plugin( tree, file, options )

Provided a Markdown abstract syntax `tree`, lints JavaScript code blocks.

``` javascript
var remark = require( 'remark' );

// Create a synchronous Markdown text linter:
var linter = remark().use( plugin ).procecssSync;

// Lint Markdown:
var vfile = linter( '``` javascript\nvar beep = \'boop\';\n```' );
```

The plugin recognizes the following `options`:

* __config__: path to an [ESLint][eslint] configuration file. A configuration path is resolved relative to the current working directory of the calling process.

To specify configuration `options`, set the respective properties.

``` javascript
var remark = require( 'remark' );

// Define options:
var opts = {
    'config': '/path/to/.eslintrc'
};

// Create a synchronous Markdown text linter:
var linter = remark().use( plugin, opts ).procecssSync;

// Lint Markdown:
var vfile = linter( '``` javascript\nvar beep = \'boop\';\n```' );
```

</section>

<!-- /.usage -->


<section class="examples">

## Examples

``` javascript
var join = require( 'path' ).join;
var resolve = require( 'path' ).resolve;
var remark = require( 'remark' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var plugin = require( '/path/to/@stdlib/tools/remark/plugins/remark-lint-eslint' );

// Define path to an ESLint config file:
var config = resolve( __dirname, '..', '..', '..', '..', 'etc', 'eslint', '.eslintrc.markdown.js' );

// Load a Markdown file:
var fpath = join( __dirname, 'examples', 'fixtures', 'file.md' );
var file = readFileSync( fpath );

// Define plugin options:
var opts = {
    'config': config
};

// Lint code blocks:
var out = remark().use( plugin, opts ).processSync( file.toString() ); // eslint-disable-line no-sync

console.log( out );
```

</section>

<!-- /.examples -->


<section class="links">

[remark]: https://github.com/wooorm/remark
[eslint]: http://eslint.org/

</section>

<!-- /.links -->
