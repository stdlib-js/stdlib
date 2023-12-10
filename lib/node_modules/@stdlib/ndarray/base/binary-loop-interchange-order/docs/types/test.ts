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

import binaryLoopOrder = require( './index' );


// TESTS //

// The function returns an object...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 4, 2 ];
	binaryLoopOrder( sh, sx, sy, sz ); // $ExpectType LoopOrderObject
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object of numbers...
{
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 4, 2 ];
	binaryLoopOrder( true, sx, sy, sz ); // $ExpectError
	binaryLoopOrder( false, sx, sy, sz ); // $ExpectError
	binaryLoopOrder( '5', sx, sy, sz ); // $ExpectError
	binaryLoopOrder( 123, sx, sy, sz ); // $ExpectError
	binaryLoopOrder( {}, sx, sy, sz ); // $ExpectError
	binaryLoopOrder( ( x: number ): number => x, sx, sy, sz ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sy = [ 2, 1 ];
	const sz = [ 4, 2 ];
	binaryLoopOrder( sh, true, sy, sz ); // $ExpectError
	binaryLoopOrder( sh, false, sy, sz ); // $ExpectError
	binaryLoopOrder( sh, '5', sy, sz ); // $ExpectError
	binaryLoopOrder( sh, 123, sy, sz ); // $ExpectError
	binaryLoopOrder( sh, {}, sy, sz ); // $ExpectError
	binaryLoopOrder( sh, ( x: number ): number => x, sy, sz ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sz = [ 4, 2 ];
	binaryLoopOrder( sh, sx, true, sz ); // $ExpectError
	binaryLoopOrder( sh, sx, false, sz ); // $ExpectError
	binaryLoopOrder( sh, sx, '5', sz ); // $ExpectError
	binaryLoopOrder( sh, sx, 123, sz ); // $ExpectError
	binaryLoopOrder( sh, sx, {}, sz ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	binaryLoopOrder( sh, sx, sy, true ); // $ExpectError
	binaryLoopOrder( sh, sx, sy, false ); // $ExpectError
	binaryLoopOrder( sh, sx, sy, '5' ); // $ExpectError
	binaryLoopOrder( sh, sx, sy, 123 ); // $ExpectError
	binaryLoopOrder( sh, sx, sy, {} ); // $ExpectError
	binaryLoopOrder( sh, sx, sy, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	const sz = [ 4, 2 ];
	binaryLoopOrder(); // $ExpectError
	binaryLoopOrder( sh ); // $ExpectError
	binaryLoopOrder( sh, sx ); // $ExpectError
	binaryLoopOrder( sh, sx, sy ); // $ExpectError
	binaryLoopOrder( sh, sx, sy, sz, [] ); // $ExpectError
}
