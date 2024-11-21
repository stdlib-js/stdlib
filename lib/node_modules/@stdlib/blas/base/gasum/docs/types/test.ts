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

import gasum = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	gasum( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gasum( '10', x, 1 ); // $ExpectError
	gasum( true, x, 1 ); // $ExpectError
	gasum( false, x, 1 ); // $ExpectError
	gasum( null, x, 1 ); // $ExpectError
	gasum( undefined, x, 1 ); // $ExpectError
	gasum( [], x, 1 ); // $ExpectError
	gasum( {}, x, 1 ); // $ExpectError
	gasum( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	gasum( x.length, 10, 1 ); // $ExpectError
	gasum( x.length, '10', 1 ); // $ExpectError
	gasum( x.length, true, 1 ); // $ExpectError
	gasum( x.length, false, 1 ); // $ExpectError
	gasum( x.length, null, 1 ); // $ExpectError
	gasum( x.length, undefined, 1 ); // $ExpectError
	gasum( x.length, [ '1' ], 1 ); // $ExpectError
	gasum( x.length, {}, 1 ); // $ExpectError
	gasum( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gasum( x.length, x, '10' ); // $ExpectError
	gasum( x.length, x, true ); // $ExpectError
	gasum( x.length, x, false ); // $ExpectError
	gasum( x.length, x, null ); // $ExpectError
	gasum( x.length, x, undefined ); // $ExpectError
	gasum( x.length, x, [] ); // $ExpectError
	gasum( x.length, x, {} ); // $ExpectError
	gasum( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gasum(); // $ExpectError
	gasum( x.length ); // $ExpectError
	gasum( x.length, x ); // $ExpectError
	gasum( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	gasum.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gasum.ndarray( '10', x, 1, 0 ); // $ExpectError
	gasum.ndarray( true, x, 1, 0 ); // $ExpectError
	gasum.ndarray( false, x, 1, 0 ); // $ExpectError
	gasum.ndarray( null, x, 1, 0 ); // $ExpectError
	gasum.ndarray( undefined, x, 1, 0 ); // $ExpectError
	gasum.ndarray( [], x, 1, 0 ); // $ExpectError
	gasum.ndarray( {}, x, 1, 0 ); // $ExpectError
	gasum.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	gasum.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	gasum.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	gasum.ndarray( x.length, true, 1, 0 ); // $ExpectError
	gasum.ndarray( x.length, false, 1, 0 ); // $ExpectError
	gasum.ndarray( x.length, null, 1, 0 ); // $ExpectError
	gasum.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	gasum.ndarray( x.length, [ '1' ], 1, 0 ); // $ExpectError
	gasum.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	gasum.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gasum.ndarray( x.length, x, '10', 0 ); // $ExpectError
	gasum.ndarray( x.length, x, true, 0 ); // $ExpectError
	gasum.ndarray( x.length, x, false, 0 ); // $ExpectError
	gasum.ndarray( x.length, x, null, 0 ); // $ExpectError
	gasum.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	gasum.ndarray( x.length, x, [], 0 ); // $ExpectError
	gasum.ndarray( x.length, x, {}, 0 ); // $ExpectError
	gasum.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gasum.ndarray( x.length, x, 1, '10' ); // $ExpectError
	gasum.ndarray( x.length, x, 1, true ); // $ExpectError
	gasum.ndarray( x.length, x, 1, false ); // $ExpectError
	gasum.ndarray( x.length, x, 1, null ); // $ExpectError
	gasum.ndarray( x.length, x, 1, undefined ); // $ExpectError
	gasum.ndarray( x.length, x, 1, [] ); // $ExpectError
	gasum.ndarray( x.length, x, 1, {} ); // $ExpectError
	gasum.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gasum.ndarray(); // $ExpectError
	gasum.ndarray( x.length ); // $ExpectError
	gasum.ndarray( x.length, x ); // $ExpectError
	gasum.ndarray( x.length, x, 1 ); // $ExpectError
	gasum.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}
