/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import forEach = require( './index' );

/**
* Callback function.
*
* @param v - argument
* @returns result
*/
function clbk( v: string ): string {
	return v;
}

// TESTS //

// The function returns a string...
{
	forEach( 'presidential election', clbk ); // $ExpectType string
	forEach( 'Iñtërnâtiônàlizætiøn', clbk, {} ); // $ExpectType string
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	forEach( 1, clbk ); // $ExpectError
	forEach( false, clbk ); // $ExpectError
	forEach( true, clbk ); // $ExpectError
	forEach( null, clbk ); // $ExpectError
	forEach( [], clbk ); // $ExpectError
	forEach( {}, clbk ); // $ExpectError
	forEach( ( x: number ): number => x, clbk ); // $ExpectError

	forEach( 1, clbk, {} ); // $ExpectError
	forEach( false, clbk, {} ); // $ExpectError
	forEach( true, clbk, {} ); // $ExpectError
	forEach( null, clbk, {} ); // $ExpectError
	forEach( [], clbk, {} ); // $ExpectError
	forEach( {}, clbk, {} ); // $ExpectError
	forEach( ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function having a supported signature...
{
	forEach( 'presidential election', 'abc' ); // $ExpectError
	forEach( 'presidential election', 2 ); // $ExpectError
	forEach( 'presidential election', true ); // $ExpectError
	forEach( 'presidential election', false ); // $ExpectError
	forEach( 'presidential election', null ); // $ExpectError
	forEach( 'presidential election', {} ); // $ExpectError
	forEach( 'presidential election', [] ); // $ExpectError

	forEach( 'presidential election', 'abc', {} ); // $ExpectError
	forEach( 'presidential election', 2, {} ); // $ExpectError
	forEach( 'presidential election', true, {} ); // $ExpectError
	forEach( 'presidential election', false, {} ); // $ExpectError
	forEach( 'presidential election', null, {} ); // $ExpectError
	forEach( 'presidential election', {}, {} ); // $ExpectError
	forEach( 'presidential election', [], {} ); // $ExpectError

	forEach( 'presidential election', ( x: number ): number => x ); // $ExpectError
	forEach( 'presidential election', ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	forEach(); // $ExpectError
	forEach( 'presidential election' ); // $ExpectError
	forEach( 'presidential election', clbk, {}, 3 ); // $ExpectError
}
