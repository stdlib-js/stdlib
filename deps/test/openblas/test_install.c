#include <cblas.h>
#include <stdio.h>

void main()
{
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
