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

/* eslint-disable @typescript-eslint/no-unused-expressions */

import Bool = require( './index' );


// TESTS //

// When used as a constructor, the function returns an object...
{
	new Bool( null ); // $ExpectType Boolean
	new Bool( undefined ); // $ExpectType Boolean
	new Bool( {} ); // $ExpectType Boolean
	new Bool( 5 ); // $ExpectType Boolean
	new Bool( 'beep' ); // $ExpectType Boolean
}

// When used as a function, the function returns a boolean...
{
	Bool( null ); // $ExpectType boolean
	Bool( undefined ); // $ExpectType boolean
	Bool( {} ); // $ExpectType boolean
	Bool( 5 ); // $ExpectType boolean
	Bool( 'beep' ); // $ExpectType boolean
}
