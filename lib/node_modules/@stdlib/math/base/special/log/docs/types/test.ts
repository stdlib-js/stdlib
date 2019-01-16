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

import log = require( './index' );


// TESTS //

// The function returns a number...
{
	log( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	log( true, 3 ); // $ExpectError
	log( false, 2 ); // $ExpectError
	log( '5', 1 ); // $ExpectError
	log( [], 1 ); // $ExpectError
	log( {}, 2 ); // $ExpectError
	log( ( x: number ): number => x, 2 ); // $ExpectError

	log( 9, true ); // $ExpectError
	log( 9, false ); // $ExpectError
	log( 5, '5' ); // $ExpectError
	log( 8, [] ); // $ExpectError
	log( 9, {} ); // $ExpectError
	log( 8, ( x: number ): number => x ); // $ExpectError

	log( [], true ); // $ExpectError
	log( {}, false ); // $ExpectError
	log( false, '5' ); // $ExpectError
	log( {}, [] ); // $ExpectError
	log( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	log(); // $ExpectError
	log( 3 ); // $ExpectError
}
