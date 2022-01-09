<template>
  <div id="app" v-if="page">
    <!-- Info Bar
        <div
            class="flex justify-between items-center bg border-bottom padding-xxs text-sm z-index-3"
            style="position: -webkit-sticky; position: sticky; top: 0; max-width: 100%"
        >
            <span>
                <strong>Source:</strong> https://cms-api.bloomcu.com/api/organizations/bloomcu/pages/1
            </span>
            <a
                class="btn btn--subtle btn--sm"
                target="_blank"
                href="https://cms.bloomcu.com/organizations/bloomcu/pages/1"
            >Edit in CMS</a>
        </div>-->
    <Navbar :primaryLinks="navLinks" :secondaryLinks="secondaryLinks" />
    <BoxedHero />
    <!-- Blocks -->
    <component
      v-for="(block, index) in page.layout.blocks"
      v-bind="block.data"
      :is="block.component"
      :key="index"
    />
    <!-- <component v-for="modal in modals" v-bind="modal" is="Modal" :key="modal.uuid" /> -->
    <Footer
      :primaryLinks="groups"
      :secondaryLinks="[
        {
          text: 'test',
          href: '/testlink',
        },
        {
          text: 'test2',
          href: '/testlink2',
        },
      ]"
      :socials="[
        { name: 'Facebook', href: 'facebook.com' },
        { name: 'youtube', href: 'youtube.com' },
      ]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import Footer from '@/lib-components/Footer/Footer.vue';
import Navbar from '@/lib-components/Navbar/Navbar.vue';
import { groupGeneration } from '@/mock/GroupGeneration';
import { randomId } from '@/helpers';
import BoxedHero from '@/lib-components/BoxedHero/BoxedHero.vue';
import { NavbarLink } from '@/types';

export default defineComponent({
  name: 'ServeDev',
  setup() {
    const { blocks, modals } = require('@/json/blocks');
    const page = ref();

    onMounted(() => {
      const htmlEl = document.querySelector('html');
      htmlEl?.classList.add('js');
      // fetch('http://cms.test/api/organizations/bloomcu/pages/1')
      fetch('https://cms-api.bloomcu.com/api/organizations/bloomcu/pages/1')
        .then((response) => response.json())
        .then((data) => (page.value = data.data));
    });
    // TODO: add component
    const navLinks: NavbarLink[] = [
      {
        uuid: randomId(),
        component: 'ColumnDropdown',
        text: randomId(),
        href: randomId(),
        dropdown: {
          component: 'ColumnDropdown1',
          children: groupGeneration(),
        },
      },
      {
        uuid: randomId(),
        component: 'ColumnDropdown',
        text: randomId(),
        href: randomId(),
        dropdown: {
          component: 'ColumnFullWidthDropdown',
          children: groupGeneration(),
        },
      },
      // {
      //     uuid: randomId(),
      //     component: 'ColumnDropdown',
      //     text: randomId(),
      //     href: randomId(),
      //     children: groupGeneration()
      // },
      {
        uuid: randomId(),
        component: 'CodyLink',
        text: ' _zso4u8is9 ',
        // trigger: "123",
        variant: 'primary',
        href: '/button-href',
        block: true,
        //   target: '',
      },
    ];
    const secondaryLinks = [
      {
        uuid: randomId(),
        component: 'dropdown',
        text: randomId(),
        href: randomId(),
        children: groupGeneration({ includeTitles: false }),
      },
      {
        uuid: randomId(),
        component: 'SearchDropdown',
        text: randomId(),
        href: randomId(),
        children: groupGeneration({ includeTitles: false }),
      },
      {
        uuid: randomId(),
        component: 'CodyButton',
        text: 'Download',
        // trigger: "123",
        variant: 'primary',
        href: '/button-href',
        //   target: '',
      },
      {
        uuid: randomId(),
        component: 'CodyLink',
        text: ' _zso4u8is9 ',
        // trigger: "123",
        variant: 'primary',
        href: '/button-href',
        block: true,
        //   target: '',
      },
    ];
    return {
      page,
      blocks,
      modals,
      groups: groupGeneration(),
      navLinks,
      secondaryLinks,
    };
  },
  components: { Footer, Navbar, BoxedHero },
});
</script>
