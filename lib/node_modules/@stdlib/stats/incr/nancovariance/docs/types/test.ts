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

import incrnancovariance = require( './index' );


// TESTS //

// The function returns an accumulator function...
{
	incrnancovariance(); // $ExpectType accumulator
}

// The compiler throws an error if the function is provided any arguments...
{
	incrnancovariance( 3 ); // $ExpectError
	incrnancovariance( 3, 0.0 ); // $ExpectError
}

// The function returns an accumulator function which returns an accumulated result...
{
	const acc = incrnancovariance();
	acc(); // $ExpectType number | null
	acc( 2.0, 1.0 ); // $ExpectType number | null
}

// The compiler throws an error if the returned accumulator function is provided invalid arguments...
{
	const acc = incrnancovariance();

	acc( '5', 2.0 ); // $ExpectError
	acc( true, 2.0 ); // $ExpectError
	acc( false, 2.0 ); // $ExpectError
	acc( null, 2.0 ); // $ExpectError
	acc( [], 2.0 ); // $ExpectError
	acc( {}, 2.0 ); // $ExpectError
	acc( ( x: number ): number => x, 2.0 ); // $ExpectError

	acc( 2.0, '5' ); // $ExpectError
	acc( 2.0, true ); // $ExpectError
	acc( 2.0, false ); // $ExpectError
	acc( 2.0, null ); // $ExpectError
	acc( 2.0, [] ); // $ExpectError
	acc( 2.0, {} ); // $ExpectError
	acc( 2.0, ( x: number ): number => x ); // $ExpectError
}
