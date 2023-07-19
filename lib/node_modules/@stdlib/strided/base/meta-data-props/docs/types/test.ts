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

import setProps = require( './index' );


// TESTS //

// The function returns a value...
{
	const meta = {
		'nargs': 7,
		'nin': 1,
		'nout': 1
	};
	const dtypes = [ 'float64', 'float64' ];

	setProps( meta, dtypes, {}, false ); // $ExpectType any
	setProps( meta, dtypes, {}, true ); // $ExpectType any
}

// The compiler throws an error if not provided a first argument which is a meta data object...
{
	const dtypes = [ 'float64', 'float64' ];

	setProps( '10', dtypes, {}, false ); // $ExpectError
	setProps( 10, dtypes, {}, false ); // $ExpectError
	setProps( true, dtypes, {}, false ); // $ExpectError
	setProps( false, dtypes, {}, false ); // $ExpectError
	setProps( null, dtypes, {}, false ); // $ExpectError
	setProps( undefined, dtypes, {}, false ); // $ExpectError
	setProps( [], dtypes, {}, false ); // $ExpectError
	setProps( {}, dtypes, {}, false ); // $ExpectError
	setProps( ( x: number ): number => x, dtypes, {}, false ); // $ExpectError
}

// The compiler throws an error if not provided a second argument which is an array-like object...
{
	const meta = {
		'nargs': 7,
		'nin': 1,
		'nout': 1
	};
	setProps( meta, 10, {}, false ); // $ExpectError
	setProps( meta, true, {}, false ); // $ExpectError
	setProps( meta, false, {}, false ); // $ExpectError
	setProps( meta, null, {}, false ); // $ExpectError
	setProps( meta, undefined, {}, false ); // $ExpectError
	setProps( meta, {}, {}, false ); // $ExpectError
}

// The compiler throws an error if not provided a fourth argument which is a boolean...
{
	const meta = {
		'nargs': 7,
		'nin': 1,
		'nout': 1
	};
	const dtypes = [ 'float64', 'float64' ];

	setProps( meta, dtypes, {}, '10' ); // $ExpectError
	setProps( meta, dtypes, {}, 10 ); // $ExpectError
	setProps( meta, dtypes, {}, null ); // $ExpectError
	setProps( meta, dtypes, {}, undefined ); // $ExpectError
	setProps( meta, dtypes, {}, [] ); // $ExpectError
	setProps( meta, dtypes, {}, {} ); // $ExpectError
	setProps( meta, dtypes, {}, ( x: number ): number => x ); // $ExpectError
}
