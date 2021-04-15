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

import vartest = require( './index' );


// TESTS //

// The function returns a test result object...
{
	const x = [ 610, 610, 550, 590, 565, 570 ];
	const y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];
	vartest( x, y ); // $ExpectType Results
	vartest( x, y, { 'alpha': 0.1 } ); // $ExpectType Results
	vartest( x, y, { 'alternative': 'less' } ); // $ExpectType Results
	vartest( x, y, { 'ratio': 2 } ); // $ExpectType Results
}

// The function does not compile if provided a first argument that is not a numeric array...
{
	const y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];
	vartest( 'abc', y ); // $ExpectError
	vartest( true, y ); // $ExpectError
	vartest( false, y ); // $ExpectError
	vartest( null, y ); // $ExpectError
	vartest( undefined, y ); // $ExpectError
	vartest( 5, y ); // $ExpectError
	vartest( {}, y ); // $ExpectError
	vartest( ( x: number ): number => x, y ); // $ExpectError
}

// The function does not compile if provided a second argument that is not a numeric array...
{
	const x = [ 610, 610, 550, 590, 565, 570 ];
	vartest( x, 'abc' ); // $ExpectError
	vartest( x, true ); // $ExpectError
	vartest( x, false ); // $ExpectError
	vartest( x, null ); // $ExpectError
	vartest( x, undefined ); // $ExpectError
	vartest( x, 5 ); // $ExpectError
	vartest( x, {} ); // $ExpectError
	vartest( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an options object...
{
	const x = [ 610, 610, 550, 590, 565, 570 ];
	const y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];
	vartest( x, y, true ); // $ExpectError
	vartest( x, y, false ); // $ExpectError
	vartest( x, y, null ); // $ExpectError
	vartest( x, y, 5 ); // $ExpectError
	vartest( x, y, 'abc' ); // $ExpectError
	vartest( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `alpha` option which is not a number...
{
	const x = [ 610, 610, 550, 590, 565, 570 ];
	const y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];
	vartest( x, y, { 'alpha': 'abc' } ); // $ExpectError
	vartest( x, y, { 'alpha': '123' } ); // $ExpectError
	vartest( x, y, { 'alpha': true } ); // $ExpectError
	vartest( x, y, { 'alpha': false } ); // $ExpectError
	vartest( x, y, { 'alpha': null } ); // $ExpectError
	vartest( x, y, { 'alpha': [] } ); // $ExpectError
	vartest( x, y, { 'alpha': {} } ); // $ExpectError
	vartest( x, y, { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `ratio` option which is not a number...
{
	const x = [ 610, 610, 550, 590, 565, 570 ];
	const y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];
	vartest( x, y, { 'ratio': 'abc' } ); // $ExpectError
	vartest( x, y, { 'ratio': '123' } ); // $ExpectError
	vartest( x, y, { 'ratio': true } ); // $ExpectError
	vartest( x, y, { 'ratio': false } ); // $ExpectError
	vartest( x, y, { 'ratio': null } ); // $ExpectError
	vartest( x, y, { 'ratio': [] } ); // $ExpectError
	vartest( x, y, { 'ratio': {} } ); // $ExpectError
	vartest( x, y, { 'ratio': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alternative` option which is not a known test direction...
{
	const x = [ 610, 610, 550, 590, 565, 570 ];
	const y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];
	vartest( x, y, { 'alternative': 'abc' } ); // $ExpectError
	vartest( x, y, { 'alternative': 123 } ); // $ExpectError
	vartest( x, y, { 'alternative': true } ); // $ExpectError
	vartest( x, y, { 'alternative': false } ); // $ExpectError
	vartest( x, y, { 'alternative': null } ); // $ExpectError
	vartest( x, y, { 'alternative': [] } ); // $ExpectError
	vartest( x, y, { 'alternative': {} } ); // $ExpectError
	vartest( x, y, { 'alternative': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	const x = [ 610, 610, 550, 590, 565, 570 ];
	const y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];
	vartest( x ); // $ExpectError
	vartest( x, y, {}, {} ); // $ExpectError
}
