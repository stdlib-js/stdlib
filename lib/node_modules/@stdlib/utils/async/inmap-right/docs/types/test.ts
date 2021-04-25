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

import inmapRightAsync = require( './index' );

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
	inmapRightAsync( [ 0, 1, 1 ], fcn, done ); // $ExpectType void
	inmapRightAsync( [ -1, 1, 2 ], fcn, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	inmapRightAsync( 2, fcn, done ); // $ExpectError
	inmapRightAsync( false, fcn, done ); // $ExpectError
	inmapRightAsync( true, fcn, done ); // $ExpectError
	inmapRightAsync( {}, fcn, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	inmapRightAsync( [ 1, 2, 3 ], 2, done ); // $ExpectError
	inmapRightAsync( [ 1, 2, 3 ], false, done ); // $ExpectError
	inmapRightAsync( [ 1, 2, 3 ], true, done ); // $ExpectError
	inmapRightAsync( [ 1, 2, 3 ], 'abc', done ); // $ExpectError
	inmapRightAsync( [ 1, 2, 3 ], {}, done ); // $ExpectError
	inmapRightAsync( [ 1, 2, 3 ], [], done ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not a function having a supported signature...
{
	inmapRightAsync( [ 1, 2, 3 ], fcn, 2 ); // $ExpectError
	inmapRightAsync( [ 1, 2, 3 ], fcn, false ); // $ExpectError
	inmapRightAsync( [ 1, 2, 3 ], fcn, true ); // $ExpectError
	inmapRightAsync( [ 1, 2, 3 ], fcn, 'abc' ); // $ExpectError
	inmapRightAsync( [ 1, 2, 3 ], fcn, {} ); // $ExpectError
	inmapRightAsync( [ 1, 2, 3 ], fcn, [] ); // $ExpectError
	inmapRightAsync( [ 1, 2, 3 ], fcn, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	inmapRightAsync(); // $ExpectError
	inmapRightAsync( [ 1, 2, 3 ] ); // $ExpectError
	inmapRightAsync( [ 1, 2, 3 ], fcn ); // $ExpectError
	inmapRightAsync( [ 1, 2, 3 ], {}, fcn, done, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	inmapRightAsync.factory( fcn ); // $ExpectType FactoryFunction
	inmapRightAsync.factory( { 'series': true }, fcn ); // $ExpectType FactoryFunction
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	inmapRightAsync.factory( [], fcn ); // $ExpectError
	inmapRightAsync.factory( 123, fcn ); // $ExpectError
	inmapRightAsync.factory( 'abc', fcn ); // $ExpectError
	inmapRightAsync.factory( false, fcn ); // $ExpectError
	inmapRightAsync.factory( true, fcn ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a last argument which is not a function...
{
	inmapRightAsync.factory( {} ); // $ExpectError
	inmapRightAsync.factory( true ); // $ExpectError
	inmapRightAsync.factory( false ); // $ExpectError
	inmapRightAsync.factory( {}, 123 ); // $ExpectError
	inmapRightAsync.factory( {}, 'abc' ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = inmapRightAsync.factory( fcn );
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
	const fcn1 = inmapRightAsync.factory( fcn );
	fcn1(); // $ExpectError
	fcn1( [ 1, 2, 3 ] ); // $ExpectError
	fcn1( [ 1, 2, 3 ], done, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `limit` option which is not a number...
{
	inmapRightAsync.factory( { 'limit': '12' }, fcn ); // $ExpectError
	inmapRightAsync.factory( { 'limit': true }, fcn ); // $ExpectError
	inmapRightAsync.factory( { 'limit': false }, fcn ); // $ExpectError
	inmapRightAsync.factory( { 'limit': {} }, fcn ); // $ExpectError
	inmapRightAsync.factory( { 'limit': [] }, fcn ); // $ExpectError
	inmapRightAsync.factory( { 'limit': ( x: number ): number => x }, fcn ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `series` option which is not a boolean...
{
	inmapRightAsync.factory( { 'series': '12' }, fcn ); // $ExpectError
	inmapRightAsync.factory( { 'series': 12 }, fcn ); // $ExpectError
	inmapRightAsync.factory( { 'series': {} }, fcn ); // $ExpectError
	inmapRightAsync.factory( { 'series': [] }, fcn ); // $ExpectError
	inmapRightAsync.factory( { 'series': ( x: number ): number => x }, fcn ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid number of arguments...
{
	inmapRightAsync.factory(); // $ExpectError
	inmapRightAsync.factory( {}, fcn, {} ); // $ExpectError
}
