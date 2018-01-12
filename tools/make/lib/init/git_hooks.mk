#/
# @license Apache-2.0
#
# Copyright 2017 The Stdlib Authors
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

# Define the directory from which to copy git hooks:
GIT_HOOKS_DIR ?= $(TOOLS_DIR)/git/hooks

# Define a list of hooks:
GIT_HOOKS ?= $(shell find $(GIT_HOOKS_DIR) -type f | xargs -n 1 basename)

# Define the destination directory for git hooks:
GIT_HOOKS_OUT ?= $(ROOT_DIR)/.git/hooks


# RULES #

# Install git hooks.
#
# This target installs [git hooks][1].
#
# [1]: https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks

init-git-hooks:
	$(QUIET) for file in $(GIT_HOOKS); do \
		$(CP) $(GIT_HOOKS_DIR)/$$file $(GIT_HOOKS_OUT)/$$file; \
		$(MAKE_EXECUTABLE) $(GIT_HOOKS_OUT)/$$file; \
	done

.PHONY: init-git-hooks

