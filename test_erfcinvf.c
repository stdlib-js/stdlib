#include <stdio.h>
#include <math.h>
#include "lib/node_modules/@stdlib/math/base/special/erfcinvf/include/stdlib/math/base/special/erfcinvf.h"

int main() {
    float test_values[] = {
        0.497496f,
        0.5f, 
        0.8f,
        1.5f,
        1.75f,
        0.0f,
        1.0f,
        2.0f
    };
    
    int num_tests = sizeof(test_values) / sizeof(test_values[0]);
    
    printf("Testing erfcinvf C implementation:\n");
    printf("Input\t\tOutput\t\t\tHex Output\n");
    printf("-----\t\t------\t\t\t----------\n");
    
    for (int i = 0; i < num_tests; i++) {
        float x = test_values[i];
        float result = stdlib_base_erfcinvf(x);
        
        // Print as hex to see exact float32 representation
        unsigned int* hex_ptr = (unsigned int*)&result;
        
        printf("%.6f\t\t%.10f\t\t0x%08x\n", x, result, *hex_ptr);
    }
    
    return 0;
}
