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

import map3d = require( './index' );

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

// The function returns a nested array...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];

	map3d( x, [ 1, 2, 2 ], fcn ); // $ExpectType Array3D<number>
	map3d( x, [ 1, 2, 2 ], fcn, {} ); // $ExpectType Array3D<number>
}

// The compiler throws an error if the function is provided a first argument which is not a nested array...
{
	map3d( 'abc', [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d( 3.14, [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d( true, [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d( false, [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d( null, [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d( [ '1' ], [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d( {}, [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d( ( x: number ): number => x, [ 1, 2, 2 ], fcn ); // $ExpectError

	map3d( 'abc', [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d( 3.14, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d( true, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d( false, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d( null, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d( [ '1' ], [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d( {}, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d( ( x: number ): number => x, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of numbers...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];

	map3d( x, 'abc', fcn ); // $ExpectError
	map3d( x, 3.14, fcn ); // $ExpectError
	map3d( x, true, fcn ); // $ExpectError
	map3d( x, false, fcn ); // $ExpectError
	map3d( x, null, fcn ); // $ExpectError
	map3d( x, [ '1' ], fcn ); // $ExpectError
	map3d( x, {}, fcn ); // $ExpectError
	map3d( x, ( x: number ): number => x, fcn ); // $ExpectError

	map3d( x, 'abc', fcn, {} ); // $ExpectError
	map3d( x, 3.14, fcn, {} ); // $ExpectError
	map3d( x, true, fcn, {} ); // $ExpectError
	map3d( x, false, fcn, {} ); // $ExpectError
	map3d( x, null, fcn, {} ); // $ExpectError
	map3d( x, [ '1' ], fcn, {} ); // $ExpectError
	map3d( x, {}, fcn, {} ); // $ExpectError
	map3d( x, ( x: number ): number => x, fcn, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];

	map3d( x, [ 1, 2, 2 ], 'abc' ); // $ExpectError
	map3d( x, [ 1, 2, 2 ], 3.14 ); // $ExpectError
	map3d( x, [ 1, 2, 2 ], true ); // $ExpectError
	map3d( x, [ 1, 2, 2 ], false ); // $ExpectError
	map3d( x, [ 1, 2, 2 ], null ); // $ExpectError
	map3d( x, [ 1, 2, 2 ], [ '1' ] ); // $ExpectError
	map3d( x, [ 1, 2, 2 ], {} ); // $ExpectError

	map3d( x, [ 1, 2, 2 ], 'abc', {} ); // $ExpectError
	map3d( x, [ 1, 2, 2 ], 3.14, {} ); // $ExpectError
	map3d( x, [ 1, 2, 2 ], true, {} ); // $ExpectError
	map3d( x, [ 1, 2, 2 ], false, {} ); // $ExpectError
	map3d( x, [ 1, 2, 2 ], null, {} ); // $ExpectError
	map3d( x, [ 1, 2, 2 ], [ '1' ], {} ); // $ExpectError
	map3d( x, [ 1, 2, 2 ], {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];

	map3d(); // $ExpectError
	map3d( x ); // $ExpectError
	map3d( x, [ 1, 2, 2 ] ); // $ExpectError
	map3d( x, [ 1, 2, 2 ], fcn, {}, {} ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a nested array...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const y = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	map3d.assign( x, y, [ 1, 2, 2 ], fcn ); // $ExpectType Array3D<number>
	map3d.assign( x, y, [ 1, 2, 2 ], fcn, {} ); // $ExpectType Array3D<number>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a nested array...
{
	const y = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	map3d.assign( 'abc', y, [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d.assign( 3.14, y, [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d.assign( true, y, [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d.assign( false, y, [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d.assign( null, y, [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d.assign( [ '1' ], y, [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d.assign( {}, y, [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d.assign( ( x: number ): number => x, y, [ 1, 2, 2 ], fcn ); // $ExpectError

	map3d.assign( 'abc', y, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d.assign( 3.14, y, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d.assign( true, y, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d.assign( false, y, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d.assign( null, y, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d.assign( [ '1' ], y, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d.assign( {}, y, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d.assign( ( x: number ): number => x, y, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a nested array...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];

	map3d.assign( x, 'abc', [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d.assign( x, 3.14, [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d.assign( x, true, [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d.assign( x, false, [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d.assign( x, null, [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d.assign( x, [ '1' ], [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d.assign( x, {}, [ 1, 2, 2 ], fcn ); // $ExpectError
	map3d.assign( x, ( x: number ): number => x, [ 1, 2, 2 ], fcn ); // $ExpectError

	map3d.assign( x, 'abc', [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d.assign( x, 3.14, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d.assign( x, true, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d.assign( x, false, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d.assign( x, null, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d.assign( x, [ '1' ], [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d.assign( x, {}, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
	map3d.assign( x, ( x: number ): number => x, [ 1, 2, 2 ], fcn, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an array of numbers...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const y = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	map3d.assign( x, y, 'abc', fcn ); // $ExpectError
	map3d.assign( x, y, 3.14, fcn ); // $ExpectError
	map3d.assign( x, y, true, fcn ); // $ExpectError
	map3d.assign( x, y, false, fcn ); // $ExpectError
	map3d.assign( x, y, null, fcn ); // $ExpectError
	map3d.assign( x, y, [ '1' ], fcn ); // $ExpectError
	map3d.assign( x, y, {}, fcn ); // $ExpectError
	map3d.assign( x, y, ( x: number ): number => x, fcn ); // $ExpectError

	map3d.assign( x, y, 'abc', fcn, {} ); // $ExpectError
	map3d.assign( x, y, 3.14, fcn, {} ); // $ExpectError
	map3d.assign( x, y, true, fcn, {} ); // $ExpectError
	map3d.assign( x, y, false, fcn, {} ); // $ExpectError
	map3d.assign( x, y, null, fcn, {} ); // $ExpectError
	map3d.assign( x, y, [ '1' ], fcn, {} ); // $ExpectError
	map3d.assign( x, y, {}, fcn, {} ); // $ExpectError
	map3d.assign( x, y, ( x: number ): number => x, fcn, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a valid callback...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const y = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	map3d.assign( x, y, [ 1, 2, 2 ], 'abc' ); // $ExpectError
	map3d.assign( x, y, [ 1, 2, 2 ], 3.14 ); // $ExpectError
	map3d.assign( x, y, [ 1, 2, 2 ], true ); // $ExpectError
	map3d.assign( x, y, [ 1, 2, 2 ], false ); // $ExpectError
	map3d.assign( x, y, [ 1, 2, 2 ], null ); // $ExpectError
	map3d.assign( x, y, [ 1, 2, 2 ], [ '1' ] ); // $ExpectError
	map3d.assign( x, y, [ 1, 2, 2 ], {} ); // $ExpectError

	map3d.assign( x, y, [ 1, 2, 2 ], 'abc', {} ); // $ExpectError
	map3d.assign( x, y, [ 1, 2, 2 ], 3.14, {} ); // $ExpectError
	map3d.assign( x, y, [ 1, 2, 2 ], true, {} ); // $ExpectError
	map3d.assign( x, y, [ 1, 2, 2 ], false, {} ); // $ExpectError
	map3d.assign( x, y, [ 1, 2, 2 ], null, {} ); // $ExpectError
	map3d.assign( x, y, [ 1, 2, 2 ], [ '1' ], {} ); // $ExpectError
	map3d.assign( x, y, [ 1, 2, 2 ], {}, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const y = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	map3d.assign(); // $ExpectError
	map3d.assign( x, y ); // $ExpectError
	map3d.assign( x, y, [ 1, 2, 2 ] ); // $ExpectError
	map3d.assign( x, y, [ 1, 2, 2 ], fcn, {}, {} ); // $ExpectError
}
