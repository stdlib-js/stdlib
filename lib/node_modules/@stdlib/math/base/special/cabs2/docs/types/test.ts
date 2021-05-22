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

import cabs2 = require( './index' );


// TESTS //

// The function returns a number...
{
	cabs2( 5, 3 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	cabs2( true, 3 ); // $ExpectError
	cabs2( false, 3 ); // $ExpectError
	cabs2( null, 3 ); // $ExpectError
	cabs2( undefined, 3 ); // $ExpectError
	cabs2( '5', 3 ); // $ExpectError
	cabs2( [], 3 ); // $ExpectError
	cabs2( {}, 3 ); // $ExpectError
	cabs2( ( x: number ): number => x, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	cabs2( 5, true ); // $ExpectError
	cabs2( 5, false ); // $ExpectError
	cabs2( 5, null ); // $ExpectError
	cabs2( 5, undefined ); // $ExpectError
	cabs2( 5, '5' ); // $ExpectError
	cabs2( 5, [] ); // $ExpectError
	cabs2( 5, {} ); // $ExpectError
	cabs2( 5, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	cabs2(); // $ExpectError
}
