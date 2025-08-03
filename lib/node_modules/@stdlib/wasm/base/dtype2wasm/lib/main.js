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

// MODULES //

var TABLE = require( './table.json' );


// MAIN //

/**
* Returns the WebAssembly data type associated with a provided array data type value.
*
* @param {string} dtype - array data type
* @returns {string} WebAssembly data type
*
* @example
* var out = dtype2wasm( 'float64' );
* // returns 'float64'
*
* out = dtype2wasm( 'generic' );
* // returns 'float64'
*/
function dtype2wasm( dtype ) {
	return TABLE[ dtype ] || 'float64';
}


// EXPORTS //

module.exports = dtype2wasm;
