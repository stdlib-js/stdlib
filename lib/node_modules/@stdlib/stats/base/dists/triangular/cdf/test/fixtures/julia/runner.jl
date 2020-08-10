#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import Distributions: cdf, TriangularDist
import JSON

"""
	gen( x, a, b, c, name )

Generate fixture data and write to file.

# Arguments

* `x`: input value
* `a`: minimum support
* `b`: maximum support
* `c`: mode
* `name::AbstractString`: output filename

# Examples

``` julia
julia> a = rand( 1000 );
julia> b = rand( 1000 ) .+ a;
julia> c = a .+ ( b .- a ) .* rand();
julia> x = a .+ ( b .- a ) .* rand();
julia> gen( x, a, b, c, "data.json" );
```
"""
function gen( x, a, b, c, name )
	z = Array{Float64}( undef, length(x) );
	for i in eachindex(x)
		z[ i ] = cdf( TriangularDist( a[i], b[i], c[i] ), x[i] );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("a", a),
		("b", b),
		("c", c),
		("expected", z)
	]);

	# Based on the script directory, create an output filepath:
	filepath = joinpath( dir, name );

	# Write the data to the output filepath as JSON:
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Small Range:
a = rand( 1000 ) .* 20.0;
b = ( rand( 1000 ) .* 20.0 ) .+ a;
c = a .+ ( b .- a ) .* rand();
x = a .+ ( b .- a ) .* rand();
gen( x, a, b, c, "small_range.json" );

# Medium Range:
a = rand( 1000 ) .* 20.0;
b = ( rand( 1000 ) .* 40.0 ) .+ a;
c = a .+ ( b .- a ) .* rand();
x = a .+ ( b .- a ) .* rand();
gen( x, a, b, c, "medium_range.json" );

# Large Range:
a = rand( 1000 ) .* 20.0;
b = ( rand( 1000 ) .* 80.0 ) .+ a;
c = a .+ ( b .- a ) .* rand();
x = a .+ ( b .- a ) .* rand();
gen( x, a, b, c, "large_range.json" );
