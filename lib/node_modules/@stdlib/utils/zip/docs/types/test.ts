/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import zip = require( './index' );


// TESTS //

// The function returns an array of arrays...
{
	zip( [ 1, 2 ], [ 'a', 'b' ] ); // $ExpectType any[][]
	const opts = {
		'trunc': false
	};
	zip( [ 1, 2, 3 ], [ 'a', 'b' ], opts ); // $ExpectType any[][]
	zip( [ 1, 2 ], [ 'a', 'b' ], [ true, false ] ); // $ExpectType any[][]
	zip( [ 1, 2 ], [ 'a', 'b' ], [ true, false ], opts ); // $ExpectType any[][]
	zip( [ 1, 2 ], [ 'a', 'b' ], [ true, false ], [ {}, {} ] ); // $ExpectType any[][]
	zip( [ 1, 2 ], [ 'a', 'b' ], [ true, false ], [ {}, {} ], opts ); // $ExpectType any[][]
}

// The compiler throws an error if the function is provided non-array arguments for everything but the last parameter...
{
	const arr0 = [ 1, 2 ];
	const arr1 = [ 'a', 'b' ];
	const arr2 = [ true, false ];

	zip( true, arr1, arr2 ); // $ExpectError
	zip( false, arr1, arr2 ); // $ExpectError
	zip( 'abc', arr1, arr2 ); // $ExpectError
	zip( 3.12, arr1, arr2 ); // $ExpectError
	zip( ( x: number ): number => x, arr1, arr2 ); // $ExpectError
	zip( {}, arr1, arr2 ); // $ExpectError

	zip( arr0, true, arr2 ); // $ExpectError
	zip( arr0, false, arr2 ); // $ExpectError
	zip( arr0, 'abc', arr2 ); // $ExpectError
	zip( arr0, 3.12, arr2 ); // $ExpectError
	zip( arr0, ( x: number ): number => x, arr2 ); // $ExpectError
	zip( arr0, {}, arr2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not an array or object...
{
	const arr0 = [ 1, 2 ];
	const arr1 = [ 'a', 'b' ];

	zip( arr0, arr1, 'abc' ); // $ExpectError
	zip( arr0, arr1, 123 ); // $ExpectError
	zip( arr0, arr1, false ); // $ExpectError
	zip( arr0, arr1, true ); // $ExpectError
	zip( arr0, arr1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `trunc` option which is not a boolean...
{
	const arr0 = [ 1, 2 ];
	const arr1 = [ 'a', 'b' ];
	zip( arr0, arr1, { 'trunc': 'abc' } ); // $ExpectError
	zip( arr0, arr1, { 'trunc': 123 } ); // $ExpectError
	zip( arr0, arr1, { 'trunc': null } ); // $ExpectError
	zip( arr0, arr1, { 'trunc': [] } ); // $ExpectError
	zip( arr0, arr1, { 'trunc': {} } ); // $ExpectError
	zip( arr0, arr1, { 'trunc': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `arrays` option which is not a boolean...
{
	const arr0 = [ 1, 2 ];
	const arr1 = [ 'a', 'b' ];
	zip( arr0, arr1, { 'arrays': 'abc' } ); // $ExpectError
	zip( arr0, arr1, { 'arrays': 123 } ); // $ExpectError
	zip( arr0, arr1, { 'arrays': null } ); // $ExpectError
	zip( arr0, arr1, { 'arrays': [] } ); // $ExpectError
	zip( arr0, arr1, { 'arrays': {} } ); // $ExpectError
	zip( arr0, arr1, { 'arrays': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is not provided at least two arguments...
{
	zip(); // $ExpectError
	zip( [ 0, 1 ] ); // $ExpectError
}
