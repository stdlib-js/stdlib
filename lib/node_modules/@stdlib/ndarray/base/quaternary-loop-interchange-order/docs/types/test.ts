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

import quaternaryLoopOrder = require( './index' );


// TESTS //

// The function returns an object...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 4, 2 ];
	const su = [ 4, 2 ];
	quaternaryLoopOrder( sh, sx, sy, sz, sw, su ); // $ExpectType LoopOrderObject
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object of numbers...
{
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 4, 2 ];
	const su = [ 4, 2 ];
	quaternaryLoopOrder( true, sx, sy, sz, sw, su ); // $ExpectError
	quaternaryLoopOrder( false, sx, sy, sz, sw, su ); // $ExpectError
	quaternaryLoopOrder( '5', sx, sy, sz, sw, su ); // $ExpectError
	quaternaryLoopOrder( 123, sx, sy, sz, sw, su ); // $ExpectError
	quaternaryLoopOrder( {}, sx, sy, sz, sw, su ); // $ExpectError
	quaternaryLoopOrder( ( x: number ): number => x, sx, sy, sz, sw, su ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 4, 2 ];
	const su = [ 4, 2 ];
	quaternaryLoopOrder( sh, true, sy, sz, sw, su ); // $ExpectError
	quaternaryLoopOrder( sh, false, sy, sz, sw, su ); // $ExpectError
	quaternaryLoopOrder( sh, '5', sy, sz, sw, su ); // $ExpectError
	quaternaryLoopOrder( sh, 123, sy, sz, sw, su ); // $ExpectError
	quaternaryLoopOrder( sh, {}, sy, sz, sw, su ); // $ExpectError
	quaternaryLoopOrder( sh, ( x: number ): number => x, sy, sz, sw, su ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 4, 2 ];
	const su = [ 4, 2 ];
	quaternaryLoopOrder( sh, sx, true, sz, sw, su ); // $ExpectError
	quaternaryLoopOrder( sh, sx, false, sz, sw, su ); // $ExpectError
	quaternaryLoopOrder( sh, sx, '5', sz, sw, su ); // $ExpectError
	quaternaryLoopOrder( sh, sx, 123, sz, sw, su ); // $ExpectError
	quaternaryLoopOrder( sh, sx, {}, sz, sw, su ); // $ExpectError
	quaternaryLoopOrder( sh, sx, ( x: number ): number => x, sz, sw, su ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sw = [ 4, 2 ];
	const su = [ 4, 2 ];
	quaternaryLoopOrder( sh, sx, sy, true, sw, su ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, false, sw, su ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, '5', sw, su ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, 123, sw, su ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, {}, sw, su ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, ( x: number ): number => x, sw, su ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const su = [ 4, 2 ];
	quaternaryLoopOrder( sh, sx, sy, sz, true, su ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, sz, false, su ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, sz, '5', su ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, sz, 123, su ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, sz, {}, su ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, sz, ( x: number ): number => x, su ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 4, 2 ];
	quaternaryLoopOrder( sh, sx, sy, sz, sw, true ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, sz, sw, false ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, sz, sw, '5' ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, sz, sw, 123 ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, sz, sw, {} ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, sz, sw, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 4, 2 ];
	const su = [ 4, 2 ];
	quaternaryLoopOrder(); // $ExpectError
	quaternaryLoopOrder( sh ); // $ExpectError
	quaternaryLoopOrder( sh, sx ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, sz ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, sz, sw ); // $ExpectError
	quaternaryLoopOrder( sh, sx, sy, sz, sw, su, [] ); // $ExpectError
}
