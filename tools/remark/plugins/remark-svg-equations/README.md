SVG Equations
===

> [remark][remark] plugin to create SVG equation files from Markdown HTML equation tags.


<!-- <usage> -->

## Usage

``` javascript
var createSVGs = require( 'remark-svg-equations' );
```

#### createSVGs( options )

Attaches a plugin to a [remark][remark] processor in order to create SVG equation files from Markdown HTML equation tags.

``` javascript
var remark = require( 'remark' );

remark.use( createSVGs );
```

The function accepts the following `options`:

* __dir__: output directory for SVG files. Default: `./docs/img/`.

By default, the plugin attempts to resolve an output directory relative to each processed Markdown file. The default directory is `./docs/img/`. To specify an alternative directory, including an absolute directory, set the `dir` option.

``` javascript
var opts = {
    'dir': '/path/to/absolute/dir/for/svg/equations'
};

remark.use( createSVGs, opts );
```

<!-- </usage> -->


<!-- <notes> -->

## Notes

* When generating an output filepath, the implementation uses the HTML equation `label` attribute as the SVG filename. For example, given

  ``` html
  <!-- <equation class="equation" label="eq:absolute_value" align="center" raw="|x| = \begin{cases} x & \textrm{if}\ x \geq 0 \\ -x & \textrm{if}\ x < 0\end{cases}" alt="Absolute value"> -->

  <!-- </equation> -->
  ```

  the SVG equation filename would be `absolute_value.svg`.

<!-- </notes> -->


<!-- <examples> -->

## Examples

``` javascript
var toVFile = require( 'to-vfile' );
var remark = require( 'remark' );
var path = require( 'path' );
var createSVGs = require( 'remark-svg-equations' );

var fpath;
var vfile;
var opts;
var out;

// Load a Markdown file...
fpath = path.join( __dirname, 'fixtures/simple.md' );
vfile = toVFile.readSync( fpath );

// Specify the output directory for SVG equation files...
opts = {
    'dir': './doc/img/'
};

// Process a Markdown file and generate SVG equation files:
out = remark().use( createSVGs, opts ).process( vfile );

// Output the processed Markdown file:
console.log( out.contents );
```

<!-- </examples> -->


<!-- <links> -->

[remark]: https://github.com/wooorm/remark

<!-- </links> -->
