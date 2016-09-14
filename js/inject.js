/*
 * Copyright (c) 2016 Ruben Schmidmeister <ruben.schmidmeister@icloud.com>
 *
 * This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://www.wtfpl.net/ for more details.
 */
(() => {

  'use strict'

  const number = /^[0-9]+$/

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form[action*="/course/search.php"]')
    const input = form.querySelector('input[name="search"]')

    if (form == null || input == null) {
      return
    }

    form.addEventListener('submit', (event) => {
      const value = input.value

      if (!number.test(value)) {
        return
      }

      event.preventDefault()

      window.location = `/course/view.php?id=${value}`

    })
  })

})()
