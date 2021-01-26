import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'ru',
    fallbackLocale: 'en',
    messages: {
        en: {
            buttonText: 'Get in touch',
            digital_title: 'Digital Heart Of',
            digital_yellow_text: 'Your Business',
            digital_description: 'Qualified expertise in developing applications for all modern platforms & it’s further launch.',
            digital_button: 'Let’s do it!'
        },
        
        ru: {
            digital_title: 'Цифровое сердце',
            digital_yellow_text: 'вашего бизнеса',
            digital_description: 'Качественно разработаем приложения на современных платформах и запустим его вместе .',
            digital_button: 'Хочу сотрудничать!'
        }

        
    }
});