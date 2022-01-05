import { mount } from '@vue/test-utils'
import Welcome from '~/components/WelcomeCard.vue'

describe('Welcome', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Welcome)
    expect(wrapper.html()).toContain('Amiga')
  })
})
