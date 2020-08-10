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

import Distributions: pdf, Chi
import JSON

"""
	gen( x, k, name )

Generate fixture data and write to file.

# Arguments

* `x`: input value
* `k`: degrees of freedom
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = rand( 1000 ) .* 20.0;
julia> k = rand( 1000 ) .* 20.0;
julia> gen( x, k, \"data.json\" );
```
"""
function gen( x, k, name )
	z = Array{Float64}( undef, length(x) );
	for i in eachindex(x)
		z[ i ] = pdf( Chi( k[i] ), x[i] );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("k", k),
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

# Generate fixture data:
x = rand( 5000 ) .* 20.0;
k = rand( 5000 ) .* 20.0;
gen( x, k, "decimal_decimal.json" );
