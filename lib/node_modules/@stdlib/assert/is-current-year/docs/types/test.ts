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

import isCurrentYear = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isCurrentYear( new Date() ); // $ExpectType boolean
	isCurrentYear( new Date().valueOf() ); // $ExpectType boolean
	isCurrentYear( new Date().toString() ); // $ExpectType boolean
	isCurrentYear( new Date().getFullYear() ); // $ExpectType boolean
	isCurrentYear( 2021 ); // $ExpectType boolean
	isCurrentYear( 'abc' ); // $ExpectType boolean
	isCurrentYear( null ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isCurrentYear(); // $ExpectError
	isCurrentYear( new Date(), 123 ); // $ExpectError
}
