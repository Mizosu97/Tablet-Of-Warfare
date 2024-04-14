// ==UserScript==
// @name         Ankhikamuns Tablet of Warfare
// @namespace    http://tampermonkey.net/
// @version      1.0
// @homepage     https://greasyfork.org/scripts/
// @description  Rework of the x03 mod menu with extended features.
// @author       ankhh on Discord
// @match        https://diep.io/
// @grant        none
// @license      GNU GPLv3
// @downloadURL https://update.greasyfork.org/scripts/464910/Diepio%20x03%20Mod%20Menu.user.js
// @updateURL https://update.greasyfork.org/scripts/464910/Diepio%20x03%20Mod%20Menu.meta.js
// ==/UserScript==

;(function () {
  'use strict'

    const upgrades = [
        {name: 'rocketeer', build: '565656565656567878787878787822333'},
        {name: 'skimmer', build: '565656565656484848484848487777777'},
        {name: 'factory', build: '565656565656564848484848484777777'},
        {name: 'spike', build: '5656565656565677744487777888222222222233333333338888888888111'},
        {name: 'autosmasher', build: '5656565656565677744487777888222222222233333333338888888888111'},
        {name: 'annihilator', build: '565656565656484848484848487777777'},
        {name: 'battleship', build: '565656565656564848484848447777777'},
        {name: 'autotrapper', build: '565656565656564444848877787878787'},
        {name: 'streamliner', build: '565656565656564444488888878777777'},
        {name: 'spreadshot', build: '565656565656567878787878787843242'},
        {name: 'auto5', build: '565656565656567847847847847847878'},
        {name: 'autogunner', build: '565656565656567847847847847847878'},
        {name: 'landmine', build: '5656565656565677744487777888222222222233333333338888888888111'},
        {name: 'tritrapper', build: '565656565656567878787878787823424'},
        {name: 'megatrapper', build: '565656565656564444488888887777777'},
        {name: 'overtrapper', build: '565656565656564848484848887777777'},
        {name: 'gunnertrapper', build: '565656565656567847847847847847878'},
        {name: 'sprayer', build: '565656565656567847847847847847878'},
        {name: 'predator', build: '565656565656564784784784784784788'},
        {name: 'manager', build: '565656565656568484848484844787777'},
        {name: 'hybrid', build: '565656565656848484848484847777777'},
        {name: 'fighter', build: '565656565656567878787878787823233'},
        {name: 'booster', build: '565656565656567878787878787823233'},
        {name: 'ranger', build: '565656565656564784784784784784784'},
        {name: 'stalker', build: '565656565656564784784784784784784'},
        {name: 'tripletwin', build: '565656565656567878787878787844444'},
        {name: 'necromancer', build: '565656565656564848484848484777777'},
        {name: 'pentashot', build: '565656565656567878787878787844442'},
        {name: 'overlord', build: '565656565656568484848484848477223'},
        {name: 'octotank', build: '565656565656567878787878787844423'},
        {name: 'triplet', build: '565656565656567878787878787844444'},
    ];

    function getBuildByName(name) {
        const foundUpgrade = upgrades.find(upgrade => upgrade.name === name.toLowerCase());
        return foundUpgrade ? foundUpgrade.build : 'x';
    }

  //== Basic Elements ==//
  const main_panel = document.createElement('div')
  main_panel.id = 'main_panel'

  // Anchor
  const anchor = document.createElement('a')
  anchor.id = 'anchor'

  // Header
  const header = document.createElement('h1')
  header.textContent = 'Ankhikamun\'s Tablet of Warfare [\\]'
  anchor.appendChild(header)

  // Holder panel
  const holder_panel = document.createElement('div')
  holder_panel.id = 'holder_panel'
  anchor.appendChild(holder_panel)

  // Tab side panel
  const side_panel = document.createElement('div')
  side_panel.classList.add('panel_1')
  holder_panel.appendChild(side_panel)

  // Display panel
  const display_panel = document.createElement('div')
  display_panel.classList.add('panel_1')
  holder_panel.appendChild(display_panel)
  display_panel.style.width = '100%'
  display_panel.style.marginLeft = '4px'
  display_panel.innerHTML = `<h2>select a tab</h2>`

  //== Tab Panels ==//

  //== VISUAL TAB
  const view_line = document.createElement('div')
  view_line.style.textAlign = 'left'
  view_line.style.alignItems = 'center'
  view_line.style.height = '33px'
  view_line.style.display = 'flex'

  const view_line_text = document.createElement('span')
  view_line_text.style.fontWeight = 'bold'
  view_line_text.textContent = 'View Aim Line'

  const view_line_label = document.createElement('label')
  view_line_label.classList.add('switch')

  const view_line_toggle = document.createElement('INPUT')
  view_line_toggle.setAttribute('type', 'checkbox')
  view_line_label.appendChild(view_line_toggle)

  const view_line_div = document.createElement('div')
  view_line_label.appendChild(view_line_div)
  view_line.appendChild(view_line_label)
  view_line.appendChild(view_line_text)

  // View Circle
  const view_circle = document.createElement('div')
  view_circle.style.textAlign = 'left'
  view_circle.style.alignItems = 'center'
  view_circle.style.height = '33px'
  view_circle.style.display = 'flex'

  const view_circle_text = document.createElement('span')
  view_circle_text.style.fontWeight = 'bold'
  view_circle_text.textContent = 'View Factory Cicle'

  const view_circle_label = document.createElement('label')
  view_circle_label.classList.add('switch')

  const view_circle_toggle = document.createElement('INPUT')
  view_circle_toggle.setAttribute('type', 'checkbox')
  view_circle_label.appendChild(view_circle_toggle)

  const view_circle_div = document.createElement('div')
  view_circle_label.appendChild(view_circle_div)
  view_circle.appendChild(view_circle_label)
  view_circle.appendChild(view_circle_text)

  // Tab Control
  const visual_tab = document.createElement('button')
  visual_tab.classList.add('tab_button')
  side_panel.appendChild(visual_tab)
  visual_tab.textContent = 'Visual'
  visual_tab.onclick = function () {
    display_panel.innerHTML = ``
    display_panel.appendChild(view_line)
    display_panel.appendChild(view_circle)
  }

  //== AUTO UPGRADES TAB
  const au_label = document.createElement('span')
  au_label.textContent = 'Custom Build'
  au_label.style.fontWeight = 'bold'

  const au_input = document.createElement('INPUT')
  au_input.ariaReadOnly = 'true'
  au_input.setAttribute('type', 'text')
  au_input.style.borderColor = 'rgb(20 20 20)'
  au_input.style.borderRadius = '5px'
  au_input.style.marginTop = '4px'
  au_input.style.outline = 'none'
  au_input.style.color = 'white'
  au_input.placeholder = 'Enter tank name'
  au_input.style.backgroundColor = 'rgb(25 25 25)'

  const au_set_button = document.createElement('button')
  au_set_button.classList.add('button')
  au_set_button.textContent = 'Set Build'

  au_set_button.onclick = function () {
    const intendedBuild = getBuildByName(au_input.value);
    if (intendedBuild != "x") {
        input.execute('game_stats_build ' + intendedBuild)
    }
  }

  // Autoset toggle
  const au_autoset = document.createElement('div')
  au_autoset.style.textAlign = 'left'
  au_autoset.style.alignItems = 'center'
  au_autoset.style.height = '33px'
  au_autoset.style.display = 'flex'

  const au_autoset_text = document.createElement('span')
  au_autoset_text.style.fontWeight = 'bold'
  au_autoset_text.textContent = 'Keep Build on Respawn'

  const au_autoset_label = document.createElement('label')
  au_autoset_label.classList.add('switch')

  const au_autoset_toggle = document.createElement('INPUT')
  au_autoset_toggle.setAttribute('type', 'checkbox')
  au_autoset_label.appendChild(au_autoset_toggle)

  const au_autoset_div = document.createElement('div')
  au_autoset_label.appendChild(au_autoset_div)
  au_autoset.appendChild(au_autoset_label)
  au_autoset.appendChild(au_autoset_text)

  // Tab Control
  const auto_upgrades_tab = document.createElement('button')
  auto_upgrades_tab.classList.add('tab_button')
  side_panel.appendChild(auto_upgrades_tab)
  auto_upgrades_tab.textContent = 'Auto Upgrades'
  auto_upgrades_tab.onclick = function () {
    display_panel.innerHTML = ``
    display_panel.style.textAlign = 'left'
    display_panel.appendChild(au_label)
    display_panel.appendChild(au_input)
    display_panel.appendChild(au_set_button)
    display_panel.appendChild(au_autoset)
  }

  //== CREDITS TAB
  const credits_tab = document.createElement('button')
  credits_tab.classList.add('tab_button')
  side_panel.appendChild(credits_tab)
  credits_tab.textContent = 'Credits'
  credits_tab.onclick = function () {
    display_panel.style.textAlign = 'center'
    display_panel.innerHTML = `
    <br>
    <h3>Jesus</h3>

    <style>
    br {
      margin-top: 30px;
    }
    p {
      margin: 2px;
      font-weight: bold;
    }
    </style>
    `
  }

  //== Style ==//
  const style = document.createElement('style')
  style.textContent = `
    #main_panel a {
      position: absolute;

      font-family: 'Outfit', sans-serif;
      src: url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');
    }

    #anchor {
      display: inline-flex;
      flex-direction: column;

      width: 600px;
      height: 300px;

      text-align: center;

      top: 300px;
      right: 50px;
      padding: 0 7px 14px 7px;

      color: white;
      background: rgb(49 50 68);

      border-radius: 7px;
      border-style: solid;
      border-width: 2px;
      border-color: rgb(69 71 90);
    }

    #holder_panel {
      display: inline-flex;
      flex-direction: row;
      height: 100%;
    }

    h1 {
      margin-top: 10px;
      margin-bottom: 5px;
      color: rgb(245 194 231);
    }

    .switch input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    .switch {
      display: inline-block;
      font-size: 20px; /* 1 */
      height: 1em;
      width: 2em;
      background: rgb(17 17 27);
      border-radius: 1em;
      margin-right: 10px;
      cursor: pointer;
    }

    .switch div {
      height: 1em;
      width: 1em;
      border-radius: 1em;
      background: rgb(108 112 134);
      -webkit-transition: all 100ms;
      -moz-transition: all 100ms;
      transition: all 100ms;
      cursor: pointer;
    }

    .switch input:checked + div {
      -webkit-transform: translate3d(100%, 0, 0);
      -moz-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      background: rgb(245 194 231)
    }

    .panel_1 {
      display: inline-flex;
      flex-direction: column;

      padding: 4px;
      width: fit-content;
      height: 100%;
      border-radius: 5px;

      background: rgb(30 30 46);
      white-space: nowrap;
    }

    .button {
      font-family: 'Outfit', sans-serif;
      src: url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');
      font-weight: bold;
      cursor: pointer;
      font-size: 14px;

      padding: 2px 4px 2px 4px;
      margin-top: 2px;
      margin-bottom: 2px;

      color: white;
      background: rgb(108 112 134);

      border-radius: 0px;
      border-style: solid;
      border-width: 0px;
      border-color: rgb(60 60 60);

      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 50ms;
    }

    .tab_button {
      font-family: 'Outfit', sans-serif;
      src: url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');
      font-weight: bold;
      cursor: pointer;
      font-size: 18px;

      padding: 4px 8px 4px 8px;
      margin-bottom: 4px;

      color: white;
      background: rgb(30 30 46);

      border-radius: 0px;
      border-style: solid;
      border-width: 0px;
      border-color: rgb(60 60 60);

      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 50ms;
    }

    .tab_button:hover {
      background: rgb(30 30 46);
      border-color: rgb(80 80 80);
    }

    .button:hover {
      background: rgb(108 112 134);
      border-color: rgb(80 80 80);
    }

    .tab_button:focus {
      background: rgb(49 50 68);
      border-color: rgb(50 100 50);
    }
  `

  //== Appends ==//
  main_panel.appendChild(anchor)
  document.body.appendChild(main_panel)
  document.head.appendChild(style)

  //== Funcs ==//
  function ToggleDisplay(element_id) {
    var element = document.getElementById(element_id)
    element.style.display = element.style.display === 'none' ? 'block' : 'none'
  }

  //== Vars ==//
  let X, Y, x, y
  let Z = false
  let radius = []

  //== Events ==//
  document.body.onkeyup = function (ctx) {
    if (ctx.keyCode === 220) {
        ToggleDisplay('main_panel');
    } else if (document.activeElement === au_input && /^[a-zA-Z]$/.test(ctx.key)) {
        au_input.value = au_input.value + ctx.key;
    } else if (document.activeElement === au_input && ctx.keyCode === 8) {
        au_input.value = au_input.value.slice(0, -1);
    }
}

  document.onmousemove = function () {
    x = event.clientX
    y = event.clientY
  }

  document.onmousedown = function (e) {
    if (e.button == 2) {
      Z = true
    }
  }

  document.onmouseup = function (e) {
    if (e.button == 2) {
      Z = false
    }
  }

  //== Draw Funcs ==//
  const canvas = document.createElement('canvas')

  function get_Radius() {
    X = window.innerWidth / 2
    Y = window.innerHeight / 2
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // thx to "Licht_denker47" for these sets
    radius[0] = window.innerWidth * 0.17681239669
    radius[1] = window.innerWidth * 0.06545454545
    radius[2] = window.innerWidth * 0.16751239669
    radius[3] = window.innerWidth * 0.36
  }
  get_Radius()
  window.addEventListener('resize', get_Radius)

  canvas.style.position = 'absolute'
  canvas.style.top = '0px'
  canvas.style.left = '0px'
  canvas.style.pointerEvents = 'none'

  document.body.appendChild(canvas)
  const ctx = canvas.getContext('2d')

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Aim Line
    if (view_line_toggle.checked) {
      ctx.beginPath()
      ctx.moveTo(X, Y)
      ctx.lineTo(x, y)
      ctx.lineWidth = 50
      ctx.strokeStyle = 'rgba(17, 17, 27, 0.05)'
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(X, Y)
      ctx.lineTo(x, y)
      ctx.lineWidth = 2
      ctx.strokeStyle = 'rgba(17, 17, 27, 0.7)'
      ctx.stroke()
    }

    if (view_circle_toggle.checked) {
      // Large Circle
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(X, Y, radius[3], 0, 2 * Math.PI)
      ctx.strokeStyle = 'rgba(17, 17, 27, 0.7)'
      ctx.stroke()

      // Inner Circle
      ctx.beginPath()
      ctx.arc(x, y, radius[1], 0, 2 * Math.PI)
      ctx.stroke()

      // Outer Circle
      ctx.beginPath()
      if (Z) {
        ctx.arc(x, y, radius[0], 0, 2 * Math.PI)
      } else {
        ctx.arc(x, y, radius[2], 0, 2 * Math.PI)
      }
      ctx.stroke()
    }

    if (au_autoset_toggle.checked) {
        const intendedBuild = getBuildByName(au_input.value);
        if (intendedBuild != "x") {
        input.execute('game_stats_build ' + intendedBuild)
    }
    }
    requestAnimationFrame(draw)
  }
  draw()
})()
