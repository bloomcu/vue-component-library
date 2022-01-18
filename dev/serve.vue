<template>
  <div
    v-if="page"
    id="app"
  >
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
    <Navbar
      :primary-links="navLinks"
      :secondary-links="secondaryLinks"
    />
    <SubNavigation />
    <AppTable />
    <Testimonial />
    <Accordion />
    <FeatureV7 />
    <FeatureV9 />
    <DetailsList />
    <VideoBackgroundHero
      :buttons="[{
        text: 'Learn more',
        href: '/atest',
        variant: 'link'
      }]"
    />
    <!-- Blocks -->
    <component
      v-bind="block.data"
      :is="block.component"
      v-for="(block, index) in page.layout.blocks"
      :key="index"
    />
    <!-- <component v-for="modal in modals" v-bind="modal" is="Modal" :key="modal.uuid" /> -->
    <Footer
      :primary-links="groups"
      :secondary-links="[
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
        { name: 'facebook', href: 'facebook.com' },
        { name: 'youtube', href: 'youtube.com' },
      ]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import Footer from '@/lib-components/globals/Footer/Footer.vue'
import Navbar from '@/lib-components/globals/Navbar/Navbar.vue'
import { groupGeneration } from '@/mock/GroupGeneration'
import { randomId } from '@/helpers'
import BoxedHero from '@/lib-components/blocks/BoxedHero/BoxedHero.vue'
import { NavbarLink } from '@/types'
import VideoBackgroundHero from '@/lib-components/blocks/Hero/VideoBackgroundHero.vue'
import FeatureV7 from '@/lib-components/blocks/Feature/FeatureV7.vue'
import FeatureV9 from '@/lib-components/blocks/Feature/FeatureV9.vue'
import Accordion from '@/lib-components/blocks/Accordion/Accordion.vue'
import DetailsList from '@/lib-components/blocks/DetailsList/DetailsList.vue'
import Testimonial from '@/lib-components/blocks/Testimoial/Testimonial.vue'
import AppTable from '@/lib-components/blocks/Table/AppTable.vue'
import SubNavigation from '@/lib-components/blocks/Navigation/SubNavigation.vue'

export default defineComponent({
  name: 'ServeDev',
  components: { Footer, Navbar, BoxedHero, VideoBackgroundHero, FeatureV7, FeatureV9, Accordion, DetailsList, Testimonial, AppTable, SubNavigation },
  setup () {
    const { blocks, modals } = require('@/json/blocks')
    const page = ref()

    onMounted(() => {
      const htmlEl = document.querySelector('html')
      htmlEl?.classList.add('js')
      // fetch('http://cms.test/api/organizations/bloomcu/pages/1')
      fetch('https://cms-api.bloomcu.com/api/organizations/bloomcu/pages/1')
        .then((response) => response.json())
        .then((data) => (page.value = data.data))
    })
    // TODO: add component
    const navLinks: NavbarLink[] = [
      {
        uuid: randomId(),
        component: 'NavbarDropdown',
        text: randomId(),
        href: randomId(),
        dropdown: {
          component: 'NavbarDropdownColumn1',
          children: groupGeneration()
        }
      },
      {
        uuid: randomId(),
        component: 'NavbarDropdown',
        text: randomId(),
        href: randomId(),
        dropdown: {
          component: 'NavbarDropdownColumns',
          children: groupGeneration()
        }
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
        component: 'AppLink',
        text: ' _zso4u8is9 ',
        // trigger: "123",
        variant: 'primary',
        href: '/button-href',
        block: true
        //   target: '',
      }
    ]
    const secondaryLinks = [
      {
        uuid: randomId(),
        component: 'dropdown',
        text: randomId(),
        href: randomId(),
        children: groupGeneration({ includeTitles: false })
      },
      {
        uuid: randomId(),
        component: 'SearchDropdown',
        text: randomId(),
        href: randomId(),
        children: groupGeneration({ includeTitles: false })
      },
      {
        uuid: randomId(),
        component: 'AppButton',
        text: 'Download',
        // trigger: "123",
        variant: 'primary',
        href: '/button-href'
        //   target: '',
      },
      {
        uuid: randomId(),
        component: 'AppLink',
        text: ' _zso4u8is9 ',
        // trigger: "123",
        variant: 'primary',
        href: '/button-href',
        block: true
        //   target: '',
      }
    ]
    return {
      page,
      blocks,
      modals,
      groups: groupGeneration(),
      navLinks,
      secondaryLinks
    }
  }
})
</script>
