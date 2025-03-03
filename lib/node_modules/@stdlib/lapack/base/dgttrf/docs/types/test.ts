/*
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

// TypeScript Version: 4.1

import dgttrf = require( './index' );

// TESTS //

// The function returns a number...
{
	const D = new Float64Array( 3 );
	const DL = new Float64Array( 2 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf( 3, DL, D, DU, DU2, IPIV ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const D = new Float64Array( 3 );
	const DL = new Float64Array( 2 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf( '5', DL, D, DU, DU2, IPIV ); // $ExpectError
	dgttrf( true, DL, D, DU, DU2, IPIV ); // $ExpectError
	dgttrf( false, DL, D, DU, DU2, IPIV ); // $ExpectError
	dgttrf( null, DL, D, DU, DU2, IPIV ); // $ExpectError
	dgttrf( undefined, DL, D, DU, DU2, IPIV ); // $ExpectError
	dgttrf( [], DL, D, DU, DU2, IPIV ); // $ExpectError
	dgttrf( {}, DL, D, DU, DU2, IPIV ); // $ExpectError
	dgttrf( ( x: number ): number => x, DL, D, DU, DU2, IPIV ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf( 3, '5', D, DU, DU2, IPIV ); // $ExpectError
	dgttrf( 3, 5, D, DU, DU2, IPIV ); // $ExpectError
	dgttrf( 3, true, D, DU, DU2, IPIV ); // $ExpectError
	dgttrf( 3, false, D, DU, DU2, IPIV ); // $ExpectError
	dgttrf( 3, null, D, DU, DU2, IPIV ); // $ExpectError
	dgttrf( 3, undefined, D, DU, DU2, IPIV ); // $ExpectError
	dgttrf( 3, [], D, DU, DU2, IPIV ); // $ExpectError
	dgttrf( 3, {}, D, DU, DU2, IPIV ); // $ExpectError
	dgttrf( 3, ( x: number ): number => x, D, DU, DU2, IPIV ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const DL = new Float64Array( 2 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf( 3, DL, '5', DU, DU2, IPIV ); // $ExpectError
	dgttrf( 3, DL, 5, DU, DU2, IPIV ); // $ExpectError
	dgttrf( 3, DL, true, DU, DU2, IPIV ); // $ExpectError
	dgttrf( 3, DL, false, DU, DU2, IPIV ); // $ExpectError
	dgttrf( 3, DL, null, DU, DU2, IPIV ); // $ExpectError
	dgttrf( 3, DL, undefined, DU, DU2, IPIV ); // $ExpectError
	dgttrf( 3, DL, [], DU, DU2, IPIV ); // $ExpectError
	dgttrf( 3, DL, {}, DU, DU2, IPIV ); // $ExpectError
	dgttrf( 3, DL, ( x: number ): number => x, DU, DU2, IPIV ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf( 3, DL, D, '5', DU2, IPIV ); // $ExpectError
	dgttrf( 3, DL, D, 5, DU2, IPIV ); // $ExpectError
	dgttrf( 3, DL, D, true, DU2, IPIV ); // $ExpectError
	dgttrf( 3, DL, D, false, DU2, IPIV ); // $ExpectError
	dgttrf( 3, DL, D, null, DU2, IPIV ); // $ExpectError
	dgttrf( 3, DL, D, undefined, DU2, IPIV ); // $ExpectError
	dgttrf( 3, DL, D, [], DU2, IPIV ); // $ExpectError
	dgttrf( 3, DL, D, {}, DU2, IPIV ); // $ExpectError
	dgttrf( 3, DL, D, ( x: number ): number => x, DU2, IPIV ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const IPIV = new Int32Array( 3 );

	dgttrf( 3, DL, D, DU, '5', IPIV ); // $ExpectError
	dgttrf( 3, DL, D, DU, 5, IPIV ); // $ExpectError
	dgttrf( 3, DL, D, DU, true, IPIV ); // $ExpectError
	dgttrf( 3, DL, D, DU, false, IPIV ); // $ExpectError
	dgttrf( 3, DL, D, DU, null, IPIV ); // $ExpectError
	dgttrf( 3, DL, D, DU, undefined, IPIV ); // $ExpectError
	dgttrf( 3, DL, D, DU, [], IPIV ); // $ExpectError
	dgttrf( 3, DL, D, DU, {}, IPIV ); // $ExpectError
	dgttrf( 3, DL, D, DU, ( x: number ): number => x, IPIV ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not an Int32Array...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );

	dgttrf( 3, DL, D, DU, DU2, '5' ); // $ExpectError
	dgttrf( 3, DL, D, DU, DU2, 5 ); // $ExpectError
	dgttrf( 3, DL, D, DU, DU2, true ); // $ExpectError
	dgttrf( 3, DL, D, DU, DU2, false ); // $ExpectError
	dgttrf( 3, DL, D, DU, DU2, null ); // $ExpectError
	dgttrf( 3, DL, D, DU, DU2, undefined ); // $ExpectError
	dgttrf( 3, DL, D, DU, DU2, [] ); // $ExpectError
	dgttrf( 3, DL, D, DU, DU2, {} ); // $ExpectError
	dgttrf( 3, DL, D, DU, DU2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf(); // $ExpectError
	dgttrf( 3 ); // $ExpectError
	dgttrf( 3, DL ); // $ExpectError
	dgttrf( 3, DL, D ); // $ExpectError
	dgttrf( 3, DL, D, DU ); // $ExpectError
	dgttrf( 3, DL, D, DU, DU2 ); // $ExpectError
	dgttrf( 3, DL, D, DU, DU2, IPIV, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf.ndarray( '5', DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( true, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( false, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( null, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( undefined, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( [], DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( {}, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( ( x: number ): number => x, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf.ndarray( 3, '5', 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, 5, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, true, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, false, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, null, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, undefined, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, [], 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, {}, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, ( x: number ): number => x, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf.ndarray( 3, DL, '5', 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, true, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, false, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, null, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, undefined, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, [], 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, {}, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, ( x: number ): number => x, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf.ndarray( 3, DL, 1, '5', D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, true, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, false, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, null, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, undefined, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, [], D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, {}, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, ( x: number ): number => x, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const DL = new Float64Array( 2 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf.ndarray( 3, DL, 1, 0, '5', 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, 5, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, true, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, false, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, null, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, undefined, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, [], 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, {}, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, ( x: number ): number => x, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf.ndarray( 3, DL, 1, 0, D, '5', 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, true, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, false, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, null, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, undefined, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, [], 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, {}, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, ( x: number ): number => x, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf.ndarray( 3, DL, 1, 0, D, 1, '5', DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, true, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, false, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, null, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, undefined, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, [], DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, {}, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, ( x: number ): number => x, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a Float64Array...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, '5', 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, 5, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, true, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, false, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, null, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, undefined, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, [], 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, {}, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, ( x: number ): number => x, 1, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, '5', 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, true, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, false, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, null, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, undefined, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, [], 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, {}, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, ( x: number ): number => x, 0, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, '5', DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, true, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, false, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, null, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, undefined, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, [], DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, {}, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, ( x: number ): number => x, DU2, 1, 0, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a Float64Array...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const IPIV = new Int32Array( 3 );

	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, '5', 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, 5, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, true, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, false, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, null, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, undefined, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, [], 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, {}, 1, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, ( x: number ): number => x, 1, 0, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a twelfth argument which is not a number...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, '5', 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, true, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, false, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, null, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, undefined, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, [], 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, {}, 0, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, ( x: number ): number => x, 0, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a thirteenth argument which is not a number...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, '5', IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, true, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, false, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, null, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, undefined, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, [], IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, {}, IPIV, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, ( x: number ): number => x, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourteenth argument which is not an Int32Array...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );

	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, '5', 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, 5, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, true, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, false, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, null, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, undefined, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, [], 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, {}, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifteenth argument which is not a number...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, '5', 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, true, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, false, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, null, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, undefined, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, [], 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, {}, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixteenth argument which is not a number...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, '5' ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, true ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, false ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, null ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, undefined ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, [] ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, {} ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const DL = new Float64Array( 2 );
	const D = new Float64Array( 3 );
	const DU = new Float64Array( 2 );
	const DU2 = new Float64Array( 1 );
	const IPIV = new Int32Array( 3 );

	dgttrf.ndarray(); // $ExpectError
	dgttrf.ndarray( 3 ); // $ExpectError
	dgttrf.ndarray( 3, DL ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1 ); // $ExpectError
	dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0, 10 ); // $ExpectError
}
