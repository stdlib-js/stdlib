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

import nulls = require( './index' );


// TESTS //

// The function returns an array...
{
	nulls( 10 ); // $ExpectType null[]
	nulls( 10, 'generic' ); // $ExpectType null[]
}

// The compiler throws an error if the function is not provided a number for the first argument...
{
	nulls( '5' ); // $ExpectError
	nulls( false ); // $ExpectError
	nulls( true ); // $ExpectError
	nulls( null ); // $ExpectError
	nulls( undefined ); // $ExpectError
	nulls( [] ); // $ExpectError
	nulls( {} ); // $ExpectError
	nulls( ( x: number ): number => x ); // $ExpectError

	nulls( '5', 'generic' ); // $ExpectError
	nulls( false, 'generic' ); // $ExpectError
	nulls( true, 'generic' ); // $ExpectError
	nulls( null, 'generic' ); // $ExpectError
	nulls( undefined, 'generic' ); // $ExpectError
	nulls( [], 'generic' ); // $ExpectError
	nulls( {}, 'generic' ); // $ExpectError
	nulls( ( x: number ): number => x, 'generic' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is an unrecognized/unsupported data type...
{
	nulls( 10, '10' ); // $ExpectError
	nulls( 10, 10 ); // $ExpectError
	nulls( 10, false ); // $ExpectError
	nulls( 10, true ); // $ExpectError
	nulls( 10, null ); // $ExpectError
	nulls( 10, [] ); // $ExpectError
	nulls( 10, {} ); // $ExpectError
	nulls( 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	nulls(); // $ExpectError
	nulls( 10, 'generic', 1 ); // $ExpectError
}
