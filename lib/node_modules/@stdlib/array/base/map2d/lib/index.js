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
* Apply a function to elements in a two-dimensional nested input array and assign results to elements in a new two-dimensional nested output array.
*
* @module @stdlib/array/base/map2d
*
* @example
* var ones2d = require( '@stdlib/array/base/ones2d' );
* var map2d = require( '@stdlib/array/base/map2d' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 2, 2 ];
*
* var x = ones2d( shape );
* var y = map2d( x, shape, scale );
* // returns [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
*
* @example
* var ones2d = require( '@stdlib/array/base/ones2d' );
* var zeros2d = require( '@stdlib/array/base/zeros2d' );
* var map2d = require( '@stdlib/array/base/map2d' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 2, 2 ];
*
* var x = ones2d( shape );
* var y = zeros2d( shape );
*
* var out = map2d.assign( x, y, shape, scale );
* // returns [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
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
