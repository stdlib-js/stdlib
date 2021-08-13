#/
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
#/

# VARIABLES #

# Define the path to the script for printing a statistical summary of the REPL namespace:
REPL_STATS ?= $(TOOLS_PKGS_DIR)/scripts/repl_lang_stats


# RULES #

#/
# Prints a statistical summary of the REPL namespace.
#
# @example
# make stats-repl
#/
stats-repl: $(REPL_STATS)
	$(QUIET) $(MAKE_EXECUTABLE) $(REPL_STATS)
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(REPL_STATS)

.PHONY: stats-repl
