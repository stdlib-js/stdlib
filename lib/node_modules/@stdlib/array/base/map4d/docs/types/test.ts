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

import map4d = require( './index' );

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
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];

	map4d( x, [ 1, 1, 2, 2 ], fcn ); // $ExpectType Array4D<number>
	map4d( x, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectType Array4D<number>
}

// The compiler throws an error if the function is provided a first argument which is not a nested array...
{
	map4d( 'abc', [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d( 3.14, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d( true, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d( false, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d( null, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d( [ '1' ], [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d( {}, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d( ( x: number ): number => x, [ 1, 1, 2, 2 ], fcn ); // $ExpectError

	map4d( 'abc', [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d( 3.14, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d( true, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d( false, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d( null, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d( [ '1' ], [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d( {}, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d( ( x: number ): number => x, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of numbers...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];

	map4d( x, 'abc', fcn ); // $ExpectError
	map4d( x, 3.14, fcn ); // $ExpectError
	map4d( x, true, fcn ); // $ExpectError
	map4d( x, false, fcn ); // $ExpectError
	map4d( x, null, fcn ); // $ExpectError
	map4d( x, [ '1' ], fcn ); // $ExpectError
	map4d( x, {}, fcn ); // $ExpectError
	map4d( x, ( x: number ): number => x, fcn ); // $ExpectError

	map4d( x, 'abc', fcn, {} ); // $ExpectError
	map4d( x, 3.14, fcn, {} ); // $ExpectError
	map4d( x, true, fcn, {} ); // $ExpectError
	map4d( x, false, fcn, {} ); // $ExpectError
	map4d( x, null, fcn, {} ); // $ExpectError
	map4d( x, [ '1' ], fcn, {} ); // $ExpectError
	map4d( x, {}, fcn, {} ); // $ExpectError
	map4d( x, ( x: number ): number => x, fcn, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];

	map4d( x, [ 1, 1, 2, 2 ], 'abc' ); // $ExpectError
	map4d( x, [ 1, 1, 2, 2 ], 3.14 ); // $ExpectError
	map4d( x, [ 1, 1, 2, 2 ], true ); // $ExpectError
	map4d( x, [ 1, 1, 2, 2 ], false ); // $ExpectError
	map4d( x, [ 1, 1, 2, 2 ], null ); // $ExpectError
	map4d( x, [ 1, 1, 2, 2 ], [ '1' ] ); // $ExpectError
	map4d( x, [ 1, 1, 2, 2 ], {} ); // $ExpectError

	map4d( x, [ 1, 1, 2, 2 ], 'abc', {} ); // $ExpectError
	map4d( x, [ 1, 1, 2, 2 ], 3.14, {} ); // $ExpectError
	map4d( x, [ 1, 1, 2, 2 ], true, {} ); // $ExpectError
	map4d( x, [ 1, 1, 2, 2 ], false, {} ); // $ExpectError
	map4d( x, [ 1, 1, 2, 2 ], null, {} ); // $ExpectError
	map4d( x, [ 1, 1, 2, 2 ], [ '1' ], {} ); // $ExpectError
	map4d( x, [ 1, 1, 2, 2 ], {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];

	map4d(); // $ExpectError
	map4d( x ); // $ExpectError
	map4d( x, [ 1, 1, 2, 2 ] ); // $ExpectError
	map4d( x, [ 1, 1, 2, 2 ], fcn, {}, {} ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a nested array...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const y = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	map4d.assign( x, y, [ 1, 1, 2, 2 ], fcn ); // $ExpectType Array4D<number>
	map4d.assign( x, y, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectType Array4D<number>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a nested array...
{
	const y = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	map4d.assign( 'abc', y, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d.assign( 3.14, y, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d.assign( true, y, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d.assign( false, y, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d.assign( null, y, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d.assign( [ '1' ], y, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d.assign( {}, y, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d.assign( ( x: number ): number => x, y, [ 1, 1, 2, 2 ], fcn ); // $ExpectError

	map4d.assign( 'abc', y, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d.assign( 3.14, y, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d.assign( true, y, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d.assign( false, y, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d.assign( null, y, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d.assign( [ '1' ], y, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d.assign( {}, y, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d.assign( ( x: number ): number => x, y, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a nested array...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];

	map4d.assign( x, 'abc', [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d.assign( x, 3.14, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d.assign( x, true, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d.assign( x, false, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d.assign( x, null, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d.assign( x, [ '1' ], [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d.assign( x, {}, [ 1, 1, 2, 2 ], fcn ); // $ExpectError
	map4d.assign( x, ( x: number ): number => x, [ 1, 1, 2, 2 ], fcn ); // $ExpectError

	map4d.assign( x, 'abc', [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d.assign( x, 3.14, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d.assign( x, true, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d.assign( x, false, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d.assign( x, null, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d.assign( x, [ '1' ], [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d.assign( x, {}, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
	map4d.assign( x, ( x: number ): number => x, [ 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an array of numbers...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const y = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	map4d.assign( x, y, 'abc', fcn ); // $ExpectError
	map4d.assign( x, y, 3.14, fcn ); // $ExpectError
	map4d.assign( x, y, true, fcn ); // $ExpectError
	map4d.assign( x, y, false, fcn ); // $ExpectError
	map4d.assign( x, y, null, fcn ); // $ExpectError
	map4d.assign( x, y, [ '1' ], fcn ); // $ExpectError
	map4d.assign( x, y, {}, fcn ); // $ExpectError
	map4d.assign( x, y, ( x: number ): number => x, fcn ); // $ExpectError

	map4d.assign( x, y, 'abc', fcn, {} ); // $ExpectError
	map4d.assign( x, y, 3.14, fcn, {} ); // $ExpectError
	map4d.assign( x, y, true, fcn, {} ); // $ExpectError
	map4d.assign( x, y, false, fcn, {} ); // $ExpectError
	map4d.assign( x, y, null, fcn, {} ); // $ExpectError
	map4d.assign( x, y, [ '1' ], fcn, {} ); // $ExpectError
	map4d.assign( x, y, {}, fcn, {} ); // $ExpectError
	map4d.assign( x, y, ( x: number ): number => x, fcn, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a valid callback...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const y = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	map4d.assign( x, y, [ 1, 1, 2, 2 ], 'abc' ); // $ExpectError
	map4d.assign( x, y, [ 1, 1, 2, 2 ], 3.14 ); // $ExpectError
	map4d.assign( x, y, [ 1, 1, 2, 2 ], true ); // $ExpectError
	map4d.assign( x, y, [ 1, 1, 2, 2 ], false ); // $ExpectError
	map4d.assign( x, y, [ 1, 1, 2, 2 ], null ); // $ExpectError
	map4d.assign( x, y, [ 1, 1, 2, 2 ], [ '1' ] ); // $ExpectError
	map4d.assign( x, y, [ 1, 1, 2, 2 ], {} ); // $ExpectError

	map4d.assign( x, y, [ 1, 1, 2, 2 ], 'abc', {} ); // $ExpectError
	map4d.assign( x, y, [ 1, 1, 2, 2 ], 3.14, {} ); // $ExpectError
	map4d.assign( x, y, [ 1, 1, 2, 2 ], true, {} ); // $ExpectError
	map4d.assign( x, y, [ 1, 1, 2, 2 ], false, {} ); // $ExpectError
	map4d.assign( x, y, [ 1, 1, 2, 2 ], null, {} ); // $ExpectError
	map4d.assign( x, y, [ 1, 1, 2, 2 ], [ '1' ], {} ); // $ExpectError
	map4d.assign( x, y, [ 1, 1, 2, 2 ], {}, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
	const y = [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ];

	map4d.assign(); // $ExpectError
	map4d.assign( x, y ); // $ExpectError
	map4d.assign( x, y, [ 1, 1, 2, 2 ] ); // $ExpectError
	map4d.assign( x, y, [ 1, 1, 2, 2 ], fcn, {}, {} ); // $ExpectError
}
