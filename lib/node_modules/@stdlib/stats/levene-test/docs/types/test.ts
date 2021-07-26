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

import leveneTest = require( './index' );


// TESTS //

// The function returns a test result object...
{
	let x = [ 1, 3, 5, 2, 4, 6, 8, 7, 10, 11, 12, 15 ];
	const g = [ 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C' ];
	leveneTest( x, { 'groups': g } ); // $ExpectType Results

	x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
	const y = [ 3.8, 2.7, 4.0, 2.4 ];
	const z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];
	leveneTest( x, y, z ); // $ExpectType Results
	leveneTest( x, y, z, { 'alpha': 0.1 } ); // $ExpectType Results
}

// The function does not compile if provided a first argument that is not a numeric array...
{
	const y = [ 3.8, 2.7, 4.0, 2.4 ];
	leveneTest( 'abc', y ); // $ExpectError
	leveneTest( true, y ); // $ExpectError
	leveneTest( false, y ); // $ExpectError
	leveneTest( null, y ); // $ExpectError
	leveneTest( undefined, y ); // $ExpectError
	leveneTest( 5, y ); // $ExpectError
	leveneTest( {}, y ); // $ExpectError
	leveneTest( ( x: number ): number => x, y ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not a numeric array or options object...
{
	const x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
	leveneTest( x, true ); // $ExpectError
	leveneTest( x, false ); // $ExpectError
	leveneTest( x, null ); // $ExpectError
	leveneTest( x, 5 ); // $ExpectError
	leveneTest( x, 'abc' ); // $ExpectError
	leveneTest( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alpha` option which is not a number...
{
	const x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
	leveneTest( x, { 'alpha': 'abc' } ); // $ExpectError
	leveneTest( x, { 'alpha': '123' } ); // $ExpectError
	leveneTest( x, { 'alpha': true } ); // $ExpectError
	leveneTest( x, { 'alpha': false } ); // $ExpectError
	leveneTest( x, { 'alpha': null } ); // $ExpectError
	leveneTest( x, { 'alpha': [] } ); // $ExpectError
	leveneTest( x, { 'alpha': {} } ); // $ExpectError
	leveneTest( x, { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `groups` option which is not an array...
{
	const x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
	leveneTest( x, { 'groups': 'abc' } ); // $ExpectError
	leveneTest( x, { 'groups': 123 } ); // $ExpectError
	leveneTest( x, { 'groups': true } ); // $ExpectError
	leveneTest( x, { 'groups': false } ); // $ExpectError
	leveneTest( x, { 'groups': null } ); // $ExpectError
	leveneTest( x, { 'groups': {} } ); // $ExpectError
	leveneTest( x, { 'groups': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided an insufficient number of arguments...
{
	leveneTest(); // $ExpectError
}
