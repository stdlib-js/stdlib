/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/* eslint-disable no-undef, stdlib/jsdoc-doctest */ // TODO: remove once `array/float16` added; consider refactoring similar to `assert/is-complex128array`

'use strict';

// MODULES //

var nativeClass = require( '@stdlib/utils/native-class' );


// VARIABLES //

var hasFloat16Array = ( typeof Float16Array === 'function' ); // eslint-disable-line stdlib/require-globals


// MAIN //

/**
* Tests if a value is a Float16Array.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a Float16Array
*
* @example
* var Float16Array = require( '@stdlib/array/float16' );
*
* var bool = isFloat16Array( new Float16Array( 10 ) );
* // returns true
*
* @example
* var bool = isFloat16Array( [] );
* // returns false
*/
function isFloat16Array( value ) {
	return (
		( hasFloat16Array && value instanceof Float16Array ) || // eslint-disable-line stdlib/require-globals
		nativeClass( value ) === '[object Float16Array]'
	);
}


// EXPORTS //

module.exports = isFloat16Array;
