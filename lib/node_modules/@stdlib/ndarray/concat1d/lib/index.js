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
* Return a one-dimensional ndarray formed by concatenating provided input arguments.
*
* @module @stdlib/ndarray/concat1d
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var concat1d = require( '@stdlib/ndarray/concat1d' );
*
* var x = array( [ -1.0, 2.0, 3.0, 4.0 ] );
* var y = array( [ -5.0, 6.0, -7.0, -8.0, 9.0, -10.0 ] );
*
* var out = concat1d( x, y );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ -1.0, 2.0, 3.0, 4.0, -5.0, 6.0, -7.0, -8.0, 9.0, -10.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;

// exports: { "assign": "main.assign" }
