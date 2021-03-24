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

import padjust = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	const pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
	padjust( pvalues, 'holm' ); // $ExpectType number[]
	padjust( pvalues, 'hommel', 8 ); // $ExpectType number[]
}

// The function does not compile if provided a value other than an array of numbers...
{
	padjust( 'abc', 'bh' ); // $ExpectError
	padjust( true, 'bh' ); // $ExpectError
	padjust( false, 'bh' ); // $ExpectError
	padjust( null, 'bh' ); // $ExpectError
	padjust( undefined, 'bh' ); // $ExpectError
	padjust( 5, 'bh' ); // $ExpectError
	padjust( {}, 'bh' ); // $ExpectError
	padjust( ( x: number ): number => x, 'bh' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a recognized method...
{
	const pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
	padjust( pvalues, 123 ); // $ExpectError
	padjust( pvalues, 'abc' ); // $ExpectError
	padjust( pvalues, true ); // $ExpectError
	padjust( pvalues, false ); // $ExpectError
	padjust( pvalues, null ); // $ExpectError
	padjust( pvalues, [] ); // $ExpectError
	padjust( pvalues, {} ); // $ExpectError
	padjust( pvalues, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
	padjust( pvalues, 'bh', 'abc' ); // $ExpectError
	padjust( pvalues, 'bh', true ); // $ExpectError
	padjust( pvalues, 'bh', false ); // $ExpectError
	padjust( pvalues, 'bh', null ); // $ExpectError
	padjust( pvalues, 'bh', [] ); // $ExpectError
	padjust( pvalues, 'bh', {} ); // $ExpectError
	padjust( pvalues, 'bh', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	const pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
	padjust(); // $ExpectError
	padjust( pvalues ); // $ExpectError
	padjust( pvalues, 'bonferroni', 5, {} ); // $ExpectError
}
