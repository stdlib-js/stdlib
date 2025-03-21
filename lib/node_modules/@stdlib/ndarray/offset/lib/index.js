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
* Return the index offset specifying the underlying buffer index of the first iterated ndarray element.
*
* @module @stdlib/ndarray/offset
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var offset = require( '@stdlib/ndarray/offset' );
*
* var n = offset( zeros( [ 3, 3, 3 ] ) );
* // returns 0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
