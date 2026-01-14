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

import cuanyByRight = require( './index' );

/**
* Tests whether a value is positive.
*
* @param value - input value
* @returns boolean indicating whether an element is positive
*/
function isPositive( value: number ): boolean {
	return ( value > 0 );
}


// TESTS //

// The function returns an array...
{
	cuanyByRight( [ 1, 2, 3 ], isPositive ); // $ExpectType boolean[]
	cuanyByRight( new Float64Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType boolean[]
	cuanyByRight( new Float32Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType boolean[]
	cuanyByRight( new Int32Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType boolean[]
	cuanyByRight( new Int16Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType boolean[]
	cuanyByRight( new Int8Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType boolean[]
	cuanyByRight( new Uint32Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType boolean[]
	cuanyByRight( new Uint16Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType boolean[]
	cuanyByRight( new Uint8Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType boolean[]
	cuanyByRight( new Uint8ClampedArray( [ 1, 2, 3 ] ), isPositive ); // $ExpectType boolean[]

	cuanyByRight( [ 1, 2, 3 ], isPositive, {} ); // $ExpectType boolean[]
	cuanyByRight( new Float64Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType boolean[]
	cuanyByRight( new Float32Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType boolean[]
	cuanyByRight( new Int32Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType boolean[]
	cuanyByRight( new Int16Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType boolean[]
	cuanyByRight( new Int8Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType boolean[]
	cuanyByRight( new Uint32Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType boolean[]
	cuanyByRight( new Uint16Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType boolean[]
	cuanyByRight( new Uint8Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType boolean[]
	cuanyByRight( new Uint8ClampedArray( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType boolean[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	cuanyByRight( 1, isPositive ); // $ExpectError
	cuanyByRight( true, isPositive ); // $ExpectError
	cuanyByRight( false, isPositive ); // $ExpectError
	cuanyByRight( null, isPositive ); // $ExpectError
	cuanyByRight( void 0, isPositive ); // $ExpectError
	cuanyByRight( {}, isPositive ); // $ExpectError

	cuanyByRight( 1, isPositive, {} ); // $ExpectError
	cuanyByRight( true, isPositive, {} ); // $ExpectError
	cuanyByRight( false, isPositive, {} ); // $ExpectError
	cuanyByRight( null, isPositive, {} ); // $ExpectError
	cuanyByRight( void 0, isPositive, {} ); // $ExpectError
	cuanyByRight( {}, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not function...
{
	const x = [ 1, 2, 3, 4 ];

	cuanyByRight( x, null ); // $ExpectError
	cuanyByRight( x, {} ); // $ExpectError
	cuanyByRight( x, [] ); // $ExpectError
	cuanyByRight( x, '' ); // $ExpectError
	cuanyByRight( x, undefined ); // $ExpectError

	cuanyByRight( x, null, {} ); // $ExpectError
	cuanyByRight( x, {}, {} ); // $ExpectError
	cuanyByRight( x, [], {} ); // $ExpectError
	cuanyByRight( x, '', {} ); // $ExpectError
	cuanyByRight( x, undefined, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	cuanyByRight(); // $ExpectError
	cuanyByRight( [] ); // $ExpectError
	cuanyByRight( [ 1, 2 ], isPositive, {}, '' ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const x = [ 0, 0, 0, 1, 0 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cuanyByRight.assign( x, y, 2, 0, isPositive  ); // $ExpectType (boolean | null)[]
	cuanyByRight.assign( x, y, 2, 0, isPositive, {} ); // $ExpectType (boolean | null)[]
	cuanyByRight.assign( x, new Float64Array( 4 ), 1, 0, isPositive ); // $ExpectType Float64Array
	cuanyByRight.assign( x, new Float32Array( 4 ), 1, 0, isPositive ); // $ExpectType Float32Array
	cuanyByRight.assign( x, new Int32Array( 4 ), 1, 0, isPositive ); // $ExpectType Int32Array
	cuanyByRight.assign( x, new Int16Array( 4 ), 1, 0, isPositive ); // $ExpectType Int16Array
	cuanyByRight.assign( x, new Int8Array( 4 ), 1, 0, isPositive ); // $ExpectType Int8Array
	cuanyByRight.assign( x, new Uint32Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint32Array
	cuanyByRight.assign( x, new Uint16Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint16Array
	cuanyByRight.assign( x, new Uint8Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint8Array
	cuanyByRight.assign( x, new Uint8ClampedArray( 4 ), 1, 0, isPositive ); // $ExpectType Uint8ClampedArray

	cuanyByRight.assign( x, [ 0, 0, 0, 0 ], 1, 0, isPositive, {} ); // $ExpectType (number | boolean)[]
	cuanyByRight.assign( x, new Float64Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Float64Array
	cuanyByRight.assign( x, new Float32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Float32Array
	cuanyByRight.assign( x, new Int32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int32Array
	cuanyByRight.assign( x, new Int16Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int16Array
	cuanyByRight.assign( x, new Int8Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int8Array
	cuanyByRight.assign( x, new Uint32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint32Array
	cuanyByRight.assign( x, new Uint16Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint16Array
	cuanyByRight.assign( x, new Uint8Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint8Array
	cuanyByRight.assign( x, new Uint8ClampedArray( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint8ClampedArray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const x = [ false, false, true, false, false ];

	cuanyByRight.assign( 1, x, 2, 0, isPositive ); // $ExpectError
	cuanyByRight.assign( true, x, 2, 0, isPositive ); // $ExpectError
	cuanyByRight.assign( false, x, 2, 0, isPositive ); // $ExpectError
	cuanyByRight.assign( null, x, 2, 0, isPositive ); // $ExpectError
	cuanyByRight.assign( void 0, x, 2, 0, isPositive ); // $ExpectError
	cuanyByRight.assign( {}, x, 2, 0, isPositive ); // $ExpectError

	cuanyByRight.assign( 1, x, 2, 0, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( true, x, 2, 0, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( false, x, 2, 0, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( null, x, 2, 0, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( void 0, x, 2, 0, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( {}, x, 2, 0, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object...
{
	const x = [ false, false, true, false, false ];

	cuanyByRight.assign( x, 1, 2, 0, isPositive ); // $ExpectError
	cuanyByRight.assign( x, true, 2, 0, isPositive ); // $ExpectError
	cuanyByRight.assign( x, false, 2, 0, isPositive ); // $ExpectError
	cuanyByRight.assign( x, null, 2, 0, isPositive ); // $ExpectError
	cuanyByRight.assign( x, void 0, 2, 0, isPositive ); // $ExpectError
	cuanyByRight.assign( x, {}, 2, 0, isPositive ); // $ExpectError

	cuanyByRight.assign( x, 1, 2, 0, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( x, true, 2, 0, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( x, false, 2, 0, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( x, null, 2, 0, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( x, void 0, 2, 0, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( x, {}, 2, 0, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a number...
{
	const x = [ false, false, true, false, false ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cuanyByRight.assign( x, y , '1', 0, isPositive ); // $ExpectError
	cuanyByRight.assign( x, y , true, 0, isPositive ); // $ExpectError
	cuanyByRight.assign( x, y , false, 0, isPositive ); // $ExpectError
	cuanyByRight.assign( x, y , null, 0, isPositive ); // $ExpectError
	cuanyByRight.assign( x, y , void 0, isPositive ); // $ExpectError
	cuanyByRight.assign( x, y , {}, 0, isPositive ); // $ExpectError
	cuanyByRight.assign( x, y , [], 0, isPositive ); // $ExpectError

	cuanyByRight.assign( x, y , '1', 0, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( x, y , true, 0, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( x, y , false, 0, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( x, y , null, 0, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( x, y , void 0, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( x, y , {}, 0, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( x, y , [], 0, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const x = [ false, false, true, false, false ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cuanyByRight.assign( x, y, 1, '1', isPositive ); // $ExpectError
	cuanyByRight.assign( x, y, 1, true, isPositive ); // $ExpectError
	cuanyByRight.assign( x, y, 1, false, isPositive ); // $ExpectError
	cuanyByRight.assign( x, y, 1, null, isPositive ); // $ExpectError
	cuanyByRight.assign( x, y, 1, void 0, isPositive ); // $ExpectError
	cuanyByRight.assign( x, y, 1, {}, isPositive ); // $ExpectError
	cuanyByRight.assign( x, y, 1, [], isPositive ); // $ExpectError

	cuanyByRight.assign( x, y, 1, '1', isPositive, {} ); // $ExpectError
	cuanyByRight.assign( x, y, 1, true, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( x, y, 1, false, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( x, y, 1, null, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( x, y, 1, void 0, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( x, y, 1, {}, isPositive, {} ); // $ExpectError
	cuanyByRight.assign( x, y, 1, [], isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not like a function...
{
	const x = [ false, false, true, false, false ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cuanyByRight.assign( x, y, 1, 2, {} ); // $ExpectError
	cuanyByRight.assign( x, y, 1, 2, void 0 ); // $ExpectError
	cuanyByRight.assign( x, y, 1, 1, [] ); // $ExpectError
	cuanyByRight.assign( x, y, 1, 1, '' ); // $ExpectError

	cuanyByRight.assign( x, y, 1, 2, {}, {} ); // $ExpectError
	cuanyByRight.assign( x, y, 1, 2, void 0, {} ); // $ExpectError
	cuanyByRight.assign( x, y, 1, 1, [], {} ); // $ExpectError
	cuanyByRight.assign( x, y, 1, 1, '', {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	cuanyByRight.assign(); // $ExpectError
	cuanyByRight.assign( [] ); // $ExpectError
	cuanyByRight.assign( [], [] ); // $ExpectError
	cuanyByRight.assign( [], [], 2 ); // $ExpectError
	cuanyByRight.assign( [], [], 1, 1, isPositive, [], {} ); // $ExpectError
}
