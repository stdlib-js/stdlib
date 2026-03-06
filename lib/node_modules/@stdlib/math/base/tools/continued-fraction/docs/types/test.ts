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

import continuedFraction = require( './index' );

/**
* Continued fraction for (e-1)^(-1).
*/
function* generator() {
	let i = 0;
	while ( true ) {
		i += 1;
		yield [ i, i ];
	}
}

// TESTS //

// The function returns a number...
{
	continuedFraction( generator ); // $ExpectType number
	const opts = {
		'keep': true,
		'maxIter': 500,
		'tolerance': 1e-6
	};
	continuedFraction( generator, opts ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a function...
{
	continuedFraction( 'abc' ); // $ExpectError
	continuedFraction( 123 ); // $ExpectError
	continuedFraction( false ); // $ExpectError
	continuedFraction( true ); // $ExpectError
	continuedFraction( [] ); // $ExpectError
	continuedFraction( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `keep` option which is not a boolean...
{
	continuedFraction( generator, { 'keep': 'abc' } ); // $ExpectError
	continuedFraction( generator, { 'keep': 123 } ); // $ExpectError
	continuedFraction( generator, { 'keep': null } ); // $ExpectError
	continuedFraction( generator, { 'keep': [] } ); // $ExpectError
	continuedFraction( generator, { 'keep': {} } ); // $ExpectError
	continuedFraction( generator, { 'keep': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `maxIter` option which is not a number...
{
	continuedFraction( generator, { 'maxIter': 'abc' } ); // $ExpectError
	continuedFraction( generator, { 'maxIter': true } ); // $ExpectError
	continuedFraction( generator, { 'maxIter': false } ); // $ExpectError
	continuedFraction( generator, { 'maxIter': null } ); // $ExpectError
	continuedFraction( generator, { 'maxIter': [] } ); // $ExpectError
	continuedFraction( generator, { 'maxIter': {} } ); // $ExpectError
	continuedFraction( generator, { 'maxIter': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `tolerance` option which is not a number...
{
	continuedFraction( generator, { 'tolerance': 'abc' } ); // $ExpectError
	continuedFraction( generator, { 'tolerance': true } ); // $ExpectError
	continuedFraction( generator, { 'tolerance': false } ); // $ExpectError
	continuedFraction( generator, { 'tolerance': null } ); // $ExpectError
	continuedFraction( generator, { 'tolerance': [] } ); // $ExpectError
	continuedFraction( generator, { 'tolerance': {} } ); // $ExpectError
	continuedFraction( generator, { 'tolerance': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	continuedFraction(); // $ExpectError
}
