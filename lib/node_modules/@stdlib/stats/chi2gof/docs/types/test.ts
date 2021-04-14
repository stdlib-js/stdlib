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

import chi2gof = require( './index' );


// TESTS //

// The function returns a test result object...
{
	const x = [ 89, 37, 30, 28, 2 ];
	const p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];
	chi2gof( x, p ); // $ExpectType Results
	chi2gof( x, p, { 'ddof': 1 } ); // $ExpectType Results
	chi2gof( x, 'discrete-uniform', 0, 99 ); // $ExpectType Results
}

// The function does not compile if provided a first argument that is not a numeric array or ndarray...
{
	const p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];
	chi2gof( 'abc', p ); // $ExpectError
	chi2gof( true, p ); // $ExpectError
	chi2gof( false, p ); // $ExpectError
	chi2gof( null, p ); // $ExpectError
	chi2gof( undefined, p ); // $ExpectError
	chi2gof( 5, p ); // $ExpectError
	chi2gof( {}, p ); // $ExpectError
	chi2gof( ( x: number ): number => x, p ); // $ExpectError

	chi2gof( 'abc', 'discrete-uniform', 0, 99 ); // $ExpectError
	chi2gof( true, 'discrete-uniform', 0, 99 ); // $ExpectError
	chi2gof( false, 'discrete-uniform', 0, 99 ); // $ExpectError
	chi2gof( null, 'discrete-uniform', 0, 99 ); // $ExpectError
	chi2gof( undefined, 'discrete-uniform', 0, 99 ); // $ExpectError
	chi2gof( 5, 'discrete-uniform', 0, 99 ); // $ExpectError
	chi2gof( {}, 'discrete-uniform', 0, 99 ); // $ExpectError
	chi2gof( ( x: number ): number => x, 'discrete-uniform', 0, 99 ); // $ExpectError
}

// The function does not compile if provided a second argument that is not a numeric array, ndarray, or string...
{
	const x = [ 89, 37, 30, 28, 2 ];
	chi2gof( x, true ); // $ExpectError
	chi2gof( x, false ); // $ExpectError
	chi2gof( x, null ); // $ExpectError
	chi2gof( x, undefined ); // $ExpectError
	chi2gof( x, 5 ); // $ExpectError
	chi2gof( x, {} ); // $ExpectError
	chi2gof( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a further arguments which are neither numbers nor an options object...
{
	const x = [ 89, 37, 30, 28, 2 ];
	const p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];
	chi2gof( x, p, 'abc' ); // $ExpectError
	chi2gof( x, p, true ); // $ExpectError
	chi2gof( x, p, false ); // $ExpectError
	chi2gof( x, p, null ); // $ExpectError
	chi2gof( x, p, 'abc' ); // $ExpectError
	chi2gof( x, p, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alpha` option which is not a number...
{
	const x = [ 89, 37, 30, 28, 2 ];
	const p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];
	chi2gof( x, p, { 'alpha': 'abc' } ); // $ExpectError
	chi2gof( x, p, { 'alpha': true } ); // $ExpectError
	chi2gof( x, p, { 'alpha': false } ); // $ExpectError
	chi2gof( x, p, { 'alpha': null } ); // $ExpectError
	chi2gof( x, p, { 'alpha': [] } ); // $ExpectError
	chi2gof( x, p, { 'alpha': {} } ); // $ExpectError
	chi2gof( x, p, { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `ddof` option which is not a number...
{
	const x = [ 89, 37, 30, 28, 2 ];
	const p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];
	chi2gof( x, p, { 'ddof': 'abc' } ); // $ExpectError
	chi2gof( x, p, { 'ddof': true } ); // $ExpectError
	chi2gof( x, p, { 'ddof': false } ); // $ExpectError
	chi2gof( x, p, { 'ddof': null } ); // $ExpectError
	chi2gof( x, p, { 'ddof': [] } ); // $ExpectError
	chi2gof( x, p, { 'ddof': {} } ); // $ExpectError
	chi2gof( x, p, { 'ddof': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `iterations` option which is not a number...
{
	const x = [ 89, 37, 30, 28, 2 ];
	const p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];
	chi2gof( x, p, { 'iterations': 'abc' } ); // $ExpectError
	chi2gof( x, p, { 'iterations': true } ); // $ExpectError
	chi2gof( x, p, { 'iterations': false } ); // $ExpectError
	chi2gof( x, p, { 'iterations': null } ); // $ExpectError
	chi2gof( x, p, { 'iterations': [] } ); // $ExpectError
	chi2gof( x, p, { 'iterations': {} } ); // $ExpectError
	chi2gof( x, p, { 'iterations': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `simulate` option which is not a boolean...
{
	const x = [ 89, 37, 30, 28, 2 ];
	const p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];
	chi2gof( x, p, { 'simulate': 'abc' } ); // $ExpectError
	chi2gof( x, p, { 'simulate': 123 } ); // $ExpectError
	chi2gof( x, p, { 'simulate': null } ); // $ExpectError
	chi2gof( x, p, { 'simulate': [] } ); // $ExpectError
	chi2gof( x, p, { 'simulate': {} } ); // $ExpectError
	chi2gof( x, p, { 'simulate': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided an insufficient number of arguments...
{
	const x = [ 89, 37, 30, 28, 2 ];
	chi2gof(); // $ExpectError
	chi2gof( x ); // $ExpectError
}
