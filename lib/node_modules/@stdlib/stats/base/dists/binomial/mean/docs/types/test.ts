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

import mean = require( './index' );


// TESTS //

// The function returns a number...
{
	mean( 10, 0.3 ); // $ExpectType number
}

// The function does not compile if provided a first argument which is not a number...
{
	mean( true, 0.5 ); // $ExpectError
	mean( false, 0.5 ); // $ExpectError
	mean( '5', 0.5 ); // $ExpectError
	mean( [], 0.5 ); // $ExpectError
	mean( {}, 0.5 ); // $ExpectError
	mean( ( x: number ): number => x, 0.5 ); // $ExpectError
}

// The function does not compile if provided a second argument which is not a number...
{
	mean( 8, true ); // $ExpectError
	mean( 8, false ); // $ExpectError
	mean( 8, '5' ); // $ExpectError
	mean( 8, [] ); // $ExpectError
	mean( 8, {} ); // $ExpectError
	mean( 8, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	mean(); // $ExpectError
	mean( 8 ); // $ExpectError
}
