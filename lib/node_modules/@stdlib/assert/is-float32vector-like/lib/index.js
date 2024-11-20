/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Test if a value is a 1-dimensional ndarray-like object whose underlying data type is `float32`.
*
* @module @stdlib/assert/is-float32vector-like
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var Float32Array = require( '@stdlib/array/float32' );
* var isFloat32VectorLike = require( '@stdlib/assert/is-float32vector-like' );
*
* var buffer = new Float32Array( [ 0, 0, 0, 0 ] );
*
* var arr = ndarray( 'float32', buffer, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var bool = isFloat32VectorLike( arr );
* // returns true
*
* bool = isFloat32VectorLike( [] );
* // returns false
*/

// MODULES //

var isFloat32VectorLike = require( './main.js' );


// EXPORTS //

module.exports = isFloat32VectorLike;
