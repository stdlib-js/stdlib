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

import mapKeysAsync = require( './index' );

const transform = ( key: string, next: Function ) => {
	next( null, key + ':beep' );
};

const done = ( error: Error | null, out: any ) => {
	if ( error ) {
		throw error;
	}
	if ( out === void 0 ) {
		throw new Error( '`out` is missing.' );
	}
};


// TESTS //

// The function returns void...
{
	mapKeysAsync( { 'a': 1, 'b': 2 }, transform, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a second argument which is not a transform function...
{
	mapKeysAsync( { 'a': 1, 'b': 2 }, 2, done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, false, done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, true, done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, 'abc', done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, {}, done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, [], done ); // $ExpectError
}

// The compiler throws an error if the function is provided a done callback argument which is not a function having a supported signature...
{
	mapKeysAsync( { 'a': 1, 'b': 2 }, transform, 2 ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, transform, false ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, transform, true ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, transform, 'abc' ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, transform, {} ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, transform, [] ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, transform, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	mapKeysAsync( { 'a': 1, 'b': 2 }, [], transform, done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, 123, transform, done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, 'abc', transform, done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, false, transform, done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, true, transform, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `limit` option which is not a number...
{
	mapKeysAsync( { 'a': 1, 'b': 2 }, { 'limit': '12' }, transform, done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, { 'limit': true }, transform, done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, { 'limit': false }, transform, done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, { 'limit': {} }, transform, done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, { 'limit': [] }, transform, done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, { 'limit': ( x: number ): number => x }, transform, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `series` option which is not a boolean...
{
	mapKeysAsync( { 'a': 1, 'b': 2 }, { 'series': '12' }, transform, done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, { 'series': 12 }, transform, done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, { 'series': {} }, transform, done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, { 'series': [] }, transform, done ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, { 'series': ( x: number ): number => x }, transform, done ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	mapKeysAsync(); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 } ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, transform ); // $ExpectError
	mapKeysAsync( { 'a': 1, 'b': 2 }, {}, transform, done, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	mapKeysAsync.factory( transform ); // $ExpectType FactoryFunction
	mapKeysAsync.factory( { 'series': true }, transform ); // $ExpectType FactoryFunction
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	mapKeysAsync.factory( [], transform ); // $ExpectError
	mapKeysAsync.factory( 123, transform ); // $ExpectError
	mapKeysAsync.factory( 'abc', transform ); // $ExpectError
	mapKeysAsync.factory( false, transform ); // $ExpectError
	mapKeysAsync.factory( true, transform ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a last argument which is not an transform function...
{
	mapKeysAsync.factory( {} ); // $ExpectError
	mapKeysAsync.factory( true ); // $ExpectError
	mapKeysAsync.factory( false ); // $ExpectError
	mapKeysAsync.factory( {}, 123 ); // $ExpectError
	mapKeysAsync.factory( {}, 'abc' ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = mapKeysAsync.factory( transform );
	fcn1( { 'a': 1, 'b': 2 }, 12 ); // $ExpectError
	fcn1( { 'a': 1, 'b': 2 }, true ); // $ExpectError
	fcn1( { 'a': 1, 'b': 2 }, false ); // $ExpectError
	fcn1( { 'a': 1, 'b': 2 }, '5' ); // $ExpectError
	fcn1( { 'a': 1, 'b': 2 }, {} ); // $ExpectError
	fcn1( { 'a': 1, 'b': 2 }, [] ); // $ExpectError
	fcn1( { 'a': 1, 'b': 2 }, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = mapKeysAsync.factory( transform );
	fcn1(); // $ExpectError
	fcn1( { 'a': 1, 'b': 2 } ); // $ExpectError
	fcn1( { 'a': 1, 'b': 2 }, done, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `limit` option which is not a number...
{
	mapKeysAsync.factory( { 'limit': '12' }, transform ); // $ExpectError
	mapKeysAsync.factory( { 'limit': true }, transform ); // $ExpectError
	mapKeysAsync.factory( { 'limit': false }, transform ); // $ExpectError
	mapKeysAsync.factory( { 'limit': {} }, transform ); // $ExpectError
	mapKeysAsync.factory( { 'limit': [] }, transform ); // $ExpectError
	mapKeysAsync.factory( { 'limit': ( x: number ): number => x }, transform ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `series` option which is not a boolean...
{
	mapKeysAsync.factory( { 'series': '12' }, transform ); // $ExpectError
	mapKeysAsync.factory( { 'series': 12 }, transform ); // $ExpectError
	mapKeysAsync.factory( { 'series': {} }, transform ); // $ExpectError
	mapKeysAsync.factory( { 'series': [] }, transform ); // $ExpectError
	mapKeysAsync.factory( { 'series': ( x: number ): number => x }, transform ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid number of arguments...
{
	mapKeysAsync.factory(); // $ExpectError
	mapKeysAsync.factory( {}, transform, {} ); // $ExpectError
}
