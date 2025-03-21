#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
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

# Lints a list of Julia files.
#
# The script is called with one or more arguments, where each argument is a
# filepath. Note that each provided filepath is resolved relative to the current
# working directory of the calling process.

import Test
import Lint

# Lint each file separately...
Test.@testset "Lint tests" begin
	for i in 1:length( ARGS )
		Test.@test isempty( Lint.lintfile( ARGS[ i ] ) );
	end
end

quit();
