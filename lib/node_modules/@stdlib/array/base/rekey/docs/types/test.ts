/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import rekey = require( './index' );


// TESTS //

// The function returns an array of objects...
{
	const x = [
		{
			'x': 1,
			'y': 2
		}
	];
	const mapping = {
		'x': 'a',
		'y': 'b'
	};

	rekey( x, mapping ); // $ExpectType { [x: string]: number; }[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	const mapping = {
		'x': 'a',
		'y': 'b'
	};

	rekey( 1, mapping ); // $ExpectError
	rekey( true, mapping ); // $ExpectError
	rekey( false, mapping ); // $ExpectError
	rekey( null, mapping ); // $ExpectError
	rekey( void 0, mapping ); // $ExpectError
	rekey( {}, mapping ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	rekey( [], 1 ); // $ExpectError
	rekey( [], true ); // $ExpectError
	rekey( [], false ); // $ExpectError
	rekey( [], null ); // $ExpectError
	rekey( [], void 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	rekey(); // $ExpectError
	rekey( [] ); // $ExpectError
	rekey( [], {}, [] ); // $ExpectError
}
