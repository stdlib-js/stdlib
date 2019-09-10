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

import trycatch = require( './index' );

/**
* First function.
*/
function x(): number {
	if ( Math.random() < 0.5 ) {
		throw new Error( 'beep' );
	}
	return 1.0;
}

// TESTS //

// The function returns a value...
{
	trycatch( x, -1 ); // $ExpectType any
}

// The compiler throws an error if the function is provided a first argument other than a function...
{
	trycatch( 'abc', -1 ); // $ExpectError
	trycatch( 5, -1 ); // $ExpectError
	trycatch( [], -1 ); // $ExpectError
	trycatch( {}, -1 ); // $ExpectError
	trycatch( true, -1 ); // $ExpectError
	trycatch( false, -1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	trycatch(); // $ExpectError
	trycatch( x ); // $ExpectError
	trycatch( x, -1, 2 ); // $ExpectError
}
