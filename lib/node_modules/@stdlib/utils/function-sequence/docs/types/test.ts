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

import funseq = require( './index' );

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
	funseq( a, b, c ); // $ExpectType Function
	funseq( a, b ); // $ExpectType Function
}

// The compiler throws an error if the function is provided arguments other than functions...
{
	funseq( a, b, 'abc' ); // $ExpectError
	funseq( a, b, 5 ); // $ExpectError
	funseq( a, b, [] ); // $ExpectError
	funseq( a, b, {} ); // $ExpectError
	funseq( a, b, true ); // $ExpectError
	funseq( a, b, false ); // $ExpectError

	funseq( a, 'abc', c ); // $ExpectError
	funseq( a, 5, c ); // $ExpectError
	funseq( a, [], c ); // $ExpectError
	funseq( a, {}, c ); // $ExpectError
	funseq( a, true, c ); // $ExpectError
	funseq( a, false, c ); // $ExpectError

	funseq( 'abc', b, c ); // $ExpectError
	funseq( 5, b, c ); // $ExpectError
	funseq( [], b, c ); // $ExpectError
	funseq( {}, b, c ); // $ExpectError
	funseq( true, b, c ); // $ExpectError
	funseq( false, b, c ); // $ExpectError
}
