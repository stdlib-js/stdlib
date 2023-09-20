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

import bunary2d = require( './index' );

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
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	const shapes: [ Array<number>, Array<number> ] = [ [ 2, 2 ], [ 2, 2 ] ];

	bunary2d( [ x, y ], shapes, fcn ); // $ExpectType void
	bunary2d( [ x[ 0 ], y ], [ [ shapes[ 0 ][ 1 ] ], shapes[ 1 ] ], fcn ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array of nested arrays...
{
	const shapes: [ Array<number>, Array<number> ] = [ [ 2, 2 ], [ 2, 2 ] ];

	bunary2d( 'abc', shapes, fcn ); // $ExpectError
	bunary2d( 3.14, shapes, fcn ); // $ExpectError
	bunary2d( true, shapes, fcn ); // $ExpectError
	bunary2d( false, shapes, fcn ); // $ExpectError
	bunary2d( null, shapes, fcn ); // $ExpectError
	bunary2d( [ '1' ], shapes, fcn ); // $ExpectError
	bunary2d( {}, shapes, fcn ); // $ExpectError
	bunary2d( ( x: number ): number => x, shapes, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of arrays...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	bunary2d( [ x, y ], 'abc', fcn ); // $ExpectError
	bunary2d( [ x, y ], 3.14, fcn ); // $ExpectError
	bunary2d( [ x, y ], true, fcn ); // $ExpectError
	bunary2d( [ x, y ], false, fcn ); // $ExpectError
	bunary2d( [ x, y ], null, fcn ); // $ExpectError
	bunary2d( [ x, y ], [ '1' ], fcn ); // $ExpectError
	bunary2d( [ x, y ], {}, fcn ); // $ExpectError
	bunary2d( [ x, y ], ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	const shapes: [ Array<number>, Array<number> ] = [ [ 2, 2 ], [ 2, 2 ] ];

	bunary2d( [ x, y ], shapes, 'abc' ); // $ExpectError
	bunary2d( [ x, y ], shapes, 3.14 ); // $ExpectError
	bunary2d( [ x, y ], shapes, true ); // $ExpectError
	bunary2d( [ x, y ], shapes, false ); // $ExpectError
	bunary2d( [ x, y ], shapes, null ); // $ExpectError
	bunary2d( [ x, y ], shapes, [ '1' ] ); // $ExpectError
	bunary2d( [ x, y ], shapes, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	const shapes: [ Array<number>, Array<number> ] = [ [ 2, 2 ], [ 2, 2 ] ];

	bunary2d(); // $ExpectError
	bunary2d( [ x, y ] ); // $ExpectError
	bunary2d( [ x, y ], shapes, fcn, {} ); // $ExpectError
}
