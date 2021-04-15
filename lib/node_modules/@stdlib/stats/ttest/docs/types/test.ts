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

import ttest = require( './index' );


// TESTS //

// The function returns a test result object...
{
	const x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	const y = [ 5.0, 5.0, 5.5, 7.0, 5.8 ];
	ttest( x ); // $ExpectType Results
	ttest( x, { 'alpha': 0.1 } ); // $ExpectType Results
	ttest( x, y ); // $ExpectType Results
	ttest( x, y, { 'alpha': 0.1 } ); // $ExpectType Results
}

// The function does not compile if provided a first argument that is not a numeric array...
{
	const y = [ 5.0, 5.0, 5.5, 7.0, 5.8 ];
	ttest( 'abc' ); // $ExpectError
	ttest( 123 ); // $ExpectError
	ttest( true ); // $ExpectError
	ttest( false ); // $ExpectError
	ttest( null ); // $ExpectError
	ttest( undefined ); // $ExpectError
	ttest( {} ); // $ExpectError
	ttest( ( x: number ): number => x ); // $ExpectError

	ttest( 'abc', y ); // $ExpectError
	ttest( 123, y ); // $ExpectError
	ttest( true, y ); // $ExpectError
	ttest( false, y ); // $ExpectError
	ttest( null, y ); // $ExpectError
	ttest( undefined, y ); // $ExpectError
	ttest( {}, y ); // $ExpectError
	ttest( ( x: number ): number => x, y ); // $ExpectError
}

// The function does not compile if provided a second argument that is neither a numeric array nor an options object...
{
	const x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	ttest( x, 'abc' ); // $ExpectError
	ttest( x, 123 ); // $ExpectError
	ttest( x, true ); // $ExpectError
	ttest( x, false ); // $ExpectError
	ttest( x, null ); // $ExpectError
	ttest( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an options object...
{
	const x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	const y = [ 5.0, 5.0, 5.5, 7.0, 5.8 ];
	ttest( x, y, true ); // $ExpectError
	ttest( x, y, false ); // $ExpectError
	ttest( x, y, null ); // $ExpectError
	ttest( x, y, 5 ); // $ExpectError
	ttest( x, y, 'abc' ); // $ExpectError
	ttest( x, y, [] ); // $ExpectError
	ttest( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alpha` option which is not a number...
{
	const x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	const y = [ 5.0, 5.0, 5.5, 7.0, 5.8 ];
	ttest( x, { 'alpha': 'abc' } ); // $ExpectError
	ttest( x, { 'alpha': '123' } ); // $ExpectError
	ttest( x, { 'alpha': true } ); // $ExpectError
	ttest( x, { 'alpha': false } ); // $ExpectError
	ttest( x, { 'alpha': null } ); // $ExpectError
	ttest( x, { 'alpha': [] } ); // $ExpectError
	ttest( x, { 'alpha': {} } ); // $ExpectError
	ttest( x, { 'alpha': ( x: number ): number => x } ); // $ExpectError

	ttest( x, y, { 'alpha': 'abc' } ); // $ExpectError
	ttest( x, y, { 'alpha': '123' } ); // $ExpectError
	ttest( x, y, { 'alpha': true } ); // $ExpectError
	ttest( x, y, { 'alpha': false } ); // $ExpectError
	ttest( x, y, { 'alpha': null } ); // $ExpectError
	ttest( x, y, { 'alpha': [] } ); // $ExpectError
	ttest( x, y, { 'alpha': {} } ); // $ExpectError
	ttest( x, y, { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alternative` option which is not a recognized alternative...
{
	const x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	const y = [ 5.0, 5.0, 5.5, 7.0, 5.8 ];
	ttest( x, { 'alternative': 'abc' } ); // $ExpectError
	ttest( x, { 'alternative': 123 } ); // $ExpectError
	ttest( x, { 'alternative': true } ); // $ExpectError
	ttest( x, { 'alternative': false } ); // $ExpectError
	ttest( x, { 'alternative': null } ); // $ExpectError
	ttest( x, { 'alternative': [] } ); // $ExpectError
	ttest( x, { 'alternative': {} } ); // $ExpectError
	ttest( x, { 'alternative': ( x: number ): number => x } ); // $ExpectError

	ttest( x, y, { 'alternative': 'abc' } ); // $ExpectError
	ttest( x, y, { 'alternative': 123 } ); // $ExpectError
	ttest( x, y, { 'alternative': true } ); // $ExpectError
	ttest( x, y, { 'alternative': false } ); // $ExpectError
	ttest( x, y, { 'alternative': null } ); // $ExpectError
	ttest( x, y, { 'alternative': [] } ); // $ExpectError
	ttest( x, y, { 'alternative': {} } ); // $ExpectError
	ttest( x, y, { 'alternative': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mu` option which is not a number...
{
	const x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	const y = [ 5.0, 5.0, 5.5, 7.0, 5.8 ];
	ttest( x, { 'mu': 'abc' } ); // $ExpectError
	ttest( x, { 'mu': '123' } ); // $ExpectError
	ttest( x, { 'mu': true } ); // $ExpectError
	ttest( x, { 'mu': false } ); // $ExpectError
	ttest( x, { 'mu': null } ); // $ExpectError
	ttest( x, { 'mu': [] } ); // $ExpectError
	ttest( x, { 'mu': {} } ); // $ExpectError
	ttest( x, { 'mu': ( x: number ): number => x } ); // $ExpectError

	ttest( x, y, { 'mu': 'abc' } ); // $ExpectError
	ttest( x, y, { 'mu': '123' } ); // $ExpectError
	ttest( x, y, { 'mu': true } ); // $ExpectError
	ttest( x, y, { 'mu': false } ); // $ExpectError
	ttest( x, y, { 'mu': null } ); // $ExpectError
	ttest( x, y, { 'mu': [] } ); // $ExpectError
	ttest( x, y, { 'mu': {} } ); // $ExpectError
	ttest( x, y, { 'mu': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	const x = [ 4.0, 4.0, 6.0, 6.0, 5.0 ];
	const y = [ 5.0, 5.0, 5.5, 7.0, 5.8 ];
	ttest(); // $ExpectError
	ttest( x, y, {}, {} ); // $ExpectError
}
