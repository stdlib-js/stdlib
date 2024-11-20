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

// MODULES //

var table = require( './ctors.js' );


// MAIN //

/**
* Returns a complex typed array constructor.
*
* @param {string} dtype - data type
* @returns {(Function|null)} constructor or null
*
* @example
* var ctor = ctors( 'complex128' );
* // returns <Function>
*
* @example
* var ctor = ctors( 'float64' );
* // returns null
*/
function ctors( dtype ) {
	return table[ dtype ] || null;
}


// EXPORTS //

module.exports = ctors;
