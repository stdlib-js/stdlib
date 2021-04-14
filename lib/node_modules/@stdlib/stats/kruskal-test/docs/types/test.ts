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

import kruskalTest = require( './index' );


// TESTS //

// The function returns a test result object...
{
	let x = [ 1, 3, 5, 2, 4, 6, 8, 7, 10, 11, 12, 15 ];
	const g = [ 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C' ];
	kruskalTest( x, { 'groups': g } ); // $ExpectType Results

	x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
	const y = [ 3.8, 2.7, 4.0, 2.4 ];
	const z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];
	kruskalTest( x, y, z ); // $ExpectType Results
	kruskalTest( x, y, z, { 'alpha': 0.1 } ); // $ExpectType Results
}

// The function does not compile if provided a first argument that is not a numeric array...
{
	const y = [ 3.8, 2.7, 4.0, 2.4 ];
	kruskalTest( 'abc', y ); // $ExpectError
	kruskalTest( true, y ); // $ExpectError
	kruskalTest( false, y ); // $ExpectError
	kruskalTest( null, y ); // $ExpectError
	kruskalTest( undefined, y ); // $ExpectError
	kruskalTest( 5, y ); // $ExpectError
	kruskalTest( {}, y ); // $ExpectError
	kruskalTest( ( x: number ): number => x, y ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not a numeric array or options object...
{
	const x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
	kruskalTest( x, true ); // $ExpectError
	kruskalTest( x, false ); // $ExpectError
	kruskalTest( x, null ); // $ExpectError
	kruskalTest( x, 5 ); // $ExpectError
	kruskalTest( x, 'abc' ); // $ExpectError
	kruskalTest( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alpha` option which is not a number...
{
	const x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
	kruskalTest( x, { 'alpha': 'abc' } ); // $ExpectError
	kruskalTest( x, { 'alpha': '123' } ); // $ExpectError
	kruskalTest( x, { 'alpha': true } ); // $ExpectError
	kruskalTest( x, { 'alpha': false } ); // $ExpectError
	kruskalTest( x, { 'alpha': null } ); // $ExpectError
	kruskalTest( x, { 'alpha': [] } ); // $ExpectError
	kruskalTest( x, { 'alpha': {} } ); // $ExpectError
	kruskalTest( x, { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `groups` option which is not an array...
{
	const x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
	kruskalTest( x, { 'groups': 'abc' } ); // $ExpectError
	kruskalTest( x, { 'groups': 123 } ); // $ExpectError
	kruskalTest( x, { 'groups': true } ); // $ExpectError
	kruskalTest( x, { 'groups': false } ); // $ExpectError
	kruskalTest( x, { 'groups': null } ); // $ExpectError
	kruskalTest( x, { 'groups': {} } ); // $ExpectError
	kruskalTest( x, { 'groups': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided an insufficient number of arguments...
{
	kruskalTest(); // $ExpectError
}
