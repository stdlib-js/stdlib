/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Serialize ndarray meta data.
*
* @module @stdlib/ndarray/base/serialize-meta-data
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var serialize = require( '@stdlib/ndarray/base/serialize-meta-data' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
*
* var dv = serialize( x );
* // returns <DataView>
*/

// MODULES //

var hasBigIntSupport = require( '@stdlib/assert/has-bigint-support' );
var serialize = require( './main.js' );
var polyfill = require( './polyfill.js' );


// MAIN //

var main;
if ( hasBigIntSupport() ) {
	main = serialize;
} else {
	main = polyfill;
}


// EXPORTS //

module.exports = main;
