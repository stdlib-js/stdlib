/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import mskbinary4d = require( './index' );

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
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const y = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const m = [ [ [ [ 0, 1 ], [ 0, 0 ] ] ] ];
	const z = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	mskbinary4d( [ x, y, m, z ], [ 1, 1, 2, 2 ], fcn ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array of nested arrays...
{
	mskbinary4d( 'abc', [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	mskbinary4d( 3.14, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	mskbinary4d( true, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	mskbinary4d( false, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	mskbinary4d( null, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	mskbinary4d( [ '1' ], [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	mskbinary4d( {}, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	mskbinary4d( ( x: number ): number => x, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of numbers...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const y = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const m = [ [ [ [ 0, 1 ], [ 0, 0 ] ] ] ];
	const z = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	mskbinary4d( [ x, y, m, z ], 'abc', fcn ); // $ExpectError
	mskbinary4d( [ x, y, m, z ], 3.14, fcn ); // $ExpectError
	mskbinary4d( [ x, y, m, z ], true, fcn ); // $ExpectError
	mskbinary4d( [ x, y, m, z ], false, fcn ); // $ExpectError
	mskbinary4d( [ x, y, m, z ], null, fcn ); // $ExpectError
	mskbinary4d( [ x, y, m, z ], [ '1' ], fcn ); // $ExpectError
	mskbinary4d( [ x, y, m, z ], {}, fcn ); // $ExpectError
	mskbinary4d( [ x, y, m, z ], ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const y = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const m = [ [ [ [ 0, 1 ], [ 0, 0 ] ] ] ];
	const z = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	mskbinary4d( [ x, y, m, z ], [ 1, 1, 2, 2 ], 'abc' ); // $ExpectError
	mskbinary4d( [ x, y, m, z ], [ 1, 1, 2, 2 ], 3.14 ); // $ExpectError
	mskbinary4d( [ x, y, m, z ], [ 1, 1, 2, 2 ], true ); // $ExpectError
	mskbinary4d( [ x, y, m, z ], [ 1, 1, 2, 2 ], false ); // $ExpectError
	mskbinary4d( [ x, y, m, z ], [ 1, 1, 2, 2 ], null ); // $ExpectError
	mskbinary4d( [ x, y, m, z ], [ 1, 1, 2, 2 ], [ '1' ] ); // $ExpectError
	mskbinary4d( [ x, y, m, z ], [ 1, 1, 2, 2 ], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const y = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const m = [ [ [ [ 0, 1 ], [ 0, 0 ] ] ] ];
	const z = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	mskbinary4d(); // $ExpectError
	mskbinary4d( [ x, y, m, z ] ); // $ExpectError
	mskbinary4d( [ x, y, m, z ], [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
}
