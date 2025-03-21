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

import take = require( './index' );


// TESTS //

// The function returns an array...
{
	take( [ 1, 2, 3, 4 ], [ 1, 3 ] ); // $ExpectType number[]
	take<any>( [ 1, 2, 3, 4 ], [ 1, 3 ] ); // $ExpectType any[]
	take<number>( [ 1, 2, 3, 4 ], [ 1, 3 ] ); // $ExpectType number[]
	take<string>( [ '1', '2', '3', '4' ], [ 1, 3 ] ); // $ExpectType string[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	take( 1, [ 1, 3 ] ); // $ExpectError
	take( true, [ 1, 3 ] ); // $ExpectError
	take( false, [ 1, 3 ] ); // $ExpectError
	take( null, [ 1, 3 ] ); // $ExpectError
	take( void 0, [ 1, 3 ] ); // $ExpectError
	take( {}, [ 1, 3 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	take( [], 1 ); // $ExpectError
	take( [], true ); // $ExpectError
	take( [], false ); // $ExpectError
	take( [], null ); // $ExpectError
	take( [], void 0 ); // $ExpectError
	take( [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	take(); // $ExpectError
	take( [] ); // $ExpectError
	take( [], [], [] ); // $ExpectError
}
