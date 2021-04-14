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

import anova1 = require( './index' );


// TESTS //

// The function returns a test result object...
{
	const x = [ 1, 3, 5, 2, 4, 6, 8, 7, 10, 11, 12, 15 ];
	const f = [ 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C' ];
	anova1( x, f ); // $ExpectType Results
	anova1( x, f, { 'alpha': 0.1 } ); // $ExpectType Results
}

// The function does not compile if provided a first argument that is not a numeric array...
{
	const f = [ 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C' ];
	anova1( 'abc', f ); // $ExpectError
	anova1( true, f ); // $ExpectError
	anova1( false, f ); // $ExpectError
	anova1( null, f ); // $ExpectError
	anova1( undefined, f ); // $ExpectError
	anova1( 5, f ); // $ExpectError
	anova1( {}, f ); // $ExpectError
	anova1( ( x: number ): number => x, f ); // $ExpectError
}

// The function does not compile if provided a second argument that is not an array...
{
	const x = [ 1, 3, 5, 2, 4, 6, 8, 7, 10, 11, 12, 15 ];
	anova1( x, 'abc' ); // $ExpectError
	anova1( x, true ); // $ExpectError
	anova1( x, false ); // $ExpectError
	anova1( x, null ); // $ExpectError
	anova1( x, undefined ); // $ExpectError
	anova1( x, 5 ); // $ExpectError
	anova1( x, {} ); // $ExpectError
	anova1( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an options object...
{
	const x = [ 1, 3, 5, 2, 4, 6, 8, 7, 10, 11, 12, 15 ];
	const f = [ 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C' ];
	anova1( x, f, true ); // $ExpectError
	anova1( x, f, false ); // $ExpectError
	anova1( x, f, null ); // $ExpectError
	anova1( x, f, 5 ); // $ExpectError
	anova1( x, f, 'abc' ); // $ExpectError
	anova1( x, f, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `alpha` option which is not a number...
{
	const x = [ 1, 3, 5, 2, 4, 6, 8, 7, 10, 11, 12, 15 ];
	const f = [ 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C' ];
	anova1( x, f, { 'alpha': 'abc' } ); // $ExpectError
	anova1( x, f, { 'alpha': '123' } ); // $ExpectError
	anova1( x, f, { 'alpha': true } ); // $ExpectError
	anova1( x, f, { 'alpha': false } ); // $ExpectError
	anova1( x, f, { 'alpha': null } ); // $ExpectError
	anova1( x, f, { 'alpha': [] } ); // $ExpectError
	anova1( x, f, { 'alpha': {} } ); // $ExpectError
	anova1( x, f, { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	const x = [ 1, 3, 5, 2, 4, 6, 8, 7, 10, 11, 12, 15 ];
	const f = [ 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C' ];
	anova1(); // $ExpectError
	anova1( x ); // $ExpectError
	anova1( x, f, {}, {} ); // $ExpectError
}
