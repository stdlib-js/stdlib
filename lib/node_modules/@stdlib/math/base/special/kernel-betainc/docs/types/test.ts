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

import kernelBetainc = require( './index' );


// TESTS //

// The function returns a collection...
{
	kernelBetainc( 0.5, 1.5, 1.5, true, false ); // $ExpectType Collection
}

// The compiler throws an error if the function is provided values other than three numbers for the first three parameters...
{
	kernelBetainc( true, 3, 2, true, false ); // $ExpectError
	kernelBetainc( false, 2, 2, true, false ); // $ExpectError
	kernelBetainc( '5', 1, 2, true, false ); // $ExpectError
	kernelBetainc( [], 1, 2, true, false ); // $ExpectError
	kernelBetainc( {}, 2, 2, true, false ); // $ExpectError
	kernelBetainc( ( x: number ): number => x, 2, 2, true, false ); // $ExpectError

	kernelBetainc( 9, true, 2, true, false ); // $ExpectError
	kernelBetainc( 9, false, 2, true, false ); // $ExpectError
	kernelBetainc( 5, '5', 2, true, false ); // $ExpectError
	kernelBetainc( 8, [], 2, true, false ); // $ExpectError
	kernelBetainc( 9, {}, 2, true, false ); // $ExpectError
	kernelBetainc( 8, ( x: number ): number => x, 2, true, false ); // $ExpectError

	kernelBetainc( 3.12, 2, true, true, false ); // $ExpectError
	kernelBetainc( 4.9, 2, false, true, false ); // $ExpectError
	kernelBetainc( 2.1, 2, '5', true, false ); // $ExpectError
	kernelBetainc( 2.9323213, 2, [], true, false ); // $ExpectError
	kernelBetainc( 9.343, 2, ( x: number ): number => x, true, false ); // $ExpectError
}

// The compiler throws an error if the function is not provided a boolean as the fourth argument...
{
	kernelBetainc( 0.5, 1.5, 1.5, '5', false ); // $ExpectError
	kernelBetainc( 0.5, 1.5, 1.5, 123, false ); // $ExpectError
	kernelBetainc( 0.5, 1.5, 1.5, {}, false ); // $ExpectError
	kernelBetainc( 0.5, 1.5, 1.5, [], false ); // $ExpectError
	kernelBetainc( 0.5, 1.5, 1.5, ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is not provided a boolean as the fifth argument...
{
	kernelBetainc( 0.5, 1.5, 1.5, true, '5' ); // $ExpectError
	kernelBetainc( 0.5, 1.5, 1.5, true, 123 ); // $ExpectError
	kernelBetainc( 0.5, 1.5, 1.5, true, {} ); // $ExpectError
	kernelBetainc( 0.5, 1.5, 1.5, true, [] ); // $ExpectError
	kernelBetainc( 0.5, 1.5, 1.5, true, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an insufficient number of arguments...
{
	kernelBetainc(); // $ExpectError
	kernelBetainc( 0.2, 1.5 ); // $ExpectError
	kernelBetainc( 0.2, 1.5, 2.8 ); // $ExpectError
	kernelBetainc( 0.2, 1.5, 2.8, true ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const out = [ 0.0, 0.0 ];
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, out, 1, 0 ); // $ExpectType Collection
}

// The compiler throws an error if the `assign` method is provided values other than three numbers for the first three parameters...
{
	const out = [ 0.0, 0.0 ];

	kernelBetainc.assign( true, 3, 2, true, false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( false, 2, 2, true, false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( '5', 1, 2, true, false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( [], 1, 2, true, false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( {}, 2, 2, true, false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( ( x: number ): number => x, 2, 2, true, false, out, 1, 0 ); // $ExpectError

	kernelBetainc.assign( 9, true, 2, true, false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 9, false, 2, true, false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 5, '5', 2, true, false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 8, [], 2, true, false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 9, {}, 2, true, false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 8, ( x: number ): number => x, 2, true, false, out, 1, 0 ); // $ExpectError

	kernelBetainc.assign( 3.12, 2, true, true, false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 4.9, 2, false, true, false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 2.1, 2, '5', true, false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 2.9323213, 2, [], true, false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 9.343, 2, ( x: number ): number => x, true, false, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is not provided a boolean as the fourth argument...
{
	const out = [ 0.0, 0.0 ];
	kernelBetainc.assign( 0.5, 1.5, 1.5, '5', false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, 123, false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, {}, false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, [], false, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, ( x: number ): number => x, false, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is not provided a boolean as the fifth argument...
{
	const out = [ 0.0, 0.0 ];
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, '5', out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, 123, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, {}, out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, [], out, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is not provided a collection as the sixth argument...
{
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, 123, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, true, 1, 0 ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, null, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is not provided a number as the seventh argument...
{
	const out = [ 0.0, 0.0 ];
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, out, '5', 0 ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, out, false, 0 ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, out, true, 0 ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, out, null, 0 ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, out, {}, 0 ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, out, [], 0 ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is not provided a number as the eighth argument...
{
	const out = [ 0.0, 0.0 ];
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, out, 1, '5' ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, out, 1, false ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, out, 1, true ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, out, 1, null ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, out, 1, {} ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, out, 1, [] ); // $ExpectError
	kernelBetainc.assign( 0.5, 1.5, 1.5, true, false, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an insufficient number of arguments...
{
	kernelBetainc.assign(); // $ExpectError
	kernelBetainc.assign( 0.2, 1.5 ); // $ExpectError
	kernelBetainc.assign( 0.2, 1.5, 2.8 ); // $ExpectError
	kernelBetainc.assign( 0.2, 1.5, 2.8, true ); // $ExpectError
	kernelBetainc.assign( 0.2, 1.5, 2.8, true, false ); // $ExpectError
	kernelBetainc.assign( 0.2, 1.5, 2.8, true, false, [ 0.0, 0.0 ] ); // $ExpectError
	kernelBetainc.assign( 0.2, 1.5, 2.8, true, false, [ 0.0, 0.0 ], 1 ); // $ExpectError
}
