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

var sample = require( './../lib' );

// By default, sample uniformly with replacement:
var x = [ 'a', 'b', 'c', 'd' ];
var out = sample( x, {
	'size': 10
});
console.log( 'By default, sample uniformly with replacement:\n%s', out.toString() );

// Sample with replacement with custom probabilities:
x = [ 'a', 'b', 'c', 'd' ];
out = sample( x, {
	'probs': [ 0.1, 0.1, 0.2, 0.6 ],
	'size': 10
});
console.log( 'Sample with replacement with custom probabilities:\n%s', out.toString() );

// Sample without replacement:
x = [ 'a', 'b', 'c', 'd' ];
out = sample( x, {
	'size': 3,
	'replace': false
});
console.log( 'Sample without replacement:\n%s', out.toString() );

// Sample without replacement when (initial) probabilities are non-uniform:
x = [ 1, 2, 3, 4, 5, 6 ];
out = sample( x, {
	'probs': [ 0.1, 0.1, 0.1, 0.1, 0.1, 0.5 ],
	'size': 3,
	'replace': false
});
console.log( 'Sample without replacement with custom probabilities:\n%s', out.toString() );
