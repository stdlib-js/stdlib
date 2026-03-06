/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Test if a value is an ndarray-like object whose underlying data type is `complex64`.
*
* @module @stdlib/assert/is-complex64ndarray-like
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var Complex64Array = require( '@stdlib/array/complex64' );
* var isComplex64ndarrayLike = require( '@stdlib/assert/is-complex64ndarray-like' );
*
* var buffer = new Complex64Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
*
* var arr = ndarray( 'complex64', buffer, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
*
* var bool = isComplex64ndarrayLike( arr );
* // returns true
*
* bool = isComplex64ndarrayLike( [] );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
