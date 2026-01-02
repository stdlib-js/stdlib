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

import ternaryLoopOrder = require( './index' );


// TESTS //

// The function returns an object...
{
	const sh = [ 2, 2 ];
	const sw = [ 2, 1 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 4, 2 ];
	ternaryLoopOrder( sh, sw, sx, sy, sz ); // $ExpectType LoopOrderObject
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object of numbers...
{
	const sw = [ 2, 1 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 4, 2 ];
	ternaryLoopOrder( true, sw, sx, sy, sz ); // $ExpectError
	ternaryLoopOrder( false, sw, sx, sy, sz ); // $ExpectError
	ternaryLoopOrder( '5', sw, sx, sy, sz ); // $ExpectError
	ternaryLoopOrder( 123, sw, sx, sy, sz ); // $ExpectError
	ternaryLoopOrder( {}, sw, sx, sy, sz ); // $ExpectError
	ternaryLoopOrder( ( x: number ): number => x, sw, sx, sy, sz ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 4, 2 ];
	ternaryLoopOrder( sh, true, sx, sy, sz ); // $ExpectError
	ternaryLoopOrder( sh, false, sx, sy, sz ); // $ExpectError
	ternaryLoopOrder( sh, '5', sx, sy, sz ); // $ExpectError
	ternaryLoopOrder( sh, 123, sx, sy, sz ); // $ExpectError
	ternaryLoopOrder( sh, {}, sx, sy, sz ); // $ExpectError
	ternaryLoopOrder( sh, ( x: number ): number => x, sx, sy, sz ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sw = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 4, 2 ];
	ternaryLoopOrder( sh, sw, true, sy, sz ); // $ExpectError
	ternaryLoopOrder( sh, sw, false, sy, sz ); // $ExpectError
	ternaryLoopOrder( sh, sw, '5', sy, sz ); // $ExpectError
	ternaryLoopOrder( sh, sw, 123, sy, sz ); // $ExpectError
	ternaryLoopOrder( sh, sw, {}, sy, sz ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sw = [ 2, 1 ];
	const sx = [ 2, 1 ];
	const sz = [ 4, 2 ];
	ternaryLoopOrder( sh, sw, sx, true, sz ); // $ExpectError
	ternaryLoopOrder( sh, sw, sx, false, sz ); // $ExpectError
	ternaryLoopOrder( sh, sw, sx, '5', sz ); // $ExpectError
	ternaryLoopOrder( sh, sw, sx, 123, sz ); // $ExpectError
	ternaryLoopOrder( sh, sw, sx, {}, sz ); // $ExpectError
	ternaryLoopOrder( sh, sw, sx, ( x: number ): number => x, sz ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sw = [ 2, 1 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	ternaryLoopOrder( sh, sw, sx, sy, true ); // $ExpectError
	ternaryLoopOrder( sh, sw, sx, sy, false ); // $ExpectError
	ternaryLoopOrder( sh, sw, sx, sy, '5' ); // $ExpectError
	ternaryLoopOrder( sh, sw, sx, sy, 123 ); // $ExpectError
	ternaryLoopOrder( sh, sw, sx, sy, {} ); // $ExpectError
	ternaryLoopOrder( sh, sw, sx, sy, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const sh = [ 2, 2 ];
	const sw = [ 2, 1 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 4, 2 ];
	ternaryLoopOrder(); // $ExpectError
	ternaryLoopOrder( sh ); // $ExpectError
	ternaryLoopOrder( sh, sw ); // $ExpectError
	ternaryLoopOrder( sh, sw, sx ); // $ExpectError
	ternaryLoopOrder( sh, sw, sx, sy ); // $ExpectError
	ternaryLoopOrder( sh, sw, sx, sy, sz, [] ); // $ExpectError
}
