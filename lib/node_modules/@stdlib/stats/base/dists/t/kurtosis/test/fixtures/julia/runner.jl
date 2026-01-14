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

import Distributions: kurtosis, TDist
import JSON

"""
	gen( v, name )

Generate fixture data and write to file.

# Arguments

* `x`: input value
* `v`: degrees of freedom
* `name::AbstractString`: output filename

# Examples

``` julia
julia> v = rand( 1000 );
julia> gen( v, \"data.json\" );
```
"""
function gen( v, name )
	z = Array{Float64}( undef, length(v) );
	for i in eachindex(v)
		z[ i ] = kurtosis( TDist( v[ i ] ) );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("v", v),
		("expected", z)
	]);

	# Based on the script directory, create an output filepath:
	filepath = joinpath( dir, name );

	# Write the data to the output filepath as JSON:
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	write( outfile, "\n" );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Generate fixtures:
v = ( rand( 50 ) .* 20.0 ) .+ 4.0;
gen( v, "data.json" );

