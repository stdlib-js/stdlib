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

import forEachAsync = require( './index' );

let counter = 0;
const add = ( v: number, next: Function ): void => {
	counter += v;
	next();
};

const done = ( error: Error | null ) => {
	if ( error ) {
		throw error;
	}
	if ( counter <= 0 ) {
		throw new Error( '`counter` is not a positive number' );
	}
};


// TESTS //

// The function returns void...
{
	forEachAsync( [ 0, 1, 1 ], add, done ); // $ExpectType void
	forEachAsync( [ -1, 1, 2 ], add, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	forEachAsync( 2, add, done ); // $ExpectError
	forEachAsync( false, add, done ); // $ExpectError
	forEachAsync( true, add, done ); // $ExpectError
	forEachAsync( {}, add, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	forEachAsync( [ 1, 2, 3 ], 2, done ); // $ExpectError
	forEachAsync( [ 1, 2, 3 ], false, done ); // $ExpectError
	forEachAsync( [ 1, 2, 3 ], true, done ); // $ExpectError
	forEachAsync( [ 1, 2, 3 ], 'abc', done ); // $ExpectError
	forEachAsync( [ 1, 2, 3 ], {}, done ); // $ExpectError
	forEachAsync( [ 1, 2, 3 ], [], done ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not a function having a supported signature...
{
	forEachAsync( [ 1, 2, 3 ], add, 2 ); // $ExpectError
	forEachAsync( [ 1, 2, 3 ], add, false ); // $ExpectError
	forEachAsync( [ 1, 2, 3 ], add, true ); // $ExpectError
	forEachAsync( [ 1, 2, 3 ], add, 'abc' ); // $ExpectError
	forEachAsync( [ 1, 2, 3 ], add, {} ); // $ExpectError
	forEachAsync( [ 1, 2, 3 ], add, [] ); // $ExpectError
	forEachAsync( [ 1, 2, 3 ], add, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	forEachAsync(); // $ExpectError
	forEachAsync( [ 1, 2, 3 ] ); // $ExpectError
	forEachAsync( [ 1, 2, 3 ], add ); // $ExpectError
	forEachAsync( [ 1, 2, 3 ], {}, add, done, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	forEachAsync.factory( add ); // $ExpectType FactoryFunction
	forEachAsync.factory( { 'series': true }, add ); // $ExpectType FactoryFunction
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	forEachAsync.factory( [], add ); // $ExpectError
	forEachAsync.factory( 123, add ); // $ExpectError
	forEachAsync.factory( 'abc', add ); // $ExpectError
	forEachAsync.factory( false, add ); // $ExpectError
	forEachAsync.factory( true, add ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a last argument which is not a function...
{
	forEachAsync.factory( {} ); // $ExpectError
	forEachAsync.factory( true ); // $ExpectError
	forEachAsync.factory( false ); // $ExpectError
	forEachAsync.factory( {}, 123 ); // $ExpectError
	forEachAsync.factory( {}, 'abc' ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = forEachAsync.factory( add );
	fcn1( 12, done ); // $ExpectError
	fcn1( true, done ); // $ExpectError
	fcn1( false, done ); // $ExpectError
	fcn1( {}, done ); // $ExpectError

	fcn1( [ 1, 2, 3 ], 12 ); // $ExpectError
	fcn1( [ 1, 2, 3 ], true ); // $ExpectError
	fcn1( [ 1, 2, 3 ], false ); // $ExpectError
	fcn1( [ 1, 2, 3 ], '5' ); // $ExpectError
	fcn1( [ 1, 2, 3 ], {} ); // $ExpectError
	fcn1( [ 1, 2, 3 ], [] ); // $ExpectError
	fcn1( [ 1, 2, 3 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = forEachAsync.factory( add );
	fcn1(); // $ExpectError
	fcn1( [ 1, 2, 3 ] ); // $ExpectError
	fcn1( [ 1, 2, 3 ], done, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `limit` option which is not a number...
{
	forEachAsync.factory( { 'limit': '12' }, add ); // $ExpectError
	forEachAsync.factory( { 'limit': true }, add ); // $ExpectError
	forEachAsync.factory( { 'limit': false }, add ); // $ExpectError
	forEachAsync.factory( { 'limit': {} }, add ); // $ExpectError
	forEachAsync.factory( { 'limit': [] }, add ); // $ExpectError
	forEachAsync.factory( { 'limit': ( x: number ): number => x }, add ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `series` option which is not a boolean...
{
	forEachAsync.factory( { 'series': '12' }, add ); // $ExpectError
	forEachAsync.factory( { 'series': 12 }, add ); // $ExpectError
	forEachAsync.factory( { 'series': {} }, add ); // $ExpectError
	forEachAsync.factory( { 'series': [] }, add ); // $ExpectError
	forEachAsync.factory( { 'series': ( x: number ): number => x }, add ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid number of arguments...
{
	forEachAsync.factory(); // $ExpectError
	forEachAsync.factory( {}, add, {} ); // $ExpectError
}
