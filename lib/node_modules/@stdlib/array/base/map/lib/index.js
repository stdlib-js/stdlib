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
* Apply a callback function to elements in an input array and assign results to elements in a new output array.
*
* @module @stdlib/array/base/map
*
* @example
* var ones = require( '@stdlib/array/base/ones' );
* var map = require( '@stdlib/array/base/map' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var x = ones( 4 );
* var y = map( x, scale );
* // returns [ 10.0, 10.0, 10.0, 10.0 ]
*
* @example
* var ones = require( '@stdlib/array/base/ones' );
* var zeros = require( '@stdlib/array/base/zeros' );
* var map = require( '@stdlib/array/base/map' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var x = ones( 4 );
* var y = zeros( x.length );
*
* var out = map.assign( x, y, 1, 0, scale );
* // returns [ 10.0, 10.0, 10.0, 10.0 ]
*
* var bool = ( out === y );
* // returns true
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
