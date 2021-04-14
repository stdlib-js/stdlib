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

import wilcoxon = require( './index' );


// TESTS //

// The function returns an object with ordered x-values and fitted values...
{
	const arr = [ 6, 8, 14, 16, 23, 24, 28, 29, 41, -48, 49, 56, 60, -67, 75 ];
	wilcoxon( arr ); // $ExpectType Results
	wilcoxon( arr, { 'mu': 2 } ); // $ExpectType Results
	const x = [ 1.83, 0.50, 1.62, 2.48, 1.68, 1.88, 1.55, 3.06, 1.30 ];
	const y = [ 0.878, 0.647, 0.598, 2.05, 1.06, 1.29, 1.06, 3.14, 1.29 ];
	wilcoxon( x, y, { 'correction': false } ); // $ExpectType Results
}

// The function does not compile if provided a first argument that is not an array of numbers...
{
	const y = [ 0.878, 0.647, 0.598, 2.05, 1.06, 1.29, 1.06, 3.14, 1.29 ];
	wilcoxon( 'abc' ); // $ExpectError
	wilcoxon( true ); // $ExpectError
	wilcoxon( false ); // $ExpectError
	wilcoxon( null ); // $ExpectError
	wilcoxon( undefined ); // $ExpectError
	wilcoxon( 5 ); // $ExpectError
	wilcoxon( {} ); // $ExpectError
	wilcoxon( ( x: number ): number => x ); // $ExpectError

	wilcoxon( 'abc', y ); // $ExpectError
	wilcoxon( true, y ); // $ExpectError
	wilcoxon( false, y ); // $ExpectError
	wilcoxon( null, y ); // $ExpectError
	wilcoxon( undefined, y ); // $ExpectError
	wilcoxon( 5, y ); // $ExpectError
	wilcoxon( {}, y ); // $ExpectError
	wilcoxon( ( x: number ): number => x, y ); // $ExpectError
}

