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

import chi2test = require( './index' );


// TESTS //

// The function returns a test result object...
{
	chi2test( [ [ 20, 30 ], [ 30, 20 ] ] ); // $ExpectType Results
	chi2test( [ [ 20, 30 ], [ 30, 20 ] ], { 'alpha': 0.1 } ); // $ExpectType Results
	chi2test( [ [ 20, 30 ], [ 30, 20 ] ], { 'correct': false } ); // $ExpectType Results
}

// The compiler throws an error if the function is provided an invalid first argument...
{
	chi2test( '' ); // $ExpectError
	chi2test( true ); // $ExpectError
	chi2test( false ); // $ExpectError
	chi2test( null ); // $ExpectError
	chi2test( undefined ); // $ExpectError
	chi2test( 5 ); // $ExpectError
	chi2test( {} ); // $ExpectError

	chi2test( '', {} ); // $ExpectError
	chi2test( true, {} ); // $ExpectError
	chi2test( false, {} ); // $ExpectError
	chi2test( null, {} ); // $ExpectError
	chi2test( undefined, {} ); // $ExpectError
	chi2test( 5, {} ); // $ExpectError
	chi2test( {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid second argument...
{
	const x = [ [ 20, 30 ], [ 30, 20 ] ];

	chi2test( x, true ); // $ExpectError
	chi2test( x, false ); // $ExpectError
	chi2test( x, null ); // $ExpectError
	chi2test( x, 5 ); // $ExpectError
	chi2test( x, 'abc' ); // $ExpectError
	chi2test( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alpha` option which is not a number...
{
	const x = [ [ 20, 30 ], [ 30, 20 ] ];

	chi2test( x, { 'alpha': 'abc' } ); // $ExpectError
	chi2test( x, { 'alpha': true } ); // $ExpectError
	chi2test( x, { 'alpha': false } ); // $ExpectError
	chi2test( x, { 'alpha': null } ); // $ExpectError
	chi2test( x, { 'alpha': [] } ); // $ExpectError
	chi2test( x, { 'alpha': {} } ); // $ExpectError
	chi2test( x, { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `correct` option which is not a boolean...
{
	const x = [ [ 20, 30 ], [ 30, 20 ] ];

	chi2test( x, { 'correct': 'abc' } ); // $ExpectError
	chi2test( x, { 'correct': 123 } ); // $ExpectError
	chi2test( x, { 'correct': null } ); // $ExpectError
	chi2test( x, { 'correct': [] } ); // $ExpectError
	chi2test( x, { 'correct': {} } ); // $ExpectError
	chi2test( x, { 'correct': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ 20, 30 ], [ 30, 20 ] ];

	chi2test(); // $ExpectError
	chi2test( x, {}, {} ); // $ExpectError
}
