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

import mskrejectMap from './index';

// TESTS //

// The function returns an array...
{
	mskrejectMap( [ 1, 2, 3, 4 ], [ 0, 0, 0, 0 ], function( val ) { return val * 2 } ); // $ExpectType number[]
	mskrejectMap<any>( [ 1, 2, 3, 4 ], [ 0, 0, 0, 0 ], function( val ) { return val * 2 } ); // $ExpectType any[]
	mskrejectMap<number>( [ 1, 2, 3, 4 ], [ 0, 0, 0, 0 ], function( val ) { return val * 2 } ); // $ExpectType number[]
	mskrejectMap<string>( [ '1', '2', '3', '4' ], [ 0, 0, 0, 0 ], function( val ) { return val } ); // $ExpectType string[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	mskrejectMap( 1, [ 0, 0 ] ); // $ExpectError
	mskrejectMap( true, [ 0, 0 ] ); // $ExpectError
	mskrejectMap( false, [ 0, 0 ] ); // $ExpectError
	mskrejectMap( null, [ 0, 0 ] ); // $ExpectError
	mskrejectMap( void 0, [ 0, 0 ] ); // $ExpectError
	mskrejectMap( {}, [ 0, 0 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	mskrejectMap( [], 1 ); // $ExpectError
	mskrejectMap( [], true ); // $ExpectError
	mskrejectMap( [], false ); // $ExpectError
	mskrejectMap( [], null ); // $ExpectError
	mskrejectMap( [], void 0 ); // $ExpectError
	mskrejectMap( [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	mskrejectMap(); // $ExpectError
	mskrejectMap( [] ); // $ExpectError
	mskrejectMap( [], [], [] ); // $ExpectError
}