// The function does not compile if provided a second argument that is not an array of numbers or options object...
{
	const x = [ 6, 8, 14, 16, 23, 24, 28, 29, 41, -48, 49, 56, 60, -67, 75 ];
	wilcoxon( x, 'abc' ); // $ExpectError
	wilcoxon( x, true ); // $ExpectError
	wilcoxon( x, false ); // $ExpectError
	wilcoxon( x, null ); // $ExpectError
	wilcoxon( x, 5 ); // $ExpectError
	wilcoxon( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an options object...
{
	const x = [ 1.83, 0.50, 1.62, 2.48, 1.68, 1.88, 1.55, 3.06, 1.30 ];
	const y = [ 0.878, 0.647, 0.598, 2.05, 1.06, 1.29, 1.06, 3.14, 1.29 ];
	wilcoxon( x, y, true ); // $ExpectError
	wilcoxon( x, y, false ); // $ExpectError
	wilcoxon( x, y, null ); // $ExpectError
	wilcoxon( x, y, 5 ); // $ExpectError
	wilcoxon( x, y, 'abc' ); // $ExpectError
	wilcoxon( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alpha` option which is not a number...
{
	const x = [ 1.83, 0.50, 1.62, 2.48, 1.68, 1.88, 1.55, 3.06, 1.30 ];
	const y = [ 0.878, 0.647, 0.598, 2.05, 1.06, 1.29, 1.06, 3.14, 1.29 ];
	wilcoxon( x, y, { 'alpha': 'abc' } ); // $ExpectError
	wilcoxon( x, y, { 'alpha': true } ); // $ExpectError
	wilcoxon( x, y, { 'alpha': false } ); // $ExpectError
	wilcoxon( x, y, { 'alpha': null } ); // $ExpectError
	wilcoxon( x, y, { 'alpha': [] } ); // $ExpectError
	wilcoxon( x, y, { 'alpha': {} } ); // $ExpectError
	wilcoxon( x, y, { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `alternative` option which is not a recognized alternative...
{
	const x = [ 1.83, 0.50, 1.62, 2.48, 1.68, 1.88, 1.55, 3.06, 1.30 ];
	const y = [ 0.878, 0.647, 0.598, 2.05, 1.06, 1.29, 1.06, 3.14, 1.29 ];
	wilcoxon( x, y, { 'alternative': 'abc' } ); // $ExpectError
	wilcoxon( x, y, { 'alternative': 123 } ); // $ExpectError
	wilcoxon( x, y, { 'alternative': true } ); // $ExpectError
	wilcoxon( x, y, { 'alternative': false } ); // $ExpectError
	wilcoxon( x, y, { 'alternative': null } ); // $ExpectError
	wilcoxon( x, y, { 'alternative': [] } ); // $ExpectError
	wilcoxon( x, y, { 'alternative': {} } ); // $ExpectError
	wilcoxon( x, y, { 'alternative': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `zeroMethod` option which is not a recognized method...
{
	const x = [ 1.83, 0.50, 1.62, 2.48, 1.68, 1.88, 1.55, 3.06, 1.30 ];
	const y = [ 0.878, 0.647, 0.598, 2.05, 1.06, 1.29, 1.06, 3.14, 1.29 ];
	wilcoxon( x, y, { 'zeroMethod': 'abc' } ); // $ExpectError
	wilcoxon( x, y, { 'zeroMethod': 123 } ); // $ExpectError
	wilcoxon( x, y, { 'zeroMethod': true } ); // $ExpectError
	wilcoxon( x, y, { 'zeroMethod': false } ); // $ExpectError
	wilcoxon( x, y, { 'zeroMethod': null } ); // $ExpectError
	wilcoxon( x, y, { 'zeroMethod': [] } ); // $ExpectError
	wilcoxon( x, y, { 'zeroMethod': {} } ); // $ExpectError
	wilcoxon( x, y, { 'zeroMethod': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `correction` option which is not a boolean...
{
	const x = [ 1.83, 0.50, 1.62, 2.48, 1.68, 1.88, 1.55, 3.06, 1.30 ];
	const y = [ 0.878, 0.647, 0.598, 2.05, 1.06, 1.29, 1.06, 3.14, 1.29 ];
	wilcoxon( x, y, { 'correction': 'abc' } ); // $ExpectError
	wilcoxon( x, y, { 'correction': '123' } ); // $ExpectError
	wilcoxon( x, y, { 'correction': 123 } ); // $ExpectError
	wilcoxon( x, y, { 'correction': null } ); // $ExpectError
	wilcoxon( x, y, { 'correction': [] } ); // $ExpectError
	wilcoxon( x, y, { 'correction': {} } ); // $ExpectError
	wilcoxon( x, y, { 'correction': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `exact` option which is not a boolean...
{
	const x = [ 1.83, 0.50, 1.62, 2.48, 1.68, 1.88, 1.55, 3.06, 1.30 ];
	const y = [ 0.878, 0.647, 0.598, 2.05, 1.06, 1.29, 1.06, 3.14, 1.29 ];
	wilcoxon( x, y, { 'exact': 'abc' } ); // $ExpectError
	wilcoxon( x, y, { 'exact': '123' } ); // $ExpectError
	wilcoxon( x, y, { 'exact': 123 } ); // $ExpectError
	wilcoxon( x, y, { 'exact': null } ); // $ExpectError
	wilcoxon( x, y, { 'exact': [] } ); // $ExpectError
	wilcoxon( x, y, { 'exact': {} } ); // $ExpectError
	wilcoxon( x, y, { 'exact': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mu` option which is not a number...
{
	const x = [ 1.83, 0.50, 1.62, 2.48, 1.68, 1.88, 1.55, 3.06, 1.30 ];
	const y = [ 0.878, 0.647, 0.598, 2.05, 1.06, 1.29, 1.06, 3.14, 1.29 ];
	wilcoxon( x, y, { 'mu': 'abc' } ); // $ExpectError
	wilcoxon( x, y, { 'mu': true } ); // $ExpectError
	wilcoxon( x, y, { 'mu': false } ); // $ExpectError
	wilcoxon( x, y, { 'mu': null } ); // $ExpectError
	wilcoxon( x, y, { 'mu': [] } ); // $ExpectError
	wilcoxon( x, y, { 'mu': {} } ); // $ExpectError
	wilcoxon( x, y, { 'mu': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	const x = [ 1.83, 0.50, 1.62, 2.48, 1.68, 1.88, 1.55, 3.06, 1.30 ];
	const y = [ 0.878, 0.647, 0.598, 2.05, 1.06, 1.29, 1.06, 3.14, 1.29 ];
	wilcoxon(); // $ExpectError
	wilcoxon( x, y, {}, {} ); // $ExpectError
}
