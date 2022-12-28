/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import unaryLoopOrder = require( './index' );


// TESTS //

// The function returns an object...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	unaryLoopOrder( sh, sx, sy ); // $ExpectType LoopOrderObject
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object of numbers...
{
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	unaryLoopOrder( true, sx, sy ); // $ExpectError
	unaryLoopOrder( false, sx, sy ); // $ExpectError
	unaryLoopOrder( '5', sx, sy ); // $ExpectError
	unaryLoopOrder( 123, sx, sy ); // $ExpectError
	unaryLoopOrder( {}, sx, sy ); // $ExpectError
	unaryLoopOrder( ( x: number ): number => x, sx, sy ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sy = [ 2, 1 ];
	unaryLoopOrder( sh, true, sy ); // $ExpectError
	unaryLoopOrder( sh, false, sy ); // $ExpectError
	unaryLoopOrder( sh, '5', sy ); // $ExpectError
	unaryLoopOrder( sh, 123, sy ); // $ExpectError
	unaryLoopOrder( sh, {}, sy ); // $ExpectError
	unaryLoopOrder( sh, ( x: number ): number => x, sy ); // $ExpectError
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	unaryLoopOrder( sh, sx, true ); // $ExpectError
	unaryLoopOrder( sh, sx, false ); // $ExpectError
	unaryLoopOrder( sh, sx, '5' ); // $ExpectError
	unaryLoopOrder( sh, sx, 123 ); // $ExpectError
	unaryLoopOrder( sh, sx, {} ); // $ExpectError
	unaryLoopOrder( sh, sx, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	const sy = [ 2, 1 ];
	unaryLoopOrder(); // $ExpectError
	unaryLoopOrder( sh ); // $ExpectError
	unaryLoopOrder( sh, sx ); // $ExpectError
	unaryLoopOrder( sh, sx, sy, [] ); // $ExpectError
}
