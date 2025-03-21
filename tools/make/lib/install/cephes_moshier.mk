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

# Define the base download URL:
DEPS_CEPHES_URL ?= http://www.moshier.net/

# Determine the basename for the download:
deps_cephes_basename := moshier_cephes

# Define the checksum(s) to verify downloaded libraries:
DEPS_CEPHES_CHECKSUM ?= $(foreach file,$(filter-out 128bit,$(DEPS_CEPHES_LIBS)),$(shell $(CAT) $(DEPS_CHECKSUMS_DIR)/$(subst .,_,$(deps_cephes_basename)_$(file).zip)/sha256)) $(foreach file,$(filter 128bit,$(DEPS_CEPHES_LIBS)),$(shell $(CAT) $(DEPS_CHECKSUMS_DIR)/$(subst .,_,$(deps_cephes_basename)_$(file).tgz)/sha256))

# Define the output directory when downloading:
DEPS_CEPHES_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/$(deps_cephes_basename)

# Define the output path(s) when downloading:
deps_cephes_download_out := $(addsuffix .zip,$(addprefix $(DEPS_CEPHES_DOWNLOAD_OUT)/,$(filter-out 128bit,$(DEPS_CEPHES_LIBS)))) $(addsuffix .tgz,$(addprefix $(DEPS_CEPHES_DOWNLOAD_OUT)/,$(filter 128bit,$(DEPS_CEPHES_LIBS))))

# Generate an interleaved list of output download paths and checksums:
deps_cephes_checksum := $(join $(deps_cephes_download_out),$(addprefix |,$(DEPS_CEPHES_CHECKSUM)))
deps_cephes_checksum := $(foreach pair,$(deps_cephes_checksum),$(subst |, ,$(pair)))

# Define the output path(s) when building:
deps_cephes_build_out := $(addprefix $(DEPS_CEPHES_BUILD_OUT)/cephes/,$(DEPS_CEPHES_LIBS))

# Define the path to the directory containing tests:
DEPS_CEPHES_TEST_DIR ?= $(DEPS_DIR)/test/moshier_cephes

# Define the output directory path for compiled tests:
DEPS_CEPHES_TEST_OUT ?= $(DEPS_CEPHES_TEST_DIR)/build

# Define the path to a test file for checking an installation:
DEPS_CEPHES_TEST_INSTALL ?= $(DEPS_CEPHES_TEST_DIR)/test_install.c

# Define the output path for a test file:
DEPS_CEPHES_TEST_INSTALL_OUT ?= $(DEPS_CEPHES_TEST_OUT)/test_install

# Define a list of source files:
deps_cephes_src := \
	double/acosh.c \
	double/airy.c \
	double/asin.c \
	double/asinh.c \
	double/atan.c \
	double/atanh.c \
	double/bdtr.c \
	double/beta.c \
	double/btdtr.c \
	double/cbrt.c \
	double/chbevl.c \
	double/chdtr.c \
	double/const.c \
	double/cosh.c \
	double/dawsn.c \
	double/drand.c \
	double/ei.c \
	double/ellie.c \
	double/ellik.c \
	double/ellpe.c \
	double/ellpj.c \
	double/ellpk.c \
	double/exp.c \
	double/exp10.c \
	double/exp2.c \
	double/expn.c \
	double/expx2.c \
	double/fabs.c \
	double/fac.c \
	double/fdtr.c \
	double/floor.c \
	double/fresnl.c \
	double/gamma.c \
	double/gdtr.c \
	double/hyp2f1.c \
	double/hyperg.c \
	double/i0.c \
	double/i1.c \
	double/igam.c \
	double/igami.c \
	double/incbet.c \
	double/incbi.c \
	double/isnan.c \
	double/iv.c \
	double/j0.c \
	double/j1.c \
	double/jn.c \
	double/jv.c \
	double/k0.c \
	double/k1.c \
	double/kn.c \
	double/kolmogorov.c \
	double/log.c \
	double/log10.c \
	double/log2.c \
	double/lrand.c \
	double/lsqrt.c \
	double/mtherr.c \
	double/nbdtr.c \
	double/ndtr.c \
	double/ndtri.c \
	double/pdtr.c \
	double/polevl.c \
	double/polylog.c \
	double/pow.c \
	double/powi.c \
	double/psi.c \
	double/rgamma.c \
	double/round.c \
	double/setprec.c \
	double/shichi.c \
	double/sici.c \
	double/sin.c \
	double/sincos.c \
	double/sindg.c \
	double/sinh.c \
	double/spence.c \
	double/sqrt.c \
	double/stdtr.c \
	double/struve.c \
	double/tan.c \
	double/tandg.c \
	double/tanh.c \
	double/unity.c \
	double/yn.c \
	double/zeta.c \
	double/zetac.c

# Resolve a list of source files to absolute filepaths:
DEPS_CEPHES_SRC ?= $(addprefix $(DEPS_CEPHES_BUILD_OUT)/cephes/,$(deps_cephes_src))


# TARGETS #

# Create a download directory.
#
# This target creates a download directory for Cephes libraries.

$(DEPS_CEPHES_DOWNLOAD_OUT):
	$(QUIET) echo 'Creating download directory...' >&2
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_CEPHES_DOWNLOAD_OUT)


# Download library.
#
# This target downloads the Cephes library for 128-bit reals.

$(DEPS_CEPHES_DOWNLOAD_OUT)/128bit.tgz: | $(DEPS_TMP_DIR) $(DEPS_CEPHES_DOWNLOAD_OUT)
	$(QUIET) echo 'Downloading library...' >&2
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_CEPHES_URL)`basename $@` $@


