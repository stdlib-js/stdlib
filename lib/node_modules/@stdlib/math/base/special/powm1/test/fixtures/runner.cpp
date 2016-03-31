// To run this script, `cd` to the `./test/fixtures` directory and then execute in the terminal `runWandbox --file --compiler gcc-head --output output.json ./runner.cpp`.

#include <iostream>
#include <vector>
#include <boost/math/special_functions/powm1.hpp>

using namespace std;

vector<double> linspace( double start, double end, int num ) {
	double delta = (end - start) / (num - 1);
	vector<double> arr( num - 1 );
	for ( int i = 0; i < num - 1; ++i ){
		arr[ i ] = start + delta * i;
	}
	arr.push_back( end );
	return arr;
}

void print_vector( vector<double> vec, bool last = false ) {
	cout << "[";
	for ( vector<double>::iterator it = vec.begin(); it != vec.end(); ++it ) {
		if ( vec.end() != it+1 ) {
			cout << setprecision (16) << *it;
			cout << ",";
		} else {
			cout << setprecision (16) << *it;
			cout << "]";
			if ( last == false ) {
				cout << ",";
			}
		}
	}
	return;
}

void print_results( vector<double> arg1, vector<double> arg2, vector<double> expected ) {
	cout << "{" << endl;
	cout << "  \"x\": ";
	print_vector( arg1 );
	cout << "  \"y\": ";
	print_vector( arg2 );
	cout << "  \"expected\": ";
	print_vector( expected, true );
	cout << "}" << endl;
	return;
}

int main() {
	vector<double> x = linspace( 1.0, 10.0, 100 );
	vector<double> y = linspace( 10.0, 1.0, 100 );
	vector<double> expected;

	for ( int i = 0; i < 100; i++ ) {
		double arg1 = x[ i ];
		double arg2 = y[ i ];
		expected.push_back( boost::math::powm1( arg1, arg2 ) );
	}

	print_results( x, y, expected );
	return 0;
}
