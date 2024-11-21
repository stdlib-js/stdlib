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

import dedupe = require( './index' );


// TESTS //

// The function returns an array...
{
	dedupe( [ 1, 2, 3 ], 1, false ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not an array...
{
	dedupe( '5', 1, false ); // $ExpectError
	dedupe( 5, 1, false ); // $ExpectError
	dedupe( true, 1, false ); // $ExpectError
	dedupe( false, 1, false ); // $ExpectError
	dedupe( null, 1, false ); // $ExpectError
	dedupe( void 0, 1, false ); // $ExpectError
	dedupe( {}, 1, false ); // $ExpectError
	dedupe( ( x: number ): number => x, 1, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = [ 1, 2, 3 ];

	dedupe( x, '5', false ); // $ExpectError
	dedupe( x, true, false ); // $ExpectError
	dedupe( x, false, false ); // $ExpectError
	dedupe( x, null, false ); // $ExpectError
	dedupe( x, void 0, false ); // $ExpectError
	dedupe( x, {}, false ); // $ExpectError
	dedupe( x, [], false ); // $ExpectError
	dedupe( x, ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a boolean...
{
	const x = [ 1, 2, 3 ];

	dedupe( x, 1, '5' ); // $ExpectError
	dedupe( x, 1, 5 ); // $ExpectError
	dedupe( x, 1, null ); // $ExpectError
	dedupe( x, 1, void 0 ); // $ExpectError
	dedupe( x, 1, {} ); // $ExpectError
	dedupe( x, 1, [] ); // $ExpectError
	dedupe( x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3 ];

	dedupe(); // $ExpectError
	dedupe( x ); // $ExpectError
	dedupe( x, 1 ); // $ExpectError
	dedupe( x, 1, false, {} ); // $ExpectError
}
