#/
# @license Apache-2.0
#
# Copyright (c) 2021 The Stdlib Authors.
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

# Define the download URL...
ifeq ($(OS), WINNT)
	DEPS_CPPCHECK_URL ?= https://github.com/danmar/cppcheck/archive/$(DEPS_CPPCHECK_VERSION).zip
else
	DEPS_CPPCHECK_URL ?= https://github.com/danmar/cppcheck/archive/$(DEPS_CPPCHECK_VERSION).tar.gz
endif

# Determine the basename for the download:
deps_cppcheck_basename := $(notdir $(DEPS_CPPCHECK_URL))

# Define the path to the file containing a checksum to verify a download:
DEPS_CPPCHECK_CHECKSUM ?= $(shell $(CAT) $(DEPS_CHECKSUMS_DIR)/cppcheck_v$(subst .,_,$(subst -,_,$(deps_cppcheck_basename)))/sha256)

# Define the output path when downloading:
DEPS_CPPCHECK_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/cppcheck-v$(deps_cppcheck_basename)

# Define the output path after extracting:
deps_cppcheck_extract_out := $(DEPS_BUILD_DIR)/cppcheck-$(DEPS_CPPCHECK_VERSION)

# Define the path to the `cppcheck` executable...
ifeq ($(DEPS_CPPCHECK_PLATFORM), win32)
	CPPCHECK ?= $(DEPS_CPPCHECK_BUILD_OUT)/cppcheck.exe
else
	CPPCHECK ?= $(DEPS_CPPCHECK_BUILD_OUT)/cppcheck
endif

# Define rule prerequisites...
deps_cppcheck_test_prereqs := $(DEPS_CPPCHECK_BUILD_OUT)
deps_cppcheck_install_prereqs := deps-download-cppcheck deps-verify-cppcheck deps-extract-cppcheck deps-install-cppcheck deps-test-cppcheck


# RULES #

#/
# Downloads a `cppcheck` distribution.
#
# @private
#/
$(DEPS_CPPCHECK_DOWNLOAD_OUT): | $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading cppcheck...' >&2
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_CPPCHECK_URL) $(DEPS_CPPCHECK_DOWNLOAD_OUT)

#/
# Extracts a `cppcheck` archive.
#
# @private
#/
$(DEPS_CPPCHECK_BUILD_OUT): $(DEPS_CPPCHECK_DOWNLOAD_OUT) | $(DEPS_BUILD_DIR)
ifeq ($(OS), WINNT)
	$(QUIET) echo 'Extracting cppcheck...' >&2
	$(QUIET) $(UNZIP) -q $(DEPS_CPPCHECK_DOWNLOAD_OUT) -d $@
else
	$(QUIET) echo 'Extracting cppcheck...' >&2
	$(QUIET) $(TAR) -xvf $(DEPS_CPPCHECK_DOWNLOAD_OUT) -C $(DEPS_BUILD_DIR)
	$(QUIET) mv $(deps_cppcheck_extract_out) $(DEPS_CPPCHECK_BUILD_OUT)
endif

#/
# Downloads cppcheck.
#
# @private
#
# @example
# make deps-download-cppcheck
#/
deps-download-cppcheck: $(DEPS_CPPCHECK_DOWNLOAD_OUT)

.PHONY: deps-download-cppcheck

#/
# Verifies a `cppcheck` download.
#
# @private
#
# @example
# make deps-verify-cppcheck
#/
deps-verify-cppcheck: deps-download-cppcheck
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) $(DEPS_CHECKSUM_BIN) $(DEPS_CPPCHECK_DOWNLOAD_OUT) $(DEPS_CPPCHECK_CHECKSUM) >&2

.PHONY: deps-verify-cppcheck

#/
# Extracts a `cppcheck` download.
#
# @private
#
# @example
# make deps-extract-cppcheck
#/
deps-extract-cppcheck: $(DEPS_CPPCHECK_BUILD_OUT)

.PHONY: deps-extract-cppcheck

#/
# Installs `cppcheck`.
#
# @private
#
# @example
# make deps-install-cppcheck
#/
deps-install-cppcheck: $(DEPS_CPPCHECK_BUILD_OUT)
	$(QUIET) $(MAKE) --directory="$(DEPS_CPPCHECK_BUILD_OUT)"

.PHONY: deps-install-cppcheck

#/
# Tests a `cppcheck` installation.
#
# @private
#
# @example
# make deps-test-cppcheck
#/
deps-test-cppcheck: $(deps_cppcheck_test_prereqs)
	$(QUIET) echo 'Running tests...' >&2
	$(QUIET) $(CPPCHECK) --version >&2
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-cppcheck

#/
# Installs `cppcheck`.
#
# @example
# make install-deps-cppcheck
#/
install-deps-cppcheck: $(deps_cppcheck_install_prereqs)

.PHONY: install-deps-cppcheck

#/
# Removes a `cppcheck` distribution (but does not remove a `cppcheck` download if one exists).
#
# @example
# make clean-deps-cppcheck
#/
clean-deps-cppcheck:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_CPPCHECK_BUILD_OUT)

.PHONY: clean-deps-cppcheck

#/
# Removes `cppcheck` installation test artifacts.
#
# @example
# make clean-deps-cppcheck-tests
#/
clean-deps-cppcheck-tests:

.PHONY: clean-deps-cppcheck-tests
