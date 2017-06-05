
# TARGETS #

# Run R benchmarks.
#
# This target runs a list of R benchmarks in sequential order. Note that we assume the benchmarks can be run using R.

benchmark-r:
	$(QUIET) for file in $(R_BENCHMARKS); do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		$(MAKE_EXECUTABLE) $$file && $$file || exit 1; \
	done

.PHONY: benchmark-r
