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

var CTORS = require( './ctors.js' );


// MAIN //

/**
* Creates a complex number.
*
* @param {number} real - real component
* @param {number} imag - imaginary component
* @param {string} [dtype="float64"] - data type
* @throws {TypeError} must provide a recognized data type
* @returns {Complex} complex number
*
* @example
* var z = complex( 5.0, 3.0, 'float64' );
* // returns <Complex128>
*/
function complex( real, imag, dtype ) {
	var ctor;
	if ( arguments.length > 2 ) {
		ctor = CTORS[ dtype ];
		if ( ctor ) {
			return new ctor( real, imag );
		}
		throw new TypeError( 'invalid argument. Must provide a recognized data type. Value: `'+dtype+'`.' );
	}
	return new CTORS[ 'float64' ]( real, imag );
}


// EXPORTS //

module.exports = complex;
