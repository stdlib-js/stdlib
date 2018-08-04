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

var Complex128 = require( '@stdlib/complex/float64' );
var Complex64 = require( '@stdlib/complex/float32' );


// MAIN //

/**
* Tests if a value is a complex number-like object.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a complex number-like object.
*
* @example
* var Complex128 = require( '@stdlib/complex/float64' );
* var Complex64 = require( '@stdlib/complex/float32' );
*
* var x = new Complex128( 4.0, 2.0 );
* var bool = isComplexLike( x );
* // returns true
*
* x = new Complex64( 4.0, 2.0 );
* bool = isComplexLike( x );
* // returns true
*/
function isComplexLike( value ) {
	if ( value instanceof Complex128 || value instanceof Complex64 ) {
		return true;
	}
	return (
		typeof value === 'object' &&
		value !== null &&
		typeof value.re === 'number' &&
		typeof value.im === 'number'
	);
}


// EXPORTS //

module.exports = isComplexLike;
