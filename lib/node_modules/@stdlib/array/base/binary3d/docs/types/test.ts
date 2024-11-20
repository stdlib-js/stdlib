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

import binary3d = require( './index' );

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
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const y = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const z = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	binary3d( [ x, y, z ], [ 1, 2, 2 ], fcn ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array of nested arrays...
{
	binary3d( 'abc', [ 1, 2, 2 ], fcn ); // $ExpectError
	binary3d( 3.14, [ 1, 2, 2 ], fcn ); // $ExpectError
	binary3d( true, [ 1, 2, 2 ], fcn ); // $ExpectError
	binary3d( false, [ 1, 2, 2 ], fcn ); // $ExpectError
	binary3d( null, [ 1, 2, 2 ], fcn ); // $ExpectError
	binary3d( [ '1' ], [ 1, 2, 2 ], fcn ); // $ExpectError
	binary3d( {}, [ 1, 2, 2 ], fcn ); // $ExpectError
	binary3d( ( x: number ): number => x, [ 1, 2, 2 ], fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of numbers...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const y = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const z = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	binary3d( [ x, y, z ], 'abc', fcn ); // $ExpectError
	binary3d( [ x, y, z ], 3.14, fcn ); // $ExpectError
	binary3d( [ x, y, z ], true, fcn ); // $ExpectError
	binary3d( [ x, y, z ], false, fcn ); // $ExpectError
	binary3d( [ x, y, z ], null, fcn ); // $ExpectError
	binary3d( [ x, y, z ], [ '1' ], fcn ); // $ExpectError
	binary3d( [ x, y, z ], {}, fcn ); // $ExpectError
	binary3d( [ x, y, z ], ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const y = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const z = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	binary3d( [ x, y, z ], [ 1, 2, 2 ], 'abc' ); // $ExpectError
	binary3d( [ x, y, z ], [ 1, 2, 2 ], 3.14 ); // $ExpectError
	binary3d( [ x, y, z ], [ 1, 2, 2 ], true ); // $ExpectError
	binary3d( [ x, y, z ], [ 1, 2, 2 ], false ); // $ExpectError
	binary3d( [ x, y, z ], [ 1, 2, 2 ], null ); // $ExpectError
	binary3d( [ x, y, z ], [ 1, 2, 2 ], [ '1' ] ); // $ExpectError
	binary3d( [ x, y, z ], [ 1, 2, 2 ], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const y = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const z = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	binary3d(); // $ExpectError
	binary3d( [ x, y, z ] ); // $ExpectError
	binary3d( [ x, y, z ], [ 1, 2, 2 ], fcn, {} ); // $ExpectError
}
