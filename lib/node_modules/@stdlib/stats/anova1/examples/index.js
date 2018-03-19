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

var anova1 = require( '../lib/' );

var x = [ 3, 4, 5, 6, 2, 5, 10, 12, 8, 10 ];
var f = [ 'control', 'treatA', 'treatB', 'control', 'treatA', 'treatB', 'control', 'treatA', 'treatB', 'control' ];

var out = anova1( x, f, {
	'decision': true
});

console.log(out.print());

out = anova1( x, f, {
	'alpha': 0.9
});

console.log( out.print() );
