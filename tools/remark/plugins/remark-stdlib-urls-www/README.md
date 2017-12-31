# Website URLs

> [remark][remark] plugin to resolve package identifiers to website URIs.

<section class="usage">

## Usage

```javascript
var links = require( '/path/to/@stdlib/tools/remark/plugins/remark-stdlib-urls-www' );
```

#### links( options )

Attaches a plugin to a [remark][remark] processor to resolve package identifiers to website URIs.

```javascript
var remark = require( 'remark' );

remark.use( links );
```

The function accepts the following `options`:

-   **version**: documentation version. Default: `develop`.

By default, the plugin resolves package identifiers to the `develop` documentation. To specify an alternative version, set the `version` option.

```javascript
var opts = {
    'version': 'v1.0.1'
};

remark.use( links, opts );
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var toVFile = require( 'to-vfile' );
var remark = require( 'remark' );
var join = require( 'path' ).join;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var links = require( '@stdlib/tools/remark/plugins/remark-stdlib-urls-www' );

var fpath;
var opts;
var file;
var out;

// Load a Markdown file...
fpath = join( __dirname, 'fixtures/simple.txt' );
opts = {
    'encoding': 'utf8'
};
file = readFileSync( fpath, opts );

// Resolve URIs:
out = remark().use( links ).processSync( file );

// Print the results:
console.log( out.contents );
```

</section>

<!-- /.examples -->

<section class="links">

[remark]: https://github.com/wooorm/remark

</section>

<!-- /.links -->
