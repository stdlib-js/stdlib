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

import ztest = require( './index' );


// TESTS //

// The function returns a test result object...
{
	ztest( [ 4, 4, 6, 6, 5 ], 1.0 ); // $ExpectType Results
	ztest( [ 4, 4, 6, 6, 5 ], 1.0, { 'alternative': 'greater' } ); // $ExpectType Results
	ztest( [ 4, 4, 6, 6, 5 ], 1.0, { 'alpha': 0.1 } ); // $ExpectType Results
	ztest( [ 4, 4, 6, 6, 5 ], 1.0, { 'mu': 5 } ); // $ExpectType Results
}

// The function does not compile if provided a first argument that is not a numeric array...
{
	ztest( 'abc', 1.0 ); // $ExpectError
	ztest( true, 1.0 ); // $ExpectError
	ztest( false, 1.0 ); // $ExpectError
	ztest( null, 1.0 ); // $ExpectError
	ztest( undefined, 1.0 ); // $ExpectError
	ztest( 5, 1.0 ); // $ExpectError
	ztest( {}, 1.0 ); // $ExpectError
	ztest( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The function does not compile if provided a second argument that is not a number...
{
	const x = [ 4, 4, 6, 6, 5 ];
	ztest( x, 'abc' ); // $ExpectError
	ztest( x, true ); // $ExpectError
	ztest( x, false ); // $ExpectError
	ztest( x, null ); // $ExpectError
	ztest( x, undefined ); // $ExpectError
	ztest( x, [] ); // $ExpectError
	ztest( x, {} ); // $ExpectError
	ztest( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an options object...
{
	const x = [ 4, 4, 6, 6, 5 ];
	ztest( x, 1.0, true ); // $ExpectError
	ztest( x, 1.0, false ); // $ExpectError
	ztest( x, 1.0, null ); // $ExpectError
	ztest( x, 1.0, 5 ); // $ExpectError
	ztest( x, 1.0, 'abc' ); // $ExpectError
	ztest( x, 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `alpha` option which is not a number...
{
	const x = [ 4, 4, 6, 6, 5 ];
	ztest( x, 1.0, { 'alpha': 'abc' } ); // $ExpectError
	ztest( x, 1.0, { 'alpha': '123' } ); // $ExpectError
	ztest( x, 1.0, { 'alpha': true } ); // $ExpectError
	ztest( x, 1.0, { 'alpha': false } ); // $ExpectError
	ztest( x, 1.0, { 'alpha': null } ); // $ExpectError
	ztest( x, 1.0, { 'alpha': [] } ); // $ExpectError
	ztest( x, 1.0, { 'alpha': {} } ); // $ExpectError
	ztest( x, 1.0, { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mu` option which is not a number...
{
	const x = [ 4, 4, 6, 6, 5 ];
	ztest( x, 1.0, { 'mu': 'abc' } ); // $ExpectError
	ztest( x, 1.0, { 'mu': '123' } ); // $ExpectError
	ztest( x, 1.0, { 'mu': true } ); // $ExpectError
	ztest( x, 1.0, { 'mu': false } ); // $ExpectError
	ztest( x, 1.0, { 'mu': null } ); // $ExpectError
	ztest( x, 1.0, { 'mu': [] } ); // $ExpectError
	ztest( x, 1.0, { 'mu': {} } ); // $ExpectError
	ztest( x, 1.0, { 'mu': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alternative` option which is not a recognized alternative...
{
	const x = [ 4, 4, 6, 6, 5 ];
	ztest( x, 1.0, { 'alternative': 'abc' } ); // $ExpectError
	ztest( x, 1.0, { 'alternative': 123 } ); // $ExpectError
	ztest( x, 1.0, { 'alternative': true } ); // $ExpectError
	ztest( x, 1.0, { 'alternative': false } ); // $ExpectError
	ztest( x, 1.0, { 'alternative': null } ); // $ExpectError
	ztest( x, 1.0, { 'alternative': [] } ); // $ExpectError
	ztest( x, 1.0, { 'alternative': {} } ); // $ExpectError
	ztest( x, 1.0, { 'alternative': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	const x = [ 4, 4, 6, 6, 5 ];
	ztest(); // $ExpectError
	ztest( x ); // $ExpectError
	ztest( x, 1.0, {}, {} ); // $ExpectError
}
