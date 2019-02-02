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

import boxcox1p = require( './index' );


// TESTS //

// The function returns a number...
{
	boxcox1p( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	boxcox1p( true, 3 ); // $ExpectError
	boxcox1p( false, 2 ); // $ExpectError
	boxcox1p( '5', 1 ); // $ExpectError
	boxcox1p( [], 1 ); // $ExpectError
	boxcox1p( {}, 2 ); // $ExpectError
	boxcox1p( ( x: number ): number => x, 2 ); // $ExpectError

	boxcox1p( 9, true ); // $ExpectError
	boxcox1p( 9, false ); // $ExpectError
	boxcox1p( 5, '5' ); // $ExpectError
	boxcox1p( 8, [] ); // $ExpectError
	boxcox1p( 9, {} ); // $ExpectError
	boxcox1p( 8, ( x: number ): number => x ); // $ExpectError

	boxcox1p( [], true ); // $ExpectError
	boxcox1p( {}, false ); // $ExpectError
	boxcox1p( false, '5' ); // $ExpectError
	boxcox1p( {}, [] ); // $ExpectError
	boxcox1p( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	boxcox1p(); // $ExpectError
	boxcox1p( 3 ); // $ExpectError
}
