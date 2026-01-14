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
* Test if a value is a 2-dimensional ndarray-like object whose underlying data type is `complex128`.
*
* @module @stdlib/assert/is-complex128matrix-like
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var Complex128Array = require( '@stdlib/array/complex128' );
* var isComplex128MatrixLike = require( '@stdlib/assert/is-complex128matrix-like' );
*
* var buffer = new Complex128Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
*
* var arr = ndarray( 'complex128', buffer, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
*
* var bool = isComplex128MatrixLike( arr );
* // returns true
*
* bool = isComplex128MatrixLike( [] );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
