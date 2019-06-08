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

import entropy = require( './index' );


// TESTS //

// The function returns a number...
{
	entropy( 10, 0.3 ); // $ExpectType number
}

// The function does not compile if provided a first argument which is not a number...
{
	entropy( true, 0.5 ); // $ExpectError
	entropy( false, 0.5 ); // $ExpectError
	entropy( '5', 0.5 ); // $ExpectError
	entropy( [], 0.5 ); // $ExpectError
	entropy( {}, 0.5 ); // $ExpectError
	entropy( ( x: number ): number => x, 0.5 ); // $ExpectError
}

// The function does not compile if provided a second argument which is not a number...
{
	entropy( 8, true ); // $ExpectError
	entropy( 8, false ); // $ExpectError
	entropy( 8, '5' ); // $ExpectError
	entropy( 8, [] ); // $ExpectError
	entropy( 8, {} ); // $ExpectError
	entropy( 8, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	entropy(); // $ExpectError
	entropy( 8 ); // $ExpectError
}
