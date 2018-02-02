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

// MODULES //

var numCPUs = require( '@stdlib/os/num-cpus' );


// MAIN //

var defaults = {};

// Number of workers:
defaults.workers = numCPUs - 1;

// Number of scripts to execute concurrently:
defaults.concurrency = defaults.workers;

// Executable file/command:
defaults.cmd = 'node';

// Boolean indicating whether script output can be interleaved or must be ordered:
defaults.ordered = false;

// Process user identity:
defaults.uid = null;

// Process group identity:
defaults.gid = null;

// `stdio` encoding:
defaults.encoding = 'buffer';

// Max child process `stdio` buffer size:
defaults.maxBuffer = 200 * 1024 * 1024; // bytes


// EXPORTS //

module.exports = defaults;
