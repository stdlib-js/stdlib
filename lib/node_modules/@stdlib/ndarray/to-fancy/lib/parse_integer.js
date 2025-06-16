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

var MultiSlice = require( '@stdlib/slice/multi' );


// MAIN //

/**
* Parses a serialized integer.
*
* @private
* @param {string} raw - original unprocessed input string
* @param {string} str - serialized integer
* @returns {MultiSlice} MultiSlice object
*
* @example
* var s = parseInteger( '  1  ', '1' );
* // returns <MultiSlice>
*/
function parseInteger( raw, str ) {
	return new MultiSlice( parseInt( str, 10 ) );
}


// EXPORTS //

module.exports = parseInteger;
