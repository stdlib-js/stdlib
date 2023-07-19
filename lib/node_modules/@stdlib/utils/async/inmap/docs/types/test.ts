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

import inmapAsync = require( './index' );

const fcn = ( value: number, index: number, next: Function ): void => {
	next( null, value * index );
};

const done = ( error: Error | null ) => {
	if ( error ) {
		throw error;
	}
};


// TESTS //

// The function returns void...
{
	inmapAsync( [ 0, 1, 1 ], fcn, done ); // $ExpectType void
	inmapAsync( [ -1, 1, 2 ], fcn, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	inmapAsync( 2, fcn, done ); // $ExpectError
	inmapAsync( false, fcn, done ); // $ExpectError
	inmapAsync( true, fcn, done ); // $ExpectError
	inmapAsync( {}, fcn, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	inmapAsync( [ 1, 2, 3 ], 2, done ); // $ExpectError
	inmapAsync( [ 1, 2, 3 ], false, done ); // $ExpectError
	inmapAsync( [ 1, 2, 3 ], true, done ); // $ExpectError
	inmapAsync( [ 1, 2, 3 ], 'abc', done ); // $ExpectError
	inmapAsync( [ 1, 2, 3 ], {}, done ); // $ExpectError
	inmapAsync( [ 1, 2, 3 ], [], done ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not a function having a supported signature...
{
	inmapAsync( [ 1, 2, 3 ], fcn, 2 ); // $ExpectError
	inmapAsync( [ 1, 2, 3 ], fcn, false ); // $ExpectError
	inmapAsync( [ 1, 2, 3 ], fcn, true ); // $ExpectError
	inmapAsync( [ 1, 2, 3 ], fcn, 'abc' ); // $ExpectError
	inmapAsync( [ 1, 2, 3 ], fcn, {} ); // $ExpectError
	inmapAsync( [ 1, 2, 3 ], fcn, [] ); // $ExpectError
	inmapAsync( [ 1, 2, 3 ], fcn, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	inmapAsync(); // $ExpectError
	inmapAsync( [ 1, 2, 3 ] ); // $ExpectError
	inmapAsync( [ 1, 2, 3 ], fcn ); // $ExpectError
	inmapAsync( [ 1, 2, 3 ], {}, fcn, done, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	inmapAsync.factory( fcn ); // $ExpectType FactoryFunction
	inmapAsync.factory( { 'series': true }, fcn ); // $ExpectType FactoryFunction
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	inmapAsync.factory( [], fcn ); // $ExpectError
	inmapAsync.factory( 123, fcn ); // $ExpectError
	inmapAsync.factory( 'abc', fcn ); // $ExpectError
	inmapAsync.factory( false, fcn ); // $ExpectError
	inmapAsync.factory( true, fcn ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a last argument which is not a function...
{
	inmapAsync.factory( {} ); // $ExpectError
	inmapAsync.factory( true ); // $ExpectError
	inmapAsync.factory( false ); // $ExpectError
	inmapAsync.factory( {}, 123 ); // $ExpectError
	inmapAsync.factory( {}, 'abc' ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = inmapAsync.factory( fcn );
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
	const fcn1 = inmapAsync.factory( fcn );
	fcn1(); // $ExpectError
	fcn1( [ 1, 2, 3 ] ); // $ExpectError
	fcn1( [ 1, 2, 3 ], done, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `limit` option which is not a number...
{
	inmapAsync.factory( { 'limit': '12' }, fcn ); // $ExpectError
	inmapAsync.factory( { 'limit': true }, fcn ); // $ExpectError
	inmapAsync.factory( { 'limit': false }, fcn ); // $ExpectError
	inmapAsync.factory( { 'limit': {} }, fcn ); // $ExpectError
	inmapAsync.factory( { 'limit': [] }, fcn ); // $ExpectError
	inmapAsync.factory( { 'limit': ( x: number ): number => x }, fcn ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `series` option which is not a boolean...
{
	inmapAsync.factory( { 'series': '12' }, fcn ); // $ExpectError
	inmapAsync.factory( { 'series': 12 }, fcn ); // $ExpectError
	inmapAsync.factory( { 'series': {} }, fcn ); // $ExpectError
	inmapAsync.factory( { 'series': [] }, fcn ); // $ExpectError
	inmapAsync.factory( { 'series': ( x: number ): number => x }, fcn ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid number of arguments...
{
	inmapAsync.factory(); // $ExpectError
	inmapAsync.factory( {}, fcn, {} ); // $ExpectError
}
