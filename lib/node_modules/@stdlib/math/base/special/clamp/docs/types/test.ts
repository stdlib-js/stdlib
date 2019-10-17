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

import clamp = require( './index' );


// TESTS //

// The function returns a number...
{
	clamp( -3, 0, 10 ); // $ExpectType number
}

// The function does not compile if provided values other than three numbers...
{
	clamp( true, 3, 2 ); // $ExpectError
	clamp( false, 2, 2 ); // $ExpectError
	clamp( '5', 1, 2 ); // $ExpectError
	clamp( [], 1, 2 ); // $ExpectError
	clamp( {}, 2, 2 ); // $ExpectError
	clamp( ( x: number ): number => x, 2, 2 ); // $ExpectError

	clamp( 9, true, 2 ); // $ExpectError
	clamp( 9, false, 2 ); // $ExpectError
	clamp( 5, '5', 2 ); // $ExpectError
	clamp( 8, [], 2 ); // $ExpectError
	clamp( 9, {}, 2 ); // $ExpectError
	clamp( 8, ( x: number ): number => x, 2 ); // $ExpectError

	clamp( 3.12, 2, true ); // $ExpectError
	clamp( 4.9, 2, false ); // $ExpectError
	clamp( 2.1, 2, '5' ); // $ExpectError
	clamp( 2.9323213, 2, [] ); // $ExpectError
	clamp( 9.343, 2, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	clamp(); // $ExpectError
	clamp( 3 ); // $ExpectError
	clamp( 2.131, 3 ); // $ExpectError
}
