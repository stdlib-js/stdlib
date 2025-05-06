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

import add = require( './index' );


// TESTS //

// The function returns a number...
{
	add( 8.0, 8.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	add( true, 5.0 ); // $ExpectError
	add( false, 5.0 ); // $ExpectError
	add( null, 5.0 ); // $ExpectError
	add( undefined, 5.0 ); // $ExpectError
	add( '5', 5.0 ); // $ExpectError
	add( [], 5.0 ); // $ExpectError
	add( {}, 5.0 ); // $ExpectError
	add( ( x: number ): number => x, 5.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	add( 5.0, true ); // $ExpectError
	add( 5.0, false ); // $ExpectError
	add( 5.0, null ); // $ExpectError
	add( 5.0, undefined ); // $ExpectError
	add( 5.0, '5' ); // $ExpectError
	add( 5.0, [] ); // $ExpectError
	add( 5.0, {} ); // $ExpectError
	add( 5.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	add(); // $ExpectError
	add( 5.0 ); // $ExpectError
	add( 5.0, 5.0, 5.0 ); // $ExpectError
}
