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

import heaviside = require( './index' );


// TESTS //

// The function returns a number...
{
	heaviside( 3.141592653589793 ); // $ExpectType number
	heaviside( 0, 'half-maximum' ); // $ExpectType number
	heaviside( 0, 'left-continuous' ); // $ExpectType number
	heaviside( 0, 'right-continuous' ); // $ExpectType number
}

// The function does not compile if provided a first argument other than a number...
{
	heaviside( true, 'half-maximum' ); // $ExpectError
	heaviside( false, 'half-maximum' ); // $ExpectError
	heaviside( '5', 'half-maximum' ); // $ExpectError
	heaviside( [], 'half-maximum' ); // $ExpectError
	heaviside( {}, 'half-maximum' ); // $ExpectError
	heaviside( ( x: number ): number => x, 'half-maximum' ); // $ExpectError
}

// The function does not compile if provided a value other than `left-continuous`, `left-continuous`, or `half-maximum` as its second argument...
{
	heaviside( 0, true ); // $ExpectError
	heaviside( 0, false ); // $ExpectError
	heaviside( 0, '5' ); // $ExpectError
	heaviside( 0, 'abc' ); // $ExpectError
	heaviside( 0, [] ); // $ExpectError
	heaviside( 0, {} ); // $ExpectError
	heaviside( 0, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	heaviside(); // $ExpectError
	heaviside( 3, 'half-maximum', 8 ); // $ExpectError
}
