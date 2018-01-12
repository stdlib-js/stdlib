
# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/benchmark/javascript.mk
include $(TOOLS_MAKE_LIB_DIR)/benchmark/c.mk
include $(TOOLS_MAKE_LIB_DIR)/benchmark/cpp.mk
include $(TOOLS_MAKE_LIB_DIR)/benchmark/fortran.mk
include $(TOOLS_MAKE_LIB_DIR)/benchmark/julia.mk
include $(TOOLS_MAKE_LIB_DIR)/benchmark/python.mk
include $(TOOLS_MAKE_LIB_DIR)/benchmark/r.mk


# RULES #

#/
# Runs benchmarks.
#
# @param {string} [BENCHMARKS_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
#
# @example
# make benchmark
#
# @example
# make benchmark BENCHMARKS_FILTER=.*/blas/base/dasum/.*
#/
benchmark: benchmark-javascript

.PHONY: benchmark

#/
# Runs cross-language benchmarks.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each language-specific (`benchmark-<lang>`) prerequisite.
# -   This rule is useful when wanting to glob for benchmark files, irrespective of language, for a particular package in order to compare cross-language performance.
#
#
# @param {string} [BENCHMARKS_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
#
# @example
# make benchmark-lang
#
# @example
# make benchmark-lang BENCHMARKS_FILTER=.*/blas/base/dasum/.*
#/
benchmark-lang: benchmark-javascript benchmark-julia benchmark-python benchmark-r benchmark-c benchmark-cpp benchmark-fortran

.PHONY: benchmark-lang
