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

import typedarray2json = require( './index' );


// TESTS //

// The function returns a JSON representation...
{
	const x = new Float64Array( 10 );

	typedarray2json( x ); // $ExpectType JSONRepresentation
}

// The compiler throws an error if the function is provided a first argument which is not array-like...
{
	typedarray2json( 'abc' ); // $ExpectError
	typedarray2json( 123 );  // $ExpectError
	typedarray2json( true ); // $ExpectError
	typedarray2json( false ); // $ExpectError
	typedarray2json( {} ); // $ExpectError
	typedarray2json( [] ); // $ExpectError
	typedarray2json( null ); // $ExpectError
	typedarray2json( undefined ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	typedarray2json(); // $ExpectError
	typedarray2json( x, 3 ); // $ExpectError
}
