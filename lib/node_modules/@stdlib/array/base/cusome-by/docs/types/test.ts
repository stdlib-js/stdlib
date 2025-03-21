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

import cusomeBy = require( './index' );

const isPositive = ( v: number ): boolean => {
	return ( v > 0 );
};


// TESTS //

// The function returns an array...
{
	cusomeBy( [ 1, 2, 3, 4 ], 2, isPositive ); // $ExpectType boolean[]
	cusomeBy<number>( [ 1, 2, 3, 4 ], 2, isPositive ); // $ExpectType boolean[]

	cusomeBy( [ 1, 2, 3, 4 ], 2, isPositive, {} ); // $ExpectType boolean[]
	cusomeBy<number>( [ 1, 2, 3, 4 ], 2, isPositive, {} ); // $ExpectType boolean[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	cusomeBy( 1, 2, isPositive ); // $ExpectError
	cusomeBy( true, 2, isPositive ); // $ExpectError
	cusomeBy( false, 2, isPositive ); // $ExpectError
	cusomeBy( null, 2, isPositive ); // $ExpectError
	cusomeBy( void 0, 2, isPositive ); // $ExpectError
	cusomeBy( {}, 2, isPositive ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is a number...
{
	cusomeBy( [], true, isPositive ); // $ExpectError
	cusomeBy( [], false, isPositive ); // $ExpectError
	cusomeBy( [], null, isPositive ); // $ExpectError
	cusomeBy( [], void 0, isPositive ); // $ExpectError
	cusomeBy( [], {}, isPositive ); // $ExpectError
	cusomeBy( [], undefined, isPositive ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	cusomeBy( [], 2, 1 ); // $ExpectError
	cusomeBy( [], 2, true ); // $ExpectError
	cusomeBy( [], 2, false ); // $ExpectError
	cusomeBy( [], 2, null ); // $ExpectError
	cusomeBy( [], 2, void 0 ); // $ExpectError
	cusomeBy( [], 2, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	cusomeBy(); // $ExpectError
	cusomeBy( [] ); // $ExpectError
	cusomeBy( [], 2, 'throw', {} , null ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const x = [ 1, 2, 3, 4 ];

	cusomeBy.assign( x, 2, [ 0, 0, 0, 0 ], 1, 0, isPositive ); // $ExpectType (number | boolean)[]
	cusomeBy.assign( x, 2, new Float64Array( 4 ), 1, 0, isPositive ); // $ExpectType Float64Array
	cusomeBy.assign( x, 2, new Float32Array( 4 ), 1, 0, isPositive ); // $ExpectType Float32Array
	cusomeBy.assign( x, 2, new Int32Array( 4 ), 1, 0, isPositive ); // $ExpectType Int32Array
	cusomeBy.assign( x, 2, new Int16Array( 4 ), 1, 0, isPositive ); // $ExpectType Int16Array
	cusomeBy.assign( x, 2, new Int8Array( 4 ), 1, 0, isPositive ); // $ExpectType Int8Array
	cusomeBy.assign( x, 2, new Uint32Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint32Array
	cusomeBy.assign( x, 2, new Uint16Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint16Array
	cusomeBy.assign( x, 2, new Uint8Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint8Array
	cusomeBy.assign( x, 2, new Uint8ClampedArray( 4 ), 1, 0, isPositive ); // $ExpectType Uint8ClampedArray

	cusomeBy.assign( x, 2, [ 0, 0, 0, 0 ], 1, 0, isPositive, {} ); // $ExpectType (number | boolean)[]
	cusomeBy.assign( x, 2, new Float64Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Float64Array
	cusomeBy.assign( x, 2, new Float32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Float32Array
	cusomeBy.assign( x, 2, new Int32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int32Array
	cusomeBy.assign( x, 2, new Int16Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int16Array
	cusomeBy.assign( x, 2, new Int8Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int8Array
	cusomeBy.assign( x, 2, new Uint32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint32Array
	cusomeBy.assign( x, 2, new Uint16Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint16Array
	cusomeBy.assign( x, 2, new Uint8Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint8Array
	cusomeBy.assign( x, 2, new Uint8ClampedArray( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint8ClampedArray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const x = [ 1, 1, 0, 0, 0 ];

	cusomeBy.assign( 1, 2, x, 2, 0, isPositive ); // $ExpectError
	cusomeBy.assign( true, 2, x, 2, 0, isPositive ); // $ExpectError
	cusomeBy.assign( false, 2, x, 2, 0, isPositive ); // $ExpectError
	cusomeBy.assign( null, 2, x, 2, 0, isPositive ); // $ExpectError
	cusomeBy.assign( void 0, 2, x, 2, 0, isPositive ); // $ExpectError
	cusomeBy.assign( {}, 2, x, 2, 0, isPositive ); // $ExpectError

	cusomeBy.assign( 1, 2, x, 2, 0, isPositive, {} ); // $ExpectError
	cusomeBy.assign( true, 2, x, 2, 0, isPositive, {} ); // $ExpectError
	cusomeBy.assign( false, 2, x, 2, 0, isPositive, {} ); // $ExpectError
	cusomeBy.assign( null, 2, x, 2, 0, isPositive, {} ); // $ExpectError
	cusomeBy.assign( void 0, 2, x, 2, 0, isPositive, {} ); // $ExpectError
	cusomeBy.assign( {}, 2, x, 2, 0, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number..
{
	const x = [ 1, 1, 0, 0, 0 ];

	cusomeBy.assign( x, [], x, 1, 0, isPositive ); // $ExpectError
	cusomeBy.assign( x, true, x, 1, 0, isPositive ); // $ExpectError
	cusomeBy.assign( x, false, x, 1, 0, isPositive ); // $ExpectError
	cusomeBy.assign( x, null, x, 1, 0, isPositive ); // $ExpectError
	cusomeBy.assign( x, void 0, x, 1, 0, isPositive ); // $ExpectError
	cusomeBy.assign( x, {}, x, 1, 0, isPositive ); // $ExpectError

	cusomeBy.assign( x, [], x, 1, 0, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, true, x, 1, 0, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, false, x, 1, 0, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, null, x, 1, 0, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, void 0, x, 1, 0, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, {}, x, 1, 0, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an array-like object containing numbers...
{
	const x = [ 1, 1, 0, 0, 0 ];

	cusomeBy.assign( x, 2, 1, 1, 0, isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, true, 1, 0, isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, false, 1, 0, isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, null, 1, 0, isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, void 0, 1, 0, isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, {}, 1, 0, isPositive ); // $ExpectError

	cusomeBy.assign( x, 2, 1, 1, 0, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, true, 1, 0, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, false, 1, 0, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, null, 1, 0, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, void 0, 1, 0, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, {}, 1, 0, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a valid index...
{
	const x = [ 1, 1, 0, 0, 0 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cusomeBy.assign( x, 2, y, '1', 1, isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, y, true, 1, isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, y, false, 1, isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, y, null, 1, isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, y, void 0, 1, isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, y, {}, 1, isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, y, [], 1, isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, y, ( x: number ): number => x, 1, isPositive ); // $ExpectError

	cusomeBy.assign( x, 2, y, '1', 1, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, true, 1, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, false, 1, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, null, 1, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, void 0, 1, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, {}, 1, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, [], 1, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, ( x: number ): number => x, 1, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const x = [ 1, 1, 0, 0, 0 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cusomeBy.assign( x, 2, y, 0, '1', isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, true, isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, false, isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, null, isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, void 0, isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, {}, isPositive ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, [], isPositive ); // $ExpectError

	cusomeBy.assign( x, 2, y, 0, '1', isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, true, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, false, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, null, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, void 0, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, {}, isPositive, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, [], isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a sixth argument which is not a function...
{
	const x = [ 1, 1, 0, 0, 0 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cusomeBy.assign( x, 2, y, 0, 1, '1' ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, 1, true ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, 1, false ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, 1, null ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, 1, void 0 ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, 1, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, 1, [] ); // $ExpectError

	cusomeBy.assign( x, 2, y, 0, 1, '1', {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, 1, true, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, 1, false, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, 1, null, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, 1, void 0, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, 1, {}, {} ); // $ExpectError
	cusomeBy.assign( x, 2, y, 0, 1, [], {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	cusomeBy.assign(); // $ExpectError
	cusomeBy.assign( [] ); // $ExpectError
	cusomeBy.assign( [], [] ); // $ExpectError
	cusomeBy.assign( [], [], 'throw' ); // $ExpectError
	cusomeBy.assign( [], [], 'throw', [] ); // $ExpectError
	cusomeBy.assign( [], [], [], 'throw', [], 1, 0, {} ); // $ExpectError
}
