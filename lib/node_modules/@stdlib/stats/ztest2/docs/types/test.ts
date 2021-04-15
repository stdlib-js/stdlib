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

import ztest2 = require( './index' );


// TESTS //

// The function returns a test result object...
{
	const x = [ 2.66, 1.5, 3.25, 0.993, 2.31, 2.41, 1.76, 2.57, 2.62, 1.23 ];
	const y = [ 4.88, 2.93, 2.96, 4.5, -0.0603, 4.62, 3.35, 2.98 ];
	ztest2( x, y, 1.0, 2.0 ); // $ExpectType Results
	ztest2( x, y, 1.0, 2.0, { 'alternative': 'greater' } ); // $ExpectType Results
	ztest2( x, y, 1.0, 2.0, { 'alpha': 0.1 } ); // $ExpectType Results
	ztest2( x, y, 1.0, 2.0, { 'difference': 1 } ); // $ExpectType Results
}

// The function does not compile if provided a first argument that is not a numeric array...
{
	const y = [ 4.88, 2.93, 2.96, 4.5, -0.0603, 4.62, 3.35, 2.98 ];
	ztest2( 'abc', y, 1.0, 2.0 ); // $ExpectError
	ztest2( true, y, 1.0, 2.0 ); // $ExpectError
	ztest2( false, y, 1.0, 2.0 ); // $ExpectError
	ztest2( null, y, 1.0, 2.0 ); // $ExpectError
	ztest2( undefined, y, 1.0, 2.0 ); // $ExpectError
	ztest2( 5, y, 1.0, 2.0 ); // $ExpectError
	ztest2( {}, y, 1.0, 2.0 ); // $ExpectError
	ztest2( ( x: number ): number => x, y, 1.0, 2.0 ); // $ExpectError
}

// The function does not compile if provided a second argument that is not a numeric array...
{
	const x = [ 2.66, 1.5, 3.25, 0.993, 2.31, 2.41, 1.76, 2.57, 2.62, 1.23 ];
	ztest2( x, 'abc', 1.0, 2.0 ); // $ExpectError
	ztest2( x, true, 1.0, 2.0 ); // $ExpectError
	ztest2( x, false, 1.0, 2.0 ); // $ExpectError
	ztest2( x, null, 1.0, 2.0 ); // $ExpectError
	ztest2( x, undefined, 1.0, 2.0 ); // $ExpectError
	ztest2( x, 5, 1.0, 2.0 ); // $ExpectError
	ztest2( x, {}, 1.0, 2.0 ); // $ExpectError
	ztest2( x, ( x: number ): number => x, 1.0, 2.0 ); // $ExpectError
}

// The function does not compile if provided a third argument that is not a number...
{
	const x = [ 2.66, 1.5, 3.25, 0.993, 2.31, 2.41, 1.76, 2.57, 2.62, 1.23 ];
	const y = [ 4.88, 2.93, 2.96, 4.5, -0.0603, 4.62, 3.35, 2.98 ];
	ztest2( x, y, 'abc', 2.0 ); // $ExpectError
	ztest2( x, y, true, 2.0 ); // $ExpectError
	ztest2( x, y, false, 2.0 ); // $ExpectError
	ztest2( x, y, null, 2.0 ); // $ExpectError
	ztest2( x, y, undefined, 2.0 ); // $ExpectError
	ztest2( x, y, [], 2.0 ); // $ExpectError
	ztest2( x, y, {}, 2.0 ); // $ExpectError
	ztest2( x, y, ( x: number ): number => x, 2.0 ); // $ExpectError
}

// The function does not compile if provided a fourth argument that is not a number...
{
	const x = [ 2.66, 1.5, 3.25, 0.993, 2.31, 2.41, 1.76, 2.57, 2.62, 1.23 ];
	const y = [ 4.88, 2.93, 2.96, 4.5, -0.0603, 4.62, 3.35, 2.98 ];
	ztest2( x, y, 1.0, 'abc' ); // $ExpectError
	ztest2( x, y, 1.0, true ); // $ExpectError
	ztest2( x, y, 1.0, false ); // $ExpectError
	ztest2( x, y, 1.0, null ); // $ExpectError
	ztest2( x, y, 1.0, undefined ); // $ExpectError
	ztest2( x, y, 1.0, [] ); // $ExpectError
	ztest2( x, y, 1.0, {} ); // $ExpectError
	ztest2( x, y, 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not an options object...
{
	const x = [ 2.66, 1.5, 3.25, 0.993, 2.31, 2.41, 1.76, 2.57, 2.62, 1.23 ];
	const y = [ 4.88, 2.93, 2.96, 4.5, -0.0603, 4.62, 3.35, 2.98 ];
	ztest2( x, y, 1.0, 2.0, true ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, false ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, null ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, 5 ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, 'abc' ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `alpha` option which is not a number...
{
	const x = [ 2.66, 1.5, 3.25, 0.993, 2.31, 2.41, 1.76, 2.57, 2.62, 1.23 ];
	const y = [ 4.88, 2.93, 2.96, 4.5, -0.0603, 4.62, 3.35, 2.98 ];
	ztest2( x, y, 1.0, 2.0, { 'alpha': 'abc' } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'alpha': '123' } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'alpha': true } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'alpha': false } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'alpha': null } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'alpha': [] } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'alpha': {} } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `difference` option which is not a number...
{
	const x = [ 2.66, 1.5, 3.25, 0.993, 2.31, 2.41, 1.76, 2.57, 2.62, 1.23 ];
	const y = [ 4.88, 2.93, 2.96, 4.5, -0.0603, 4.62, 3.35, 2.98 ];
	ztest2( x, y, 1.0, 2.0, { 'difference': 'abc' } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'difference': '123' } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'difference': true } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'difference': false } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'difference': null } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'difference': [] } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'difference': {} } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'difference': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alternative` option which is not a recognized alternative...
{
	const x = [ 2.66, 1.5, 3.25, 0.993, 2.31, 2.41, 1.76, 2.57, 2.62, 1.23 ];
	const y = [ 4.88, 2.93, 2.96, 4.5, -0.0603, 4.62, 3.35, 2.98 ];
	ztest2( x, y, 1.0, 2.0, { 'alternative': 'abc' } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'alternative': 123 } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'alternative': true } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'alternative': false } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'alternative': null } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'alternative': [] } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'alternative': {} } ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, { 'alternative': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	const x = [ 2.66, 1.5, 3.25, 0.993, 2.31, 2.41, 1.76, 2.57, 2.62, 1.23 ];
	const y = [ 4.88, 2.93, 2.96, 4.5, -0.0603, 4.62, 3.35, 2.98 ];
	ztest2(); // $ExpectError
	ztest2( x ); // $ExpectError
	ztest2( x, y ); // $ExpectError
	ztest2( x, y, 1.0 ); // $ExpectError
	ztest2( x, y, 1.0, 2.0, {}, {} ); // $ExpectError
}
