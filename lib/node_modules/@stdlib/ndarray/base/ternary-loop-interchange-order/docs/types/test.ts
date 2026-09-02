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
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 4, 2 ];
	ternaryLoopOrder( sh, sx, sy, sz, sw ); // $ExpectType LoopOrderObject
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object of numbers...
{
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 4, 2 ];
	ternaryLoopOrder( true, sx, sy, sz, sw ); // $ExpectError
	ternaryLoopOrder( false, sx, sy, sz, sw ); // $ExpectError
	ternaryLoopOrder( '5', sx, sy, sz, sw ); // $ExpectError
	ternaryLoopOrder( 123, sx, sy, sz, sw ); // $ExpectError
	ternaryLoopOrder( {}, sx, sy, sz, sw ); // $ExpectError
	ternaryLoopOrder( ( x: number ): number => x, sx, sy, sz, sw ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 4, 2 ];
	ternaryLoopOrder( sh, true, sy, sz, sw ); // $ExpectError
	ternaryLoopOrder( sh, false, sy, sz, sw ); // $ExpectError
	ternaryLoopOrder( sh, '5', sy, sz, sw ); // $ExpectError
	ternaryLoopOrder( sh, 123, sy, sz, sw ); // $ExpectError
	ternaryLoopOrder( sh, {}, sy, sz, sw ); // $ExpectError
	ternaryLoopOrder( sh, ( x: number ): number => x, sy, sz, sw ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 4, 2 ];
	ternaryLoopOrder( sh, sx, true, sz, sw ); // $ExpectError
	ternaryLoopOrder( sh, sx, false, sz, sw ); // $ExpectError
	ternaryLoopOrder( sh, sx, '5', sz, sw ); // $ExpectError
	ternaryLoopOrder( sh, sx, 123, sz, sw ); // $ExpectError
	ternaryLoopOrder( sh, sx, {}, sz, sw ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sw = [ 4, 2 ];
	ternaryLoopOrder( sh, sx, sy, true, sw ); // $ExpectError
	ternaryLoopOrder( sh, sx, sy, false, sw ); // $ExpectError
	ternaryLoopOrder( sh, sx, sy, '5', sw ); // $ExpectError
	ternaryLoopOrder( sh, sx, sy, 123, sw ); // $ExpectError
	ternaryLoopOrder( sh, sx, sy, {}, sw ); // $ExpectError
	ternaryLoopOrder( sh, sx, sy, ( x: number ): number => x, sw ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	ternaryLoopOrder( sh, sx, sy, sz, true ); // $ExpectError
	ternaryLoopOrder( sh, sx, sy, sz, false ); // $ExpectError
	ternaryLoopOrder( sh, sx, sy, sz, '5' ); // $ExpectError
	ternaryLoopOrder( sh, sx, sy, sz, 123 ); // $ExpectError
	ternaryLoopOrder( sh, sx, sy, sz, {} ); // $ExpectError
	ternaryLoopOrder( sh, sx, sy, sz, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 4, 2 ];
	ternaryLoopOrder(); // $ExpectError
	ternaryLoopOrder( sh ); // $ExpectError
	ternaryLoopOrder( sh, sx ); // $ExpectError
	ternaryLoopOrder( sh, sx, sy ); // $ExpectError
	ternaryLoopOrder( sh, sx, sy, sz ); // $ExpectError
	ternaryLoopOrder( sh, sx, sy, sz, sw, [] ); // $ExpectError
}
