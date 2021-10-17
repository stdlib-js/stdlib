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
		'nargs': 2,
		'nin': 1,
		'nout': 1
	};
	const dtypes = [ 'float64', 'float64' ];

	setProps( meta, dtypes, {} ); // $ExpectType any
	setProps( meta, dtypes, {} ); // $ExpectType any
}

// The compiler throws an error if not provided a first argument which is a meta data object...
{
	const dtypes = [ 'float64', 'float64' ];

	setProps( '10', dtypes, {} ); // $ExpectError
	setProps( 10, dtypes, {} ); // $ExpectError
	setProps( true, dtypes, {} ); // $ExpectError
	setProps( false, dtypes, {} ); // $ExpectError
	setProps( null, dtypes, {} ); // $ExpectError
	setProps( undefined, dtypes, {} ); // $ExpectError
	setProps( [], dtypes, {} ); // $ExpectError
	setProps( {}, dtypes, {} ); // $ExpectError
	setProps( ( x: number ): number => x, dtypes, {} ); // $ExpectError
}

// The compiler throws an error if not provided a second argument which is an array-like object...
{
	const meta = {
		'nargs': 2,
		'nin': 1,
		'nout': 1
	};
	setProps( meta, 10, {} ); // $ExpectError
	setProps( meta, true, {} ); // $ExpectError
	setProps( meta, false, {} ); // $ExpectError
	setProps( meta, null, {} ); // $ExpectError
	setProps( meta, undefined, {} ); // $ExpectError
	setProps( meta, {}, {} ); // $ExpectError
}
