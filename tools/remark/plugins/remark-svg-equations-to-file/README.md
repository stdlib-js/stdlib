# SVG Equations

> [remark][remark] plugin to create SVG equation files from Markdown equation comments.

<section class="usage">

## Usage

```javascript
var createSVGs = require( '/path/to/@stdlib/tools/remark/plugins/remark-svg-equations-to-file' );
```

#### createSVGs( options )

Attaches a plugin to a [remark][remark] processor in order to create SVG equation files from Markdown equation comments.

```javascript
var remark = require( 'remark' );

var transform = remark.use( createSVGs ).process;
```

The function accepts the following `options`:

-   **dir**: output directory for SVG files. Default: `./docs/img/`.
-   **prefix**: filename prefix for each generated SVG. Default: `equation_`.

By default, the plugin attempts to resolve an output directory relative to each processed Markdown file. To specify an alternative directory, including an absolute directory, set the `dir` option.

```javascript
var opts = {
    'dir': '/path/to/absolute/dir/for/svg/equations'
};

var transform = remark.use( createSVGs, opts ).process;
```

To specify an alternative filename prefix, set the `prefix` option.

```javascript
var opts = {
    'prefix': 'eqn_'
};

var transform = remark.use( createSVGs, opts ).process;
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When generating an output filepath, the implementation uses the equation `label` attribute to generate an SVG filename. For example, given

    ```html
    <!-- <equation class="equation" label="eq:absolute_value" align="center" raw="|x| = \begin{cases} x & \textrm{if}\ x \geq 0 \\ -x & \textrm{if}\ x < 0\end{cases}" alt="Absolute value"> -->

    <!-- </equation> -->
    ```

    the SVG equation filename would be `equation_absolute_value.svg`, where `equation_` is the default filename prefix.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

```javascript
var path = require( 'path' );
var toVFile = require( 'to-vfile' );
var remark = require( 'remark' );
var createSVGs = require( '/path/to/@stdlib/tools/remark/plugins/remark-svg-equations-to-file' );

var fpath;
var vfile;
var opts;

// Load a Markdown file...
fpath = path.join( __dirname, 'fixtures/simple.md' );
vfile = toVFile.readSync( fpath );

// Specify the output directory for SVG equation files...
opts = {
    'dir': './build/docs/img/',
    'prefix': ''
};

// Process a Markdown file and generate SVG equation files:
remark().use( createSVGs, opts ).process( vfile, done );

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    // Output the processed Markdown file:
    console.log( out.contents );
}
```

</section>

<!-- /.examples -->

<section class="links">

[remark]: https://github.com/wooorm/remark

</section>

<!-- /.links -->
