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

var seq2slice = require( './../lib' );

var s = seq2slice( ':', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 5. step: 1.'

s = seq2slice( '2:', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 2. stop: 5. step: 1.'

s = seq2slice( ':3', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 3. step: 1.'

s = seq2slice( '2:4', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 2. stop: 4. step: 1.'

s = seq2slice( '1:4:2', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 1. stop: 4. step: 2.'

s = seq2slice( '2::2', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 2. stop: 5. step: 2.'

s = seq2slice( ':-2', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 3. step: 1.'

s = seq2slice( ':-1:2', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 4. step: 2.'

s = seq2slice( '-4:-1:2', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 1. stop: 4. step: 2.'

s = seq2slice( '-5:-1', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 4. step: 1.'

s = seq2slice( '::-1', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 4. stop: null. step: -1.'

s = seq2slice( ':0:-1', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 4. stop: 0. step: -1.'

s = seq2slice( '3:0:-1', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 3. stop: 0. step: -1.'

s = seq2slice( '-1:-4:-2', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 4. stop: 1. step: -2.'

s = seq2slice( ':end', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 5. step: 1.'

s = seq2slice( ':end-1', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 4. step: 1.'

s = seq2slice( ':end/2', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 0. stop: 2. step: 1.'

s = seq2slice( 'end/2::-1', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 2. stop: null. step: -1.'

s = seq2slice( 'end-2::-1', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 3. stop: null. step: -1.'

s = seq2slice( 'end/2:', 5, false );
console.log( 'start: %s. stop: %s. step: %s.', s.start, s.stop, s.step );
// => 'start: 2. stop: 5. step: 1.'
