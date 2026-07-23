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

import mskfilter = require( './index' );


// TESTS //

// The function returns an array...
{
	mskfilter( [ 1, 2, 3, 4 ], [ 0, 0 ] ); // $ExpectType number[]
	mskfilter<any>( [ 1, 2, 3, 4 ], [ 0, 0 ] ); // $ExpectType any[]
	mskfilter<number>( [ 1, 2, 3, 4 ], [ 0, 0 ] ); // $ExpectType number[]
	mskfilter<string>( [ '1', '2', '3', '4' ], [ 0, 0 ] ); // $ExpectType string[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	mskfilter( 1, [ 0, 0 ] ); // $ExpectError
	mskfilter( true, [ 0, 0 ] ); // $ExpectError
	mskfilter( false, [ 0, 0 ] ); // $ExpectError
	mskfilter( null, [ 0, 0 ] ); // $ExpectError
	mskfilter( void 0, [ 0, 0 ] ); // $ExpectError
	mskfilter( {}, [ 0, 0 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	mskfilter( [], 1 ); // $ExpectError
	mskfilter( [], true ); // $ExpectError
	mskfilter( [], false ); // $ExpectError
	mskfilter( [], null ); // $ExpectError
	mskfilter( [], void 0 ); // $ExpectError
	mskfilter( [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	mskfilter(); // $ExpectError
	mskfilter( [] ); // $ExpectError
	mskfilter( [], [], [] ); // $ExpectError
}
