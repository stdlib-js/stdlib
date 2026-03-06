
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

import spttrf = require( './index' );


// TESTS //

// The function returns a number...
{
	const D = new Float32Array( 3 );
	const E = new Float32Array( 2 );

	spttrf( 3, D, E ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const D = new Float32Array( 3 );
	const E = new Float32Array( 2 );

	spttrf( '5', D, E ); // $ExpectError
	spttrf( true, D, E ); // $ExpectError
	spttrf( false, D, E ); // $ExpectError
	spttrf( null, D, E ); // $ExpectError
	spttrf( void 0, D, E ); // $ExpectError
	spttrf( [], D, E ); // $ExpectError
	spttrf( {}, D, E ); // $ExpectError
	spttrf( ( x: number ): number => x, D, E ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	const E = new Float32Array( 2 );

	spttrf( 3, '5', E ); // $ExpectError
	spttrf( 3, 5, E ); // $ExpectError
	spttrf( 3, true, E ); // $ExpectError
	spttrf( 3, false, E ); // $ExpectError
	spttrf( 3, null, E ); // $ExpectError
	spttrf( 3, void 0, E ); // $ExpectError
	spttrf( 3, [], E ); // $ExpectError
	spttrf( 3, {}, E ); // $ExpectError
	spttrf( 3, ( x: number ): number => x, E ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	const D = new Float32Array( 3 );

	spttrf( 3, D, '5' ); // $ExpectError
	spttrf( 3, D, 5 ); // $ExpectError
	spttrf( 3, D, true ); // $ExpectError
	spttrf( 3, D, false ); // $ExpectError
	spttrf( 3, D, null ); // $ExpectError
	spttrf( 3, D, void 0 ); // $ExpectError
	spttrf( 3, D, [] ); // $ExpectError
	spttrf( 3, D, {} ); // $ExpectError
	spttrf( 3, D, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const D = new Float32Array( 3 );
	const E = new Float32Array( 2 );

	spttrf(); // $ExpectError
	spttrf( 3 ); // $ExpectError
	spttrf( 3, D ); // $ExpectError
	spttrf( 3, D, E, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const D = new Float32Array( 3 );
	const E = new Float32Array( 2 );

	spttrf.ndarray( 3, D, 1, 0, E, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const D = new Float32Array( 3 );
	const E = new Float32Array( 2 );

	spttrf.ndarray( '5', D, 1, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( true, D, 1, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( false, D, 1, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( null, D, 1, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( void 0, D, 1, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( [], D, 1, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( {}, D, 1, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( ( x: number ): number => x, D, 1, 0, E, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	const E = new Float32Array( 2 );

	spttrf.ndarray( 3, '5', 1, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, 5, 1, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, true, 1, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, false, 1, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, null, 1, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, void 0, 1, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, [], 1, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, {}, 1, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, ( x: number ): number => x, 1, 0, E, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const D = new Float32Array( 3 );
	const E = new Float32Array( 2 );

	spttrf.ndarray( 3, D, '5', 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, true, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, false, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, null, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, void 0, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, [], 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, {}, 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, ( x: number ): number => x, 0, E, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const D = new Float32Array( 3 );
	const E = new Float32Array( 2 );

	spttrf.ndarray( 3, D, 1, '5', E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, true, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, false, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, null, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, void 0, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, [], E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, {}, E, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, ( x: number ): number => x, E, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float32Array...
{
	const D = new Float32Array( 3 );

	spttrf.ndarray( 3, D, 1, 0, '5', 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, 5, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, true, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, false, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, null, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, void 0, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, [], 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, {}, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const D = new Float32Array( 3 );
	const E = new Float32Array( 2 );

	spttrf.ndarray( 3, D, 1, 0, E, '5', 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, E, true, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, E, false, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, E, null, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, E, void 0, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, E, [], 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, E, {}, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, E, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const D = new Float32Array( 3 );
	const E = new Float32Array( 2 );

	spttrf.ndarray( 3, D, 1, 0, E, 1, '5' ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, E, 1, true ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, E, 1, false ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, E, 1, null ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, E, 1, void 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, E, 1, [] ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, E, 1, {} ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, E, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const D = new Float32Array( 3 );
	const E = new Float32Array( 2 );

	spttrf.ndarray(); // $ExpectError
	spttrf.ndarray( 3 ); // $ExpectError
	spttrf.ndarray( 3, D ); // $ExpectError
	spttrf.ndarray( 3, D, 1 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, E ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, E, 1 ); // $ExpectError
	spttrf.ndarray( 3, D, 1, 0, E, 1, 0, 10 ); // $ExpectError
}
