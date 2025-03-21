/*
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

import hasEqualValuesIndexed = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const x = [ 1, 2, 3 ];

	hasEqualValuesIndexed( x, x ); // $ExpectType boolean
	hasEqualValuesIndexed( new Float64Array( x ), new Float64Array( x ) ); // $ExpectType boolean
	hasEqualValuesIndexed( new Float32Array( x ), new Float32Array( x ) ); // $ExpectType boolean
	hasEqualValuesIndexed( new Int32Array( x ), new Int32Array( x ) ); // $ExpectType boolean
	hasEqualValuesIndexed( new Int16Array( x ), new Int16Array( x ) ); // $ExpectType boolean
	hasEqualValuesIndexed( new Int8Array( x ), new Int8Array( x ) ); // $ExpectType boolean
	hasEqualValuesIndexed( new Uint32Array( x ), new Uint32Array( x ) ); // $ExpectType boolean
	hasEqualValuesIndexed( new Uint16Array( x ), new Uint16Array( x ) ); // $ExpectType boolean
	hasEqualValuesIndexed( new Uint8Array( x ), new Uint8Array( x ) ); // $ExpectType boolean
	hasEqualValuesIndexed( new Uint8ClampedArray( x ), new Uint8ClampedArray( x ) ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	const x = [ 1, 2, 3 ];

	hasEqualValuesIndexed( 2, x ); // $ExpectError
	hasEqualValuesIndexed( false, x ); // $ExpectError
	hasEqualValuesIndexed( true, x ); // $ExpectError
	hasEqualValuesIndexed( {}, x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = [ 1, 2, 3 ];

	hasEqualValuesIndexed( x, 2 ); // $ExpectError
	hasEqualValuesIndexed( x, false ); // $ExpectError
	hasEqualValuesIndexed( x, true ); // $ExpectError
	hasEqualValuesIndexed( x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3 ];

	hasEqualValuesIndexed(); // $ExpectError
	hasEqualValuesIndexed( x ); // $ExpectError
	hasEqualValuesIndexed( x, x, x ); // $ExpectError
}
