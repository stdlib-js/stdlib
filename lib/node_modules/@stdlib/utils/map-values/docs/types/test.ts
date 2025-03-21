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

import mapValues = require( './index' );

const transform = ( value: string, key: string ): string => key + value;


// TESTS //

// The function returns an object...
{
	const obj = {
		'a': 'beep',
		'b': 'boop'
	};
	mapValues( obj, ( key: string, value: string ) => key + value ); // $ExpectType any
}

// The compiler throws an error if the function is provided a last argument which is not a function...
{
	const obj = {
		'a': 'beep',
		'b': 'boop'
	};
	mapValues( obj, false ); // $ExpectError
	mapValues( obj, true ); // $ExpectError
	mapValues( obj, 32 ); // $ExpectError
	mapValues( obj, 'abc' ); // $ExpectError
	mapValues( obj, [] ); // $ExpectError
	mapValues( obj, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	mapValues(); // $ExpectError
	mapValues( {} ); // $ExpectError
	mapValues( {}, transform, 16 ); // $ExpectError
}
