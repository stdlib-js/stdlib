/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import timeit = require( './index' );

const clbk = ( error: Error ): void => {
	if ( error ) {
		throw error;
	}
};


// TESTS //

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	timeit( true, clbk ); // $ExpectError
	timeit( false, clbk ); // $ExpectError
	timeit( 5, clbk ); // $ExpectError
	timeit( [], clbk ); // $ExpectError
	timeit( {}, clbk ); // $ExpectError
	timeit( ( x: number ): number => x, clbk ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not a function...
{
	const code = 'var x = Math.pow( Math.random(), 3 );';
	timeit( code, false ); // $ExpectError
	timeit( code, true ); // $ExpectError
	timeit( code, 32 ); // $ExpectError
	timeit( code, 'abc' ); // $ExpectError
	timeit( code, [] ); // $ExpectError
	timeit( code, {} ); // $ExpectError

	timeit( code, {}, false ); // $ExpectError
	timeit( code, {}, true ); // $ExpectError
	timeit( code, {}, 32 ); // $ExpectError
	timeit( code, {}, 'abc' ); // $ExpectError
	timeit( code, {}, [] ); // $ExpectError
	timeit( code, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const code = 'var x = Math.pow( Math.random(), 3 );';
	timeit( code, null, clbk ); // $ExpectError
}

// The compiler throws an error if the function is provided a `before` option which is not a string...
{
	const code = 'var x = Math.pow( Math.random(), 3 );';
	timeit( code, { 'before': true }, clbk ); // $ExpectError
	timeit( code, { 'before': false }, clbk ); // $ExpectError
	timeit( code, { 'before': 123 }, clbk ); // $ExpectError
	timeit( code, { 'before': [] }, clbk ); // $ExpectError
	timeit( code, { 'before': {} }, clbk ); // $ExpectError
	timeit( code, { 'before': ( x: number ): number => x }, clbk ); // $ExpectError
}

// The compiler throws an error if the function is provided an `after` option which is not a string...
{
	const code = 'var x = Math.pow( Math.random(), 3 );';
	timeit( code, { 'after': true }, clbk ); // $ExpectError
	timeit( code, { 'after': false }, clbk ); // $ExpectError
	timeit( code, { 'after': 123 }, clbk ); // $ExpectError
	timeit( code, { 'after': [] }, clbk ); // $ExpectError
	timeit( code, { 'after': {} }, clbk ); // $ExpectError
	timeit( code, { 'after': ( x: number ): number => x }, clbk ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iterations` option which is not a number...
{
	const code = 'var x = Math.pow( Math.random(), 3 );';
	timeit( code, { 'iterations': '5' }, clbk ); // $ExpectError
	timeit( code, { 'iterations': false }, clbk ); // $ExpectError
	timeit( code, { 'iterations': true }, clbk ); // $ExpectError
	timeit( code, { 'iterations': [] }, clbk ); // $ExpectError
	timeit( code, { 'iterations': {} }, clbk ); // $ExpectError
	timeit( code, { 'iterations': ( x: number ): number => x }, clbk ); // $ExpectError
}

// The compiler throws an error if the function is provided a `repeats` option which is not a number...
{
	const code = 'var x = Math.pow( Math.random(), 3 );';
	timeit( code, { 'repeats': '5' }, clbk ); // $ExpectError
	timeit( code, { 'repeats': false }, clbk ); // $ExpectError
	timeit( code, { 'repeats': true }, clbk ); // $ExpectError
	timeit( code, { 'repeats': [] }, clbk ); // $ExpectError
	timeit( code, { 'repeats': {} }, clbk ); // $ExpectError
	timeit( code, { 'repeats': ( x: number ): number => x }, clbk ); // $ExpectError
}

// The compiler throws an error if the function is provided an `asynchronous` option which is not a boolean...
{
	const code = 'var x = Math.pow( Math.random(), 3 );';
	timeit( code, { 'asynchronous': '5' }, clbk ); // $ExpectError
	timeit( code, { 'asynchronous': 123 }, clbk ); // $ExpectError
	timeit( code, { 'asynchronous': [] }, clbk ); // $ExpectError
	timeit( code, { 'asynchronous': {} }, clbk ); // $ExpectError
	timeit( code, { 'asynchronous': ( x: number ): number => x }, clbk ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const code = 'var x = Math.pow( Math.random(), 3 );';
	timeit(); // $ExpectError
	timeit( code ); // $ExpectError
	timeit( code, {}, clbk, 16 ); // $ExpectError
}
