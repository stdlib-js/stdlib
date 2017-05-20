#!/usr/bin/env julia
#
# Lints a list of Julia files.
#
# The script is called with one or more arguments, where each argument is a
# filepath. Note that each provided filepath is resolved relative to the current
# working directory of the calling process.
#

import Base.Test
import Lint

# Lint each file separately...
@Base.Test.testset "Lint tests" begin
	for i in 1:length( ARGS )
		@Base.Test.test isempty( Lint.lintfile( ARGS[ i ] ) );
	end
end

quit();
