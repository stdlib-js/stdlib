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

var proc = require( 'process' );
var cluster = require( 'cluster' );
var NUM_CPUS = require( './../lib' );

var i;

function onTimeout() {
	proc.exit( 0 );
}

if ( cluster.isMaster ) {
	for ( i = 0; i < NUM_CPUS; i++ ) {
		cluster.fork();
	}
} else {
	console.log( 'Worker %s. Process id: %d.', cluster.worker.id, cluster.worker.process.pid );

	setTimeout( onTimeout, 1000 );
}
