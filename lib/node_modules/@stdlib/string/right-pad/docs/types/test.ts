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

import rpad = require( './index' );


// TESTS //

// The function returns a string...
{
	rpad( 'abd', 5, ' ' ); // $ExpectType string
	rpad( 'abd', 4, 'x' ); // $ExpectType string
	rpad( 'abd', 10 ); // $ExpectType string
}

// The function does not compile if provided arguments having invalid types...
{
	rpad( true, 6 ); // $ExpectError
	rpad( false, 6 ); // $ExpectError
	rpad( 3, 6 ); // $ExpectError
	rpad( [], 6 ); // $ExpectError
	rpad( {}, 6 ); // $ExpectError
	rpad( ( x: number ): number => x, 6 ); // $ExpectError

	rpad( 'abd', true ); // $ExpectError
	rpad( 'abd', false ); // $ExpectError
	rpad( 'abd', 'abc' ); // $ExpectError
	rpad( 'abd', [], 0 ); // $ExpectError
	rpad( 'abd', {}, 0 ); // $ExpectError
	rpad( 'abd', ( x: number ): number => x, 0 ); // $ExpectError

	rpad( 'abd', 6, true ); // $ExpectError
	rpad( 'abd', 6, false ); // $ExpectError
	rpad( 'abd', 6, 123 ); // $ExpectError
	rpad( 'abd', 6, [] ); // $ExpectError
	rpad( 'abd', 6, {} ); // $ExpectError
	rpad( 'abd', 6, /[a-z]/ ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	rpad(); // $ExpectError
	rpad( 'abc' ); // $ExpectError
}
