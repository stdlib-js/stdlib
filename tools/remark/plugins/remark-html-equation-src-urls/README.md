HTML Equation Source URLs
===

> [remark][remark] plugin to insert SVG equation [rawgit][rawgit] URLs into Markdown HTML equation elements.


<!-- <usage> -->

## Usage

``` javascript
var insertURLs = require( 'remark-html-equation-src-urls' );
```

#### insertURLs( options )

Attaches a plugin to a [remark][remark] processor in order to insert SVG equation [rawgit][rawgit] URLs into Markdown HTML equation elements.

``` javascript
var remark = require( 'remark' );

remark.use( insertURLs );
```

The function accepts the following `options`:

* __dir__: directory containing SVG equations. Default: `./docs/img/`.

By default, the plugin attempts to resolve SVG equations relative to each processed Markdown file. The default directory is `./docs/img/`. To specify an alternative directory, including an absolute directory, set the `dir` option.

``` javascript
var opts = {
    'dir': '/path/to/absolute/dir/with/svg/equations'
};

remark.use( insertURLs, opts );
```

<!-- </usage> -->


<!-- <notes> -->

## Notes

* The current working directory of the calling process __must__ be part of a git repository.

* When resolving an SVG equation filepath, the implementation __assumes__ that the HTML equation `label` attribute corresponds to the SVG equation filename.

  ``` html
  <!-- <equation class="equation" label="eq:absolute_value" align="center" raw="|x| = \begin{cases} x & \textrm{if}\ x \geq 0 \\ -x & \textrm{if}\ x < 0\end{cases}" alt="Absolute value"> -->

  <!-- </equation> -->
  ```

  Here, the implementation would assume that the SVG equation filename is `absolute_value.svg`.

<!-- </notes> -->


<!-- <examples> -->

## Examples

``` javascript
var toVFile = require( 'to-vfile' );
var remark = require( 'remark' );
var path = require( 'path' );
var insertURLs = require( 'remark-html-equation-src-urls' );

var fpath;
var vfile;
var opts;
var out;

// Load a Markdown file...
fpath = path.join( __dirname, 'fixtures/simple.md' );
vfile = toVFile.readSync( fpath );

// Specify the directory containing SVG equations:
opts = {
    'dir': './docs/img/' // relative to Markdown file
};

// Insert src URLs into HTML equation elements:
out = remark().use( insertURLs, opts ).process( vfile );

// Output the results:
console.log( out.contents );
```

<!-- </examples> -->


<!-- <links> -->

[remark]: https://github.com/wooorm/remark
[rawgit]: https://rawgit.com/

<!-- </links> -->
