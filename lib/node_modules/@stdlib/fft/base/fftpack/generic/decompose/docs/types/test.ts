/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import decompose = require( './index' );

// TESTS //

// The function returns a number...
{
	const initial = [ 3, 4, 2, 5 ];
	const out = [ 0, 0, 0, 0, 0, 0, 0 ];

	decompose( 12, 4, initial, 1, 0, out, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const initial = [ 3, 4, 2, 5 ];
	const out = [ 0, 0, 0, 0, 0, 0, 0 ];

	decompose( '12', 4, initial, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( true, 4, initial, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( false, 4, initial, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( null, 4, initial, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( void 0, 4, initial, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( [], 4, initial, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( {}, 4, initial, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( ( x: number ): number => x, 4, initial, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const initial = [ 3, 4, 2, 5 ];
	const out = [ 0, 0, 0, 0, 0, 0, 0 ];

	decompose( 12, '4', initial, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, true, initial, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, false, initial, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, null, initial, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, void 0, initial, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, [], initial, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, {}, initial, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, ( x: number ): number => x, initial, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array of numbers...
{
	const out = [ 0, 0, 0, 0, 0, 0, 0 ];

	decompose( 12, 4, '4,2,3,5', 1, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, 5, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, true, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, false, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, null, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, void 0, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, {}, 1, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, ( x: number ): number => x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const initial = [ 3, 4, 2, 5 ];
	const out = [ 0, 0, 0, 0, 0, 0, 0 ];

	decompose( 12, 4, initial, '1', 0, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, true, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, false, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, null, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, void 0, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, [], 0, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, {}, 0, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, ( x: number ): number => x, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const initial = [ 3, 4, 2, 5 ];
	const out = [ 0, 0, 0, 0, 0, 0, 0 ];

	decompose( 12, 4, initial, 1, '0', out, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, true, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, false, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, null, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, void 0, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, [], out, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, {}, out, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not an array...
{
	const initial = [ 3, 4, 2, 5 ];

	decompose( 12, 4, initial, 1, 0, 123, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, true, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, false, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, null, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, void 0, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, {}, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const initial = [ 3, 4, 2, 5 ];
	const out = [ 0, 0, 0, 0, 0, 0, 0 ];

	decompose( 12, 4, initial, 1, 0, out, '1', 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, out, true, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, out, false, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, out, null, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, out, void 0, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, out, [], 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, out, {}, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const initial = [ 3, 4, 2, 5 ];
	const out = [ 0, 0, 0, 0, 0, 0, 0 ];

	decompose( 12, 4, initial, 1, 0, out, 1, '0' ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, out, 1, true ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, out, 1, false ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, out, 1, null ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, out, 1, void 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, out, 1, [] ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, out, 1, {} ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const initial = [ 3, 4, 2, 5 ];
	const out = [ 0, 0, 0, 0, 0, 0, 0 ];

	decompose(); // $ExpectError
	decompose( 12 ); // $ExpectError
	decompose( 12, 4 ); // $ExpectError
	decompose( 12, 4, initial ); // $ExpectError
	decompose( 12, 4, initial, 1 ); // $ExpectError
	decompose( 12, 4, initial, 1, 0 ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, out ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, out, 1 ); // $ExpectError
	decompose( 12, 4, initial, 1, 0, out, 1, 0, 123 ); // $ExpectError
}
