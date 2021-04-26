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

import mapFunAsync = require( './index' );

const fcn = ( i: number, next: Function ) => {
	next( null, i );
};

const done = ( error: Error | null, arr: Array<any> ) => {
	if ( error ) {
		throw error;
	}
	if ( arr === void 0 ) {
		throw new Error( '`arr` is missing.' );
	}
};


// TESTS //

// The function returns void...
{
	mapFunAsync( fcn, 10, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a function having a supported signature...
{
	mapFunAsync( 'abc', 10, done ); // $ExpectError
	mapFunAsync( 123, 10, done ); // $ExpectError
	mapFunAsync( false, 10, done ); // $ExpectError
	mapFunAsync( true, 10, done ); // $ExpectError
	mapFunAsync( {}, 10, done ); // $ExpectError
	mapFunAsync( [], 10, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	mapFunAsync( fcn, 'abc', done ); // $ExpectError
	mapFunAsync( fcn, false, done ); // $ExpectError
	mapFunAsync( fcn, true, done ); // $ExpectError
	mapFunAsync( fcn, null, done ); // $ExpectError
	mapFunAsync( fcn, {}, done ); // $ExpectError
	mapFunAsync( fcn, [], done ); // $ExpectError
	mapFunAsync( fcn, ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a done callback argument which is not a function having a supported signature...
{
	mapFunAsync( fcn, 10, 2 ); // $ExpectError
	mapFunAsync( fcn, 10, false ); // $ExpectError
	mapFunAsync( fcn, 10, true ); // $ExpectError
	mapFunAsync( fcn, 10, 'abc' ); // $ExpectError
	mapFunAsync( fcn, 10, {} ); // $ExpectError
	mapFunAsync( fcn, 10, [] ); // $ExpectError
	mapFunAsync( fcn, 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	mapFunAsync( fcn, 10, [], done ); // $ExpectError
	mapFunAsync( fcn, 10, 123, done ); // $ExpectError
	mapFunAsync( fcn, 10, 'abc', done ); // $ExpectError
	mapFunAsync( fcn, 10, false, done ); // $ExpectError
	mapFunAsync( fcn, 10, true, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `limit` option which is not a number...
{
	mapFunAsync( fcn, 10, { 'limit': '12' }, done ); // $ExpectError
	mapFunAsync( fcn, 10, { 'limit': true }, done ); // $ExpectError
	mapFunAsync( fcn, 10, { 'limit': false }, done ); // $ExpectError
	mapFunAsync( fcn, 10, { 'limit': {} }, done ); // $ExpectError
	mapFunAsync( fcn, 10, { 'limit': [] }, done ); // $ExpectError
	mapFunAsync( fcn, 10, { 'limit': ( x: number ): number => x }, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `series` option which is not a boolean...
{
	mapFunAsync( fcn, 10, { 'series': '12' }, done ); // $ExpectError
	mapFunAsync( fcn, 10, { 'series': 12 }, done ); // $ExpectError
	mapFunAsync( fcn, 10, { 'series': {} }, done ); // $ExpectError
	mapFunAsync( fcn, 10, { 'series': [] }, done ); // $ExpectError
	mapFunAsync( fcn, 10, { 'series': ( x: number ): number => x }, done ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	mapFunAsync(); // $ExpectError
	mapFunAsync( fcn ); // $ExpectError
	mapFunAsync( fcn, 10 ); // $ExpectError
	mapFunAsync( fcn, 10, {}, done, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	mapFunAsync.factory( fcn ); // $ExpectType FactoryFunction
	mapFunAsync.factory( { 'series': true }, fcn ); // $ExpectType FactoryFunction
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	mapFunAsync.factory( [], fcn ); // $ExpectError
	mapFunAsync.factory( 123, fcn ); // $ExpectError
	mapFunAsync.factory( 'abc', fcn ); // $ExpectError
	mapFunAsync.factory( false, fcn ); // $ExpectError
	mapFunAsync.factory( true, fcn ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a last argument which is not a function...
{
	mapFunAsync.factory( {} ); // $ExpectError
	mapFunAsync.factory( true ); // $ExpectError
	mapFunAsync.factory( false ); // $ExpectError
	mapFunAsync.factory( {}, 123 ); // $ExpectError
	mapFunAsync.factory( {}, 'abc' ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = mapFunAsync.factory( fcn );
	fcn1( 'abc', done ); // $ExpectError
	fcn1( true, done ); // $ExpectError
	fcn1( false, done ); // $ExpectError
	fcn1( [], done ); // $ExpectError
	fcn1( {}, done ); // $ExpectError
	fcn1( ( x: number ): number => x, done ); // $ExpectError

	fcn1( 10, 12 ); // $ExpectError
	fcn1( 10, true ); // $ExpectError
	fcn1( 10, false ); // $ExpectError
	fcn1( 10, '5' ); // $ExpectError
	fcn1( 10, {} ); // $ExpectError
	fcn1( 10, [] ); // $ExpectError
	fcn1( 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = mapFunAsync.factory( fcn );
	fcn1(); // $ExpectError
	fcn1( 10 ); // $ExpectError
	fcn1( 10, done, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `limit` option which is not a number...
{
	mapFunAsync.factory( { 'limit': '12' }, fcn ); // $ExpectError
	mapFunAsync.factory( { 'limit': true }, fcn ); // $ExpectError
	mapFunAsync.factory( { 'limit': false }, fcn ); // $ExpectError
	mapFunAsync.factory( { 'limit': {} }, fcn ); // $ExpectError
	mapFunAsync.factory( { 'limit': [] }, fcn ); // $ExpectError
	mapFunAsync.factory( { 'limit': ( x: number ): number => x }, fcn ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `series` option which is not a boolean...
{
	mapFunAsync.factory( { 'series': '12' }, fcn ); // $ExpectError
	mapFunAsync.factory( { 'series': 12 }, fcn ); // $ExpectError
	mapFunAsync.factory( { 'series': {} }, fcn ); // $ExpectError
	mapFunAsync.factory( { 'series': [] }, fcn ); // $ExpectError
	mapFunAsync.factory( { 'series': ( x: number ): number => x }, fcn ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid number of arguments...
{
	mapFunAsync.factory(); // $ExpectError
	mapFunAsync.factory( {}, fcn, {} ); // $ExpectError
}
