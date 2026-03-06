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

# DEPENDENCIES #

# Note: keep in alphabetical order...
include $(TOOLS_MAKE_LIB_DIR)/init/eslint.mk
include $(TOOLS_MAKE_LIB_DIR)/init/git_hooks.mk


# RULES #

#/
# Performs initialization tasks, such as installing Git hooks, installing custom lint plugins, etc.
#
# ## Notes
#
# -  This rule should **always** be invoked in order to initialize the project development environment. If not, various development aids will **not** be initialized, thus hindering project development.
#
# @example
# make init
#/
init: init-git-hooks init-eslint-plugins
	$(QUIET) echo "Initialization successful."

.PHONY: init
