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

import heavisidef = require( './index' );


// TESTS //

// The function returns a number...
{
	heavisidef( 3.141592653589793 ); // $ExpectType number
	heavisidef( 0, 'half-maximum' ); // $ExpectType number
	heavisidef( 0, 'left-continuous' ); // $ExpectType number
	heavisidef( 0, 'right-continuous' ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument other than a number...
{
	heavisidef( true, 'half-maximum' ); // $ExpectError
	heavisidef( false, 'half-maximum' ); // $ExpectError
	heavisidef( '5', 'half-maximum' ); // $ExpectError
	heavisidef( [], 'half-maximum' ); // $ExpectError
	heavisidef( {}, 'half-maximum' ); // $ExpectError
	heavisidef( ( x: number ): number => x, 'half-maximum' ); // $ExpectError
}

// The compiler throws an error if the function is provided a value other than `left-continuous`, `left-continuous`, or `half-maximum` as its second argument...
{
	heavisidef( 0, true ); // $ExpectError
	heavisidef( 0, false ); // $ExpectError
	heavisidef( 0, '5' ); // $ExpectError
	heavisidef( 0, 'abc' ); // $ExpectError
	heavisidef( 0, [] ); // $ExpectError
	heavisidef( 0, {} ); // $ExpectError
	heavisidef( 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	heavisidef(); // $ExpectError
	heavisidef( 3, 'half-maximum', 8 ); // $ExpectError
}
