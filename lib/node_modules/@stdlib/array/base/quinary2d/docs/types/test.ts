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

import quinary2d = require( './index' );

/**
* Quinary function.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @param v - input value
* @returns result
*/
function fcn( x: number, y: number, z: number, w: number, v: number ): number {
	return x + y + z + w + v;
}


// TESTS //

// The function returns undefined...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const z = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const w = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const v = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const out = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	quinary2d( [ x, y, z, w, v, out ], [ 2, 2 ], fcn ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array of nested arrays...
{
	quinary2d( 'abc', [ 2, 2 ], fcn ); // $ExpectError
	quinary2d( 3.14, [ 2, 2 ], fcn ); // $ExpectError
	quinary2d( true, [ 2, 2 ], fcn ); // $ExpectError
	quinary2d( false, [ 2, 2 ], fcn ); // $ExpectError
	quinary2d( null, [ 2, 2 ], fcn ); // $ExpectError
	quinary2d( [ '1' ], [ 2, 2 ], fcn ); // $ExpectError
	quinary2d( {}, [ 2, 2 ], fcn ); // $ExpectError
	quinary2d( ( x: number ): number => x, [ 2, 2 ], fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of numbers...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const z = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const w = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const v = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const out = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	quinary2d( [ x, y, z, w, v, out ], 'abc', fcn ); // $ExpectError
	quinary2d( [ x, y, z, w, v, out ], 3.14, fcn ); // $ExpectError
	quinary2d( [ x, y, z, w, v, out ], true, fcn ); // $ExpectError
	quinary2d( [ x, y, z, w, v, out ], false, fcn ); // $ExpectError
	quinary2d( [ x, y, z, w, v, out ], null, fcn ); // $ExpectError
	quinary2d( [ x, y, z, w, v, out ], [ '1' ], fcn ); // $ExpectError
	quinary2d( [ x, y, z, w, v, out ], {}, fcn ); // $ExpectError
	quinary2d( [ x, y, z, w, v, out ], ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const z = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const w = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const v = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const out = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	quinary2d( [ x, y, z, w, v, out ], [ 2, 2 ], 'abc' ); // $ExpectError
	quinary2d( [ x, y, z, w, v, out ], [ 2, 2 ], 3.14 ); // $ExpectError
	quinary2d( [ x, y, z, w, v, out ], [ 2, 2 ], true ); // $ExpectError
	quinary2d( [ x, y, z, w, v, out ], [ 2, 2 ], false ); // $ExpectError
	quinary2d( [ x, y, z, w, v, out ], [ 2, 2 ], null ); // $ExpectError
	quinary2d( [ x, y, z, w, v, out ], [ 2, 2 ], [ '1' ] ); // $ExpectError
	quinary2d( [ x, y, z, w, v, out ], [ 2, 2 ], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const z = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const w = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const v = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const out = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	quinary2d(); // $ExpectError
	quinary2d( [ x, y, z, w, v, out ] ); // $ExpectError
	quinary2d( [ x, y, z, w, v, out ], [ 2, 2 ], fcn, {} ); // $ExpectError
}
