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

import trues = require( './index' );


// TESTS //

// The function returns an array...
{
	trues( 10 ); // $ExpectType BooleanArray
	trues( 10, 'generic' ); // $ExpectType true[]
}

// The compiler throws an error if the function is not provided a number for the first argument...
{
	trues( '5' ); // $ExpectError
	trues( false ); // $ExpectError
	trues( true ); // $ExpectError
	trues( null ); // $ExpectError
	trues( undefined ); // $ExpectError
	trues( [] ); // $ExpectError
	trues( {} ); // $ExpectError
	trues( ( x: number ): number => x ); // $ExpectError

	trues( '5', 'generic' ); // $ExpectError
	trues( false, 'generic' ); // $ExpectError
	trues( true, 'generic' ); // $ExpectError
	trues( null, 'generic' ); // $ExpectError
	trues( undefined, 'generic' ); // $ExpectError
	trues( [], 'generic' ); // $ExpectError
	trues( {}, 'generic' ); // $ExpectError
	trues( ( x: number ): number => x, 'generic' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is an unrecognized/unsupported data type...
{
	trues( 10, '10' ); // $ExpectError
	trues( 10, 10 ); // $ExpectError
	trues( 10, false ); // $ExpectError
	trues( 10, true ); // $ExpectError
	trues( 10, null ); // $ExpectError
	trues( 10, [] ); // $ExpectError
	trues( 10, {} ); // $ExpectError
	trues( 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	trues(); // $ExpectError
	trues( 10, 'generic', 1 ); // $ExpectError
}
