/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import nCartesianProduct = require( './index' );


// TESTS //

// The function returns an array of arrays...
{
	nCartesianProduct( [ 1, 2, 3, 4 ], [ 1, 3 ] ); // $ExpectType [number, number][]
	nCartesianProduct( [ 1, 2, 3, 4 ], [ 1, 3 ], [ 6 ] ); // $ExpectType [number, number, number][]
	nCartesianProduct( [ 1, 2, 3, 4 ], [ 1, 3 ], [ 6 ], [ 7 ] ); // $ExpectType number[][]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	nCartesianProduct( 1, [ 1, 3 ] ); // $ExpectError
	nCartesianProduct( true, [ 1, 3 ] ); // $ExpectError
	nCartesianProduct( false, [ 1, 3 ] ); // $ExpectError
	nCartesianProduct( null, [ 1, 3 ] ); // $ExpectError
	nCartesianProduct( void 0, [ 1, 3 ] ); // $ExpectError
	nCartesianProduct( {}, [ 1, 3 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	nCartesianProduct( [], 1 ); // $ExpectError
	nCartesianProduct( [], true ); // $ExpectError
	nCartesianProduct( [], false ); // $ExpectError
	nCartesianProduct( [], null ); // $ExpectError
	nCartesianProduct( [], void 0 ); // $ExpectError
	nCartesianProduct( [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object...
{
	nCartesianProduct( [], [], 1 ); // $ExpectError
	nCartesianProduct( [], [], true ); // $ExpectError
	nCartesianProduct( [], [], false ); // $ExpectError
	nCartesianProduct( [], [], null ); // $ExpectError
	nCartesianProduct( [], [], void 0 ); // $ExpectError
	nCartesianProduct( [], [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an array-like object...
{
	nCartesianProduct( [], [], [], 1 ); // $ExpectError
	nCartesianProduct( [], [], [], true ); // $ExpectError
	nCartesianProduct( [], [], [], false ); // $ExpectError
	nCartesianProduct( [], [], [], null ); // $ExpectError
	nCartesianProduct( [], [], [], void 0 ); // $ExpectError
	nCartesianProduct( [], [], [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not an array-like object...
{
	nCartesianProduct( [], [], [], [], 1 ); // $ExpectError
	nCartesianProduct( [], [], [], [], true ); // $ExpectError
	nCartesianProduct( [], [], [], [], false ); // $ExpectError
	nCartesianProduct( [], [], [], [], null ); // $ExpectError
	nCartesianProduct( [], [], [], [], void 0 ); // $ExpectError
	nCartesianProduct( [], [], [], [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	nCartesianProduct(); // $ExpectError
	nCartesianProduct( [] ); // $ExpectError
}
