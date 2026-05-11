<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# toTransposed

> Return a new ndarray containing the elements of an input ndarray but whose last two dimensions are transposed.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var toTransposed = require( '@stdlib/ndarray/base/to-transposed' );
```

#### toTransposed( x )

Returns a new ndarray containing the elements of an input ndarray but whose last two dimensions are transposed.

```javascript
var array = require( '@stdlib/ndarray/array' );

var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );
// returns <ndarray>[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

var out = toTransposed( x );
// returns <ndarray>[ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
```

The function accepts the following arguments:

-   **x**: input ndarray.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an ndarray with fewer than two dimensions, the function raises an exception.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable stdlib/no-redeclare -->

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var rpad = require( '@stdlib/string/right-pad' );
var toTransposed = require( '@stdlib/ndarray/base/to-transposed' );

function print( arr, name ) {
    var str;
    var sh;
    var p;
    var i;
    var j;
    var k;

    sh = arr.shape;
    for ( i = 0; i < sh[0]; i++ ) {
        str = name+'['+i+',:,:] = [ ';
        p = str.length + 1;
        for ( j = 0; j < sh[1]; j++ ) {
            if ( j > 0 ) {
                str += rpad( '\n', p, ' ' );
            }
            for ( k = 0; k < sh[2]; k++ ) {
                str += arr.get( i, j, k );
                if ( k < sh[2]-1 ) {
                    str += ', ';
                }
            }
        }
        console.log( str + ' ]\n' );
    }
}

// Create a data buffer:
var buf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Create a stack of matrices:
var x = new ndarray( 'float64', buf, [ 2, 2, 3 ], [ 0, 3, 1 ], 0, 'row-major' );

// Transpose the stack of matrices:
var y = toTransposed( x );

// Print the stacks:
console.log( '' );
print( x, 'X' );
console.log( '' );
print( y, 'Y' );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
