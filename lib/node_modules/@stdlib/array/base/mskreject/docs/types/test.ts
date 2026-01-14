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

import mskreject = require( './index' );


// TESTS //

// The function returns an array...
{
	mskreject( [ 1, 2, 3, 4 ], [ 0, 0, 0, 0 ] ); // $ExpectType number[]
	mskreject<any>( [ 1, 2, 3, 4 ], [ 0, 0, 0, 0 ] ); // $ExpectType any[]
	mskreject<number>( [ 1, 2, 3, 4 ], [ 0, 0, 0, 0 ] ); // $ExpectType number[]
	mskreject<string>( [ '1', '2', '3', '4' ], [ 0, 0, 0, 0 ] ); // $ExpectType string[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	mskreject( 1, [ 0, 0 ] ); // $ExpectError
	mskreject( true, [ 0, 0 ] ); // $ExpectError
	mskreject( false, [ 0, 0 ] ); // $ExpectError
	mskreject( null, [ 0, 0 ] ); // $ExpectError
	mskreject( void 0, [ 0, 0 ] ); // $ExpectError
	mskreject( {}, [ 0, 0 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	mskreject( [], 1 ); // $ExpectError
	mskreject( [], true ); // $ExpectError
	mskreject( [], false ); // $ExpectError
	mskreject( [], null ); // $ExpectError
	mskreject( [], void 0 ); // $ExpectError
	mskreject( [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	mskreject(); // $ExpectError
	mskreject( [] ); // $ExpectError
	mskreject( [], [], [] ); // $ExpectError
}
