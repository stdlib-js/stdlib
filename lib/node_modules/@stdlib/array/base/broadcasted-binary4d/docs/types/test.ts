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

import bbinary4d = require( './index' );

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
	const z = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	const shapes: [ Array<number>, Array<number>, Array<number> ] = [ [ 1, 1, 2, 2 ], [ 1, 1, 2, 2 ], [ 1, 1, 2, 2 ] ];

	bbinary4d( [ x, y, z ], shapes, fcn ); // $ExpectType void
	bbinary4d( [ x[0][0][0], y, z ], [ [ shapes[0][3] ], shapes[1], shapes[2] ], fcn ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array of nested arrays...
{
	const shapes: [ Array<number>, Array<number>, Array<number> ] = [ [ 1, 1, 2, 2 ], [ 1, 1, 2, 2 ], [ 1, 1, 2, 2 ] ];

	bbinary4d( 'abc', shapes, fcn ); // $ExpectError
	bbinary4d( 3.14, shapes, fcn ); // $ExpectError
	bbinary4d( true, shapes, fcn ); // $ExpectError
	bbinary4d( false, shapes, fcn ); // $ExpectError
	bbinary4d( null, shapes, fcn ); // $ExpectError
	bbinary4d( [ '1' ], shapes, fcn ); // $ExpectError
	bbinary4d( {}, shapes, fcn ); // $ExpectError
	bbinary4d( ( x: number ): number => x, shapes, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of arrays...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const y = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const z = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	bbinary4d( [ x, y, z ], 'abc', fcn ); // $ExpectError
	bbinary4d( [ x, y, z ], 3.14, fcn ); // $ExpectError
	bbinary4d( [ x, y, z ], true, fcn ); // $ExpectError
	bbinary4d( [ x, y, z ], false, fcn ); // $ExpectError
	bbinary4d( [ x, y, z ], null, fcn ); // $ExpectError
	bbinary4d( [ x, y, z ], [ '1' ], fcn ); // $ExpectError
	bbinary4d( [ x, y, z ], {}, fcn ); // $ExpectError
	bbinary4d( [ x, y, z ], ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const y = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const z = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	const shapes: [ Array<number>, Array<number>, Array<number> ] = [ [ 1, 1, 2, 2 ], [ 1, 1, 2, 2 ], [ 1, 1, 2, 2 ] ];

	bbinary4d( [ x, y, z ], shapes, 'abc' ); // $ExpectError
	bbinary4d( [ x, y, z ], shapes, 3.14 ); // $ExpectError
	bbinary4d( [ x, y, z ], shapes, true ); // $ExpectError
	bbinary4d( [ x, y, z ], shapes, false ); // $ExpectError
	bbinary4d( [ x, y, z ], shapes, null ); // $ExpectError
	bbinary4d( [ x, y, z ], shapes, [ '1' ] ); // $ExpectError
	bbinary4d( [ x, y, z ], shapes, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const y = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const z = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	const shapes: [ Array<number>, Array<number>, Array<number> ] = [ [ 1, 1, 2, 2 ], [ 1, 1, 2, 2 ], [ 1, 1, 2, 2 ] ];

	bbinary4d(); // $ExpectError
	bbinary4d( [ x, y, z ] ); // $ExpectError
	bbinary4d( [ x, y, z ], shapes, fcn, {} ); // $ExpectError
}
