/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Allocate a buffer using an octet array.
*
* @module @stdlib/buffer/from-array
*
* @example
* var array2buffer = require( '@stdlib/buffer/from-array' );
*
* var buf = array2buffer( [ 1, 2, 3, 4 ] );
* // returns <Buffer>
*/

// MODULES //

var hasFrom = require( './has_from.js' );
var main = require( './main.js' );
var polyfill = require( './polyfill.js' );


// MAIN //

var array2buffer;
if ( hasFrom ) {
	array2buffer = main;
} else {
	array2buffer = polyfill;
}


// EXPORTS //

module.exports = array2buffer;
