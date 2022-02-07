/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import unitspace = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	unitspace( 0, 11 ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided values other than two numbers for the first two parameters...
{
	unitspace( true, 10 ); // $ExpectError
	unitspace( false, 10 ); // $ExpectError
	unitspace( '5', 10 ); // $ExpectError
	unitspace( [], 10 ); // $ExpectError
	unitspace( {}, 20 ); // $ExpectError
	unitspace( ( x: number ): number => x, 20 ); // $ExpectError

	unitspace( 9, true ); // $ExpectError
	unitspace( 9, false ); // $ExpectError
	unitspace( 5, '5' ); // $ExpectError
	unitspace( 8, [] ); // $ExpectError
	unitspace( 9, {} ); // $ExpectError
	unitspace( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	unitspace(); // $ExpectError
	unitspace( 3 ); // $ExpectError
	unitspace( 3, 4, 1 ); // $ExpectError
}
