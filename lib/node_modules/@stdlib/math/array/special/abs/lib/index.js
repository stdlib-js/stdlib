/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Compute the absolute value for each element in an input array.
*
* @module @stdlib/math/array/special/abs
*
* @example
* var abs = require( '@stdlib/math/array/special/abs' );
*
* var out = abs( [ -1.0, -2.0, -3.0 ] );
* // returns [ 1.0, 2.0, 3.0 ]
*
* @example
* var abs = require( '@stdlib/math/array/special/abs' );
*
* var y = [ 0.0, 0.0, 0.0 ];
*
* var out = abs.assign( [ -1.0, -2.0, -3.0 ], y );
* // returns [ 1.0, 2.0, 3.0 ]
*
* var bool = ( out === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;

// exports: { "assign": "main.assign" }
