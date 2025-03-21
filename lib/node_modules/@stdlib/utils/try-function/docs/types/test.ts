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

import wrap = require( './index' );

/**
* Function that throws an error.
*/
function fcn(): void {
	throw new Error( 'beep boop' );
}

// TESTS //

// The function returns a function...
{
	wrap( fcn ); // $ExpectType Function
	wrap( fcn, {} ); // $ExpectType Function
}

// The compiler throws an error if the function is provided a first argument other than a function...
{
	wrap( 'abc' ); // $ExpectError
	wrap( 5 ); // $ExpectError
	wrap( [] ); // $ExpectError
	wrap( {} ); // $ExpectError
	wrap( true ); // $ExpectError
	wrap( false ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	wrap(); // $ExpectError
	wrap( fcn, {}, false ); // $ExpectError
}
