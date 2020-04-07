/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import isCoprime = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isCoprime( 2, 4 ); // $ExpectType boolean
}

// The function does not compile if provided a first argument which is not a number...
{
	isCoprime( true, 4 ); // $ExpectError
	isCoprime( false, 4 ); // $ExpectError
	isCoprime( null, 4 ); // $ExpectError
	isCoprime( undefined, 4 ); // $ExpectError
	isCoprime( [], 4 ); // $ExpectError
	isCoprime( {}, 4 ); // $ExpectError
	isCoprime( ( x: number ): number => x, 4 ); // $ExpectError
}

// The function does not compile if provided a second argument which is not a number...
{
	isCoprime( 4, true ); // $ExpectError
	isCoprime( 4, false ); // $ExpectError
	isCoprime( 4, null ); // $ExpectError
	isCoprime( 4, undefined ); // $ExpectError
	isCoprime( 4, [] ); // $ExpectError
	isCoprime( 4, {} ); // $ExpectError
	isCoprime( 4, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isCoprime(); // $ExpectError
	isCoprime( 4 ); // $ExpectError
	isCoprime( 4, 5, 6 ); // $ExpectError
}
