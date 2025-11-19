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

import addf = require( './index' );


// TESTS //

// The function returns a number...
{
	addf( 8.0, 8.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	addf( true, 5.0 ); // $ExpectError
	addf( false, 5.0 ); // $ExpectError
	addf( null, 5.0 ); // $ExpectError
	addf( undefined, 5.0 ); // $ExpectError
	addf( '5', 5.0 ); // $ExpectError
	addf( [], 5.0 ); // $ExpectError
	addf( {}, 5.0 ); // $ExpectError
	addf( ( x: number ): number => x, 5.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	addf( 5.0, true ); // $ExpectError
	addf( 5.0, false ); // $ExpectError
	addf( 5.0, null ); // $ExpectError
	addf( 5.0, undefined ); // $ExpectError
	addf( 5.0, '5' ); // $ExpectError
	addf( 5.0, [] ); // $ExpectError
	addf( 5.0, {} ); // $ExpectError
	addf( 5.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	addf(); // $ExpectError
	addf( 5.0 ); // $ExpectError
	addf( 5.0, 5.0, 5.0 ); // $ExpectError
}
