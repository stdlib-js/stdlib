
# VARIABLES #

# Determine the OS:
OS := $(shell uname)
ifneq (, $(findstring MINGW,$(OS)))
	OS := WINNT
else
ifneq (, $(findstring MSYS,$(OS)))
	OS := WINNT
endif
endif

# Define the command for recursively creating directories (WARNING: portability issues on some systems!):
MKDIR_RECURSIVE ?= mkdir -p

# Define the command for removing files and directories:
DELETE ?= -rm
DELETE_FLAGS ?= -rf

# Define the command for extracting tarfiles:
TAR ?= tar
TAR_FLAGS ?= -zxf

# Define the path to an executable for downloading a remote resource:
DEPS_DOWNLOAD_BIN ?= $(TOOLS_DIR)/scripts/download

# Define the path to an executable for verifying a download:
DEPS_CHECKSUM_BIN ?= $(TOOLS_DIR)/scripts/checksum

# Define the version to download:
DEPS_OPENBLAS_VERSION ?= 0.2.19

# Generate a version slug:
deps_openblas_version_slug := $(subst .,_,$(DEPS_OPENBLAS_VERSION))

# Define the download URL:
DEPS_OPENBLAS_URL ?= https://github.com/xianyi/OpenBLAS/archive/v$(DEPS_OPENBLAS_VERSION).tar.gz

# Determine the basename for the download:
deps_openblas_basename := openblas_$(notdir $(DEPS_OPENBLAS_URL))

# Define the path to the file containing a checksum verify a download:
DEPS_OPENBLAS_CHECKSUM ?= $(shell cat $(DEPS_CHECKSUMS_DIR)/openblas_$(deps_openblas_version_slug)_tar_gz/sha256)

# Define the output path when downloading:
DEPS_OPENBLAS_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/$(deps_openblas_basename)

# Define the output path after extracting:
deps_openblas_extract_out := $(DEPS_BUILD_DIR)/OpenBlas-$(DEPS_OPENBLAS_VERSION)

# Define the output path when building:
DEPS_OPENBLAS_BUILD_OUT ?= $(DEPS_BUILD_DIR)/openblas_$(deps_openblas_version_slug)

# Define the path to the directory containing tests:
DEPS_OPENBLAS_TEST_DIR ?= $(DEPS_DIR)/test/openblas

# Define the output directory path for a compiled tests:
DEPS_OPENBLAS_TEST_OUT ?= $(DEPS_OPENBLAS_TEST_DIR)/build

# Define the path to a test file for checking an installation:
DEPS_OPENBLAS_TEST_INSTALL ?= $(DEPS_OPENBLAS_TEST_DIR)/test_install.c

# Define the output path for a test file:
DEPS_OPENBLAS_TEST_INSTALL_OUT ?= $(DEPS_OPENBLAS_TEST_OUT)/test_install

# Target architecture (cross-compiling):
DEPS_OPENBLAS_TARGET_ARCH ?=

# Target binary (32-bit or 64-bit):
DEPS_OPENBLAS_BINARY ?= 64

# Host C compiler (cross-compiling):
DEPS_OPENBLAS_HOSTCC ?=

# Fortran compiler flags:
DEPS_OPENBLAS_FFLAGS ?=

# Unless for distribution (i.e., a need exists for supporting multiple architectures in a single binary), disable building for all architectures:
DEPS_OPENBLAS_DYNAMIC_ARCH ?= 0

# Define whether to compile a debug build:
DEPS_OPENBLAS_DEBUG ?= 0

# Specify whether to build a 64-bit (8 byte integers) BLAS interface (not all Fortran compilers support this; safe to disable):
DEPS_OPENBLAS_USE_BLAS64 ?= 0

# When building a 64-bit BLAS interface, add a prefix and/or suffix to all exported symbol names in the shared library. Doing so helps avoid conflicts with other BLAS libraries, especially when using 64-bit integer interfaces in OpenBLAS. Note that the same prefix and suffix are added to the library name: `lib$(SYMBOLPREFIX)openblas$(SYMBOLSUFFIX)` rather than `libopenblas`.
DEPS_OPENBLAS_SYMBOLSUFFIX ?=
DEPS_OPENBLAS_SYMBOLPREFIX ?=

# Define whether to use threading (determined automatically if not specified):
DEPS_OPENBLAS_USE_THREAD ?=

# Specify whether to use the AVX kernel on Sandy Bridge.
DEPS_OPENBLAS_NO_AVX ?= 1

