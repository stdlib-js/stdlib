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

import nullaryLoopOrder = require( './index' );


// TESTS //

// The function returns an object...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	nullaryLoopOrder( sh, sx ); // $ExpectType LoopOrderObject
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object of numbers...
{
	const sx = [ 2, 1 ];
	nullaryLoopOrder( true, sx ); // $ExpectError
	nullaryLoopOrder( false, sx ); // $ExpectError
	nullaryLoopOrder( '5', sx ); // $ExpectError
	nullaryLoopOrder( 123, sx ); // $ExpectError
	nullaryLoopOrder( {}, sx ); // $ExpectError
	nullaryLoopOrder( ( x: number ): number => x, sx ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object of numbers...
{
	const sh = [ 2, 2 ];
	nullaryLoopOrder( sh, true ); // $ExpectError
	nullaryLoopOrder( sh, false ); // $ExpectError
	nullaryLoopOrder( sh, '5' ); // $ExpectError
	nullaryLoopOrder( sh, 123 ); // $ExpectError
	nullaryLoopOrder( sh, {} ); // $ExpectError
	nullaryLoopOrder( sh, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const sh = [ 2, 2 ];
	const sx = [ 2, 1 ];
	nullaryLoopOrder(); // $ExpectError
	nullaryLoopOrder( sh ); // $ExpectError
	nullaryLoopOrder( sh, sx, [] ); // $ExpectError
}
