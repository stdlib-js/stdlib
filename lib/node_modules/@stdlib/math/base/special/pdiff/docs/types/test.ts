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

import pdiff = require( './index' );


// TESTS //

// The function returns a number...
{
	pdiff( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	pdiff( true, 3 ); // $ExpectError
	pdiff( false, 2 ); // $ExpectError
	pdiff( '5', 1 ); // $ExpectError
	pdiff( [], 1 ); // $ExpectError
	pdiff( {}, 2 ); // $ExpectError
	pdiff( ( x: number ): number => x, 2 ); // $ExpectError

	pdiff( 9, true ); // $ExpectError
	pdiff( 9, false ); // $ExpectError
	pdiff( 5, '5' ); // $ExpectError
	pdiff( 8, [] ); // $ExpectError
	pdiff( 9, {} ); // $ExpectError
	pdiff( 8, ( x: number ): number => x ); // $ExpectError

	pdiff( [], true ); // $ExpectError
	pdiff( {}, false ); // $ExpectError
	pdiff( false, '5' ); // $ExpectError
	pdiff( {}, [] ); // $ExpectError
	pdiff( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	pdiff(); // $ExpectError
	pdiff( 3 ); // $ExpectError
}
