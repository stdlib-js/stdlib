/**
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

'use strict';

var num2words = require( './../lib' );

var out = num2words( 29 );
console.log( out );
// => 'twenty-nine'

out = num2words( 113 );
console.log( out );
// => 'one hundred thirteen'

out = num2words( 13.52 );
console.log( out );
// => 'thirteen point five two'

out = num2words( 47, {
	'lang': 'de'
});
console.log( out );
// => 'siebenundvierzig'