# Specify whether to use Haswell optimizations if binutils is too old (e.g. RHEL6):
DEPS_OPENBLAS_NO_AVX2 ?= 1

# Specify whether to compile CBLAS:
DEPS_OPENBLAS_NO_CBLAS ?= 0

# Specify whether to only compile CBLAS:
DEPS_OPENBLAS_ONLY_CBLAS ?= 0

# Specify whether to compile LAPACK (also disables compiling the C interface to LAPACK):
DEPS_OPENBLAS_NO_LAPACK ?= 0

# Specify whether to compile the C interface to LAPACK:
DEPS_OPENBLAS_NO_LAPACKE ?= 0

# Define build options (originally based on Julia; see https://github.com/JuliaLang/julia/blob/master/deps/blas.mk):
DEPS_OPENBLAS_BUILD_OPTS := CC="$(CC)" FC="$(FC)" RANLIB="$(RANLIB)" FFLAGS="$(DEPS_OPENBLAS_FFLAGS)" TARGET="$(DEPS_OPENBLAS_TARGET_ARCH)" BINARY="$(DEPS_OPENBLAS_BINARY)"

# Define threading options:
ifeq ($(DEPS_OPENBLAS_USE_THREAD), 1)
	DEPS_OPENBLAS_BUILD_OPTS += USE_THREAD=1

	# If any `gemm` argument `m`, `n` or `k` is less or equal a provided threshold, `gemm` will be execute using a single thread. This flag is used to avoid the overhead of multi-threading in small matrix sizes. The default value is 4.
	DEPS_OPENBLAS_BUILD_OPTS += GEMM_MULTITHREADING_THRESHOLD=50

# Determine the maximum number of threads (which should be less than the number of cores) for parallelism:
ifneq ($(ARCH), x86_64)
	# 1) We assume that limited memory will restrict the number of threads we can spawn.
	# 2) 32-bit architectures are likely to have fewer cores.
	DEPS_OPENBLAS_BUILD_OPTS += NUM_THREADS=8
else
ifeq ($(OS), WINNT)
	# Windows does not seem capable of handling many threads:
	DEPS_OPENBLAS_BUILD_OPTS += NUM_THREADS=16
else
ifeq ($(OS), Darwin)
	# 16 threads should suffice for the largest Macs:
	DEPS_OPENBLAS_BUILD_OPTS += NUM_THREADS=16
else
	# For Linux, we try to account for (currently) the largest possible machine:
	DEPS_OPENBLAS_BUILD_OPTS += NUM_THREADS=16
endif # OS==Darwin
endif # OS==WINNT
endif # ARCH!=x86_64
else
	DEPS_OPENBLAS_BUILD_OPTS += USE_THREAD=0
endif

# Disable CPU/memory (scheduler) affinity on Linux:
DEPS_OPENBLAS_BUILD_OPTS += NO_AFFINITY=1

# Determine whether to build for multiple architectures in a single binary:
ifeq ($(DEPS_OPENBLAS_DYNAMIC_ARCH), 1)
	DEPS_OPENBLAS_BUILD_OPTS += DYNAMIC_ARCH=1
else
	DEPS_OPENBLAS_BUILD_OPTS += DYNAMIC_ARCH=0
endif

# Determine whether to compile a debug build:
ifeq ($(DEPS_OPENBLAS_DEBUG), 1)
	DEPS_OPENBLAS_BUILD_OPTS += DEBUG=1
endif

# Allow disabling AVX for older `binutils`:
ifeq ($(DEPS_OPENBLAS_NO_AVX), 1)
	DEPS_OPENBLAS_BUILD_OPTS += NO_AVX=1 NO_AVX2=1
else
ifeq ($(DEPS_OPENBLAS_NO_AVX2), 1)
	DEPS_OPENBLAS_BUILD_OPTS += NO_AVX2=1
endif
endif

# Determine whether to compile the CBLAS interface:
ifeq ($(DEPS_OPENBLAS_NO_CBLAS), 1)
	DEPS_OPENBLAS_BUILD_OPTS += NO_CBLAS=1
endif

# Determine whether to only compile the CBLAS interface:
ifeq ($(DEPS_OPENBLAS_ONLY_CBLAS), 1)
	DEPS_OPENBLAS_BUILD_OPTS += ONLY_CBLAS=1
endif

# Determine whether to compile LAPACK:
ifeq ($(DEPS_OPENBLAS_NO_LAPACK), 1)
	DEPS_OPENBLAS_BUILD_OPTS += NO_LAPACK=1
endif

