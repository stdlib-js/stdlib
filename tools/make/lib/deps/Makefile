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

# Define the path to an executable for displaying dependency info:
DEPS_INFO ?= $(TOOLS_DIR)/scripts/deps_info


# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/deps/check.mk
include $(TOOLS_MAKE_LIB_DIR)/deps/deps.mk
include $(TOOLS_MAKE_LIB_DIR)/deps/lang.mk


# TARGETS #

# Print dependency info.
#
# This targets prints information regarding installed and/or missing dependencies.

deps-info:
	$(QUIET) $(DEPS_INFO)

.PHONY: deps-info
