#/
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
#/

# VARIABLES #

# Define the download URL...
ifeq ($(OS), WINNT)
	DEPS_SHELLCHECK_URL ?= https://github.com/koalaman/shellcheck/releases/download/v$(DEPS_SHELLCHECK_VERSION)/shellcheck-v$(DEPS_SHELLCHECK_VERSION).zip
else
ifeq ($(DEPS_SHELLCHECK_PLATFORM), darwin)
	# TODO: handle arm64; currently, binaries for M1/M2 are not provided. See https://github.com/koalaman/shellcheck/issues/2714
	DEPS_SHELLCHECK_URL ?= https://github.com/koalaman/shellcheck/releases/download/v$(DEPS_SHELLCHECK_VERSION)/shellcheck-v$(DEPS_SHELLCHECK_VERSION).darwin.x86_64.tar.xz
else
	DEPS_SHELLCHECK_URL ?= https://github.com/koalaman/shellcheck/releases/download/v$(DEPS_SHELLCHECK_VERSION)/shellcheck-v$(DEPS_SHELLCHECK_VERSION).linux.x86_64.tar.xz
endif
endif

# Determine the basename for the download:
deps_shellcheck_basename := $(notdir $(DEPS_SHELLCHECK_URL))

# Define the path to the file containing a checksum to verify a download:
DEPS_SHELLCHECK_CHECKSUM ?= $(shell $(CAT) $(DEPS_CHECKSUMS_DIR)/$(subst .,_,$(subst -,_,$(deps_shellcheck_basename)))/sha256)

# Define the output path when downloading:
DEPS_SHELLCHECK_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/$(deps_shellcheck_basename)

# Define the output path after extracting:
deps_shellcheck_extract_out := $(DEPS_BUILD_DIR)/shellcheck-v$(DEPS_SHELLCHECK_VERSION)

# Define the path to the `shellcheck` executable...
ifeq ($(DEPS_SHELLCHECK_PLATFORM), win32)
	SHELLCHECK ?= $(DEPS_SHELLCHECK_BUILD_OUT)/shellcheck.exe
else
ifeq ($(DEPS_SHELLCHECK_PLATFORM), darwin)
ifeq ($(DEPS_SHELLCHECK_ARCH), arm64)
	# FIXME: this is a temporary workaround until M1/M2 shellcheck binaries can be installed locally
	SHELLCHECK ?= shellcheck
else
	SHELLCHECK ?= $(DEPS_SHELLCHECK_BUILD_OUT)/shellcheck
endif
else
	SHELLCHECK ?= $(DEPS_SHELLCHECK_BUILD_OUT)/shellcheck
endif
endif

# Define rule prerequisites based on the host platform...
deps_shellcheck_test_prereqs := $(DEPS_SHELLCHECK_BUILD_OUT)
deps_shellcheck_install_prereqs := deps-download-shellcheck deps-verify-shellcheck deps-extract-shellcheck deps-test-shellcheck


# RULES #

#/
# Downloads a ShellCheck distribution.
#
# @private
#/
$(DEPS_SHELLCHECK_DOWNLOAD_OUT): | $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading shellcheck...' >&2
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_SHELLCHECK_URL) $(DEPS_SHELLCHECK_DOWNLOAD_OUT)

#/
# Extracts a ShellCheck archive.
#
# @private
#/
$(DEPS_SHELLCHECK_BUILD_OUT): $(DEPS_SHELLCHECK_DOWNLOAD_OUT) | $(DEPS_BUILD_DIR)
ifeq ($(OS), WINNT)
	$(QUIET) echo 'Extracting shellcheck...' >&2
	$(QUIET) $(UNZIP) -q $(DEPS_SHELLCHECK_DOWNLOAD_OUT) -d $@
else
	$(QUIET) echo 'Extracting shellcheck...' >&2
	$(QUIET) $(TAR) -xvf $(DEPS_SHELLCHECK_DOWNLOAD_OUT) -C $(DEPS_BUILD_DIR)
	$(QUIET) mv $(deps_shellcheck_extract_out) $(DEPS_SHELLCHECK_BUILD_OUT)
endif

#/
# Downloads ShellCheck.
#
# @private
#
# @example
# make deps-download-shellcheck
#/
deps-download-shellcheck: $(DEPS_SHELLCHECK_DOWNLOAD_OUT)

.PHONY: deps-download-shellcheck

#/
# Verifies a ShellCheck download.
#
# @private
#
# @example
# make deps-verify-shellcheck
#/
deps-verify-shellcheck: deps-download-shellcheck
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) $(DEPS_CHECKSUM_BIN) $(DEPS_SHELLCHECK_DOWNLOAD_OUT) $(DEPS_SHELLCHECK_CHECKSUM) >&2

.PHONY: deps-verify-shellcheck

#/
# Extracts a ShellCheck download.
#
# @private
#
# @example
# make deps-extract-shellcheck
#/
deps-extract-shellcheck: $(DEPS_SHELLCHECK_BUILD_OUT)

.PHONY: deps-extract-shellcheck

#/
# Tests a ShellCheck installation.
#
# @private
#
# @example
# make deps-test-shellcheck
#/
deps-test-shellcheck: $(deps_shellcheck_test_prereqs)
	$(QUIET) echo 'Running tests...' >&2
	$(QUIET) $(SHELLCHECK) --version >&2
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-shellcheck

#/
# Installs ShellCheck (globally) on MacOS.
#
# ## Notes
#
# -   We **assume** that [Homebrew][1] is installed.
#
# [1]: https://brew.sh/
#
# @private
#
# @example
# make deps-install-shellcheck-darwin
#/
deps-install-shellcheck-darwin:
	$(QUIET) echo 'Installing shellcheck...' >&2
	$(QUIET) brew update
	$(QUIET) brew install shellcheck

.PHONY: deps-install-shellcheck-darwin

#/
# Installs ShellCheck.
#
# @example
# make install-deps-shellcheck
#/
install-deps-shellcheck: $(deps_shellcheck_install_prereqs)

.PHONY: install-deps-shellcheck

#/
# Removes a ShellCheck distribution (but does not remove a ShellCheck download if one exists).
#
# @example
# make clean-deps-shellcheck
#/
clean-deps-shellcheck:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_SHELLCHECK_BUILD_OUT)

.PHONY: clean-deps-shellcheck

#/
# Removes ShellCheck installation test artifacts.
#
# @example
# make clean-deps-shellcheck-tests
#/
clean-deps-shellcheck-tests:

.PHONY: clean-deps-shellcheck-tests
