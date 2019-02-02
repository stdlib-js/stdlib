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

import gammaDeltaRatio = require( './index' );


// TESTS //

// The function returns a number...
{
	gammaDeltaRatio( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	gammaDeltaRatio( true, 3 ); // $ExpectError
	gammaDeltaRatio( false, 2 ); // $ExpectError
	gammaDeltaRatio( '5', 1 ); // $ExpectError
	gammaDeltaRatio( [], 1 ); // $ExpectError
	gammaDeltaRatio( {}, 2 ); // $ExpectError
	gammaDeltaRatio( ( x: number ): number => x, 2 ); // $ExpectError

	gammaDeltaRatio( 9, true ); // $ExpectError
	gammaDeltaRatio( 9, false ); // $ExpectError
	gammaDeltaRatio( 5, '5' ); // $ExpectError
	gammaDeltaRatio( 8, [] ); // $ExpectError
	gammaDeltaRatio( 9, {} ); // $ExpectError
	gammaDeltaRatio( 8, ( x: number ): number => x ); // $ExpectError

	gammaDeltaRatio( [], true ); // $ExpectError
	gammaDeltaRatio( {}, false ); // $ExpectError
	gammaDeltaRatio( false, '5' ); // $ExpectError
	gammaDeltaRatio( {}, [] ); // $ExpectError
	gammaDeltaRatio( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	gammaDeltaRatio(); // $ExpectError
	gammaDeltaRatio( 3 ); // $ExpectError
}
