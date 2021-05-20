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

import incrspace = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	incrspace( 0, 11, 2 ); // $ExpectType number[]
	incrspace( 0, 10 ); // $ExpectType number[]
}

// The function does not compile if provided values other than two numbers for the first two parameters...
{
	incrspace( true, 10 ); // $ExpectError
	incrspace( false, 10 ); // $ExpectError
	incrspace( '5', 10 ); // $ExpectError
	incrspace( [], 10 ); // $ExpectError
	incrspace( {}, 20 ); // $ExpectError
	incrspace( ( x: number ): number => x, 20 ); // $ExpectError

	incrspace( 9, true ); // $ExpectError
	incrspace( 9, false ); // $ExpectError
	incrspace( 5, '5' ); // $ExpectError
	incrspace( 8, [] ); // $ExpectError
	incrspace( 9, {} ); // $ExpectError
	incrspace( 8, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided a value other than a number for the third parameter...
{
	incrspace( 3, 20, true ); // $ExpectError
	incrspace( 4, 20, false ); // $ExpectError
	incrspace( 2, 20, '5' ); // $ExpectError
	incrspace( 2, 20, [] ); // $ExpectError
	incrspace( 9, 20, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	incrspace(); // $ExpectError
	incrspace( 3 ); // $ExpectError
}
