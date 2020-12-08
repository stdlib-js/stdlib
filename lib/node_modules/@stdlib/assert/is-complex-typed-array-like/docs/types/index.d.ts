/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Tests if a value is complex-typed-array-like.
*
* @param value - value to test
* @returns boolean indicating if a value is complex-typed-array-like
*
* @example
* var arr = {
*	'BYTES_PER_ELEMENT': 8,
*	'length': 10,
*	'byteOffset': 0,
*	'byteLength': 10,
*   'get': function get() {},
*   'set': function set() {}
* };
* var val = isComplexTypedArrayLike( arr );
* // returns true
*
* @example
* var Complex128Array = require( `@stdlib/array/complex128` );
*
* var val = isComplexTypedArrayLike( new Complex128Array( 4 ) );
* // returns true
*
* @example
* var val = isComplexTypedArrayLike( [] );
* // returns false
*
* @example
* var val = isComplexTypedArrayLike( {} );
* // returns false
*
* @example
* var val = isComplexTypedArrayLike( null );
* // returns false
*
* @example
* var val = isComplexTypedArrayLike( 'beep' );
* // returns false
*/
declare function isComplexTypedArrayLike( value: any ): boolean;


// EXPORTS //

export = isComplexTypedArrayLike;
