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

import incrkmeans = require( './index' );


// TESTS //

// The function returns an accumulator function...
{
	incrkmeans( 2, 2 ); // $ExpectType Accumulator
	incrkmeans( 2, 2, { 'normalize': true } ); // $ExpectType Accumulator
}

// The compiler throws an error if the function is provided a first argument which is not a number or ndarray...
{
	incrkmeans( '5', 2 ); // $ExpectError
	incrkmeans( true, 2 ); // $ExpectError
	incrkmeans( false, 2 ); // $ExpectError
	incrkmeans( null, 2 ); // $ExpectError
	incrkmeans( [], 2 ); // $ExpectError
	incrkmeans( {}, 2 ); // $ExpectError
	incrkmeans( ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	incrkmeans( 2, '5' ); // $ExpectError
	incrkmeans( 2, true ); // $ExpectError
	incrkmeans( 2, false ); // $ExpectError
	incrkmeans( 2, null ); // $ExpectError
	incrkmeans( 2, {} ); // $ExpectError
	incrkmeans( 2, [] ); // $ExpectError
	incrkmeans( 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `metric` option which is not a recognized metric...
{
	incrkmeans( 2, 3, { 'metric': 'abc' } ); // $ExpectError
	incrkmeans( 2, 3, { 'metric': 123 } ); // $ExpectError
	incrkmeans( 2, 3, { 'metric': null } ); // $ExpectError
	incrkmeans( 2, 3, { 'metric': true } ); // $ExpectError
	incrkmeans( 2, 3, { 'metric': false } ); // $ExpectError
	incrkmeans( 2, 3, { 'metric': [] } ); // $ExpectError
	incrkmeans( 2, 3, { 'metric': {} } ); // $ExpectError
	incrkmeans( 2, 3, { 'metric': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `init` option which is not array-like...
{
	incrkmeans( 2, 3, { 'init': 123 } ); // $ExpectError
	incrkmeans( 2, 3, { 'init': null } ); // $ExpectError
	incrkmeans( 2, 3, { 'init': true } ); // $ExpectError
	incrkmeans( 2, 3, { 'init': false } ); // $ExpectError
	incrkmeans( 2, 3, { 'init': {} } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `normalize` option which is not a boolean...
{
	incrkmeans( 2, 3, { 'normalize': 'abc' } ); // $ExpectError
	incrkmeans( 2, 3, { 'normalize': 123 } ); // $ExpectError
	incrkmeans( 2, 3, { 'normalize': null } ); // $ExpectError
	incrkmeans( 2, 3, { 'normalize': [] } ); // $ExpectError
	incrkmeans( 2, 3, { 'normalize': {} } ); // $ExpectError
	incrkmeans( 2, 3, { 'normalize': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `copy` option which is not a boolean...
{
	incrkmeans( 2, 3, { 'copy': 'abc' } ); // $ExpectError
	incrkmeans( 2, 3, { 'copy': 123 } ); // $ExpectError
	incrkmeans( 2, 3, { 'copy': null } ); // $ExpectError
	incrkmeans( 2, 3, { 'copy': [] } ); // $ExpectError
	incrkmeans( 2, 3, { 'copy': {} } ); // $ExpectError
	incrkmeans( 2, 3, { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The function returns an accumulator function which returns an accumulated result or null...
{
	const acc = incrkmeans( 2, 3 );

	acc(); // $ExpectType Results | null
}

// The compiler throws an error if the returned accumulator function is provided invalid arguments...
{
	const acc = incrkmeans( 2, 3 );

	acc( 'abc' ); // $ExpectError
	acc( true ); // $ExpectError
	acc( false ); // $ExpectError
	acc( null ); // $ExpectError
	acc( [] ); // $ExpectError
	acc( {} ); // $ExpectError
	acc( ( x: number ): number => x ); // $ExpectError
}
