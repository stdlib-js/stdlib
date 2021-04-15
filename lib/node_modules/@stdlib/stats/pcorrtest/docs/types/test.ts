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

import pcorrTest = require( './index' );


// TESTS //

// The function returns a test result object...
{
	const x = [ 2, 4, 3, 1, 2, 3 ];
	const y = [ 3, 2, 4, 1, 2, 4 ];
	pcorrTest( x, y ); // $ExpectType Results
	pcorrTest( x, y, { 'alpha': 0.1 } ); // $ExpectType Results
	pcorrTest( x, y, { 'alternative': 'less' } ); // $ExpectType Results
	pcorrTest( x, y, { 'rho': 0.3 } ); // $ExpectType Results
}

// The function does not compile if provided a first argument that is not a numeric array...
{
	const y = [ 3, 2, 4, 1, 2, 4 ];
	pcorrTest( 'abc', y ); // $ExpectError
	pcorrTest( true, y ); // $ExpectError
	pcorrTest( false, y ); // $ExpectError
	pcorrTest( null, y ); // $ExpectError
	pcorrTest( undefined, y ); // $ExpectError
	pcorrTest( 5, y ); // $ExpectError
	pcorrTest( {}, y ); // $ExpectError
	pcorrTest( ( x: number ): number => x, y ); // $ExpectError
}

// The function does not compile if provided a second argument that is not a numeric array...
{
	const x = [ 2, 4, 3, 1, 2, 3 ];
	pcorrTest( x, 'abc' ); // $ExpectError
	pcorrTest( x, true ); // $ExpectError
	pcorrTest( x, false ); // $ExpectError
	pcorrTest( x, null ); // $ExpectError
	pcorrTest( x, undefined ); // $ExpectError
	pcorrTest( x, 5 ); // $ExpectError
	pcorrTest( x, {} ); // $ExpectError
	pcorrTest( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an options object...
{
	const x = [ 2, 4, 3, 1, 2, 3 ];
	const y = [ 3, 2, 4, 1, 2, 4 ];
	pcorrTest( x, y, true ); // $ExpectError
	pcorrTest( x, y, false ); // $ExpectError
	pcorrTest( x, y, null ); // $ExpectError
	pcorrTest( x, y, 5 ); // $ExpectError
	pcorrTest( x, y, 'abc' ); // $ExpectError
	pcorrTest( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `alpha` option which is not a number...
{
	const x = [ 2, 4, 3, 1, 2, 3 ];
	const y = [ 3, 2, 4, 1, 2, 4 ];
	pcorrTest( x, y, { 'alpha': 'abc' } ); // $ExpectError
	pcorrTest( x, y, { 'alpha': '123' } ); // $ExpectError
	pcorrTest( x, y, { 'alpha': true } ); // $ExpectError
	pcorrTest( x, y, { 'alpha': false } ); // $ExpectError
	pcorrTest( x, y, { 'alpha': null } ); // $ExpectError
	pcorrTest( x, y, { 'alpha': [] } ); // $ExpectError
	pcorrTest( x, y, { 'alpha': {} } ); // $ExpectError
	pcorrTest( x, y, { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `rho` option which is not a number...
{
	const x = [ 2, 4, 3, 1, 2, 3 ];
	const y = [ 3, 2, 4, 1, 2, 4 ];
	pcorrTest( x, y, { 'rho': 'abc' } ); // $ExpectError
	pcorrTest( x, y, { 'rho': '123' } ); // $ExpectError
	pcorrTest( x, y, { 'rho': true } ); // $ExpectError
	pcorrTest( x, y, { 'rho': false } ); // $ExpectError
	pcorrTest( x, y, { 'rho': null } ); // $ExpectError
	pcorrTest( x, y, { 'rho': [] } ); // $ExpectError
	pcorrTest( x, y, { 'rho': {} } ); // $ExpectError
	pcorrTest( x, y, { 'rho': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alternative` option which is not a known test direction...
{
	const x = [ 2, 4, 3, 1, 2, 3 ];
	const y = [ 3, 2, 4, 1, 2, 4 ];
	pcorrTest( x, y, { 'alternative': 'abc' } ); // $ExpectError
	pcorrTest( x, y, { 'alternative': 123 } ); // $ExpectError
	pcorrTest( x, y, { 'alternative': true } ); // $ExpectError
	pcorrTest( x, y, { 'alternative': false } ); // $ExpectError
	pcorrTest( x, y, { 'alternative': null } ); // $ExpectError
	pcorrTest( x, y, { 'alternative': [] } ); // $ExpectError
	pcorrTest( x, y, { 'alternative': {} } ); // $ExpectError
	pcorrTest( x, y, { 'alternative': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	const x = [ 2, 4, 3, 1, 2, 3 ];
	const y = [ 3, 2, 4, 1, 2, 4 ];
	pcorrTest( x ); // $ExpectError
	pcorrTest( x, y, {}, {} ); // $ExpectError
}
