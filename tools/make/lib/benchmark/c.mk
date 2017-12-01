
# VARIABLES

# Define the path to a script for compiling a C benchmark:
compile_c_benchmark_bin := $(TOOLS_DIR)/scripts/compile_c_benchmark


# TARGETS #

# Run C benchmarks.
#
# This target runs a list of C benchmarks consecutively.

benchmark-c:
	$(QUIET) $(FIND_C_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		cd `dirname $$file` && $(MAKE) clean && \
		OS="$(OS)" \
		NODE="$(NODE)" \
		NODE_PATH="$(NODE_PATH)" \
		C_COMPILER="$(CC)" \
		BLAS="$(BLAS)" \
		BLAS_DIR="$(BLAS_DIR)" \
		CEPHES="$(DEPS_CEPHES_BUILD_OUT)" \
		CEPHES_SRC="$(DEPS_CEPHES_SRC)" \
		"${compile_c_benchmark_bin}" $$file && \
		$(MAKE) run || exit 1; \
	done

.PHONY: benchmark-c


# Run C benchmarks.
#
# This target runs a specified list of C benchmarks consecutively.

benchmark-c-files:
	$(QUIET) for file in $(FILES); do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		cd `dirname $$file` && $(MAKE) clean && \
		OS="$(OS)" \
		NODE="$(NODE)" \
		NODE_PATH="$(NODE_PATH)" \
		C_COMPILER="$(CC)" \
		BLAS="$(BLAS)" \
		BLAS_DIR="$(BLAS_DIR)" \
		CEPHES="$(DEPS_CEPHES_BUILD_OUT)" \
		CEPHES_SRC="$(DEPS_CEPHES_SRC)" \
		"${compile_c_benchmark_bin}" $$file && \
		$(MAKE) run || exit 1; \
	done

.PHONY: benchmark-c-files
