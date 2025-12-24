/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import zip2object = require( './index' );


// TESTS //

// The function returns an object...
{
	zip2object( [ 1, 2 ], [ 1, 3 ] ); // $ExpectType Record<1 | 2, number>
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	zip2object( 1, [ 1, 3 ] ); // $ExpectError
	zip2object( true, [ 1, 3 ] ); // $ExpectError
	zip2object( false, [ 1, 3 ] ); // $ExpectError
	zip2object( null, [ 1, 3 ] ); // $ExpectError
	zip2object( void 0, [ 1, 3 ] ); // $ExpectError
	zip2object( {}, [ 1, 3 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	zip2object( [], 1 ); // $ExpectError
	zip2object( [], true ); // $ExpectError
	zip2object( [], false ); // $ExpectError
	zip2object( [], null ); // $ExpectError
	zip2object( [], void 0 ); // $ExpectError
	zip2object( [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zip2object(); // $ExpectError
	zip2object( [] ); // $ExpectError
	zip2object( [], [], [] ); // $ExpectError
}
