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

import lowess = require( './index' );


// TESTS //

// The function returns an object with ordered x-values and fitted values...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 3.5, 3.9 ];
	lowess( x, y ); // $ExpectType Output
	lowess( x, y, { 'nsteps': 3 } ); // $ExpectType Output
	lowess( x, y, { 'f': 2 / 3 } ); // $ExpectType Output
	lowess( x, y, { 'sorted': true } ); // $ExpectType Output
}

// The function does not compile if provided a first argument that is not an array of numbers...
{
	const y = [ 2.0, 3.5, 3.9 ];
	lowess( 'abc', y ); // $ExpectError
	lowess( true, y ); // $ExpectError
	lowess( false, y ); // $ExpectError
	lowess( null, y ); // $ExpectError
	lowess( undefined, y ); // $ExpectError
	lowess( 5, y ); // $ExpectError
	lowess( {}, y ); // $ExpectError
	lowess( ( x: number ): number => x, y ); // $ExpectError
}

// The function does not compile if provided a second argument that is not an array of numbers...
{
	const x = [ 1.0, 2.0, 3.0 ];
	lowess( x, 'abc' ); // $ExpectError
	lowess( x, true ); // $ExpectError
	lowess( x, false ); // $ExpectError
	lowess( x, null ); // $ExpectError
	lowess( x, undefined ); // $ExpectError
	lowess( x, 5 ); // $ExpectError
	lowess( x, {} ); // $ExpectError
	lowess( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an options object...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 3.5, 3.9 ];
	lowess( x, y, true ); // $ExpectError
	lowess( x, y, false ); // $ExpectError
	lowess( x, y, null ); // $ExpectError
	lowess( x, y, 5 ); // $ExpectError
	lowess( x, y, 'abc' ); // $ExpectError
	lowess( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `f` option which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 3.5, 3.9 ];
	lowess( x, y, { 'f': 'abc' } ); // $ExpectError
	lowess( x, y, { 'f': '123' } ); // $ExpectError
	lowess( x, y, { 'f': true } ); // $ExpectError
	lowess( x, y, { 'f': false } ); // $ExpectError
	lowess( x, y, { 'f': null } ); // $ExpectError
	lowess( x, y, { 'f': [] } ); // $ExpectError
	lowess( x, y, { 'f': {} } ); // $ExpectError
	lowess( x, y, { 'f': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `nsteps` option which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 3.5, 3.9 ];
	lowess( x, y, { 'nsteps': 'abc' } ); // $ExpectError
	lowess( x, y, { 'nsteps': '123' } ); // $ExpectError
	lowess( x, y, { 'nsteps': true } ); // $ExpectError
	lowess( x, y, { 'nsteps': false } ); // $ExpectError
	lowess( x, y, { 'nsteps': null } ); // $ExpectError
	lowess( x, y, { 'nsteps': [] } ); // $ExpectError
	lowess( x, y, { 'nsteps': {} } ); // $ExpectError
	lowess( x, y, { 'nsteps': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `delta` option which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 3.5, 3.9 ];
	lowess( x, y, { 'delta': 'abc' } ); // $ExpectError
	lowess( x, y, { 'delta': '123' } ); // $ExpectError
	lowess( x, y, { 'delta': true } ); // $ExpectError
	lowess( x, y, { 'delta': false } ); // $ExpectError
	lowess( x, y, { 'delta': null } ); // $ExpectError
	lowess( x, y, { 'delta': [] } ); // $ExpectError
	lowess( x, y, { 'delta': {} } ); // $ExpectError
	lowess( x, y, { 'delta': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `sorted` option which is not a boolean...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 3.5, 3.9 ];
	lowess( x, y, { 'sorted': 'abc' } ); // $ExpectError
	lowess( x, y, { 'sorted': '123' } ); // $ExpectError
	lowess( x, y, { 'sorted': 123 } ); // $ExpectError
	lowess( x, y, { 'sorted': null } ); // $ExpectError
	lowess( x, y, { 'sorted': [] } ); // $ExpectError
	lowess( x, y, { 'sorted': {} } ); // $ExpectError
	lowess( x, y, { 'sorted': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 3.5, 3.9 ];
	lowess( x ); // $ExpectError
	lowess( x, y, {}, {} ); // $ExpectError
}
