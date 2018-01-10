<template>
  <div id="app">
    <div class="locale">
      <select v-model="locale" @change="$i18n.locale = locale">
        <option value="en-US">english</option>
        <option value="ja-JP">日本語</option>
      </select>
    </div>
    <div class="messages">
      <p id="normal">{{ $t('message.hello') }}</p>
      <p>{{ $t('message.ihopeso') }}</p>

      <!--<p id="plural">{{ $t('message.plural', { n: 4 }) }}</p>-->
      <!--<p id="select">{{ $t('message.select', { gender: 'male' }) }}</p>-->
      <!--<p id="number">{{ $t('message.number', { current: 0.5 }) }}</p>-->
      <!--<p id="time">{{ $t('message.time', { current: new Date() }) }}</p>-->
    </div>
  </div>
</template>

<script>

  let domparser = new DOMParser()

  function htmlDecode (input) {
    var doc = domparser.parseFromString(input, 'text/html')
    return doc.documentElement.textContent
  }

  function toggleLocalName (vm, bol) {
    let cur = vm.$i18n.locale
    if (bol) {
      vm.$i18n.locale = cur.includes('~') ? cur : cur + '~'
    } else {
      let newlk = cur.replace('~', '')
      vm.$i18n.locale !== newlk ? vm.$i18n.locale = newlk : ''
    }
  }

  export default {
    name: 'app',
    data () {
      return { locale: 'en-US' }
    },
    created: function () {
      let vm = this

      document.addEventListener('contextmenu', function (evt) {
        evt.preventDefault()

        toggleLocalName(vm, true)
        vm.$nextTick(function () {
          console.log(evt.target.innerHTML)
          evt.target.innerHTML = htmlDecode(evt.target.innerHTML)
          let targets = evt.target.querySelectorAll('p-t')
          console.log(targets)

          toggleLocalName(vm, false)
        })

        return false
      }, false)

    }

  }
</script>

<style>
  p-t {
    display: inline;
    background: slategrey !important;
    color: white !important;
  }
</style>
