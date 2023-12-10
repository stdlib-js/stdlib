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

import bunary3d = require( './index' );

/**
* Unary function.
*
* @param value - input value
* @returns result
*/
function fcn( value: number ): number {
	return value;
}


// TESTS //

// The function returns undefined...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const y = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	const shapes: [ Array<number>, Array<number> ] = [ [ 1, 2, 2 ], [ 1, 2, 2 ] ];

	bunary3d( [ x, y ], shapes, fcn ); // $ExpectType void
	bunary3d( [ x[ 0 ][ 0 ], y ], [ [ shapes[0][2] ], shapes[1] ], fcn ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array of nested arrays...
{
	const shapes: [ Array<number>, Array<number> ] = [ [ 1, 2, 2 ], [ 1, 2, 2 ] ];

	bunary3d( 'abc', shapes, fcn ); // $ExpectError
	bunary3d( 3.14, shapes, fcn ); // $ExpectError
	bunary3d( true, shapes, fcn ); // $ExpectError
	bunary3d( false, shapes, fcn ); // $ExpectError
	bunary3d( null, shapes, fcn ); // $ExpectError
	bunary3d( [ '1' ], shapes, fcn ); // $ExpectError
	bunary3d( {}, shapes, fcn ); // $ExpectError
	bunary3d( ( x: number ): number => x, shapes, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of arrays...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const y = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	bunary3d( [ x, y ], 'abc', fcn ); // $ExpectError
	bunary3d( [ x, y ], 3.14, fcn ); // $ExpectError
	bunary3d( [ x, y ], true, fcn ); // $ExpectError
	bunary3d( [ x, y ], false, fcn ); // $ExpectError
	bunary3d( [ x, y ], null, fcn ); // $ExpectError
	bunary3d( [ x, y ], [ '1' ], fcn ); // $ExpectError
	bunary3d( [ x, y ], {}, fcn ); // $ExpectError
	bunary3d( [ x, y ], ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const y = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	const shapes: [ Array<number>, Array<number> ] = [ [ 1, 2, 2 ], [ 1, 2, 2 ] ];

	bunary3d( [ x, y ], shapes, 'abc' ); // $ExpectError
	bunary3d( [ x, y ], shapes, 3.14 ); // $ExpectError
	bunary3d( [ x, y ], shapes, true ); // $ExpectError
	bunary3d( [ x, y ], shapes, false ); // $ExpectError
	bunary3d( [ x, y ], shapes, null ); // $ExpectError
	bunary3d( [ x, y ], shapes, [ '1' ] ); // $ExpectError
	bunary3d( [ x, y ], shapes, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const y = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	const shapes: [ Array<number>, Array<number> ] = [ [ 1, 2, 2 ], [ 1, 2, 2 ] ];

	bunary3d(); // $ExpectError
	bunary3d( [ x, y ] ); // $ExpectError
	bunary3d( [ x, y ], shapes, fcn, {} ); // $ExpectError
}
