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

import quinaryLoopOrder = require( './index' );


// TESTS //

// The function returns an object...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 2, 1 ];
	const su = [ 2, 1 ];
	const sv = [ 4, 2 ];
	quinaryLoopOrder( sh, sx, sy, sz, sw, su, sv ); // $ExpectType LoopOrderObject
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object of numbers...
{
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 2, 1 ];
	const su = [ 2, 1 ];
	const sv = [ 4, 2 ];
	quinaryLoopOrder( true, sx, sy, sz, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( false, sx, sy, sz, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( '5', sx, sy, sz, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( 123, sx, sy, sz, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( {}, sx, sy, sz, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( ( x: number ): number => x, sx, sy, sz, sw, su, sv ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 2, 1 ];
	const su = [ 2, 1 ];
	const sv = [ 4, 2 ];
	quinaryLoopOrder( sh, true, sy, sz, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, false, sy, sz, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, '5', sy, sz, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, 123, sy, sz, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, {}, sy, sz, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, ( x: number ): number => x, sy, sz, sw, su, sv ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 2, 1 ];
	const su = [ 2, 1 ];
	const sv = [ 4, 2 ];
	quinaryLoopOrder( sh, sx, true, sz, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, false, sz, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, '5', sz, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, 123, sz, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, {}, sz, sw, su, sv ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sw = [ 2, 1 ];
	const su = [ 2, 1 ];
	const sv = [ 4, 2 ];
	quinaryLoopOrder( sh, sx, sy, true, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, false, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, '5', sw, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, 123, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, {}, sw, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, ( x: number ): number => x, sw, su, sv ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const su = [ 2, 1 ];
	const sv = [ 4, 2 ];
	quinaryLoopOrder( sh, sx, sy, sz, true, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, false, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, '5', su, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, 123, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, {}, su, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, ( x: number ): number => x, su, sv ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 2, 1 ];
	const sv = [ 4, 2 ];
	quinaryLoopOrder( sh, sx, sy, sz, sw, true, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, sw, false, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, sw, '5', sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, sw, 123, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, sw, {}, sv ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, sw, ( x: number ): number => x, sv ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 2, 1 ];
	const su = [ 2, 1 ];
	quinaryLoopOrder( sh, sx, sy, sz, sw, su, true ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, sw, su, false ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, sw, su, '5' ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, sw, su, 123 ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, sw, su, {} ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, sw, su, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 2, 1 ];
	const sw = [ 2, 1 ];
	const su = [ 2, 1 ];
	const sv = [ 4, 2 ];
	quinaryLoopOrder(); // $ExpectError
	quinaryLoopOrder( sh ); // $ExpectError
	quinaryLoopOrder( sh, sx ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, sw ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, sw, su ); // $ExpectError
	quinaryLoopOrder( sh, sx, sy, sz, sw, su, sv, [] ); // $ExpectError
}
