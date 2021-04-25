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

// MODULES //

var dispatch = require( '@stdlib/math/tools/unary' );
var config = require( './config.json' );
var table = require( './table.js' );


// MAIN //

/**
* Computes the absolute value.
*
* @name abs
* @type {Function}
* @param {(ndarray|Collection|number)} x - input value
* @param {Options} [options] - options
* @param {string} [options.order] - output array order
* @param {string} [options.dtype] - output array dtype
* @throws {TypeError} first argument must be a supported data type
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {(ndarray|Collection|number)} results
*
* @example
* var y = abs( -1.0 );
* // returns 1.0
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -1.0, 0.0 ] );
*
* var y = abs( x );
* // returns <Float64Array>[ 1.0, 1.0, 0.0 ]
*
* @example
* var x = [ 1.0, -1.0, 0.0 ];
*
* var y = abs( x );
* // returns [ 1.0, 1.0, 0.0 ]
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1.0, -2.0 ], [ -3.0, 4.0 ] ] );
* // returns <ndarray>
*
* var y = abs( x );
* // returns <ndarray>
*
* var v = y.get( 0, 1 );
* // 2.0
*/
var abs = dispatch( table, config );


// EXPORTS //

module.exports = abs;
