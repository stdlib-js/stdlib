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

import kernelSincos = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], 1, 0 ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	kernelSincos( true, 0.0, [ 0.0, 0.0 ], 1, 0 ); // $ExpectError
	kernelSincos( false, 0.0, [ 0.0, 0.0 ], 1, 0 ); // $ExpectError
	kernelSincos( null, 0.0, [ 0.0, 0.0 ], 1, 0 ); // $ExpectError
	kernelSincos( '5', 0.0, [ 0.0, 0.0 ], 1, 0 ); // $ExpectError
	kernelSincos( [], 0.0, [ 0.0, 0.0 ], 1, 0 ); // $ExpectError
	kernelSincos( {}, 0.0, [ 0.0, 0.0 ], 1, 0 ); // $ExpectError
	kernelSincos( ( x: number ): number => x, 0.0, [ 0.0, 0.0 ], 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	kernelSincos( 0.0, true, [ 0.0, 0.0 ], 1, 0 ); // $ExpectError
	kernelSincos( 0.0, false, [ 0.0, 0.0 ], 1, 0 ); // $ExpectError
	kernelSincos( 0.0, null, [ 0.0, 0.0 ], 1, 0 ); // $ExpectError
	kernelSincos( 0.0, '5', [ 0.0, 0.0 ], 1, 0 ); // $ExpectError
	kernelSincos( 0.0, [], [ 0.0, 0.0 ], 1, 0 ); // $ExpectError
	kernelSincos( 0.0, {}, [ 0.0, 0.0 ], 1, 0 ); // $ExpectError
	kernelSincos( 0.0, ( x: number ): number => x, [ 0.0, 0.0 ], 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object...
{
	kernelSincos( 0.0, 0.0, 0.0, 1, 0 ); // $ExpectError
	kernelSincos( 0.0, 0.0, true, 1, 0 ); // $ExpectError
	kernelSincos( 0.0, 0.0, false, 1, 0 ); // $ExpectError
	kernelSincos( 0.0, 0.0, null, 1, 0 ); // $ExpectError
	kernelSincos( 0.0, 0.0, '5', 1, 0 ); // $ExpectError
	kernelSincos( 0.0, 0.0, {}, 1, 0 ); // $ExpectError
	kernelSincos( 0.0, 0.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], true, 0 ); // $ExpectError
	kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], false, 0 ); // $ExpectError
	kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], null, 0 ); // $ExpectError
	kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], '5', 0 ); // $ExpectError
	kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], [], 0 ); // $ExpectError
	kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], {}, 0 ); // $ExpectError
	kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], 1, true ); // $ExpectError
	kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], 1, false ); // $ExpectError
	kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], 1, null ); // $ExpectError
	kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], 1, '5' ); // $ExpectError
	kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], 1, [] ); // $ExpectError
	kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], 1, {} ); // $ExpectError
	kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	kernelSincos(); // $ExpectError
	kernelSincos( 0.0 ); // $ExpectError
	kernelSincos( 0.0, 0.0 ); // $ExpectError
	kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ] ); // $ExpectError
	kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], 1 ); // $ExpectError
}
