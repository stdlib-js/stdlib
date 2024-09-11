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

import cunoneBy = require( './index' );

var isPositive = ( v: number ): boolean => {
	return ( v > 0 );
};

// TESTS //

// The function returns an array...
{
	cunoneBy( [ 1, 2, 3, 4 ], isPositive ); // $ExpectType boolean[]
	cunoneBy<number>( [ 1, 2, 3, 4 ], isPositive ); // $ExpectType boolean[]

	cunoneBy( [ 1, 2, 3, 4 ], isPositive, {} ); // $ExpectType boolean[]
	cunoneBy<number>( [ 1, 2, 3, 4 ], isPositive, {} ); // $ExpectType boolean[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	cunoneBy( 1, isPositive ); // $ExpectError
	cunoneBy( true, isPositive ); // $ExpectError
	cunoneBy( false, isPositive ); // $ExpectError
	cunoneBy( null, isPositive ); // $ExpectError
	cunoneBy( void 0, isPositive ); // $ExpectError
	cunoneBy( {}, isPositive ); // $ExpectError

	cunoneBy( 1, isPositive, {} ); // $ExpectError
	cunoneBy( true, isPositive, {} ); // $ExpectError
	cunoneBy( false, isPositive, {} ); // $ExpectError
	cunoneBy( null, isPositive, {} ); // $ExpectError
	cunoneBy( void 0, isPositive, {} ); // $ExpectError
	cunoneBy( {}, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	cunoneBy( [], 1 ); // $ExpectError
	cunoneBy( [], true ); // $ExpectError
	cunoneBy( [], false ); // $ExpectError
	cunoneBy( [], null ); // $ExpectError
	cunoneBy( [], void 0 ); // $ExpectError
	cunoneBy( [], {} ); // $ExpectError

	cunoneBy( [], 1, {} ); // $ExpectError
	cunoneBy( [], true, {} ); // $ExpectError
	cunoneBy( [], false, {} ); // $ExpectError
	cunoneBy( [], null, {} ); // $ExpectError
	cunoneBy( [], void 0, {} ); // $ExpectError
	cunoneBy( [], {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	cunoneBy(); // $ExpectError
	cunoneBy( [] ); // $ExpectError
	cunoneBy( [], [], {}, {} ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const x = [ 1, 2, 3, 4 ];

	cunoneBy.assign( x, [ 0, 0, 0, 0 ], 1, 0, isPositive ); // $ExpectType (number | boolean)[]
	cunoneBy.assign( x, new Float64Array( 4 ), 1, 0, isPositive ); // $ExpectType Float64Array
	cunoneBy.assign( x, new Float32Array( 4 ), 1, 0, isPositive ); // $ExpectType Float32Array
	cunoneBy.assign( x, new Int32Array( 4 ), 1, 0, isPositive ); // $ExpectType Int32Array
	cunoneBy.assign( x, new Int16Array( 4 ), 1, 0, isPositive ); // $ExpectType Int16Array
	cunoneBy.assign( x, new Int8Array( 4 ), 1, 0, isPositive ); // $ExpectType Int8Array
	cunoneBy.assign( x, new Uint32Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint32Array
	cunoneBy.assign( x, new Uint16Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint16Array
	cunoneBy.assign( x, new Uint8Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint8Array
	cunoneBy.assign( x, new Uint8ClampedArray( 4 ), 1, 0, isPositive ); // $ExpectType Uint8ClampedArray

	cunoneBy.assign( x, [ 0, 0, 0, 0 ], 1, 0, isPositive, {} ); // $ExpectType (number | boolean)[]
	cunoneBy.assign( x, new Float64Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Float64Array
	cunoneBy.assign( x, new Float32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Float32Array
	cunoneBy.assign( x, new Int32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int32Array
	cunoneBy.assign( x, new Int16Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int16Array
	cunoneBy.assign( x, new Int8Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int8Array
	cunoneBy.assign( x, new Uint32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint32Array
	cunoneBy.assign( x, new Uint16Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint16Array
	cunoneBy.assign( x, new Uint8Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint8Array
	cunoneBy.assign( x, new Uint8ClampedArray( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint8ClampedArray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const x = [ 1, 1, 0, 0, 0 ];

	cunoneBy.assign( 1, x, 2, 0, isPositive ); // $ExpectError
	cunoneBy.assign( true, x, 2, 0, isPositive ); // $ExpectError
	cunoneBy.assign( false, x, 2, 0, isPositive ); // $ExpectError
	cunoneBy.assign( null, x, 2, 0, isPositive ); // $ExpectError
	cunoneBy.assign( void 0, x, 2, 0, isPositive ); // $ExpectError
	cunoneBy.assign( {}, x, 2, 0, isPositive ); // $ExpectError

	cunoneBy.assign( 1, x, 2, 0, isPositive, {} ); // $ExpectError
	cunoneBy.assign( true, x, 2, 0, isPositive, {} ); // $ExpectError
	cunoneBy.assign( false, x, 2, 0, isPositive, {} ); // $ExpectError
	cunoneBy.assign( null, x, 2, 0, isPositive, {} ); // $ExpectError
	cunoneBy.assign( void 0, x, 2, 0, isPositive, {} ); // $ExpectError
	cunoneBy.assign( {}, x, 2, 0, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object containing numbers...
{
	const x = [ 1, 1, 0, 0, 0 ];

	cunoneBy.assign( x, 1, 1, 0, isPositive ); // $ExpectError
	cunoneBy.assign( x, true, 1, 0, isPositive ); // $ExpectError
	cunoneBy.assign( x, false, 1, 0, isPositive ); // $ExpectError
	cunoneBy.assign( x, null, 1, 0, isPositive ); // $ExpectError
	cunoneBy.assign( x, void 0, 1, 0, isPositive ); // $ExpectError
	cunoneBy.assign( x, {}, 1, 0, isPositive ); // $ExpectError

	cunoneBy.assign( x, 1, 1, 0, isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, true, 1, 0, isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, false, 1, 0, isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, null, 1, 0, isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, void 0, 1, 0, isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, {}, 1, 0, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a number...
{
	const x = [ 1, 1, 0, 0, 0 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cunoneBy.assign( x, y, '1', 1, isPositive ); // $ExpectError
	cunoneBy.assign( x, y, true, 1, isPositive ); // $ExpectError
	cunoneBy.assign( x, y, false, 1, isPositive ); // $ExpectError
	cunoneBy.assign( x, y, null, 1, isPositive ); // $ExpectError
	cunoneBy.assign( x, y, void 0, 1, isPositive ); // $ExpectError
	cunoneBy.assign( x, y, {}, 1, isPositive ); // $ExpectError
	cunoneBy.assign( x, y, [], 1, isPositive ); // $ExpectError
	cunoneBy.assign( x, y, ( x: number ): number => x, 1, isPositive ); // $ExpectError

	cunoneBy.assign( x, y, '1', 1, isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, y, true, 1, isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, y, false, 1, isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, y, null, 1, isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, y, void 0, 1, isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, y, {}, 1, isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, y, [], 1, isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, y, ( x: number ): number => x, 1, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const x = [ 1, 1, 0, 0, 0 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cunoneBy.assign( x, y, 0, '1', isPositive ); // $ExpectError
	cunoneBy.assign( x, y, 0, true, isPositive ); // $ExpectError
	cunoneBy.assign( x, y, 0, false, isPositive ); // $ExpectError
	cunoneBy.assign( x, y, 0, null, isPositive ); // $ExpectError
	cunoneBy.assign( x, y, 0, void 0, isPositive ); // $ExpectError
	cunoneBy.assign( x, y, 0, {}, isPositive ); // $ExpectError
	cunoneBy.assign( x, y, 0, [], isPositive ); // $ExpectError

	cunoneBy.assign( x, y, 0, '1', isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, y, 0, true, isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, y, 0, false, isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, y, 0, null, isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, y, 0, void 0, isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, y, 0, {}, isPositive, {} ); // $ExpectError
	cunoneBy.assign( x, y, 0, [], isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a function...
{
	const x = [ 1, 1, 0, 0, 0 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cunoneBy.assign( x, y, 0, 1, '1' ); // $ExpectError
	cunoneBy.assign( x, y, 0, 1, true ); // $ExpectError
	cunoneBy.assign( x, y, 0, 1, false ); // $ExpectError
	cunoneBy.assign( x, y, 0, 1, null ); // $ExpectError
	cunoneBy.assign( x, y, 0, 1, void 0 ); // $ExpectError
	cunoneBy.assign( x, y, 0, 1, {} ); // $ExpectError
	cunoneBy.assign( x, y, 0, 1, [] ); // $ExpectError

	cunoneBy.assign( x, y, 0, 1, '1', {} ); // $ExpectError
	cunoneBy.assign( x, y, 0, 1, true, {} ); // $ExpectError
	cunoneBy.assign( x, y, 0, 1, false, {} ); // $ExpectError
	cunoneBy.assign( x, y, 0, 1, null, {} ); // $ExpectError
	cunoneBy.assign( x, y, 0, 1, void 0, {} ); // $ExpectError
	cunoneBy.assign( x, y, 0, 1, {}, {} ); // $ExpectError
	cunoneBy.assign( x, y, 0, 1, [], {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	cunoneBy.assign(); // $ExpectError
	cunoneBy.assign( [] ); // $ExpectError
	cunoneBy.assign( [], [] ); // $ExpectError
	cunoneBy.assign( [], [], 1 ); // $ExpectError
	cunoneBy.assign( [], [], 1, 0 ); // $ExpectError
	cunoneBy.assign( [], [], 1, 0, isPositive, {}, {} ); // $ExpectError
}