# Determine whether to compile the C interface to LAPACK:
ifeq ($(DEPS_OPENBLAS_NO_LAPACKE), 1)
	DEPS_OPENBLAS_BUILD_OPTS += NO_LAPACKE=1
endif

# Determine whether to build a 64-bit BLAS interface:
ifeq ($(DEPS_OPENBLAS_USE_BLAS64), 1)
	DEPS_OPENBLAS_BUILD_OPTS += INTERFACE64=1 SYMBOLSUFFIX="$(DEPS_OPENBLAS_SYMBOLSUFFIX)" SYMBOLPREFIX="$(DEPS_OPENBLAS_SYMBOLPREFIX)"
endif

# Do not allow overwriting the `-j` flag which specifies the number of `make` jobs:
DEPS_OPENBLAS_BUILD_OPTS += MAKE_NB_JOBS=0


# TARGETS #

# Download.
#
# This target downloads a OpenBLAS distribution.

$(DEPS_OPENBLAS_DOWNLOAD_OUT): $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading OpenBLAS...' >&2
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_OPENBLAS_URL) $(DEPS_OPENBLAS_DOWNLOAD_OUT)


# Extract.
#
# This target extracts a gzipped tar archive.

$(DEPS_OPENBLAS_BUILD_OUT): $(DEPS_OPENBLAS_DOWNLOAD_OUT) $(DEPS_BUILD_DIR)
	$(QUIET) echo 'Extracting OpenBLAS...' >&2
	$(QUIET) $(TAR) $(TAR_FLAGS) $(DEPS_OPENBLAS_DOWNLOAD_OUT) -C $(DEPS_BUILD_DIR)
	$(QUIET) mv $(deps_openblas_extract_out) $(DEPS_OPENBLAS_BUILD_OUT)


# Create directory for tests.
#
# This target creates a directory for storing compiled tests.

$(DEPS_OPENBLAS_TEST_OUT):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_OPENBLAS_TEST_OUT)


# Compile install test.
#
# This target compiles a test file for testing an installation.

$(DEPS_OPENBLAS_TEST_INSTALL_OUT): $(DEPS_OPENBLAS_BUILD_OUT) $(DEPS_OPENBLAS_TEST_OUT)
	$(QUIET) $(CC) $(DEPS_OPENBLAS_TEST_INSTALL) -o $(DEPS_OPENBLAS_TEST_INSTALL_OUT) -I $(DEPS_OPENBLAS_BUILD_OUT) -L $(DEPS_OPENBLAS_BUILD_OUT) -lopenblas -lpthread


# Download OpenBLAS.
#
# This target downloads an OpenBLAS distribution.

deps-download-openblas: $(DEPS_OPENBLAS_DOWNLOAD_OUT)

.PHONY: deps-download-openblas


# Verify download.
#
# This targets verifies a download.

deps-verify-openblas: deps-download-openblas
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) $(DEPS_CHECKSUM_BIN) $(DEPS_OPENBLAS_DOWNLOAD_OUT) $(DEPS_OPENBLAS_CHECKSUM) >&2

.PHONY: deps-verify-openblas


# Extract OpenBLAS.
#
# This target extracts an OpenBLAS download.

deps-extract-openblas: $(DEPS_OPENBLAS_BUILD_OUT)

.PHONY: deps-extract-openblas


# Install OpenBLAS.
#
# This target performs the OpenBLAS install sequence.

deps-install-openblas: $(DEPS_OPENBLAS_BUILD_OUT)
	$(QUIET) cd $(DEPS_OPENBLAS_BUILD_OUT) && $(MAKE) $(DEPS_OPENBLAS_BUILD_OPTS)

.PHONY: deps-install-openblas


# Test install.
#
# This target tests an installation.

deps-test-openblas: $(DEPS_OPENBLAS_TEST_INSTALL_OUT)
	$(QUIET) echo 'Running tests...' >&2
	$(QUIET) $(DEPS_OPENBLAS_TEST_INSTALL_OUT)
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-openblas


# Install OpenBLAS.
#
# This target installs OpenBLAS.

install-deps-openblas: deps-download-openblas deps-verify-openblas deps-extract-openblas deps-install-openblas deps-test-openblas

.PHONY: install-deps-openblas


# Clean OpenBLAS.
#
# This target removes an OpenBLAS distribution (but does not remove an OpenBLAS download if one exists).

clean-deps-openblas:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_OPENBLAS_BUILD_OUT)
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_OPENBLAS_TEST_OUT)

.PHONY: clean-deps-openblas
