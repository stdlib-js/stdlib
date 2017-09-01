# Image Equations

> [remark][remark] plugin to insert Markdown image equation elements.

<section class="usage">

## Usage

```javascript
var insertEquations = require( '/path/to/@stdlib/tools/remark/plugins/remark-img-equations' );
```

#### insertEquations()

Attaches a plugin to a [remark][remark] processor in order to insert Markdown image equation elements between equation comments.

<!-- eslint-disable no-useless-escape -->

```javascript
var remark = require( 'remark' );

var str = 'The absolute value is defined as';
str += '\n';
str += '<!-- <equation class="equation" label="eq:absolute_value" align="center" raw="|x| = \begin{cases} x & \textrm{if}\ x \geq 0 \\ -x & \textrm{if}\ x < 0\end{cases}" alt="Absolute value"> -->\n';
str += '\n';
str += '<!-- </equation> -->';

var vfile = remark.use( insertEquations ).processSync( str );

console.log( vfile.contents );
/* => 
    The absolute value is defined as

    <!-- <equation class="equation" label="eq:absolute_value" align="center" raw="|x| = \begin{cases} x & \textrm{if}\ x \geq 0 \\ -x & \textrm{if}\ x < 0\end{cases}" alt="Absolute value"> -->

    <div class="equation" align="center" data-raw-text="|x| = \begin{cases} x & \textrm{if}\ x \geq 0 \\ -x & \textrm{if}\ x < 0\end{cases}" data-equation="eq:absolute_value">
        <img src="" alt="Absolute value">
        <br>
    </div>

    <!-- </equation> -->
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

```javascript
var join = require( 'path' ).join;
var remark = require( 'remark' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var insertEquations = require( '/path/to/@stdlib/tools/remark/plugins/remark-img-equations' );

var fpath;
var opts;
var file;
var out;

// Load a Markdown file...
fpath = join( __dirname, 'fixtures/simple.md' );
opts = {
    'encoding': 'utf8'
};
file = readFileSync( fpath, opts );

// Insert equations:
out = remark().use( insertEquations ).processSync( file );
```

</section>

<!-- /.examples -->

<section class="links">

[remark]: https://github.com/wooorm/remark

</section>

<!-- /.links -->
