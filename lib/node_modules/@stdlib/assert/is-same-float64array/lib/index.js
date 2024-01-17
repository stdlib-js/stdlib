/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Test if two arguments are both Float64Arrays and have the same values.
*
* @module @stdlib/assert/is-same-float64array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* var out = isSameFloat64Array( x, y );
* // returns true
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 4.0 ] );
*
* var out = isSameFloat64Array( x, y );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
