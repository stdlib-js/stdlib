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

import loopOrder = require( './index' );


// TESTS //

// The function returns an array of arrays...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 4, 2 ];
	loopOrder( sh, [ sx, sy, sz ] ); // $ExpectType number[][]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object of numbers...
{
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 4, 2 ];

	loopOrder( true, [ sx, sy, sz ] ); // $ExpectError
	loopOrder( false, [ sx, sy, sz ] ); // $ExpectError
	loopOrder( '5', [ sx, sy, sz ] ); // $ExpectError
	loopOrder( 123, [ sx, sy, sz ] ); // $ExpectError
	loopOrder( {}, [ sx, sy, sz ] ); // $ExpectError
	loopOrder( ( x: number ): number => x, [ sx, sy, sz ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing arrays of numbers...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 4, 2 ];

	loopOrder( sh, true ); // $ExpectError
	loopOrder( sh, false ); // $ExpectError
	loopOrder( sh, '5' ); // $ExpectError
	loopOrder( sh, 123 ); // $ExpectError
	loopOrder( sh, {} ); // $ExpectError
	loopOrder( sh, ( x: number ): number => x ); // $ExpectError

	loopOrder( sh, [ true, sy, sz ] ); // $ExpectError
	loopOrder( sh, [ false, sy, sz ] ); // $ExpectError
	loopOrder( sh, [ '5', sy, sz ] ); // $ExpectError
	loopOrder( sh, [ 123, sy, sz ] ); // $ExpectError
	loopOrder( sh, [ {}, sy, sz ] ); // $ExpectError
	loopOrder( sh, [ ( x: number ): number => x, sy, sz ] ); // $ExpectError

	loopOrder( sh, [ sx, true, sz ] ); // $ExpectError
	loopOrder( sh, [ sx, false, sz ] ); // $ExpectError
	loopOrder( sh, [ sx, '5', sz ] ); // $ExpectError
	loopOrder( sh, [ sx, 123, sz ] ); // $ExpectError
	loopOrder( sh, [ sx, {}, sz ] ); // $ExpectError

	loopOrder( sh, [ sx, sy, true ] ); // $ExpectError
	loopOrder( sh, [ sx, sy, false ] ); // $ExpectError
	loopOrder( sh, [ sx, sy, '5' ] ); // $ExpectError
	loopOrder( sh, [ sx, sy, 123 ] ); // $ExpectError
	loopOrder( sh, [ sx, sy, {} ] ); // $ExpectError
	loopOrder( sh, [ sx, sy, ( x: number ): number => x ] ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 4, 2 ];

	loopOrder(); // $ExpectError
	loopOrder( sh ); // $ExpectError
	loopOrder( sh, [ sx, sy, sz ], [] ); // $ExpectError
}
