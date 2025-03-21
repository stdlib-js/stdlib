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
* Return an ndarray element.
*
* @module @stdlib/ndarray/at
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var at = require( '@stdlib/ndarray/at' );
*
* var x = zeros( [ 3, 3 ] );
* // returns <ndarray>
*
* var v = at( x, 0, 0 );
* // returns 0
*
* v = at( x, 5, 5 );
* // returns undefined
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
