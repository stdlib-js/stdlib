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

import flattenObject = require( './index' );


// TESTS //

// The function returns an object...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	flattenObject( obj ); // $ExpectType any
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	flattenObject( obj, null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `copy` option which is not a boolean...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	flattenObject( obj, { 'copy': '5' } ); // $ExpectError
	flattenObject( obj, { 'copy': 123 } ); // $ExpectError
	flattenObject( obj, { 'copy': null } ); // $ExpectError
	flattenObject( obj, { 'copy': [] } ); // $ExpectError
	flattenObject( obj, { 'copy': {} } ); // $ExpectError
	flattenObject( obj, { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `depth` option which is not a number...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	flattenObject( obj, { 'depth': true } ); // $ExpectError
	flattenObject( obj, { 'depth': false } ); // $ExpectError
	flattenObject( obj, { 'depth': 'abc' } ); // $ExpectError
	flattenObject( obj, { 'depth': null } ); // $ExpectError
	flattenObject( obj, { 'depth': [] } ); // $ExpectError
	flattenObject( obj, { 'depth': {} } ); // $ExpectError
	flattenObject( obj, { 'depth': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `flattenArrays` option which is not a boolean...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	flattenObject( obj, { 'flattenArrays': '5' } ); // $ExpectError
	flattenObject( obj, { 'flattenArrays': 123 } ); // $ExpectError
	flattenObject( obj, { 'flattenArrays': null } ); // $ExpectError
	flattenObject( obj, { 'flattenArrays': [] } ); // $ExpectError
	flattenObject( obj, { 'flattenArrays': {} } ); // $ExpectError
	flattenObject( obj, { 'flattenArrays': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `delimiter` option which is not a string...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	flattenObject( obj, { 'delimiter': true } ); // $ExpectError
	flattenObject( obj, { 'delimiter': false } ); // $ExpectError
	flattenObject( obj, { 'delimiter': 123 } ); // $ExpectError
	flattenObject( obj, { 'delimiter': null } ); // $ExpectError
	flattenObject( obj, { 'delimiter': [] } ); // $ExpectError
	flattenObject( obj, { 'delimiter': {} } ); // $ExpectError
	flattenObject( obj, { 'delimiter': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided no arguments...
{
	flattenObject(); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	flattenObject.factory(); // $ExpectType Unary
}

// The `factory` method returns a function which returns an object...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	const fcn = flattenObject.factory();
	fcn( obj ); // $ExpectType any
}

// The compiler throws an error if the `factory` method is provided an argument which is not an object...
{
	flattenObject.factory( null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	flattenObject.factory( { 'copy': '5' } ); // $ExpectError
	flattenObject.factory( { 'copy': 123 } ); // $ExpectError
	flattenObject.factory( { 'copy': null } ); // $ExpectError
	flattenObject.factory( { 'copy': [] } ); // $ExpectError
	flattenObject.factory( { 'copy': {} } ); // $ExpectError
	flattenObject.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `flattenArrays` option which is not a boolean...
{
	flattenObject.factory( { 'flattenArrays': '5' } ); // $ExpectError
	flattenObject.factory( { 'flattenArrays': 123 } ); // $ExpectError
	flattenObject.factory( { 'flattenArrays': null } ); // $ExpectError
	flattenObject.factory( { 'flattenArrays': [] } ); // $ExpectError
	flattenObject.factory( { 'flattenArrays': {} } ); // $ExpectError
	flattenObject.factory( { 'flattenArrays': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `depth` option which is not a number...
{
	flattenObject.factory( { 'depth': '5' } ); // $ExpectError
	flattenObject.factory( { 'depth': true } ); // $ExpectError
	flattenObject.factory( { 'depth': false } ); // $ExpectError
	flattenObject.factory( { 'depth': null } ); // $ExpectError
	flattenObject.factory( { 'depth': [] } ); // $ExpectError
	flattenObject.factory( { 'depth': {} } ); // $ExpectError
	flattenObject.factory( { 'depth': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `delimiter` option which is not a string...
{
	flattenObject.factory( { 'delimiter': 123 } ); // $ExpectError
	flattenObject.factory( { 'delimiter': true } ); // $ExpectError
	flattenObject.factory( { 'delimiter': false } ); // $ExpectError
	flattenObject.factory( { 'delimiter': null } ); // $ExpectError
	flattenObject.factory( { 'delimiter': [] } ); // $ExpectError
	flattenObject.factory( { 'delimiter': {} } ); // $ExpectError
	flattenObject.factory( { 'delimiter': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	const fcn = flattenObject.factory();
	fcn(); // $ExpectError
	fcn( obj, 2 ); // $ExpectError
}
