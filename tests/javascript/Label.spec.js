import { shallowMount } from '@vue/test-utils'
import Label from '@/partials/Label'

describe('Label', () => {

    test('display text', () => {
        let wrapper = shallowMount(Label, {
            slots: {
                default: 'Setting Label',
            },
        })

        expect(wrapper.text())
            .toBe('Setting Label')
    })

})