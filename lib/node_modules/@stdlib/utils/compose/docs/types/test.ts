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

import compose = require( './index' );

const a = ( x: number ): number => {
	return x * 2;
};

const b = ( x: number ): number => {
	return x + 3;
};

const c = ( x: number ): number => {
	return x / 5;
};

// TESTS //

// The function returns a function...
{
	compose( a, b, c ); // $ExpectType Function
	compose( a, b ); // $ExpectType Function
}

// The compiler throws an error if the function is provided arguments other than functions...
{
	compose( a, b, 'abc' ); // $ExpectError
	compose( a, b, 5 ); // $ExpectError
	compose( a, b, [] ); // $ExpectError
	compose( a, b, {} ); // $ExpectError
	compose( a, b, true ); // $ExpectError
	compose( a, b, false ); // $ExpectError

	compose( a, 'abc', c ); // $ExpectError
	compose( a, 5, c ); // $ExpectError
	compose( a, [], c ); // $ExpectError
	compose( a, {}, c ); // $ExpectError
	compose( a, true, c ); // $ExpectError
	compose( a, false, c ); // $ExpectError

	compose( 'abc', b, c ); // $ExpectError
	compose( 5, b, c ); // $ExpectError
	compose( [], b, c ); // $ExpectError
	compose( {}, b, c ); // $ExpectError
	compose( true, b, c ); // $ExpectError
	compose( false, b, c ); // $ExpectError
}
