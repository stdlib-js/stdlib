#/
# @license Apache-2.0
#
# Copyright (c) 2024 The Stdlib Authors.
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

# Define the path to an executable for checking git:
DEPS_CHECK_GIT ?= $(TOOLS_DIR)/scripts/check_git

# Define the download URL:
DEPS_WASI_LIBC_URL ?= https://github.com/WebAssembly/wasi-libc

# Determine the basename for the download:
deps_wasi_libc_basename := wasi_libc

# Define the path to the file containing a checksum to verify a download:
DEPS_WASI_LIBC_CHECKSUM ?= $(shell $(CAT) $(DEPS_CHECKSUMS_DIR)/$(subst .,_,$(deps_wasi_libc_basename))/sha256)

# Define the output path when downloading:
DEPS_WASI_LIBC_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/$(deps_wasi_libc_basename)

# Define the output path after extracting:
deps_wasi_libc_extract_out := $(DEPS_BUILD_DIR)/wasi_libc_extracted


# RULES #

#/
# Downloads WASI libc.
#
# @private
#/
$(DEPS_WASI_LIBC_DOWNLOAD_OUT): | $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading WASI libc...' >&2
	$(QUIET) $(GIT) clone --depth=1 $(DEPS_WASI_LIBC_URL) $(DEPS_WASI_LIBC_DOWNLOAD_OUT)

#/
# Extracts a WASI libc download.
#
# @private
#/
$(DEPS_WASI_LIBC_BUILD_OUT): | $(DEPS_BUILD_DIR) $(DEPS_WASI_LIBC_DOWNLOAD_OUT)
	$(QUIET) echo 'Extracting WASI libc...' >&2
	$(QUIET) $(CP) -a $(DEPS_WASI_LIBC_DOWNLOAD_OUT) $(deps_wasi_libc_extract_out)
	$(QUIET) mv $(deps_wasi_libc_extract_out) $(DEPS_WASI_LIBC_BUILD_OUT)

#/
# Compiles a WASI libc sysroot.
#
# @private
#/
$(DEPS_WASI_LIBC_SYSROOT): $(DEPS_LLVM_CLANG) $(DEPS_LLVM_AR) $(DEPS_LLVM_NM) $(DEPS_WASI_LIBC_BUILD_OUT)
	$(QUIET) cd $(DEPS_WASI_LIBC_BUILD_OUT) && \
		$(MAKE) CC="$(DEPS_LLVM_CLANG)" AR="$(DEPS_LLVM_AR)" NM="$(DEPS_LLVM_NM)"

#/
# Downloads WASI libc.
#
# @private
#
# @example
# make deps-download-wasi-libc
#/
deps-download-wasi-libc: $(DEPS_WASI_LIBC_DOWNLOAD_OUT)

.PHONY: deps-download-wasi-libc

#/
# Verifies a WASI libc download.
#
# @private
#
# @example
# make deps-verify-wasi-libc
#/
deps-verify-wasi-libc: deps-download-wasi-libc
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) echo 'Nothing to verify.' >&2

.PHONY: deps-verify-wasi-libc

#/
# Extracts a WASI libc download.
#
# @private
#
# @example
# make deps-extract-wasi-libc
#/
deps-extract-wasi-libc: $(DEPS_WASI_LIBC_BUILD_OUT)

.PHONY: deps-extract-wasi-libc

#/
# Checks a host system for WASI libc installation prerequisites.
#
# @private
#
# @example
# make deps-prerequisites-wasi-libc
#/
deps-prerequisites-wasi-libc:
	$(QUIET) $(DEPS_CHECK_GIT)

.PHONY: deps-prerequisites-wasi-libc

#/
# Installs WASI libc.
#
# @private
#
# @example
# make deps-install-wasi-libc
#/
deps-install-wasi-libc: deps-prerequisites-wasi-libc $(DEPS_WASI_LIBC_BUILD_OUT)  $(DEPS_WASI_LIBC_SYSROOT)

.PHONY: deps-install-wasi-libc

#/
# Updates WASI libc.
#
# @private
#
# @example
# make deps-update-wasi-libc
#/
deps-update-wasi-libc: deps-install-wasi-libc

.PHONY: deps-update-wasi-libc

#/
# Tests a WASI libc installation.
#
# @private
#
# @example
# make deps-test-wasi-libc
#/
deps-test-wasi-libc:
	$(QUIET) echo '' >&2
	$(QUIET) test -d $(DEPS_WASI_LIBC_SYSROOT) >&2
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-wasi-libc

#/
# Installs WASI libc.
#
# @example
# make install-deps-wasi-libc
#/
install-deps-wasi-libc: deps-download-wasi-libc deps-verify-wasi-libc deps-extract-wasi-libc deps-install-wasi-libc deps-test-wasi-libc

.PHONY: install-deps-wasi-libc

#/
# Removes a WASI libc install (but does not remove a download if one exists).
#
# @example
# make clean-deps-wasi-libc
#/
clean-deps-wasi-libc: clean-deps-wasi-libc-tests
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_WASI_LIBC_BUILD_OUT)

.PHONY: clean-deps-wasi-libc

#/
# Removes WASI libc installation tests.
#
# @example
# make clean-deps-wasi-libc-tests
#/
clean-deps-wasi-libc-tests:
	$(QUIET) echo '' >&2

.PHONY: clean-deps-wasi-libc-tests
