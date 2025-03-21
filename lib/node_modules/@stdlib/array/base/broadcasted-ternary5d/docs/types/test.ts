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

import bternary5d = require( './index' );

/**
* Ternary function.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @returns result
*/
function fcn( x: number, y: number, z: number ): number {
	return x + y + z;
}


// TESTS //

// The function returns undefined...
{
	const x = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const y = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const z = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const out = [ [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ] ];

	const shapes: [ Array<number>, Array<number>, Array<number>, Array<number> ] = [ [ 1, 1, 1, 2, 2 ], [ 1, 1, 1, 2, 2 ], [ 1, 1, 1, 2, 2 ], [ 2, 2, 2, 2, 2 ] ];

	bternary5d( [ x, y, z, out ], shapes, fcn ); // $ExpectType void
	bternary5d( [ x[0][0][0][0], y, z, out ], [ [ shapes[0][4] ], shapes[1], shapes[2], shapes[3] ], fcn ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array of nested arrays...
{
	const shapes: [ Array<number>, Array<number>, Array<number>, Array<number> ] = [ [ 1, 1, 1, 2, 2 ], [ 1, 1, 1, 2, 2 ], [ 1, 1, 1, 2, 2 ], [ 2, 2, 2, 2, 2 ] ];

	bternary5d( 'abc', shapes, fcn ); // $ExpectError
	bternary5d( 3.14, shapes, fcn ); // $ExpectError
	bternary5d( true, shapes, fcn ); // $ExpectError
	bternary5d( false, shapes, fcn ); // $ExpectError
	bternary5d( null, shapes, fcn ); // $ExpectError
	bternary5d( [ '1' ], shapes, fcn ); // $ExpectError
	bternary5d( {}, shapes, fcn ); // $ExpectError
	bternary5d( ( x: number ): number => x, shapes, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of arrays...
{
	const x = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const y = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const z = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const out = [ [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ] ];

	bternary5d( [x, y, z, out ], 'abc', fcn ); // $ExpectError
	bternary5d( [x, y, z, out ], 3.14, fcn ); // $ExpectError
	bternary5d( [x, y, z, out ], true, fcn ); // $ExpectError
	bternary5d( [x, y, z, out ], false, fcn ); // $ExpectError
	bternary5d( [x, y, z, out ], null, fcn ); // $ExpectError
	bternary5d( [ x, y, z, out ], [ '1' ], fcn ); // $ExpectError
	bternary5d( [ x, y, z, out ], {}, fcn ); // $ExpectError
	bternary5d( [ x, y, z, out ], ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback...
{
	const x = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const y = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const z = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const out = [ [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ] ];

	const shapes: [ Array<number>, Array<number>, Array<number>, Array<number> ] = [ [ 1, 1, 1, 2, 2 ], [ 1, 1, 1, 2, 2 ], [ 1, 1, 1, 2, 2 ], [ 2, 2, 2, 2, 2 ] ];

	bternary5d( [ x, y, z, out ], shapes, 'abc' ); // $ExpectError
	bternary5d( [ x, y, z, out ], shapes, 3.14 ); // $ExpectError
	bternary5d( [ x, y, z, out ], shapes, true ); // $ExpectError
	bternary5d( [ x, y, z, out ], shapes, false ); // $ExpectError
	bternary5d( [ x, y, z, out ], shapes, null ); // $ExpectError
	bternary5d( [ x, y, z, out ], shapes, [ '1' ] ); // $ExpectError
	bternary5d( [ x, y, z, out ], shapes, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const y = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const z = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const out = [ [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ] ];

	const shapes: [ Array<number>, Array<number>, Array<number>, Array<number> ] = [ [ 1, 1, 1, 2, 2 ], [ 1, 1, 1, 2, 2 ], [ 1, 1, 1, 2, 2 ], [ 2, 2, 2, 2, 2 ] ];

	bternary5d(); // $ExpectError
	bternary5d( [ x, y, z, out ] ); // $ExpectError
	bternary5d( [ x, y, z, out ], shapes, fcn, {} ); // $ExpectError
}
