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

import binarynd = require( './index' );

/**
* Binary function.
*
* @param x - input value
* @param y - input value
* @returns result
*/
function fcn( x: number, y: number ): number {
	return x + y;
}


// TESTS //

// The function returns undefined...
{
	const x1 = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y1 = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	binarynd( [ x1, x1, y1 ], [ 2, 2 ], fcn ); // $ExpectType void

	const x2 = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const y2 = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	binarynd( [ x2, x2, y2 ], [ 1, 2, 2 ], fcn ); // $ExpectType void

	const x3 = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const y3 = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	binarynd( [ x3, x3, y3 ], [ 1, 1, 2, 2 ], fcn ); // $ExpectType void

	const x4 = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const y4 = [ [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ] ];

	binarynd( [ x4, x4, y4 ], [ 1, 1, 2, 2 ], fcn ); // $ExpectType void

	const x5 = [ [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ] ];
	const y5 = [ [ [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ] ] ];

	binarynd( [ x5, x5, y5 ], [ 1, 1, 1, 2, 2 ], fcn ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array of nested arrays...
{
	binarynd( 'abc', [ 2, 2 ], fcn ); // $ExpectError
	binarynd( 3.14, [ 2, 2 ], fcn ); // $ExpectError
	binarynd( true, [ 2, 2 ], fcn ); // $ExpectError
	binarynd( false, [ 2, 2 ], fcn ); // $ExpectError
	binarynd( null, [ 2, 2 ], fcn ); // $ExpectError
	binarynd( [ '1' ], [ 2, 2 ], fcn ); // $ExpectError
	binarynd( {}, [ 2, 2 ], fcn ); // $ExpectError
	binarynd( ( x: number ): number => x, [ 2, 2 ], fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of numbers...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	binarynd( [ x, x, y ], 'abc', fcn ); // $ExpectError
	binarynd( [ x, x, y ], 3.14, fcn ); // $ExpectError
	binarynd( [ x, x, y ], true, fcn ); // $ExpectError
	binarynd( [ x, x, y ], false, fcn ); // $ExpectError
	binarynd( [ x, x, y ], null, fcn ); // $ExpectError
	binarynd( [ x, x, y ], [ '1' ], fcn ); // $ExpectError
	binarynd( [ x, x, y ], {}, fcn ); // $ExpectError
	binarynd( [ x, x, y ], ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	binarynd( [ x, x, y ], [ 2, 2 ], 'abc' ); // $ExpectError
	binarynd( [ x, x, y ], [ 2, 2 ], 3.14 ); // $ExpectError
	binarynd( [ x, x, y ], [ 2, 2 ], true ); // $ExpectError
	binarynd( [ x, x, y ], [ 2, 2 ], false ); // $ExpectError
	binarynd( [ x, x, y ], [ 2, 2 ], null ); // $ExpectError
	binarynd( [ x, x, y ], [ 2, 2 ], [ '1' ] ); // $ExpectError
	binarynd( [ x, x, y ], [ 2, 2 ], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	binarynd(); // $ExpectError
	binarynd( [ x, x, y ] ); // $ExpectError
	binarynd( [ x, x, y ], [ 2, 2 ], fcn, {} ); // $ExpectError
}
