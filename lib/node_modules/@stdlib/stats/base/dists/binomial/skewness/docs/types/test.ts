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

import skewness = require( './index' );


// TESTS //

// The function returns a number...
{
	skewness( 10, 0.3 ); // $ExpectType number
}

// The function does not compile if provided a first argument which is not a number...
{
	skewness( true, 0.5 ); // $ExpectError
	skewness( false, 0.5 ); // $ExpectError
	skewness( '5', 0.5 ); // $ExpectError
	skewness( [], 0.5 ); // $ExpectError
	skewness( {}, 0.5 ); // $ExpectError
	skewness( ( x: number ): number => x, 0.5 ); // $ExpectError
}

// The function does not compile if provided a second argument which is not a number...
{
	skewness( 8, true ); // $ExpectError
	skewness( 8, false ); // $ExpectError
	skewness( 8, '5' ); // $ExpectError
	skewness( 8, [] ); // $ExpectError
	skewness( 8, {} ); // $ExpectError
	skewness( 8, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	skewness(); // $ExpectError
	skewness( 8 ); // $ExpectError
}
