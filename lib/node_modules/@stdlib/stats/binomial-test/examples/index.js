/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var binomialTest = require( './../lib' );

var out = binomialTest( 682, 925 );
console.log( out );

out = binomialTest( [ 682, 925 - 682 ] );
console.log( out );

out = binomialTest( 682, 925, {
	'p': 0.75,
	'alpha': 0.05
});
console.log( out );

out = binomialTest( 21, 40, {
	'p': 0.4,
	'alternative': 'greater'
});
console.log( out );
