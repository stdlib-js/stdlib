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

import pow = require( '@stdlib/math/base/special/pow' );
import sumSeries = require( './index' );

/**
* Geometric series.
*/
function* generator( x: number ) {
	let exponent = 0;
	while ( true ) {
		yield pow( x, exponent );
		exponent += 1;
	}
}


// TESTS //

// The function returns a number...
{
	sumSeries( generator ); // $ExpectType number
	const opts = {
		'initialValue': 1,
		'maxTerms': 500,
		'tolerance': 1e-6
	};
	sumSeries( generator, opts ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a function...
{
	sumSeries( 'abc' ); // $ExpectError
	sumSeries( 123 ); // $ExpectError
	sumSeries( false ); // $ExpectError
	sumSeries( true ); // $ExpectError
	sumSeries( [] ); // $ExpectError
	sumSeries( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `initialValue` option which is not a number...
{
	sumSeries( generator, { 'initialValue': 'abc' } ); // $ExpectError
	sumSeries( generator, { 'initialValue': true } ); // $ExpectError
	sumSeries( generator, { 'initialValue': false } ); // $ExpectError
	sumSeries( generator, { 'initialValue': null } ); // $ExpectError
	sumSeries( generator, { 'initialValue': [] } ); // $ExpectError
	sumSeries( generator, { 'initialValue': {} } ); // $ExpectError
	sumSeries( generator, { 'initialValue': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `maxTerms` option which is not a number...
{
	sumSeries( generator, { 'maxTerms': 'abc' } ); // $ExpectError
	sumSeries( generator, { 'maxTerms': true } ); // $ExpectError
	sumSeries( generator, { 'maxTerms': false } ); // $ExpectError
	sumSeries( generator, { 'maxTerms': null } ); // $ExpectError
	sumSeries( generator, { 'maxTerms': [] } ); // $ExpectError
	sumSeries( generator, { 'maxTerms': {} } ); // $ExpectError
	sumSeries( generator, { 'maxTerms': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `tolerance` option which is not a number...
{
	sumSeries( generator, { 'tolerance': 'abc' } ); // $ExpectError
	sumSeries( generator, { 'tolerance': true } ); // $ExpectError
	sumSeries( generator, { 'tolerance': false } ); // $ExpectError
	sumSeries( generator, { 'tolerance': null } ); // $ExpectError
	sumSeries( generator, { 'tolerance': [] } ); // $ExpectError
	sumSeries( generator, { 'tolerance': {} } ); // $ExpectError
	sumSeries( generator, { 'tolerance': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	sumSeries(); // $ExpectError
}