# Download library.
#
# This target downloads the Cephes library for double-precision arithmetic.

$(DEPS_CEPHES_DOWNLOAD_OUT)/double.zip: | $(DEPS_TMP_DIR) $(DEPS_CEPHES_DOWNLOAD_OUT)
	$(QUIET) echo 'Downloading library...' >&2
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_CEPHES_URL)`basename $@` $@


# Download library.
#
# This target downloads the Cephes library for 80-bit long double-precision arithmetic.

$(DEPS_CEPHES_DOWNLOAD_OUT)/ldouble.zip: | $(DEPS_TMP_DIR) $(DEPS_CEPHES_DOWNLOAD_OUT)
	$(QUIET) echo 'Downloading library...' >&2
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_CEPHES_URL)`basename $@` $@


# Download library.
#
# This target downloads the Cephes library for extended-precision software floating-point arithmetic.

$(DEPS_CEPHES_DOWNLOAD_OUT)/qlib.zip: | $(DEPS_TMP_DIR) $(DEPS_CEPHES_DOWNLOAD_OUT)
	$(QUIET) echo 'Downloading library...' >&2
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_CEPHES_URL)`basename $@` $@


# Download library.
#
# This target downloads the Cephes library for single-precision (float) arithmetic.

$(DEPS_CEPHES_DOWNLOAD_OUT)/single.zip: | $(DEPS_TMP_DIR) $(DEPS_CEPHES_DOWNLOAD_OUT)
	$(QUIET) echo 'Downloading library...' >&2
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_CEPHES_URL)`basename $@` $@


# Extract library.
#
# This target extracts a gzipped tar archive of the Cephes library for 128-bit reals.

$(DEPS_CEPHES_BUILD_OUT)/cephes/128bit: $(DEPS_CEPHES_DOWNLOAD_OUT)/128bit.tgz
	$(QUIET) echo 'Extracting library...' >&2
	$(QUIET) $(MKDIR_RECURSIVE) $@
	$(QUIET) $(TAR) -zxf $< -C $@


# Extract library.
#
# This target extracts a ZIP archive of the Cephes library for double-precision arithmetic.

$(DEPS_CEPHES_BUILD_OUT)/cephes/double: $(DEPS_CEPHES_DOWNLOAD_OUT)/double.zip
	$(QUIET) echo 'Extracting library...' >&2
	$(QUIET) $(MKDIR_RECURSIVE) $@
	$(QUIET) $(UNZIP) -q $< -d $@
	$(QUIET) mv $@/double/* $@/
	$(QUIET) rmdir $@/double/


# Extract library.
#
# This target extracts a ZIP archive of the Cephes library for 80-bit long double-precision arithmetic.

$(DEPS_CEPHES_BUILD_OUT)/cephes/ldouble: $(DEPS_CEPHES_DOWNLOAD_OUT)/ldouble.zip
	$(QUIET) echo 'Extracting library...' >&2
	$(QUIET) $(MKDIR_RECURSIVE) $@
	$(QUIET) $(UNZIP) -q $< -d $@


# Extract library.
#
# This target extracts a ZIP archive of the Cephes library for extended-precision software floating-point arithmetic.

$(DEPS_CEPHES_BUILD_OUT)/cephes/qlib: $(DEPS_CEPHES_DOWNLOAD_OUT)/qlib.zip
	$(QUIET) echo 'Extracting library...' >&2
	$(QUIET) $(MKDIR_RECURSIVE) $@
	$(QUIET) $(UNZIP) -q $< -d $@


# Extract library.
#
# This target extracts a ZIP archive of the Cephes library for single-precision (float) arithmetic.

$(DEPS_CEPHES_BUILD_OUT)/cephes/single: $(DEPS_CEPHES_DOWNLOAD_OUT)/single.zip
	$(QUIET) echo 'Extracting library...' >&2
	$(QUIET) $(MKDIR_RECURSIVE) $@
	$(QUIET) $(UNZIP) -q $< -d $@


# Create directory for tests.
#
# This target creates a directory for storing compiled tests.

$(DEPS_CEPHES_TEST_OUT):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_CEPHES_TEST_OUT)


# Compile install test.
#
# This target compiles a test file for testing an installation.

$(DEPS_CEPHES_TEST_INSTALL_OUT): $(deps_cephes_build_out) $(DEPS_CEPHES_TEST_OUT)
	$(QUIET) $(CC) -I $(DEPS_CEPHES_BUILD_OUT) \
		$(DEPS_CEPHES_TEST_INSTALL) \
		$(DEPS_CEPHES_SRC) \
		-o $(DEPS_CEPHES_TEST_INSTALL_OUT)


# Download Cephes.
#
# This target downloads a Cephes distribution.

deps-download-cephes: $(deps_cephes_download_out)

.PHONY: deps-download-cephes


# Verify download.
#
# This targets verifies a download.

deps-verify-cephes: deps-download-cephes
	$(QUIET) $(DEPS_CHECKSUM_BIN) $(deps_cephes_checksum) >&2

.PHONY: deps-verify-cephes


# Extract Cephes.
#
# This target extracts downloaded Cephes libraries.

deps-extract-cephes: $(deps_cephes_build_out)

.PHONY: deps-extract-cephes


# Test install.
#
# This target tests an installation.

deps-test-cephes: $(DEPS_CEPHES_TEST_INSTALL_OUT)
	$(QUIET) echo 'Running tests...' >&2
	$(QUIET) $(DEPS_CEPHES_TEST_INSTALL_OUT)
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-cephes
