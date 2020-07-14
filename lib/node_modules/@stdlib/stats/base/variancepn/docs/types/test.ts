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

import variancepn = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	variancepn( x.length, 1, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	variancepn( '10', 1, x, 1 ); // $ExpectError
	variancepn( true, 1, x, 1 ); // $ExpectError
	variancepn( false, 1, x, 1 ); // $ExpectError
	variancepn( null, 1, x, 1 ); // $ExpectError
	variancepn( undefined, 1, x, 1 ); // $ExpectError
	variancepn( [], 1, x, 1 ); // $ExpectError
	variancepn( {}, 1, x, 1 ); // $ExpectError
	variancepn( ( x: number ): number => x, 1, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	variancepn( x.length, '10', x, 1 ); // $ExpectError
	variancepn( x.length, true, x, 1 ); // $ExpectError
	variancepn( x.length, false, x, 1 ); // $ExpectError
	variancepn( x.length, null, x, 1 ); // $ExpectError
	variancepn( x.length, undefined, x, 1 ); // $ExpectError
	variancepn( x.length, [], x, 1 ); // $ExpectError
	variancepn( x.length, {}, x, 1 ); // $ExpectError
	variancepn( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	variancepn( x.length, 1, 10, 1 ); // $ExpectError
	variancepn( x.length, 1, '10', 1 ); // $ExpectError
	variancepn( x.length, 1, true, 1 ); // $ExpectError
	variancepn( x.length, 1, false, 1 ); // $ExpectError
	variancepn( x.length, 1, null, 1 ); // $ExpectError
	variancepn( x.length, 1, undefined, 1 ); // $ExpectError
	variancepn( x.length, 1, [ '1' ], 1 ); // $ExpectError
	variancepn( x.length, 1, {}, 1 ); // $ExpectError
	variancepn( x.length, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	variancepn( x.length, 1, x, '10' ); // $ExpectError
	variancepn( x.length, 1, x, true ); // $ExpectError
	variancepn( x.length, 1, x, false ); // $ExpectError
	variancepn( x.length, 1, x, null ); // $ExpectError
	variancepn( x.length, 1, x, undefined ); // $ExpectError
	variancepn( x.length, 1, x, [] ); // $ExpectError
	variancepn( x.length, 1, x, {} ); // $ExpectError
	variancepn( x.length, 1, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	variancepn(); // $ExpectError
	variancepn( x.length ); // $ExpectError
	variancepn( x.length, 1 ); // $ExpectError
	variancepn( x.length, 1, x ); // $ExpectError
	variancepn( x.length, 1, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	variancepn.ndarray( x.length, 1, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	variancepn.ndarray( '10', 1, x, 1, 0 ); // $ExpectError
	variancepn.ndarray( true, 1, x, 1, 0 ); // $ExpectError
	variancepn.ndarray( false, 1, x, 1, 0 ); // $ExpectError
	variancepn.ndarray( null, 1, x, 1, 0 ); // $ExpectError
	variancepn.ndarray( undefined, 1, x, 1, 0 ); // $ExpectError
	variancepn.ndarray( [], 1, x, 1, 0 ); // $ExpectError
	variancepn.ndarray( {}, 1, x, 1, 0 ); // $ExpectError
	variancepn.ndarray( ( x: number ): number => x, 1, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	variancepn.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	variancepn.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	variancepn.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	variancepn.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	variancepn.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	variancepn.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	variancepn.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	variancepn.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	variancepn.ndarray( x.length, 1, 10, 1, 0 ); // $ExpectError
	variancepn.ndarray( x.length, 1, '10', 1, 0 ); // $ExpectError
	variancepn.ndarray( x.length, 1, true, 1, 0 ); // $ExpectError
	variancepn.ndarray( x.length, 1, false, 1, 0 ); // $ExpectError
	variancepn.ndarray( x.length, 1, null, 1, 0 ); // $ExpectError
	variancepn.ndarray( x.length, 1, undefined, 1, 0 ); // $ExpectError
	variancepn.ndarray( x.length, 1, [ '1' ], 1, 0 ); // $ExpectError
	variancepn.ndarray( x.length, 1, {}, 1, 0 ); // $ExpectError
	variancepn.ndarray( x.length, 1, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	variancepn.ndarray( x.length, 1, x, '10', 0 ); // $ExpectError
	variancepn.ndarray( x.length, 1, x, true, 0 ); // $ExpectError
	variancepn.ndarray( x.length, 1, x, false, 0 ); // $ExpectError
	variancepn.ndarray( x.length, 1, x, null, 0 ); // $ExpectError
	variancepn.ndarray( x.length, 1, x, undefined, 0 ); // $ExpectError
	variancepn.ndarray( x.length, 1, x, [], 0 ); // $ExpectError
	variancepn.ndarray( x.length, 1, x, {}, 0 ); // $ExpectError
	variancepn.ndarray( x.length, 1, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	variancepn.ndarray( x.length, 1, x, 1, '10' ); // $ExpectError
	variancepn.ndarray( x.length, 1, x, 1, true ); // $ExpectError
	variancepn.ndarray( x.length, 1, x, 1, false ); // $ExpectError
	variancepn.ndarray( x.length, 1, x, 1, null ); // $ExpectError
	variancepn.ndarray( x.length, 1, x, 1, undefined ); // $ExpectError
	variancepn.ndarray( x.length, 1, x, 1, [] ); // $ExpectError
	variancepn.ndarray( x.length, 1, x, 1, {} ); // $ExpectError
	variancepn.ndarray( x.length, 1, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	variancepn.ndarray(); // $ExpectError
	variancepn.ndarray( x.length ); // $ExpectError
	variancepn.ndarray( x.length, 1 ); // $ExpectError
	variancepn.ndarray( x.length, 1, x ); // $ExpectError
	variancepn.ndarray( x.length, 1, x, 1 ); // $ExpectError
	variancepn.ndarray( x.length, 1, x, 1, 0, 10 ); // $ExpectError
}
