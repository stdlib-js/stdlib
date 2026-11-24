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

import zip2objects = require( './index' );


// TESTS //

// The function returns an array of objects...
{
	zip2objects( [ [ 1, 2 ], [ 1, 3 ] ], [ 'x', 'y' ] ); // $ExpectType Record<"x" | "y", number>[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	zip2objects( 1, [ 'x', 'y' ] ); // $ExpectError
	zip2objects( true, [ 'x', 'y' ] ); // $ExpectError
	zip2objects( false, [ 'x', 'y' ] ); // $ExpectError
	zip2objects( null, [ 'x', 'y' ] ); // $ExpectError
	zip2objects( void 0, [ 'x', 'y' ] ); // $ExpectError
	zip2objects( {}, [ 'x', 'y' ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	zip2objects( [], 1 ); // $ExpectError
	zip2objects( [], true ); // $ExpectError
	zip2objects( [], false ); // $ExpectError
	zip2objects( [], null ); // $ExpectError
	zip2objects( [], void 0 ); // $ExpectError
	zip2objects( [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zip2objects(); // $ExpectError
	zip2objects( [] ); // $ExpectError
	zip2objects( [], [], [] ); // $ExpectError
}
