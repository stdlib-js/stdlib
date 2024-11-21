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

import ttest2 = require( './index' );


// TESTS //

// The function returns a test result object...
{
	const x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
	const y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];
	ttest2( x, y ); // $ExpectType Results
	ttest2( x, y, { 'alternative': 'greater' } ); // $ExpectType Results
	ttest2( x, y, { 'alpha': 0.1 } ); // $ExpectType Results
	ttest2( x, y, { 'difference': 1 } ); // $ExpectType Results
	ttest2( x, y, { 'variance': 'equal' } ); // $ExpectType Results
}

// The compiler throws an error if the function is provided a first argument that is not a numeric array...
{
	const y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];
	ttest2( 'abc', y ); // $ExpectError
	ttest2( true, y ); // $ExpectError
	ttest2( false, y ); // $ExpectError
	ttest2( null, y ); // $ExpectError
	ttest2( undefined, y ); // $ExpectError
	ttest2( 5, y ); // $ExpectError
	ttest2( {}, y ); // $ExpectError
	ttest2( ( x: number ): number => x, y ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a numeric array...
{
	const x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
	ttest2( x, 'abc' ); // $ExpectError
	ttest2( x, true ); // $ExpectError
	ttest2( x, false ); // $ExpectError
	ttest2( x, null ); // $ExpectError
	ttest2( x, undefined ); // $ExpectError
	ttest2( x, 5 ); // $ExpectError
	ttest2( x, {} ); // $ExpectError
	ttest2( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an options object...
{
	const x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
	const y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];
	ttest2( x, y, true ); // $ExpectError
	ttest2( x, y, false ); // $ExpectError
	ttest2( x, y, null ); // $ExpectError
	ttest2( x, y, 5 ); // $ExpectError
	ttest2( x, y, 'abc' ); // $ExpectError
	ttest2( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `alpha` option which is not a number...
{
	const x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
	const y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];
	ttest2( x, y, { 'alpha': 'abc' } ); // $ExpectError
	ttest2( x, y, { 'alpha': '123' } ); // $ExpectError
	ttest2( x, y, { 'alpha': true } ); // $ExpectError
	ttest2( x, y, { 'alpha': false } ); // $ExpectError
	ttest2( x, y, { 'alpha': null } ); // $ExpectError
	ttest2( x, y, { 'alpha': [] } ); // $ExpectError
	ttest2( x, y, { 'alpha': {} } ); // $ExpectError
	ttest2( x, y, { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `difference` option which is not a number...
{
	const x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
	const y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];
	ttest2( x, y, { 'difference': 'abc' } ); // $ExpectError
	ttest2( x, y, { 'difference': '123' } ); // $ExpectError
	ttest2( x, y, { 'difference': true } ); // $ExpectError
	ttest2( x, y, { 'difference': false } ); // $ExpectError
	ttest2( x, y, { 'difference': null } ); // $ExpectError
	ttest2( x, y, { 'difference': [] } ); // $ExpectError
	ttest2( x, y, { 'difference': {} } ); // $ExpectError
	ttest2( x, y, { 'difference': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alternative` option which is not a recognized alternative...
{
	const x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
	const y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];
	ttest2( x, y, { 'alternative': 'abc' } ); // $ExpectError
	ttest2( x, y, { 'alternative': 123 } ); // $ExpectError
	ttest2( x, y, { 'alternative': true } ); // $ExpectError
	ttest2( x, y, { 'alternative': false } ); // $ExpectError
	ttest2( x, y, { 'alternative': null } ); // $ExpectError
	ttest2( x, y, { 'alternative': [] } ); // $ExpectError
	ttest2( x, y, { 'alternative': {} } ); // $ExpectError
	ttest2( x, y, { 'alternative': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `variance` option which is not `equal` or `unequal`...
{
	const x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
	const y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];
	ttest2( x, y, { 'variance': 'abc' } ); // $ExpectError
	ttest2( x, y, { 'variance': 123 } ); // $ExpectError
	ttest2( x, y, { 'variance': true } ); // $ExpectError
	ttest2( x, y, { 'variance': false } ); // $ExpectError
	ttest2( x, y, { 'variance': null } ); // $ExpectError
	ttest2( x, y, { 'variance': [] } ); // $ExpectError
	ttest2( x, y, { 'variance': {} } ); // $ExpectError
	ttest2( x, y, { 'variance': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
	const y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];
	ttest2(); // $ExpectError
	ttest2( x ); // $ExpectError
	ttest2( x, y, {}, {} ); // $ExpectError
}
