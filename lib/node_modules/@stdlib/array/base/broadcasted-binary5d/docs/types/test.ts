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

import bbinary5d = require( './index' );

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
	const x = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const y = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const z = [ [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ] ];

	const shapes: [ Array<number>, Array<number>, Array<number> ] = [ [ 1, 1, 1, 2, 2 ], [ 1, 1, 1, 2, 2 ], [ 1, 1, 1, 2, 2 ] ];

	bbinary5d( [ x, y, z ], shapes, fcn ); // $ExpectType void
	bbinary5d( [ x[0][0][0][0], y, z ], [ [ shapes[0][4] ], shapes[1], shapes[2] ], fcn ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array of nested arrays...
{
	const shapes: [ Array<number>, Array<number>, Array<number> ] = [ [ 1, 1, 1, 2, 2 ], [ 1, 1, 1, 2, 2 ], [ 1, 1, 1, 2, 2 ] ];

	bbinary5d( 'abc', shapes, fcn ); // $ExpectError
	bbinary5d( 3.14, shapes, fcn ); // $ExpectError
	bbinary5d( true, shapes, fcn ); // $ExpectError
	bbinary5d( false, shapes, fcn ); // $ExpectError
	bbinary5d( null, shapes, fcn ); // $ExpectError
	bbinary5d( [ '1' ], shapes, fcn ); // $ExpectError
	bbinary5d( {}, shapes, fcn ); // $ExpectError
	bbinary5d( ( x: number ): number => x, shapes, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of arrays...
{
	const x = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const y = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const z = [ [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ] ];

	bbinary5d( [ x, y, z ], 'abc', fcn ); // $ExpectError
	bbinary5d( [ x, y, z ], 3.14, fcn ); // $ExpectError
	bbinary5d( [ x, y, z ], true, fcn ); // $ExpectError
	bbinary5d( [ x, y, z ], false, fcn ); // $ExpectError
	bbinary5d( [ x, y, z ], null, fcn ); // $ExpectError
	bbinary5d( [ x, y, z ], [ '1' ], fcn ); // $ExpectError
	bbinary5d( [ x, y, z ], {}, fcn ); // $ExpectError
	bbinary5d( [ x, y, z ], ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback...
{
	const x = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const y = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const z = [ [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ] ];

	const shapes: [ Array<number>, Array<number>, Array<number> ] = [ [ 1, 1, 1, 2, 2 ], [ 1, 1, 1, 2, 2 ], [ 1, 1, 1, 2, 2 ] ];

	bbinary5d( [ x, y, z ], shapes, 'abc' ); // $ExpectError
	bbinary5d( [ x, y, z ], shapes, 3.14 ); // $ExpectError
	bbinary5d( [ x, y, z ], shapes, true ); // $ExpectError
	bbinary5d( [ x, y, z ], shapes, false ); // $ExpectError
	bbinary5d( [ x, y, z ], shapes, null ); // $ExpectError
	bbinary5d( [ x, y, z ], shapes, [ '1' ] ); // $ExpectError
	bbinary5d( [ x, y, z ], shapes, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const y = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const z = [ [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ] ];

	const shapes: [ Array<number>, Array<number>, Array<number> ] = [ [ 1, 1, 1, 2, 2 ], [ 1, 1, 1, 2, 2 ], [ 1, 1, 1, 2, 2 ] ];

	bbinary5d(); // $ExpectError
	bbinary5d( [ x, y, z ] ); // $ExpectError
	bbinary5d( [ x, y, z ], shapes, fcn, {} ); // $ExpectError
}
