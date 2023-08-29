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

import iterator = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterator( 0.3 ); // $ExpectType Iterator<number>
	iterator( 0.5, {} ); // $ExpectType Iterator<number>
	iterator( 0.5, { 'iter': 10 } ); // $ExpectType Iterator<number>
}

// The compiler throws an error if the function is provided an invalid input argument...
{
	iterator( '0.2', ); // $ExpectError
	iterator( true ); // $ExpectError
	iterator( { 'iter': 'beep' } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterator(); // $ExpectError
}
