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

import merge = require( './index' );


// TESTS //

// The function returns an object...
{
	const target = {
		'a': 'beep'
	};
	const source = {
		'a': 'boop',
		'b': 'bap'
	};
	const source2 = {
		'd': 'dap'
	};
	merge( target, source ); // $ExpectType any
	merge( target, source, source2 ); // $ExpectType any
}

// The compiler throws an error if the function is not provided at least one argument...
{
	merge(); // $ExpectError
}

// Attached to main export is a `factory` method which returns a merge function...
{
	merge.factory( {} ); // $ExpectType MergeFunction
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	merge.factory(); // $ExpectError
	merge.factory( {}, 21 ); // $ExpectError
}

// The `factory` method returns a function which returns an object...
{
	const target = {
		'a': 'beep'
	};
	const source = {
		'a': 'boop',
		'b': 'bap'
	};

	let mergefcn = merge.factory( {} );
	mergefcn( target, source ); // $ExpectType any

	mergefcn = merge.factory( {
		'extend': false
	} );
	mergefcn( target, source ); // $ExpectType any
}

// The compiler throws an error if the `factory` method is provided a `level` option which is not a number...
{
	merge.factory( { 'level': true } ); // $ExpectError
	merge.factory( { 'level': false } ); // $ExpectError
	merge.factory( { 'level': 'abc' } ); // $ExpectError
	merge.factory( { 'level': [] } ); // $ExpectError
	merge.factory( { 'level': {} } ); // $ExpectError
	merge.factory( { 'level': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	merge.factory( { 'copy': 32 } ); // $ExpectError
	merge.factory( { 'copy': 'abc' } ); // $ExpectError
	merge.factory( { 'copy': [] } ); // $ExpectError
	merge.factory( { 'copy': {} } ); // $ExpectError
	merge.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an `override` option which is not a boolean or function...
{
	merge.factory( { 'override': 32 } ); // $ExpectError
	merge.factory( { 'override': 'abc' } ); // $ExpectError
	merge.factory( { 'override': [] } ); // $ExpectError
	merge.factory( { 'override': {} } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an `extend` option which is not a boolean...
{
	merge.factory( { 'extend': 32 } ); // $ExpectError
	merge.factory( { 'extend': 'abc' } ); // $ExpectError
	merge.factory( { 'extend': [] } ); // $ExpectError
	merge.factory( { 'extend': {} } ); // $ExpectError
	merge.factory( { 'extend': ( x: number ): number => x } ); // $ExpectError
}
