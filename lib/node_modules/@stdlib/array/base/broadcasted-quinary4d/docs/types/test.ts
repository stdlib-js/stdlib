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

import bquinary4d = require( './index' );

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

/**
* List of input and output array shapes.
*/
type InOutShapes = [ Array<number>, Array<number>, Array<number>, Array<number>, Array<number>, Array<number> ];


// TESTS //

// The function returns undefined...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const y = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const z = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const w = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const v = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const out = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	const shapes: InOutShapes = [ [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ] ];

	bquinary4d( [ x, y, z, w, v, out ], shapes, fcn ); // $ExpectType void
	bquinary4d( [ x[ 0 ], y, z, w, v, out ], [ [ shapes[ 0 ][ 1 ][ 2 ][ 3 ] ], shapes[ 1 ], shapes[ 2 ], shapes [ 3 ], shapes[ 4 ], shapes[ 5 ] ] , fcn ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array of nested arrays...
{
	const shapes: InOutShapes =  [ [ 2, 2, 2, 2 ] , [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ] ];

	bquinary4d( 'abc', shapes, fcn ); // $ExpectError
	bquinary4d( 3.14, shapes, fcn ); // $ExpectError
	bquinary4d( true, shapes, fcn ); // $ExpectError
	bquinary4d( false, shapes, fcn ); // $ExpectError
	bquinary4d( null, shapes, fcn ); // $ExpectError
	bquinary4d( [ '1' ], shapes, fcn ); // $ExpectError
	bquinary4d( {}, shapes, fcn ); // $ExpectError
	bquinary4d( ( x: number ): number => x, shapes, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of arrays...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const y = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const z = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const w = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const v = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const out = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	bquinary4d( [ x, y, z, w, v, out ], 'abc', fcn ); // $ExpectError
	bquinary4d( [ x, y, z, w, v, out ], 3.14, fcn ); // $ExpectError
	bquinary4d( [ x, y, z, w, v, out ], true, fcn ); // $ExpectError
	bquinary4d( [ x, y, z, w, v, out ], false, fcn ); // $ExpectError
	bquinary4d( [ x, y, z, w, v, out ], null, fcn ); // $ExpectError
	bquinary4d( [ x, y, z, w, v, out ], [ '1' ], fcn ); // $ExpectError
	bquinary4d( [ x, y, z, w, v, out ], {}, fcn ); // $ExpectError
	bquinary4d( [ x, y, z, w, v, out ], ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const y = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const z = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const w = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const v = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const out = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	const shapes: InOutShapes = [ [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ], [ 2, 2, 2 ,2 ] ];

	bquinary4d( [ x, y, z, w, v, out ], shapes, 'abc' ); // $ExpectError
	bquinary4d( [ x, y, z, w, v, out ], shapes, 3.14 ); // $ExpectError
	bquinary4d( [ x, y, z, w, v, out ], shapes, true ); // $ExpectError
	bquinary4d( [ x, y, z, w, v, out ], shapes, false ); // $ExpectError
	bquinary4d( [ x, y, z, w, v, out ], shapes, null ); // $ExpectError
	bquinary4d( [ x, y, z, w, v, out ], shapes, [ '1' ] ); // $ExpectError
	bquinary4d( [ x, y, z, w, v, out ], shapes, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const y = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const z = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const w = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const v = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const out = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	const shapes: InOutShapes = [ [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ], [ 2, 2, 2 ,2 ], [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ], [ 2, 2, 2, 2 ] ];

	bquinary4d(); // $ExpectError
	bquinary4d( [ x, y, z, w, v, out ] ); // $ExpectError
	bquinary4d( [ x, y, z, w, v, out ], shapes, fcn, {} ); // $ExpectError
}
