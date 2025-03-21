/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

/* eslint-disable no-multi-spaces */

'use strict';

var array = require( '@stdlib/ndarray/array' );
var chi2test = require( './../lib' );

/*
* Data from students in grades 4-6 on whether good grades, athletic ability, or popularity are most important to them:
*
* Source: Chase, M.A and Dummer, G.M. (1992), "The Role of Sports as a Social Determinant for Children"
*/
var table = array([
	/* Grades Popularity Sports */
	[    63,      31,      25   ], // 4th
	[    88,      55,      33   ], // 5th
	[    96,      55,      32   ]  // 6th
]);

// Assess whether the grade level and the students' goals are independent of each other:
var out = chi2test( table );
// returns {...}

console.log( out.toString() );
