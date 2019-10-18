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

import gammaincinv = require( './index' );


// TESTS //

// The function returns a number...
{
	gammaincinv( 0.5, 2.0 ); // $ExpectType number
	gammaincinv( 0.75, 3.0, true ); // $ExpectType number
}

// The function does not compile if provided values other than numbers for the first two arguments...
{
	gammaincinv( true, 2.0 ); // $ExpectError
	gammaincinv( false, 2.0 ); // $ExpectError
	gammaincinv( '5', 2.0 ); // $ExpectError
	gammaincinv( [], 2.0 ); // $ExpectError
	gammaincinv( {}, 2.0 ); // $ExpectError
	gammaincinv( ( x: number ): number => x, 2.0 ); // $ExpectError

	gammaincinv( 0.5, true ); // $ExpectError
	gammaincinv( 0.5, false ); // $ExpectError
	gammaincinv( 0.5, '5' ); // $ExpectError
	gammaincinv( 0.5, [] ); // $ExpectError
	gammaincinv( 0.5, {} ); // $ExpectError
	gammaincinv( 0.5, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided a third argument which is not a boolean...
{
	gammaincinv( 0.75, 3.0, 'abc' ); // $ExpectError
	gammaincinv( 0.75, 3.0, 123 ); // $ExpectError
	gammaincinv( 0.75, 3.0, {} ); // $ExpectError
	gammaincinv( 0.75, 3.0, [] ); // $ExpectError
	gammaincinv( 0.75, 3.0, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	gammaincinv(); // $ExpectError
	gammaincinv( 3 ); // $ExpectError
	gammaincinv( 2.131, 3, true, 10 ); // $ExpectError
}
