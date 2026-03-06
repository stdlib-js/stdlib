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

// MODULES //

var filledarray = require( '@stdlib/array/filled' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex128Array = require( '@stdlib/array/complex128' );


// MAIN //

/**
* Returns a filled array according to a provided fill value.
*
* @private
* @param {NonNegativeInteger} len - array length
* @param {string} dtype - array data type
* @param {*} value - fill value
* @returns {Collection} filled array
*/
function filled( len, dtype, value ) {
	var buf;
	if ( dtype === 'complex64' ) {
		buf = filledarray( value, len*2, 'float32' );
		return new Complex64Array( buf.buffer );
	}
	if ( dtype === 'complex128' ) {
		buf = filledarray( value, len*2, 'float64' );
		return new Complex128Array( buf.buffer );
	}
	return filledarray( value, len, dtype );
}


// EXPORTS //

module.exports = filled;
