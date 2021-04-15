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

// The function does not compile if provided a value other than an array of numeric arrays or ndarray...
{
	chi2test( true ); // $ExpectError
	chi2test( false ); // $ExpectError
	chi2test( null ); // $ExpectError
	chi2test( undefined ); // $ExpectError
	chi2test( 5 ); // $ExpectError
	chi2test( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an options object...
{
	const mat = [ [ 20, 30 ], [ 30, 20 ] ];
	chi2test( mat, true ); // $ExpectError
	chi2test( mat, false ); // $ExpectError
	chi2test( mat, null ); // $ExpectError
	chi2test( mat, 5 ); // $ExpectError
	chi2test( mat, 'abc' ); // $ExpectError
	chi2test( mat, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alpha` option which is not a number...
{
	const mat = [ [ 20, 30 ], [ 30, 20 ] ];
	chi2test( mat, { 'alpha': 'abc' } ); // $ExpectError
	chi2test( mat, { 'alpha': true } ); // $ExpectError
	chi2test( mat, { 'alpha': false } ); // $ExpectError
	chi2test( mat, { 'alpha': null } ); // $ExpectError
	chi2test( mat, { 'alpha': [] } ); // $ExpectError
	chi2test( mat, { 'alpha': {} } ); // $ExpectError
	chi2test( mat, { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `correct` option which is not a boolean...
{
	const mat = [ [ 20, 30 ], [ 30, 20 ] ];
	chi2test( mat, { 'correct': 'abc' } ); // $ExpectError
	chi2test( mat, { 'correct': 123 } ); // $ExpectError
	chi2test( mat, { 'correct': null } ); // $ExpectError
	chi2test( mat, { 'correct': [] } ); // $ExpectError
	chi2test( mat, { 'correct': {} } ); // $ExpectError
	chi2test( mat, { 'correct': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	const mat = [ [ 20, 30 ], [ 30, 20 ] ];
	chi2test(); // $ExpectError
	chi2test( mat, {}, {} ); // $ExpectError
}
