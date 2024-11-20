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

var http = require( 'http' );


// MAIN //

/**
* Makes an HTTP `GET` request.
*
* @private
* @param {Options} opts - request options
* @param {Callback} clbk - callback to invoke after receiving an HTTP response
*/
function request( opts, clbk ) {
	var body;
	var req;
	var res;

	req = http.request( opts, onResponse );
	req.on( 'error', onError );
	req.end();

	function onError( error ) {
		clbk( error );
	}

	function onResponse( response ) {
		body = '';
		response.setEncoding( 'utf8' );
		response.on( 'data', onData );
		response.on( 'end', onEnd );
		res = response;
	}

	function onData( chunk ) {
		body += chunk;
	}

	function onEnd() {
		clbk( null, res, body );
	}
}


// EXPORTS //

module.exports = request;
