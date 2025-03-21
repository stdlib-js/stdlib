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

/* eslint-disable stdlib/no-redeclare */

'use strict';

var Slice = require( './../lib' );

var s = new Slice( 9, -10, -1 );
// returns <Slice>

var start = s.start;
console.log( 'Start: %d', start );
// => 'Start: 9'

var stop = s.stop;
console.log( 'Stop: %d', stop );
// => 'Stop: -10'

var step = s.step;
console.log( 'Step: %d', step );
// => 'Step: -1'

var str = s.toString();
console.log( str );
// => 'Slice(9,-10,-1)'

var o = s.toJSON();
console.log( JSON.stringify( o ) );
// => '{"type":"Slice","data":[9,-10,-1]}'
