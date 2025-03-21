/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import replace = require( './index' );


// TESTS //

// The function returns a string...
{
	replace( 'abd', /[a-z]/, '1' ); // $ExpectType string
	replace( 'abd', /[a-z]/, (): string => 'z' ); // $ExpectType string
}

// The compiler throws an error if the function is provided arguments having invalid types...
{
	replace( true, /[a-z]/, 'a' ); // $ExpectError
	replace( false, /[a-z]/, 'a' ); // $ExpectError
	replace( 3, /[a-z]/, 'a' ); // $ExpectError
	replace( [], /[a-z]/, 'a' ); // $ExpectError
	replace( {}, /[a-z]/, 'a' ); // $ExpectError
	replace( ( x: number ): number => x, /[a-z]/, 'a' ); // $ExpectError

	replace( 'abd', '', 'c' ); // $ExpectError
	replace( 'abd', true, 'c' ); // $ExpectError
	replace( 'abd', false, 'c' ); // $ExpectError
	replace( 'abd', 5, 'c' ); // $ExpectError
	replace( 'abd', [], 'c' ); // $ExpectError
	replace( 'abd', {}, 'c' ); // $ExpectError
	replace( 'abd', ( x: number ): number => x, 'c' ); // $ExpectError

	replace( 'abd', /[a-z]/, true ); // $ExpectError
	replace( 'abd', /[a-z]/, false ); // $ExpectError
	replace( 'abd', /[a-z]/, 5 ); // $ExpectError
	replace( 'abd', /[a-z]/, [] ); // $ExpectError
	replace( 'abd', /[a-z]/, {} ); // $ExpectError
	replace( 'abd', /[a-z]/, /[a-z]/ ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	replace(); // $ExpectError
	replace( 'abc' ); // $ExpectError
	replace( 'abc', /[a-z]/ ); // $ExpectError
}
