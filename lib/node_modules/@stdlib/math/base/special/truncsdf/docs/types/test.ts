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

import truncsdf = require( './index' );


// TESTS //

// The function returns a number...
{
	truncsdf( 3.14159, 4, 10 ); // $ExpectType number
	truncsdf( 3.14159, 1, 10 ); // $ExpectType number
	truncsdf( 12368.0, 2, 10 ); // $ExpectType number
	truncsdf( 0.0313, 2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than numbers...
{
	truncsdf( true, 3, 10 ); // $ExpectError
	truncsdf( false, 2, 10 ); // $ExpectError
	truncsdf( '5', 1, 10 ); // $ExpectError
	truncsdf( [], 1, 10 ); // $ExpectError
	truncsdf( {}, 2, 10 ); // $ExpectError
	truncsdf( ( x: number ): number => x, 2, 10 ); // $ExpectError

	truncsdf( 9, true, 10 ); // $ExpectError
	truncsdf( 9, false, 10 ); // $ExpectError
	truncsdf( 5, '5', 10 ); // $ExpectError
	truncsdf( 8, [], 10 ); // $ExpectError
	truncsdf( 9, {}, 10 ); // $ExpectError
	truncsdf( 8, ( x: number ): number => x, 10 ); // $ExpectError

	truncsdf( 3.14, 2, true ); // $ExpectError
	truncsdf( 3.14, 2, false ); // $ExpectError
	truncsdf( 3.14, 2, '5' ); // $ExpectError
	truncsdf( 3.14, 2, [] ); // $ExpectError
	truncsdf( 3.14, 2, {} ); // $ExpectError
	truncsdf( 3.14, 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	truncsdf(); // $ExpectError
	truncsdf( 3 ); // $ExpectError
	truncsdf( 3.14, 2 ); // $ExpectError
	truncsdf( 2.131, 3, 10, 10 ); // $ExpectError
}
