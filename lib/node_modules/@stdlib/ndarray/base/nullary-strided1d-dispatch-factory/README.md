<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# nullaryStrided1dDispatchFactory

> Create a function for applying a strided function to an ndarray.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var nullaryStrided1dDispatchFactory = require( '@stdlib/ndarray/base/nullary-strided1d-dispatch-factory' );
```

#### nullaryStrided1dDispatchFactory( table, idtypes, odtypes\[, options] )

Returns a function for applying a strided function to an ndarray.

<!-- eslint-disable id-length -->

```javascript
var base = require( '@stdlib/blas/ext/base/ndarray/gsorthp' );

var table = {
    'default': base
};

var dtypes = [ 'float64', 'float32', 'generic' ];

var nullary = nullaryStrided1dDispatchFactory( table, [ dtypes ], dtypes );
```

The function has the following parameters:

-   **table**: strided function dispatch table. Must have the following properties:

    -   **default**: default strided function which should be invoked when provided ndarrays have data types which do not have a corresponding specialized implementation.

    A dispatch table may have the following additional properties:

    -   **types**: one-dimensional list of ndarray data types describing specialized output ndarray argument signatures. Only the output ndarray argument data types should be specified. Additional ndarray argument data types should be omitted and are not considered during dispatch. The length of `types` must equal the number of strided functions specified by `fcns`.
    -   **fcns**: list of strided functions which are specific to specialized output ndarray argument signatures.

-   **idtypes**: list containing lists of supported input data types for each input ndarray argument.

-   **odtypes**: list of supported output data types.

-   **options**: function options (_optional_).

The function supports the following options:

-   **strictTraversalOrder**: boolean specifying whether the order of element traversal must match the memory layout order of an output ndarray. Default: `false`.

#### nullary( out\[, ...args]\[, options] )

Applies a strided function and assigns results to a provided output ndarray.

<!-- eslint-disable id-length -->

```javascript
var base = require( '@stdlib/blas/ext/base/ndarray/gsorthp' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'all' );

var table = {
    'default': base
};
var nullary = nullaryStrided1dDispatchFactory( table, [ idt ], odt );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var order = scalar2ndarray( 1.0, {
    'dtype': 'generic'
});

var out = nullary( x, order );
// returns <ndarray>

var arr = ndarray2array( out );
// returns [ -3.0, -1.0, 2.0 ]

var bool = ( out === x );
// returns true
```

The method has the following parameters:

-   **out**: output ndarray.
-   **args**: additional input ndarray arguments (_optional_).
-   **options**: function options (_optional_).

The method accepts the following options:

-   **dims**: list of dimensions over which to perform operation.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A strided function should have the following signature:

    ```text
    f( arrays )
    ```

    where

    -   **arrays**: array containing an output ndarray, followed by any additional ndarray arguments.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length, max-len -->

<!-- eslint no-undef: "error" -->

```javascript
var dsorthp = require( '@stdlib/blas/ext/base/ndarray/dsorthp' );
var ssorthp = require( '@stdlib/blas/ext/base/ndarray/ssorthp' );
var base = require( '@stdlib/blas/ext/base/ndarray/gsorthp' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var nullaryStrided1dDispatchFactory = require( '@stdlib/ndarray/base/nullary-strided1d-dispatch-factory' );

// Define the supported input and output data types:
var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'all' );

// Define a dispatch table:
var table = {
    'types': [
        'float64', // input/output
        'float32'  // input/output
    ],
    'fcns': [
        dsorthp,
        ssorthp
    ],
    'default': base
};

// Create an interface for performing an operation:
var sorthp = nullaryStrided1dDispatchFactory( table, [ idt ], odt );

// Generate an array of random numbers:
var xbuf = discreteUniform( 25, -10, 10, {
    'dtype': 'generic'
});

// Wrap in an ndarray:
var x = new ndarray( 'generic', xbuf, [ 5, 5 ], [ 5, 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var order = scalar2ndarray( 1.0, {
    'dtype': 'generic'
});

// Perform operation:
sorthp( x, order );

// Print the results:
console.log( ndarray2array( x ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
