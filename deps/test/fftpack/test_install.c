/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include <stdio.h>
#include <stdlib.h>

extern void rffti( int n, double *wsave );

int main( void ) {
	double wsave[ 2*8 + 15 ]; // 2*n + 15
	int n = 8;
	int i;

	rffti( n, wsave );

	printf( "rffti( %d, wsave )\n", n );
	for ( i = n; i < 2*n; i++ ) {
		printf( "wsave[%2d] = %f\n", i, wsave[i] );
	}
	printf( "\n" );
}
