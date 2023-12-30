/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import groupValues = require( './index' );


// TESTS //

// The function returns group results...
{
	const x = [ 1, 2, 3 ];
	const g = [ 0, 0, 0 ];

	groupValues( x, g ); // $ExpectType ValuesResults<Key, number>
}

// The compiler throws an error if the function is provided a first argument which is not an array...
{
	const g = [ 0, 0, 0 ];

	groupValues( 5, g ); // $ExpectError
	groupValues( true, g ); // $ExpectError
	groupValues( false, g ); // $ExpectError
	groupValues( null, g ); // $ExpectError
	groupValues( void 0, g ); // $ExpectError
	groupValues( {}, g ); // $ExpectError
	groupValues( ( x: number ): number => x, g ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array...
{
	const x = [ 1, 2, 3 ];

	groupValues( x, 5 ); // $ExpectError
	groupValues( x, true ); // $ExpectError
	groupValues( x, false ); // $ExpectError
	groupValues( x, null ); // $ExpectError
	groupValues( x, void 0 ); // $ExpectError
	groupValues( x, {} ); // $ExpectError
	groupValues( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3 ];
	const g = [ 0, 0, 0 ];

	groupValues(); // $ExpectError
	groupValues( x ); // $ExpectError
	groupValues( x, g, {} ); // $ExpectError
}
