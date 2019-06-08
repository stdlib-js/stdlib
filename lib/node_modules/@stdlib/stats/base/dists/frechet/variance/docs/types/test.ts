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

import variance = require( './index' );


// TESTS //

// The function returns a number...
{
	variance( 1, 1, 1 ); // $ExpectType number
}

// The function does not compile if provided values other than three numbers...
{
	variance( true, 2, 2 ); // $ExpectError
	variance( false, 2, 1.5 ); // $ExpectError
	variance( '5', 0.5, 0.5 ); // $ExpectError
	variance( [], 0.5, 0.5 ); // $ExpectError
	variance( {}, 2, 1 ); // $ExpectError
	variance( ( x: number ): number => x, 2, 1 ); // $ExpectError

	variance( 9, true, 12 ); // $ExpectError
	variance( 9, false, 12 ); // $ExpectError
	variance( 5, '5', 8 ); // $ExpectError
	variance( 8, [], 10 ); // $ExpectError
	variance( 9, {}, 12 ); // $ExpectError
	variance( 8, ( x: number ): number => x, 12 ); // $ExpectError

	variance( 9, 4, true ); // $ExpectError
	variance( 9, 4, false ); // $ExpectError
	variance( 5, 10, '5' ); // $ExpectError
	variance( 8, 8, [] ); // $ExpectError
	variance( 9, 18, {} ); // $ExpectError
	variance( 8, 4, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	variance(); // $ExpectError
	variance( 3 ); // $ExpectError
	variance( 3, 6 ); // $ExpectError
}
