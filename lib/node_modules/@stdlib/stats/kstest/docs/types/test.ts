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

import kstest = require( './index' );


// TESTS //

// The function returns a test result object...
{
	kstest( [ 2.0, 1.0, 5.0, -5.0, 3.0, 0.5, 6.0 ], 'normal', 0.0, 1.0 ); // $ExpectType Results
	const x = [ 0.2, 0.4, 0.5, 0.3, 0.9, 0.7 ];
	kstest( x, 'uniform', 0.0, 1.0, { 'alpha': 0.1 } );  // $ExpectType Results
}

// The function does not compile if provided a first argument that is not a numeric array...
{
	kstest( 'abc', 'uniform', 0, 1 ); // $ExpectError
	kstest( true, 'uniform', 0, 1 ); // $ExpectError
	kstest( false, 'uniform', 0, 1 ); // $ExpectError
	kstest( null, 'uniform', 0, 1 ); // $ExpectError
	kstest( undefined, 'uniform', 0, 1 ); // $ExpectError
	kstest( 5, 'uniform', 0, 1 ); // $ExpectError
	kstest( {}, 'uniform', 0, 1 ); // $ExpectError
	kstest( ( x: number ): number => x, 'uniform', 0, 1 ); // $ExpectError
}

// The function does not compile if provided a second argument that is not a function or string...
{
	const x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
	kstest( x, true ); // $ExpectError
	kstest( x, false ); // $ExpectError
	kstest( x, null ); // $ExpectError
	kstest( x, undefined ); // $ExpectError
	kstest( x, 5 ); // $ExpectError
	kstest( x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a further arguments which are neither numbers nor an options object...
{
	const x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
	kstest( x, 'normal', 'abc' ); // $ExpectError
	kstest( x, 'normal', true ); // $ExpectError
	kstest( x, 'normal', false ); // $ExpectError
	kstest( x, 'normal', null ); // $ExpectError
	kstest( x, 'normal', 'abc' ); // $ExpectError
	kstest( x, 'normal', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `alpha` option which is not a number...
{
	const x = [ 2.0, 1.0, 5.0, -5.0, 3.0, 0.5, 6.0 ];
	kstest( x, 'normal', 0.0, 1.0, { 'alpha': 'abc' } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'alpha': '123' } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'alpha': true } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'alpha': false } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'alpha': null } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'alpha': [] } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'alpha': {} } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alternative` option which is not a recognized alternative...
{
	const x = [ 2.0, 1.0, 5.0, -5.0, 3.0, 0.5, 6.0 ];
	kstest( x, 'normal', 0.0, 1.0, { 'alternative': 'abc' } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'alternative': 123 } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'alternative': true } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'alternative': false } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'alternative': null } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'alternative': [] } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'alternative': {} } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'alternative': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `sorted` option which is not a boolean...
{
	const x = [ 2.0, 1.0, 5.0, -5.0, 3.0, 0.5, 6.0 ];
	kstest( x, 'normal', 0.0, 1.0, { 'sorted': 'abc' } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'sorted': 123 } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'sorted': null } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'sorted': [] } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'sorted': {} } ); // $ExpectError
	kstest( x, 'normal', 0.0, 1.0, { 'sorted': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided an insufficient number of arguments...
{
	const x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
	kstest(); // $ExpectError
	kstest( x ); // $ExpectError
}
