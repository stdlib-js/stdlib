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


import cusome = require( './index' );


// TESTS //

// The function returns an array...
{
	cusome( [false, false, true, false, false], 2 ); // $ExpectType boolean[]
	cusome( [ false, false, true, false, false ], 1 ); // $ExpectType boolean[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	cusome( 1, 2 ); // $ExpectError
	cusome( true, 2 ); // $ExpectError
	cusome( false, 2 ); // $ExpectError
	cusome( null, 2 ); // $ExpectError
	cusome( void  0, 2 ); // $ExpectError
	cusome( {}, 2 ); // $ExpectError
	cusome( undefined, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	cusome( [ true, false, true ], true ); // $ExpectError
	cusome( [ true, false, true ], false ); // $ExpectError
	cusome( [ true, false, true ], null ); // $ExpectError
	cusome( [ true, false, true ], [] ); // $ExpectError
	cusome( [ true, false, true ], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	cusome(); // $ExpectError
	cusome( [] ); // $ExpectError
	cusome( [], [], [] ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const x = [ false, false, true, false, false ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cusome.assign( x, 2, y, 2, 0 ); // $ExpectType (boolean | null)[]
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const y = [ false, false, true, false, false ];

	cusome.assign( 1, 2, y, 2, 0 ); // $ExpectError
	cusome.assign( true, 2, y, 2, 0 ); // $ExpectError
	cusome.assign( false, 2, y, 2, 0 ); // $ExpectError
	cusome.assign( null, 2, y, 2, 0 ); // $ExpectError
	cusome.assign( void 0, 2, y, 2, 0 ); // $ExpectError
	cusome.assign( {}, 2, y, 2, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an number...
{
	const x = [ false, false, true, false, false ];
	const y = [false, false, true, false, false];

	cusome.assign( x, undefined, y, 2, 0 ); // $ExpectError
	cusome.assign( x, true, y, 2, 0 ); // $ExpectError
	cusome.assign( x, false, y, 2, 0 ); // $ExpectError
	cusome.assign( x, null, y, 2, 0 ); // $ExpectError
	cusome.assign( x, void 0, y, 2, 0 ); // $ExpectError
	cusome.assign( x, {}, y, 2, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an array-like object...
{
	const x = [ false, false, true, false, false ];

	cusome.assign( x, 2, true, 2, 0 ); // $ExpectError
	cusome.assign( x, 2, false, 2, 0 ); // $ExpectError
	cusome.assign( x, 2, null, 2, 0 ); // $ExpectError
	cusome.assign( x, 2, void 0, 2, 0 ); // $ExpectError
	cusome.assign( x, 2, {}, 2, 0 ); // $ExpectError
	cusome.assign( x, 2, undefined, 2, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const x = [ false, false, true, false, false ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cusome.assign( x, 2, y, true, 2 ); // $ExpectError
	cusome.assign( x, 2, y, false, 2 ); // $ExpectError
	cusome.assign( x, 2, y, null, 2 ); // $ExpectError
	cusome.assign( x, 2, y, void 0, 2 ); // $ExpectError
	cusome.assign( x, 2, y, {}, 2 ); // $ExpectError
	cusome.assign( x, 2, y, undefined, 2 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const x = [ false, false, true, false, false ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cusome.assign( x, 2, y, 1, '1' ); // $ExpectError
	cusome.assign( x, 1, y, 1, true ); // $ExpectError
	cusome.assign( x, 2, y, 1, false ); // $ExpectError
	cusome.assign( x, 1, y, 1, null ); // $ExpectError
	cusome.assign( x, 2, y, 1, void 0 ); // $ExpectError
	cusome.assign( x, 1, y, 1, {} ); // $ExpectError
	cusome.assign( x, 2, y, 1, [] ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	cusome.assign(); // $ExpectError
	cusome.assign( [] ); // $ExpectError
	cusome.assign( [], [] ); // $ExpectError
	cusome.assign( [], [], 2 ); // $ExpectError
	cusome.assign( [], [], 1, 1, {}, {} ); // $ExpectError
}
