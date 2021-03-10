/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import rotl32 = require( './index' );


// TESTS //

// The function returns a number...
{
	rotl32( 2147483649, 10 ); // $ExpectType number
}

// The function does not compile if provided a first argument that is not a number...
{
	rotl32( 'abc', 10 ); // $ExpectError
	rotl32( true, 10 ); // $ExpectError
	rotl32( false, 10 ); // $ExpectError
	rotl32( [], 10 ); // $ExpectError
	rotl32( {}, 10 ); // $ExpectError
	rotl32( ( x: number ): number => x, 10 ); // $ExpectError
}

// The function does not compile if provided a second argument that is not a number...
{
	rotl32( 2147483649, 'abc' ); // $ExpectError
	rotl32( 2147483649, true ); // $ExpectError
	rotl32( 2147483649, false ); // $ExpectError
	rotl32( 2147483649, [] ); // $ExpectError
	rotl32( 2147483649, {} ); // $ExpectError
	rotl32( 2147483649, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	rotl32(); // $ExpectError
	rotl32( 2147483649 ); // $ExpectError
}
