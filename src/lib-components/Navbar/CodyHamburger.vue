<template>
  <div class="position-relative">
    <a
      @click.prevent="toggle('mobileMenu')"
      class="cody-hamburger"
      :class="{ 'active': isActive('mobileMenu') }"
      href="#"
      ><span></span
    ></a>
  </div>
</template>

<script lang="ts">
import useToggle from '@/composables/useToggle';
export default {
  setup() {
      const { isActive, toggle } = useToggle()
    return {
      isActive,
      toggle,
    };
  },
};
</script>

<style lang="scss">


.cody-hamburger {
  cursor: pointer;
  position: absolute;
  right: 6rem;
  
}
.cody-hamburger span,
.cody-hamburger span:before,
.cody-hamburger span:after {
  cursor: pointer;
  border-radius: 1px;
  height: 5px;
  width: 35px;
  background: rgb(94, 96, 98);
  position: absolute;
  display: inline-block;
  content: '';
}
.cody-hamburger span:before {
  top: -10px;
}
.cody-hamburger span:after {
  bottom: -10px;
}
/*
.cody-hamburger span, .cody-hamburger span:before, .cody-hamburger span:after {
  transition: all 200ms ease-in-out;
}
*/
.cody-hamburger span,
.cody-hamburger span:before,
.cody-hamburger span:after {
  -webkit-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  -moz-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1); /* easeInOutCubic */
}
.cody-hamburger.active span {
  background-color: transparent;
}
.cody-hamburger.active span:before,
.cody-hamburger.active span:after {
  top: 0;
}
.cody-hamburger.active span:before {
  transform: rotate(45deg);
}
.cody-hamburger.active span:after {
  transform: translateY(-10px) rotate(-45deg);
  top: 10px;
}
</style>
