import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Formatter from './formatter'

Vue.use(VueI18n)

const locale = 'en-US' // default locale
const formatter = new Formatter({ locale })

export default new VueI18n({
  locale,
  formatter,
  messages: {
    'en-US': {
      message: {
        hello: 'hello!!',
        ihopeso: 'I hope so'
      }
    },
    'en-US~': {
      message: {
        hello: '<p-t v="message.hello">hello!!</p-t>',
        ihopeso: '<p-t v="message.ihopeso">I hope so</p-t>'
      }
    },
    'es-419': {
      message: {
        hello: 'hola！',
        ihopeso: 'Ojála'
      }
    },
    'es-419~': {
      message: {
        hello: '<p-t v="message.hello">hola！！</p-t>',
        ihopeso: '<p-t v="message.ihopeso">Ojála</p-t>'
      }
    }
  }
})
