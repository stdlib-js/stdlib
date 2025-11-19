/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import reshape = require( './index' );


// TESTS //

// The function returns an array...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	reshape( x, [ 2, 2 ], [ 4, 1 ], false ); // $ExpectType ArrayND<number[]>
	reshape( x, [ 2, 2 ], [ 4, 1 ], true ); // $ExpectType ArrayND<number[]>

	reshape( [ [ '1', '2' ], [ '3', '4' ] ], [ 2, 2 ], [ 4, 1 ], false ); // $ExpectType ArrayND<string>
	reshape( [ [ '1', '2' ], [ '3', '4' ] ], [ 2, 2 ], [ 4, 1 ], true ); // $ExpectType ArrayND<string>
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	reshape( 1, [ 2, 2 ], [ 4, 1 ], false ); // $ExpectError
	reshape( true, [ 2, 2 ], [ 4, 1 ], false ); // $ExpectError
	reshape( false, [ 2, 2 ], [ 4, 1 ], false ); // $ExpectError
	reshape( null, [ 2, 2 ], [ 4, 1 ], false ); // $ExpectError
	reshape( void 0, [ 2, 2 ], [ 4, 1 ], false ); // $ExpectError
	reshape( {}, [ 2, 2 ], [ 4, 1 ], false ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	reshape( x, '', [ 4, 1 ], false ); // $ExpectError
	reshape( x, 1, [ 4, 1 ], false ); // $ExpectError
	reshape( x, true, [ 4, 1 ], false ); // $ExpectError
	reshape( x, false, [ 4, 1 ], false ); // $ExpectError
	reshape( x, null, [ 4, 1 ], false ); // $ExpectError
	reshape( x, void 0, [ 4, 1 ], false ); // $ExpectError
	reshape( x, {}, [ 4, 1 ], false ); // $ExpectError
	reshape( x, [ 1, '2', 3 ], [ 4, 1 ], false ); // $ExpectError
	reshape( x, ( x: number ): number => x, [ 4, 1 ], false ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	reshape( x, [ 2, 2 ], '', false ); // $ExpectError
	reshape( x, [ 2, 2 ], 1, false ); // $ExpectError
	reshape( x, [ 2, 2 ], true, false ); // $ExpectError
	reshape( x, [ 2, 2 ], false, false ); // $ExpectError
	reshape( x, [ 2, 2 ], null, false ); // $ExpectError
	reshape( x, [ 2, 2 ], void 0, false ); // $ExpectError
	reshape( x, [ 2, 2 ], {}, false ); // $ExpectError
	reshape( x, [ 2, 2 ], [ 4, '1' ], false ); // $ExpectError
	reshape( x, [ 2, 2 ], ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a boolean...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	reshape( x, [ 2, 2 ], [ 4, 1 ], '' ); // $ExpectError
	reshape( x, [ 2, 2 ], [ 4, 1], 1 ); // $ExpectError
	reshape( x, [ 2, 2 ], [ 4, 1], null ); // $ExpectError
	reshape( x, [ 2, 2 ], [ 4, 1], void 0 ); // $ExpectError
	reshape( x, [ 2, 2 ], [ 4, 1], {} ); // $ExpectError
	reshape( x, [ 2, 2 ], [ 4, 1], [] ); // $ExpectError
	reshape( x, [ 2, 2 ], [ 4, 1], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	reshape(); // $ExpectError
	reshape( x ); // $ExpectError
	reshape( x, [ 2, 2 ] ); // $ExpectError
	reshape( x, [ 2, 2 ],  [ 4, 1 ] ); // $ExpectError
	reshape( x, [ 2, 2 ],  [ 4, 1 ], false, {} ); // $ExpectError
}
