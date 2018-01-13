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

#include <cblas.h>
#include <stdio.h>

int main() {
	double A[ 6 ] = { 1.0, 2.0, 1.0, -3.0, 4.0, -1.0 };
	double B[ 6 ] = { 1.0, 2.0, 1.0, -3.0, 4.0, -1.0 };
	double C[ 9 ] = { 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 };
	int i = 0;

	cblas_dgemm( CblasColMajor, CblasNoTrans, CblasTrans, 3, 3, 2, 1, A, 3, B, 3, 2, C, 3 );

	for( i = 0; i < 9; i++ ) {
		printf( "%lf ", C[ i ] );
	}
	printf( "\n" );
}
