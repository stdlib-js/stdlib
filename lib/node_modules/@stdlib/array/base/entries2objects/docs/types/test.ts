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

import entries2objects = require( './index' );


// TESTS //

// The function returns an array of objects...
{
	entries2objects( [ 1, 2, 3 ], [ 'x', 'y' ] ); // $ExpectType Record<"x" | "y", number>[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	entries2objects( 1, [ 'x', 'y' ] ); // $ExpectError
	entries2objects( true, [ 'x', 'y' ] ); // $ExpectError
	entries2objects( false, [ 'x', 'y' ] ); // $ExpectError
	entries2objects( null, [ 'x', 'y' ] ); // $ExpectError
	entries2objects( void 0, [ 'x', 'y' ] ); // $ExpectError
	entries2objects( {}, [ 'x', 'y' ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	entries2objects( [], 1 ); // $ExpectError
	entries2objects( [], true ); // $ExpectError
	entries2objects( [], false ); // $ExpectError
	entries2objects( [], null ); // $ExpectError
	entries2objects( [], void 0 ); // $ExpectError
	entries2objects( [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	entries2objects(); // $ExpectError
	entries2objects( [] ); // $ExpectError
	entries2objects( [], [], [] ); // $ExpectError
}
