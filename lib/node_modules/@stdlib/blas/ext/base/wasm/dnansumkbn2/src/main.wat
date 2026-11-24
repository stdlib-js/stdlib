;; @license Apache-2.0
;;
;; Copyright (c) 2025 The Stdlib Authors.
;;
;; Licensed under the Apache License, Version 2.0 (the "License");
;; you may not use this file except in compliance with the License.
;; You may obtain a copy of the License at
;;
;;    http://www.apache.org/licenses/LICENSE-2.0
;;
;; Unless required by applicable law or agreed to in writing, software
;; distributed under the License is distributed on an "AS IS" BASIS,
;; WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
;; See the License for the specific language governing permissions and
;; limitations under the License.

(module
  (type (;0;) (func))
  (type (;1;) (func (param i32 i32 i32) (result f64)))
  (type (;2;) (func (param i32 i32 i32 i32) (result f64)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 i32 i32) (result f64)
    local.get 0
    local.get 1
    local.get 2
    i32.const 1
    local.get 0
    i32.sub
    local.get 2
    i32.mul
    i32.const 0
    local.get 2
    i32.const 0
    i32.le_s
    select
    call 2)
  (func (;2;) (type 2) (param i32 i32 i32 i32) (result f64)
    (local f64 f64 f64 f64 f64 i32 i32 i32)
    block  ;; label = @1
      local.get 0
      i32.const 0
      i32.le_s
      br_if 0 (;@1;)
      block  ;; label = @2
        block  ;; label = @3
          local.get 2
          if  ;; label = @4
            loop  ;; label = @5
              local.get 0
              local.get 9
              i32.eq
              br_if 4 (;@1;)
              local.get 9
              i32.const 1
              i32.add
              local.set 9
              local.get 3
              i32.const 3
              i32.shl
              local.set 11
              local.get 2
              local.get 3
              i32.add
              local.tee 10
              local.set 3
              local.get 1
              local.get 11
              i32.add
              f64.load
              local.tee 4
              local.get 4
              f64.ne
              br_if 0 (;@5;)
            end
            local.get 4
            f64.const 0x0p+0 (;=0;)
            f64.eq
            br_if 1 (;@3;)
            local.get 9
            local.set 3
            i32.const 1
            local.set 11
            br 2 (;@2;)
          end
          local.get 1
          local.get 3
          i32.const 3
          i32.shl
          i32.add
          f64.load
          local.tee 4
          local.get 4
          f64.ne
          br_if 2 (;@1;)
          local.get 4
          local.get 0
          f64.convert_i32_u
          f64.mul
          return
        end
        local.get 0
        local.get 9
        local.get 0
        local.get 9
        i32.gt_s
        select
        local.set 3
        loop  ;; label = @3
          local.get 0
          local.get 9
          i32.le_s
          if  ;; label = @4
            i32.const 0
            local.set 11
            br 2 (;@2;)
          end
          local.get 1
          local.get 10
          i32.const 3
          i32.shl
          i32.add
          f64.load
          local.tee 5
          local.get 5
          f64.eq
          if  ;; label = @4
            local.get 5
            f64.const 0x0p+0 (;=0;)
            f64.ne
            if  ;; label = @5
              i32.const 1
              local.set 11
              local.get 9
              local.set 3
              br 3 (;@2;)
            end
            local.get 4
            local.get 5
            f64.add
            local.set 4
          end
          local.get 9
          i32.const 1
          i32.add
          local.set 9
          local.get 2
          local.get 10
          i32.add
          local.set 10
          br 0 (;@3;)
        end
        unreachable
      end
      local.get 3
      local.get 0
      local.get 0
      local.get 3
      i32.lt_s
      select
      local.set 0
      f64.const 0x0p+0 (;=0;)
      local.set 5
      loop  ;; label = @2
        local.get 0
        local.get 3
        i32.eq
        i32.eqz
        if  ;; label = @3
          local.get 1
          local.get 10
          i32.const 3
          i32.shl
          i32.add
          f64.load
          local.tee 6
          local.get 6
          f64.eq
          if  ;; label = @4
            local.get 7
            local.get 6
            local.get 4
            local.get 4
            local.get 6
            f64.add
            local.tee 8
            f64.sub
            f64.add
            local.get 4
            local.get 6
            local.get 8
            f64.sub
            f64.add
            local.get 4
            f64.abs
            local.get 6
            f64.abs
            f64.ge
            select
            local.tee 4
            local.get 5
            local.get 5
            local.get 4
            f64.add
            local.tee 6
            f64.sub
            f64.add
            local.get 5
            local.get 4
            local.get 6
            f64.sub
            f64.add
            local.get 5
            f64.abs
            local.get 4
            f64.abs
            f64.ge
            select
            f64.add
            local.set 7
            local.get 6
            local.set 5
            local.get 8
            local.set 4
          end
          local.get 3
          i32.const 1
          i32.add
          local.set 3
          local.get 2
          local.get 10
          i32.add
          local.set 10
          br 1 (;@2;)
        end
      end
      local.get 7
      local.get 4
      local.get 5
      f64.add
      f64.add
      local.get 4
      local.get 11
      select
      local.set 5
    end
    local.get 5)
  (export "__wasm_call_ctors" (func 0))
  (export "stdlib_strided_dnansumkbn2" (func 1))
  (export "stdlib_strided_dnansumkbn2_ndarray" (func 2)))
