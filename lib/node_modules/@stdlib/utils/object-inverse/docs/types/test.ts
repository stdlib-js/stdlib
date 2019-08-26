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

import invert = require( './index' );


// TESTS //

// The function returns an object...
{
	const obj = {
		'a': 'beep',
		'b': 'boop'
	};
	invert( obj ); // $ExpectType any
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const obj = {
		'a': 'beep',
		'b': 'boop'
	};
	invert( obj, null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `duplicates` option which is not a boolean...
{
	const obj = {
		'a': 'beep',
		'b': 'boop'
	};
	invert( obj, { 'duplicates': '5' } ); // $ExpectError
	invert( obj, { 'duplicates': 123 } ); // $ExpectError
	invert( obj, { 'duplicates': null } ); // $ExpectError
	invert( obj, { 'duplicates': [] } ); // $ExpectError
	invert( obj, { 'duplicates': {} } ); // $ExpectError
	invert( obj, { 'duplicates': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	invert(); // $ExpectError
	invert( {}, 4, 16 ); // $ExpectError
}
