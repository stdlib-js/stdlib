/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import subd2ind = require( './index' );


// TESTS //

// The function returns a number...
{
	const shape = [ 3, 3, 3 ];
	subd2ind( shape, 1, 2, 2, { 'mode': [ 'throw' ] } ); // $ExpectType number
	subd2ind( shape, 1, 2, 2, { 'order': 'row-major' } ); // $ExpectType number
}

// The function does not compile if provided a first argument which is not an array-like object containing numbers...
{
	subd2ind( true, 1, 0 ); // $ExpectError
	subd2ind( false, 1, 0 ); // $ExpectError
	subd2ind( null, 1, 0 ); // $ExpectError
	subd2ind( undefined, 1, 0 ); // $ExpectError
	subd2ind( '5', 1, 0 ); // $ExpectError
	subd2ind( [ '1', '2' ], 1, 0 ); // $ExpectError
	subd2ind( {}, 1, 0 ); // $ExpectError
	subd2ind( ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The function does not compile if provided additional arguments which are not numbers followed by an optional options object...
{
	const shape = [ 3, 3, 3 ];
	subd2ind( shape, 'abc' ); // $ExpectError
	subd2ind( shape, true ); // $ExpectError
	subd2ind( shape, false ); // $ExpectError
	subd2ind( shape, null ); // $ExpectError
	subd2ind( shape, undefined ); // $ExpectError
	subd2ind( shape, [] ); // $ExpectError
	subd2ind( shape, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an `order` option which is not a recognized order...
{
	const shape = [ 3, 3, 3 ];
	subd2ind( shape, 1, 2, 2, { 'order': 'abc' } ); // $ExpectError
	subd2ind( shape, 1, 2, 2, { 'order': 123 } ); // $ExpectError
	subd2ind( shape, 1, 2, 2, { 'order': true } ); // $ExpectError
	subd2ind( shape, 1, 2, 2, { 'order': false } ); // $ExpectError
	subd2ind( shape, 1, 2, 2, { 'order': null } ); // $ExpectError
	subd2ind( shape, 1, 2, 2, { 'order': [] } ); // $ExpectError
	subd2ind( shape, 1, 2, 2, { 'order': {} } ); // $ExpectError
	subd2ind( shape, 1, 2, 2, { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not an array of strings...
{
	const shape = [ 3, 3, 3 ];
	subd2ind( shape, 1, 2, 2, { 'mode': 'abc' } ); // $ExpectError
	subd2ind( shape, 1, 2, 2, { 'mode': 123 } ); // $ExpectError
	subd2ind( shape, 1, 2, 2, { 'mode': true } ); // $ExpectError
	subd2ind( shape, 1, 2, 2, { 'mode': false } ); // $ExpectError
	subd2ind( shape, 1, 2, 2, { 'mode': null } ); // $ExpectError
	subd2ind( shape, 1, 2, 2, { 'mode': {} } ); // $ExpectError
	subd2ind( shape, 1, 2, 2, { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided no arguments...
{
	subd2ind(); // $ExpectError
}
