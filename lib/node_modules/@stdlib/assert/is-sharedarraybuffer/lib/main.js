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

var nativeClass = require( '@stdlib/utils/native-class' );


// VARIABLES //

var hasSharedArrayBuffer = ( typeof SharedArrayBuffer === 'function' ); // eslint-disable-line stdlib/require-globals


// MAIN //

/**
* Tests if a value is a `SharedArrayBuffer`.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a `SharedArrayBuffer`
*
* @example
* var SharedArrayBuffer = require( '@stdlib/array/shared-buffer' );
*
* try {
*     var bool = isSharedArrayBuffer( new SharedArrayBuffer( 10 ) );
*     // returns true
* } catch ( err ) {
*     console.log( 'Environment does not support SharedArrayBuffers.' );
* }
*
* @example
* var bool = isSharedArrayBuffer( [] );
* // returns false
*/
function isSharedArrayBuffer( value ) {
	return (
		( hasSharedArrayBuffer && value instanceof SharedArrayBuffer ) || // eslint-disable-line stdlib/require-globals, no-undef
		nativeClass( value ) === '[object SharedArrayBuffer]'
	);
}


// EXPORTS //

module.exports = isSharedArrayBuffer;
