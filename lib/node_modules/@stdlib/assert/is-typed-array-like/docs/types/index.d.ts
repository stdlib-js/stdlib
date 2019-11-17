/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 2.0

/**
* Tests if a value is typed-array-like.
*
* @param value - value to test
* @returns boolean indicating if a value is typed-array-like
*
* @example
* var arr = {
*	'BYTES_PER_ELEMENT': 8,
*	'length': 10,
*	'byteOffset': 0,
*	'byteLength': 10
* };
* var val = isTypedArrayLike( arr );
* // returns true
*
* @example
* var Int8Array = require( `@stdlib/array/int8` );
*
* var val = isTypedArrayLike( new Int8Array( 4 ) );
* // returns true
*
* @example
* var val = isTypedArrayLike( [] );
* // returns false
*
* @example
* var val = isTypedArrayLike( {} );
* // returns false
*
* @example
* var val = isTypedArrayLike( null );
* // returns false
*
* @example
* var val = isTypedArrayLike( 'beep' );
* // returns false
*/
declare function isTypedArrayLike( value: any ): boolean;


// EXPORTS //

export = isTypedArrayLike;
