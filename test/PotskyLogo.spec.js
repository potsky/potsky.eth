import { mount } from '@vue/test-utils'
import PotskyLogo from '@/components/PotskyLogo.vue'

describe('PotskyLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PotskyLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
