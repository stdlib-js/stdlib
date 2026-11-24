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

import invertBy = require( './index' );

const transform = ( key: string, value: string ): string => key + value;


// TESTS //

// The function returns an object...
{
	const obj = {
		'a': 'beep',
		'b': 'boop'
	};
	const opts = {
		'duplicates': false
	};
	invertBy( obj, ( key: string, value: string ) => key + value ); // $ExpectType any
	invertBy( obj, opts, ( key: string, value: string ) => key + value ); // $ExpectType any
}

// The compiler throws an error if the function is provided a last argument which is not a function...
{
	const obj = {
		'a': 'beep',
		'b': 'boop'
	};
	invertBy( obj, false ); // $ExpectError
	invertBy( obj, true ); // $ExpectError
	invertBy( obj, 32 ); // $ExpectError
	invertBy( obj, 'abc' ); // $ExpectError
	invertBy( obj, [] ); // $ExpectError
	invertBy( obj, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const obj = {
		'a': 'beep',
		'b': 'boop'
	};
	invertBy( obj, null, transform ); // $ExpectError
}

// The compiler throws an error if the function is provided a `duplicates` option which is not a boolean...
{
	const obj = {
		'a': 'beep',
		'b': 'boop'
	};
	invertBy( obj, { 'duplicates': '5' }, transform ); // $ExpectError
	invertBy( obj, { 'duplicates': 123 }, transform ); // $ExpectError
	invertBy( obj, { 'duplicates': null }, transform ); // $ExpectError
	invertBy( obj, { 'duplicates': [] }, transform ); // $ExpectError
	invertBy( obj, { 'duplicates': {} }, transform ); // $ExpectError
	invertBy( obj, { 'duplicates': ( x: number ): number => x }, transform ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	invertBy(); // $ExpectError
	invertBy( {} ); // $ExpectError
	invertBy( {}, {}, transform, 16 ); // $ExpectError
}
