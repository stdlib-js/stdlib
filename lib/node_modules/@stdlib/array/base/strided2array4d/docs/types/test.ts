/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import strided2array4d = require( './index' );


// TESTS //

// The function returns a four-dimensional nested array...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];

	strided2array4d( x, [ 1, 1, 2, 2 ], [ 4, 4, 2, 1 ], 0 ); // $ExpectType Array4D<number>
	strided2array4d( x, [ 1, 1, 2, 2 ], [ 1, 1, 1, 2 ], 0 ); // $ExpectType Array4D<number>
}

// The compiler throws an error if the function is provided a first argument which is not an array...
{
	strided2array4d( 3.14, [ 1, 1, 2, 2 ], [ 4, 4, 2, 1 ], 0 ); // $ExpectError
	strided2array4d( true, [ 1, 1, 2, 2 ], [ 4, 4, 2, 1 ], 0 ); // $ExpectError
	strided2array4d( false, [ 1, 1, 2, 2 ], [ 4, 4, 2, 1 ], 0 ); // $ExpectError
	strided2array4d( null, [ 1, 1, 2, 2 ], [ 4, 4, 2, 1 ], 0 ); // $ExpectError
	strided2array4d( {}, [ 1, 1, 2, 2 ], [ 4, 4, 2, 1 ], 0 ); // $ExpectError
	strided2array4d( ( x: number ): number => x, [ 1, 1, 2, 2 ], [ 4, 4, 2, 1 ], 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of numbers...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];

	strided2array4d( x, 'abc', [ 4, 4, 2, 1 ], 0 ); // $ExpectError
	strided2array4d( x, 3.14, [ 4, 4, 2, 1 ], 0 ); // $ExpectError
	strided2array4d( x, true, [ 4, 4, 2, 1 ], 0 ); // $ExpectError
	strided2array4d( x, false, [ 4, 4, 2, 1 ], 0 ); // $ExpectError
	strided2array4d( x, null, [ 4, 4, 2, 1 ], 0 ); // $ExpectError
	strided2array4d( x, [ '1' ], [ 4, 4, 2, 1 ], 0 ); // $ExpectError
	strided2array4d( x, {}, [ 4, 4, 2, 1 ], 0 ); // $ExpectError
	strided2array4d( x, ( x: number ): number => x, [ 4, 4, 2, 1 ], 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array of numbers...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];

	strided2array4d( x, [ 1, 1, 2, 2 ], 'abc', 0 ); // $ExpectError
	strided2array4d( x, [ 1, 1, 2, 2 ], 3.14, 0 ); // $ExpectError
	strided2array4d( x, [ 1, 1, 2, 2 ], true, 0 ); // $ExpectError
	strided2array4d( x, [ 1, 1, 2, 2 ], false, 0 ); // $ExpectError
	strided2array4d( x, [ 1, 1, 2, 2 ], null, 0 ); // $ExpectError
	strided2array4d( x, [ 1, 1, 2, 2 ], [ '1' ], 0 ); // $ExpectError
	strided2array4d( x, [ 1, 1, 2, 2 ], {}, 0 ); // $ExpectError
	strided2array4d( x, [ 1, 1, 2, 2 ], ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];

	strided2array4d( x, [ 1, 1, 2, 2 ], [ 4, 4, 2, 1 ], 'abc' ); // $ExpectError
	strided2array4d( x, [ 1, 1, 2, 2 ], [ 4, 4, 2, 1 ], true ); // $ExpectError
	strided2array4d( x, [ 1, 1, 2, 2 ], [ 4, 4, 2, 1 ], false ); // $ExpectError
	strided2array4d( x, [ 1, 1, 2, 2 ], [ 4, 4, 2, 1 ], null ); // $ExpectError
	strided2array4d( x, [ 1, 1, 2, 2 ], [ 4, 4, 2, 1 ], [ '1' ] ); // $ExpectError
	strided2array4d( x, [ 1, 1, 2, 2 ], [ 4, 4, 2, 1 ], {} ); // $ExpectError
	strided2array4d( x, [ 1, 1, 2, 2 ], [ 4, 4, 2, 1 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];

	strided2array4d(); // $ExpectError
	strided2array4d( x ); // $ExpectError
	strided2array4d( x, [ 1, 1, 2, 2 ] ); // $ExpectError
	strided2array4d( x, [ 1, 1, 2, 2 ], [ 4, 4, 2, 1 ] ); // $ExpectError
	strided2array4d( x, [ 1, 1, 2, 2 ], [ 4, 4, 2, 1 ], 0, {} ); // $ExpectError
}
