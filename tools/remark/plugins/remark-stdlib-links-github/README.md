# Repository Links

> [remark][remark] plugin in order to resolve package identifiers to repository URIs.

<section class="usage">

## Usage

```javascript
var links = require( '/path/to/@stdlib/tools/remark/plugins/remark-stdlib-links-github' );
```

#### links( options )

Attaches a plugin to a [remark][remark] processor in order to resolve package identifiers to repository URIs.

```javascript
var remark = require( 'remark' );

remark.use( links );
```

The function accepts the following `options`:

-   **branch**: repository branch. Default: `develop`.

By default, the plugin resolves package identifiers to the `develop` branch on GitHub. To specify an alternative branch, set the `branch` option.

```javascript
var opts = {
    'branch': 'master'
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

```javascript
var toVFile = require( 'to-vfile' );
var remark = require( 'remark' );
var path = require( 'path' );
var links = require( '/path/to/@stdlib/tools/remark/plugins/remark-stdlib-links-github' );

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
