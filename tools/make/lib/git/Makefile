#/
# @license Apache-2.0
#
# Copyright (c) 2023 The Stdlib Authors.
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
include $(TOOLS_MAKE_LIB_DIR)/git/commitizen.mk


# RULES #

#/
# Provides an interactive prompt for entering commit message information in accordance with project Git commit conventions.
#
# @example
# make commit
#/
commit: $(NODE_MODULES)
ifeq ($(GIT_COMMIT_PROMPT), commitizen)
	$(QUIET) $(MAKE) -f $(this_file) commitizen-commit
endif

.PHONY: commit

#/
# Retries a previous commit entered using `make commit`.
#
# @example
# make retry-commit
#/
retry-commit: $(NODE_MODULES)
ifeq ($(GIT_COMMIT_PROMPT), commitizen)
	$(QUIET) $(MAKE) -f $(this_file) commitizen-retry-commit
endif

.PHONY: retry-commit
