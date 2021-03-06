import Util from '@/helpers/Util';

// make focus ring visible only for keyboard navigation (i.e., tab key)
(function () {
  const focusTab = document.getElementsByClassName('js-tab-focus')
  let shouldInit = false
  let outlineStyle = false
  let eventDetected = false
  function detectClick () {
    if (focusTab.length > 0) {
      resetFocusStyle(false)
      window.addEventListener('keydown', detectTab)
    }
    window.removeEventListener('mousedown', detectClick)
    outlineStyle = false
    eventDetected = true
  }

  function detectTab (event) {
    if (event.keyCode !== 9) return
    resetFocusStyle(true)
    window.removeEventListener('keydown', detectTab)
    window.addEventListener('mousedown', detectClick)
    outlineStyle = true
  }

  function resetFocusStyle (bool) {
    const outlineStyle = bool ? '' : 'none'
    for (let i = 0; i < focusTab.length; i++) {
      focusTab[i].style.setProperty('outline', outlineStyle)
    }
  }

  function initFocusTabs () {
    if (shouldInit) {
      if (eventDetected) resetFocusStyle(outlineStyle)
      return
    }
    shouldInit = focusTab.length > 0
    window.addEventListener('mousedown', detectClick)
  }

  initFocusTabs()
  window.addEventListener('initFocusTabs', initFocusTabs)
})()

function resetFocusTabsStyle () {
  window.dispatchEvent(new CustomEvent('initFocusTabs'))
}

export default function navbarScript () {
  // File#: _3_mega-site-navigation
  // Usage: codyhouse.co/license
  (function () {
    const MegaNav = function (element) {
      this.element = element
      this.search = this.element.getElementsByClassName('js-mega-nav__search')
      this.searchActiveController = false
      this.menu = this.element.getElementsByClassName('js-mega-nav__nav')
      this.menuItems = this.menu[0].getElementsByClassName('js-mega-nav__item')
      this.menuActiveController = false
      this.itemExpClass = 'mega-nav__item--expanded'
      this.classIconBtn = 'mega-nav__icon-btn--state-b'
      this.classSearchVisible = 'mega-nav__search--is-visible'
      this.classNavVisible = 'mega-nav__nav--is-visible'
      this.classMobileLayout = 'mega-nav--mobile'
      this.classDesktopLayout = 'mega-nav--desktop'
      this.layout = 'mobile'
      // store dropdown elements (if present)
      this.dropdown = this.element.getElementsByClassName('js-dropdown')
      // expanded class - added to header when subnav is open
      this.expandedClass = 'mega-nav--expanded'
      // check if subnav should open on hover
      this.hover =
        this.element.getAttribute('data-hover') &&
        this.element.getAttribute('data-hover') == 'on'
      initMegaNav(this)
    }

    function initMegaNav (megaNav) {
      setMegaNavLayout(megaNav) // switch between mobile/desktop layout
      initSearch(megaNav) // controll search navigation
      initMenu(megaNav) // control main menu nav - mobile only
      initSubNav(megaNav) // toggle sub navigation visibility

      megaNav.element.addEventListener('update-menu-layout', function (event) {
        setMegaNavLayout(megaNav) // window resize - update layout
      })
    }

    function setMegaNavLayout (megaNav) {
      const layout = getComputedStyle(megaNav.element, ':before')
        .getPropertyValue('content')
        .replace(/\'|"/g, '')
      if (layout == megaNav.layout) return
      megaNav.layout = layout
      Util.toggleClass(
        megaNav.element,
        megaNav.classDesktopLayout,
        megaNav.layout == 'desktop'
      )
      Util.toggleClass(
        megaNav.element,
        megaNav.classMobileLayout,
        megaNav.layout != 'desktop'
      )
      if (megaNav.layout == 'desktop') {
        closeSubNav(megaNav, false)
        // if the mega navigation has dropdown elements -> make sure they are in the right position (viewport awareness)
        triggerDropdownPosition(megaNav)
      }
      closeSearch(megaNav, false)
      resetMegaNavOffset(megaNav) // reset header offset top value
      resetNavAppearance(megaNav) // reset nav expanded appearance
    }

    function resetMegaNavOffset (megaNav) {
      document.documentElement.style.setProperty(
        '--mega-nav-offset-y',
        megaNav.element.getBoundingClientRect().top + 'px'
      )
    }

    function closeNavigation (megaNav) {
      // triggered by Esc key press
      // close search
      closeSearch(megaNav)
      // close nav
      if (Util.hasClass(megaNav.menu[0], megaNav.classNavVisible)) {
        toggleMenu(
          megaNav,
          megaNav.menu[0],
          'menuActiveController',
          megaNav.classNavVisible,
          megaNav.menuActiveController,
          true
        )
      }
      // close subnav
      closeSubNav(megaNav, false)
      resetNavAppearance(megaNav) // reset nav expanded appearance
    }

    function closeFocusNavigation (megaNav) {
      // triggered by Tab key pressed
      // close search when focus is lost
      if (
        Util.hasClass(megaNav.search[0], megaNav.classSearchVisible) &&
        !document.activeElement.closest('.js-mega-nav__search')
      ) {
        toggleMenu(
          megaNav,
          megaNav.search[0],
          'searchActiveController',
          megaNav.classSearchVisible,
          megaNav.searchActiveController,
          true
        )
      }
      // close nav when focus is lost
      if (
        Util.hasClass(megaNav.menu[0], megaNav.classNavVisible) &&
        !document.activeElement.closest('.js-mega-nav__nav')
      ) {
        toggleMenu(
          megaNav,
          megaNav.menu[0],
          'menuActiveController',
          megaNav.classNavVisible,
          megaNav.menuActiveController,
          true
        )
      }
      // close subnav when focus is lost
      for (let i = 0; i < megaNav.menuItems.length; i++) {
        if (!Util.hasClass(megaNav.menuItems[i], megaNav.itemExpClass)) {
          continue
        }
        const parentItem = document.activeElement.closest('.js-mega-nav__item')
        if (parentItem && parentItem == megaNav.menuItems[i]) continue
        closeSingleSubnav(megaNav, i)
      }
      resetNavAppearance(megaNav) // reset nav expanded appearance
    }

    function closeSearch (megaNav, bool) {
      if (megaNav.search.length < 1) return
      if (Util.hasClass(megaNav.search[0], megaNav.classSearchVisible)) {
        toggleMenu(
          megaNav,
          megaNav.search[0],
          'searchActiveController',
          megaNav.classSearchVisible,
          megaNav.searchActiveController,
          bool
        )
      }
    }

    function initSearch (megaNav) {
      if (megaNav.search.length == 0) return
      // toggle search
      megaNav.searchToggles = document.querySelectorAll(
        '[aria-controls="' + megaNav.search[0].getAttribute('id') + '"]'
      )
      for (let i = 0; i < megaNav.searchToggles.length; i++) {
        (function (i) {
          megaNav.searchToggles[i].addEventListener('click', function (event) {
            // toggle search
            toggleMenu(
              megaNav,
              megaNav.search[0],
              'searchActiveController',
              megaNav.classSearchVisible,
              megaNav.searchToggles[i],
              true
            )
            // close nav if it was open
            if (Util.hasClass(megaNav.menu[0], megaNav.classNavVisible)) {
              toggleMenu(
                megaNav,
                megaNav.menu[0],
                'menuActiveController',
                megaNav.classNavVisible,
                megaNav.menuActiveController,
                false
              )
            }
            // close subnavigation if open
            closeSubNav(megaNav, false)
            resetNavAppearance(megaNav) // reset nav expanded appearance
          })
        })(i)
      }
    }

    function initMenu (megaNav) {
      if (megaNav.menu.length == 0) return
      // toggle nav
      megaNav.menuToggles = document.querySelectorAll(
        '[aria-controls="' + megaNav.menu[0].getAttribute('id') + '"]'
      )
      for (let i = 0; i < megaNav.menuToggles.length; i++) {
        (function (i) {
          megaNav.menuToggles[i].addEventListener('click', function (event) {
            // toggle nav
            toggleMenu(
              megaNav,
              megaNav.menu[0],
              'menuActiveController',
              megaNav.classNavVisible,
              megaNav.menuToggles[i],
              true
            )
            // close search if it was open
            if (Util.hasClass(megaNav.search[0], megaNav.classSearchVisible)) {
              toggleMenu(
                megaNav,
                megaNav.search[0],
                'searchActiveController',
                megaNav.classSearchVisible,
                megaNav.searchActiveController,
                false
              )
            }
            resetNavAppearance(megaNav) // reset nav expanded appearance
          })
        })(i)
      }
    }

    function toggleMenu (
      megaNav,
      element,
      controller,
      visibleClass,
      toggle,
      moveFocus
    ) {
      const menuIsVisible = Util.hasClass(element, visibleClass)
      Util.toggleClass(element, visibleClass, !menuIsVisible)
      Util.toggleClass(toggle, megaNav.classIconBtn, !menuIsVisible)
      menuIsVisible
        ? toggle.removeAttribute('aria-expanded')
        : toggle.setAttribute('aria-expanded', 'true')
      if (menuIsVisible) {
        if (toggle && moveFocus) toggle.focus()
        megaNav[controller] = false
      } else {
        if (toggle) megaNav[controller] = toggle
        getFirstFocusable(element).focus() // move focus to first focusable element
      }
    }

    function getFirstFocusable (element) {
      const focusableEle = element.querySelectorAll(
        '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary'
      )
      let firstFocusable = false
      for (let i = 0; i < focusableEle.length; i++) {
        if (
          focusableEle[i].offsetWidth ||
          focusableEle[i].offsetHeight ||
          focusableEle[i].getClientRects().length
        ) {
          firstFocusable = focusableEle[i]
          break
        }
      }
      return firstFocusable
    }

    function initSubNav (megaNav) {
      // toggle subnavigation visibility
      megaNav.element.addEventListener('click', function (event) {
        toggleSubNav(megaNav, event, 'click')
      })

      if (megaNav.hover) {
        // data-hover="on" => use mouse events
        megaNav.element.addEventListener('mouseover', function (event) {
          if (megaNav.layout != 'desktop') return
          toggleSubNav(megaNav, event, 'mouseover')
        })

        megaNav.element.addEventListener('mouseout', function (event) {
          if (megaNav.layout != 'desktop') return
          const mainItem = event.target.closest('.js-mega-nav__item')
          if (!mainItem) return
          const triggerBtn = mainItem.getElementsByClassName(
            'js-mega-nav__control'
          )
          if (triggerBtn.length < 1) return
          const itemExpanded = Util.hasClass(mainItem, megaNav.itemExpClass)
          if (!itemExpanded) return
          const mainItemHover = event.relatedTarget
          if (mainItemHover && mainItem.contains(mainItemHover)) return

          Util.toggleClass(mainItem, megaNav.itemExpClass, !itemExpanded)
          itemExpanded
            ? triggerBtn[0].removeAttribute('aria-expanded')
            : triggerBtn[0].setAttribute('aria-expanded', 'true')
        })
      }
    }

    function toggleSubNav (megaNav, event, eventType) {
      const triggerBtn = event.target.closest('.js-mega-nav__control')
      if (!triggerBtn) return
      const mainItem = triggerBtn.closest('.js-mega-nav__item')
      if (!mainItem) return
      const itemExpanded = Util.hasClass(mainItem, megaNav.itemExpClass)
      if (
        megaNav.hover &&
        itemExpanded &&
        megaNav.layout == 'desktop' &&
        eventType != 'click'
      ) {
        return
      }
      Util.toggleClass(mainItem, megaNav.itemExpClass, !itemExpanded)
      itemExpanded
        ? triggerBtn.removeAttribute('aria-expanded')
        : triggerBtn.setAttribute('aria-expanded', 'true')
      if (megaNav.layout == 'desktop' && !itemExpanded) {
        closeSubNav(megaNav, mainItem)
      }
      // close search if open
      closeSearch(megaNav, false)
      resetNavAppearance(megaNav) // reset nav expanded appearance
    }

    function closeSubNav (megaNav, selectedItem) {
      // close subnav when a new sub nav element is open
      if (megaNav.menuItems.length == 0) return
      for (let i = 0; i < megaNav.menuItems.length; i++) {
        if (megaNav.menuItems[i] != selectedItem) closeSingleSubnav(megaNav, i)
      }
    }

    function closeSingleSubnav (megaNav, index) {
      Util.removeClass(megaNav.menuItems[index], megaNav.itemExpClass)
      const triggerBtn = megaNav.menuItems[index].getElementsByClassName(
        'js-mega-nav__control'
      )
      if (triggerBtn.length > 0) triggerBtn[0].removeAttribute('aria-expanded')
    }

    function triggerDropdownPosition (megaNav) {
      // emit custom event to properly place dropdown elements - viewport awarness
      if (megaNav.dropdown.length == 0) return
      for (let i = 0; i < megaNav.dropdown.length; i++) {
        megaNav.dropdown[i].dispatchEvent(new CustomEvent('placeDropdown'))
      }
    }

    function resetNavAppearance (megaNav) {
      (megaNav.element.getElementsByClassName(megaNav.itemExpClass).length >
        0 &&
        megaNav.layout == 'desktop') ||
      megaNav.element.getElementsByClassName(megaNav.classSearchVisible)
        .length > 0 ||
      (megaNav.element.getElementsByClassName(megaNav.classNavVisible).length >
        0 &&
        megaNav.layout == 'mobile')
        ? Util.addClass(megaNav.element, megaNav.expandedClass)
        : Util.removeClass(megaNav.element, megaNav.expandedClass)
    }

    // initialize the MegaNav objects
    const megaNav = document.getElementsByClassName('js-mega-nav')
    if (megaNav.length > 0) {
      const megaNavArray = []
      for (let i = 0; i < megaNav.length; i++) {
        (function (i) {
          megaNavArray.push(new MegaNav(megaNav[i]))
        })(i)
      }

      // key events
      window.addEventListener('keyup', function (event) {
        if (
          (event.keyCode && event.keyCode == 27) ||
          (event.key && event.key.toLowerCase() == 'escape')
        ) {
          // listen for esc key events
          for (var i = 0; i < megaNavArray.length; i++) {
            (function (i) {
              closeNavigation(megaNavArray[i])
            })(i)
          }
        }
        // listen for tab key
        if (
          (event.keyCode && event.keyCode == 9) ||
          (event.key && event.key.toLowerCase() == 'tab')
        ) {
          // close search or nav if it looses focus
          for (var i = 0; i < megaNavArray.length; i++) {
            (function (i) {
              closeFocusNavigation(megaNavArray[i])
            })(i)
          }
        }
      })

      window.addEventListener('click', function (event) {
        if (!event.target.closest('.js-mega-nav')) {
          closeNavigation(megaNavArray[0])
        }
      })

      // resize - update menu layout
      let resizingId = false
      const customEvent = new CustomEvent('update-menu-layout')
      window.addEventListener('resize', function (event) {
        clearTimeout(resizingId)
        resizingId = setTimeout(doneResizing, 200)
      })

      function doneResizing () {
        for (let i = 0; i < megaNavArray.length; i++) {
          (function (i) {
            megaNavArray[i].element.dispatchEvent(customEvent)
          })(i)
        }
      }

      window.requestAnimationFrame // init mega site nav layout
        ? window.requestAnimationFrame(doneResizing)
        : doneResizing()
    }
  })();
  // File#: _1_diagonal-movement
  // Usage: codyhouse.co/license
  /*
  Modified version of the jQuery-menu-aim plugin
  https://github.com/kamens/jQuery-menu-aim
  - Replaced jQuery with Vanilla JS
  - Minor changes
*/
  (function () {
    const menuAim = function (opts) {
      init(opts)
    }

    window.menuAim = menuAim

    function init (opts) {
      let activeRow = null
      const mouseLocs = []
      let lastDelayLoc = null
      let timeoutId = null
      const options = Util.extend(
        {
          menu: '',
          rows: false, // if false, get direct children - otherwise pass nodes list
          submenuSelector: '*',
          submenuDirection: 'right',
          tolerance: 75, // bigger = more forgivey when entering submenu
          enter: function () {},
          exit: function () {},
          activate: function () {},
          deactivate: function () {},
          exitMenu: function () {}
        },
        opts
      )
      const menu = options.menu

      const MOUSE_LOCS_TRACKED = 3 // number of past mouse locations to track
      const DELAY = 300 // ms delay when user appears to be entering submenu

      /**
       * Keep track of the last few locations of the mouse.
       */
      const mouseMoveFallback = function (event) {
        !window.requestAnimationFrame
          ? mousemoveDocument(event)
          : window.requestAnimationFrame(function () {
            mousemoveDocument(event)
          })
      }

      var mousemoveDocument = function (e) {
        mouseLocs.push({ x: e.pageX, y: e.pageY })

        if (mouseLocs.length > MOUSE_LOCS_TRACKED) {
          mouseLocs.shift()
        }
      }

      /**
       * Cancel possible row activations when leaving the menu entirely
       */
      const mouseleaveMenu = function () {
        if (timeoutId) {
          clearTimeout(timeoutId)
        }

        // If exitMenu is supplied and returns true, deactivate the
        // currently active row on menu exit.
        if (options.exitMenu(this)) {
          if (activeRow) {
            options.deactivate(activeRow)
          }

          activeRow = null
        }
      }

      /**
       * Trigger a possible row activation whenever entering a new row.
       */
      const mouseenterRow = function () {
        if (timeoutId) {
          // Cancel any previous activation delays
          clearTimeout(timeoutId)
        }

        options.enter(this)
        possiblyActivate(this)
      }
      const mouseleaveRow = function () {
        options.exit(this)
      }

      /*
       * Immediately activate a row if the user clicks on it.
       */
      const clickRow = function () {
        activate(this)
      }

      /**
       * Activate a menu row.
       */
      var activate = function (row) {
        if (row == activeRow) {
          return
        }

        if (activeRow) {
          options.deactivate(activeRow)
        }

        options.activate(row)
        activeRow = row
      }

      /**
       * Possibly activate a menu row. If mouse movement indicates that we
       * shouldn't activate yet because user may be trying to enter
       * a submenu's content, then delay and check again later.
       */
      var possiblyActivate = function (row) {
        const delay = activationDelay()

        if (delay) {
          timeoutId = setTimeout(function () {
            possiblyActivate(row)
          }, delay)
        } else {
          activate(row)
        }
      }

      /**
       * Return the amount of time that should be used as a delay before the
       * currently hovered row is activated.
       *
       * Returns 0 if the activation should happen immediately. Otherwise,
       * returns the number of milliseconds that should be delayed before
       * checking again to see if the row should be activated.
       */
      var activationDelay = function () {
        if (!activeRow || !Util.is(activeRow, options.submenuSelector)) {
          // If there is no other submenu row already active, then
          // go ahead and activate immediately.
          return 0
        }

        function getOffset (element) {
          const rect = element.getBoundingClientRect()
          return {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset
          }
        }

        const offset = getOffset(menu)
        const upperLeft = {
          x: offset.left,
          y: offset.top - options.tolerance
        }
        const upperRight = {
          x: offset.left + menu.offsetWidth,
          y: upperLeft.y
        }
        const lowerLeft = {
          x: offset.left,
          y: offset.top + menu.offsetHeight + options.tolerance
        }
        const lowerRight = {
          x: offset.left + menu.offsetWidth,
          y: lowerLeft.y
        }
        const loc = mouseLocs[mouseLocs.length - 1]
        let prevLoc = mouseLocs[0]

        if (!loc) {
          return 0
        }

        if (!prevLoc) {
          prevLoc = loc
        }

        if (
          prevLoc.x < offset.left ||
          prevLoc.x > lowerRight.x ||
          prevLoc.y < offset.top ||
          prevLoc.y > lowerRight.y
        ) {
          // If the previous mouse location was outside of the entire
          // menu's bounds, immediately activate.
          return 0
        }

        if (
          lastDelayLoc &&
          loc.x == lastDelayLoc.x &&
          loc.y == lastDelayLoc.y
        ) {
          // If the mouse hasn't moved since the last time we checked
          // for activation status, immediately activate.
          return 0
        }

        // Detect if the user is moving towards the currently activated
        // submenu.
        //
        // If the mouse is heading relatively clearly towards
        // the submenu's content, we should wait and give the user more
        // time before activating a new row. If the mouse is heading
        // elsewhere, we can immediately activate a new row.
        //
        // We detect this by calculating the slope formed between the
        // current mouse location and the upper/lower right points of
        // the menu. We do the same for the previous mouse location.
        // If the current mouse location's slopes are
        // increasing/decreasing appropriately compared to the
        // previous's, we know the user is moving toward the submenu.
        //
        // Note that since the y-axis increases as the cursor moves
        // down the screen, we are looking for the slope between the
        // cursor and the upper right corner to decrease over time, not
        // increase (somewhat counterintuitively).
        function slope (a, b) {
          return (b.y - a.y) / (b.x - a.x)
        }

        let decreasingCorner = upperRight
        let increasingCorner = lowerRight

        // Our expectations for decreasing or increasing slope values
        // depends on which direction the submenu opens relative to the
        // main menu. By default, if the menu opens on the right, we
        // expect the slope between the cursor and the upper right
        // corner to decrease over time, as explained above. If the
        // submenu opens in a different direction, we change our slope
        // expectations.
        if (options.submenuDirection == 'left') {
          decreasingCorner = lowerLeft
          increasingCorner = upperLeft
        } else if (options.submenuDirection == 'below') {
          decreasingCorner = lowerRight
          increasingCorner = lowerLeft
        } else if (options.submenuDirection == 'above') {
          decreasingCorner = upperLeft
          increasingCorner = upperRight
        }

        const decreasingSlope = slope(loc, decreasingCorner)
        const increasingSlope = slope(loc, increasingCorner)
        const prevDecreasingSlope = slope(prevLoc, decreasingCorner)
        const prevIncreasingSlope = slope(prevLoc, increasingCorner)

        if (
          decreasingSlope < prevDecreasingSlope &&
          increasingSlope > prevIncreasingSlope
        ) {
          // Mouse is moving from previous location towards the
          // currently activated submenu. Delay before activating a
          // new menu row, because user may be moving into submenu.
          lastDelayLoc = loc
          return DELAY
        }

        lastDelayLoc = null
        return 0
      }

      const reset = function (triggerDeactivate) {
        if (timeoutId) {
          clearTimeout(timeoutId)
        }

        if (activeRow && triggerDeactivate) {
          options.deactivate(activeRow)
        }

        activeRow = null
      }

      const destroyInstance = function () {
        menu.removeEventListener('mouseleave', mouseleaveMenu)
        document.removeEventListener('mousemove', mouseMoveFallback)
        if (rows.length > 0) {
          for (let i = 0; i < rows.length; i++) {
            rows[i].removeEventListener('mouseenter', mouseenterRow)
            rows[i].removeEventListener('mouseleave', mouseleaveRow)
            rows[i].removeEventListener('click', clickRow)
          }
        }
      }

      /**
       * Hook up initial menu events
       */
      menu.addEventListener('mouseleave', mouseleaveMenu)
      var rows = options.rows ? options.rows : menu.children
      if (rows.length > 0) {
        for (let i = 0; i < rows.length; i++) {
          (function (i) {
            rows[i].addEventListener('mouseenter', mouseenterRow)
            rows[i].addEventListener('mouseleave', mouseleaveRow)
            rows[i].addEventListener('click', clickRow)
          })(i)
        }
      }

      document.addEventListener('mousemove', mouseMoveFallback)

      /* Reset/destroy menu */
      menu.addEventListener('reset', function (event) {
        reset(event.detail)
      })
      menu.addEventListener('destroy', destroyInstance)
    }
  })();
  // File#: _2_dropdown
  // Usage: codyhouse.co/license
  (function () {
    const Dropdown = function (element) {
      this.element = element
      this.trigger = this.element.getElementsByClassName(
        'js-dropdown__trigger'
      )[0]
      this.dropdown =
        this.element.getElementsByClassName('js-dropdown__menu')[0]
      this.triggerFocus = false
      this.dropdownFocus = false
      this.hideInterval = false
      // sublevels
      this.dropdownSubElements = this.element.getElementsByClassName(
        'js-dropdown__sub-wrapper'
      )
      this.prevFocus = false // store element that was in focus before focus changed
      this.addDropdownEvents()
    }

    Dropdown.prototype.addDropdownEvents = function () {
      // place dropdown
      const self = this
      this.placeElement()
      this.element.addEventListener('placeDropdown', function (event) {
        self.placeElement()
      })
      // init dropdown
      this.initElementEvents(this.trigger, this.triggerFocus) // this is used to trigger the primary dropdown
      this.initElementEvents(this.dropdown, this.dropdownFocus) // this is used to trigger the primary dropdown
      // init sublevels
      this.initSublevels() // if there are additional sublevels -> bind hover/focus events
    }

    Dropdown.prototype.placeElement = function () {
      // remove inline style first
      this.dropdown.removeAttribute('style')
      // check dropdown position
      const triggerPosition = this.trigger.getBoundingClientRect()
      const isRight =
        window.innerWidth <
        triggerPosition.left +
          parseInt(getComputedStyle(this.dropdown).getPropertyValue('width'))

      const xPosition = isRight
        ? 'right: 0px; left: auto;'
        : 'left: 0px; right: auto;'
      this.dropdown.setAttribute('style', xPosition)
    }

    Dropdown.prototype.initElementEvents = function (element, bool) {
      const self = this
      element.addEventListener('mouseenter', function () {
        bool = true
        self.showDropdown()
      })
      element.addEventListener('focus', function () {
        self.showDropdown()
      })
      element.addEventListener('mouseleave', function () {
        bool = false
        self.hideDropdown()
      })
      element.addEventListener('focusout', function () {
        self.hideDropdown()
      })
    }

    Dropdown.prototype.showDropdown = function () {
      if (this.hideInterval) clearInterval(this.hideInterval)
      // remove style attribute
      this.dropdown.removeAttribute('style')
      this.placeElement()
      this.showLevel(this.dropdown, true)
    }

    Dropdown.prototype.hideDropdown = function () {
      const self = this
      if (this.hideInterval) clearInterval(this.hideInterval)
      this.hideInterval = setTimeout(function () {
        const dropDownFocus = document.activeElement.closest('.js-dropdown')
        const inFocus = dropDownFocus && dropDownFocus == self.element
        // if not in focus and not hover -> hide
        if (!self.triggerFocus && !self.dropdownFocus && !inFocus) {
          self.hideLevel(self.dropdown, true)
          // make sure to hide sub/dropdown
          self.hideSubLevels()
          self.prevFocus = false
        }
      }, 300)
    }

    Dropdown.prototype.initSublevels = function () {
      const self = this
      const dropdownMenu =
        this.element.getElementsByClassName('js-dropdown__menu')
      for (let i = 0; i < dropdownMenu.length; i++) {
        const listItems = dropdownMenu[i].children
        // bind hover
        new menuAim({
          menu: dropdownMenu[i],
          activate: function (row) {
            const subList = row.getElementsByClassName('js-dropdown__menu')[0]
            if (!subList) return
            Util.addClass(row.querySelector('a'), 'dropdown__item--hover')
            self.showLevel(subList)
          },
          deactivate: function (row) {
            const subList = row.getElementsByClassName('dropdown__menu')[0]
            if (!subList) return
            Util.removeClass(row.querySelector('a'), 'dropdown__item--hover')
            self.hideLevel(subList)
          },
          submenuSelector: '.js-dropdown__sub-wrapper'
        })
      }
      // store focus element before change in focus
      this.element.addEventListener('keydown', function (event) {
        if (
          (event.keyCode && event.keyCode == 9) ||
          (event.key && event.key == 'Tab')
        ) {
          self.prevFocus = document.activeElement
        }
      })
      // make sure that sublevel are visible when their items are in focus
      this.element.addEventListener('keyup', function (event) {
        if (
          (event.keyCode && event.keyCode == 9) ||
          (event.key && event.key == 'Tab')
        ) {
          // focus has been moved -> make sure the proper classes are added to subnavigation
          const focusElement = document.activeElement
          const focusElementParent = focusElement.closest('.js-dropdown__menu')
          const focusElementSibling = focusElement.nextElementSibling

          // if item in focus is inside submenu -> make sure it is visible
          if (
            focusElementParent &&
            !Util.hasClass(focusElementParent, 'dropdown__menu--is-visible')
          ) {
            self.showLevel(focusElementParent)
          }
          // if item in focus triggers a submenu -> make sure it is visible
          if (
            focusElementSibling &&
            !Util.hasClass(focusElementSibling, 'dropdown__menu--is-visible')
          ) {
            self.showLevel(focusElementSibling)
          }

          // check previous element in focus -> hide sublevel if required
          if (!self.prevFocus) return
          const prevFocusElementParent =
            self.prevFocus.closest('.js-dropdown__menu')
          const prevFocusElementSibling = self.prevFocus.nextElementSibling

          if (!prevFocusElementParent) return

          // element in focus and element prev in focus are siblings
          if (
            focusElementParent &&
            focusElementParent == prevFocusElementParent
          ) {
            if (prevFocusElementSibling) {
              self.hideLevel(prevFocusElementSibling)
            }
            return
          }

          // element in focus is inside submenu triggered by element prev in focus
          if (
            prevFocusElementSibling &&
            focusElementParent &&
            focusElementParent == prevFocusElementSibling
          ) {
            return
          }

          // shift tab -> element in focus triggers the submenu of the element prev in focus
          if (
            focusElementSibling &&
            prevFocusElementParent &&
            focusElementSibling == prevFocusElementParent
          ) {
            return
          }

          const focusElementParentParent =
            focusElementParent.parentNode.closest('.js-dropdown__menu')

          // shift tab -> element in focus is inside the dropdown triggered by a siblings of the element prev in focus
          if (
            focusElementParentParent &&
            focusElementParentParent == prevFocusElementParent
          ) {
            if (prevFocusElementSibling) {
              self.hideLevel(prevFocusElementSibling)
            }
            return
          }

          if (
            prevFocusElementParent &&
            Util.hasClass(prevFocusElementParent, 'dropdown__menu--is-visible')
          ) {
            self.hideLevel(prevFocusElementParent)
          }
        }
      })
    }

    Dropdown.prototype.hideSubLevels = function () {
      const visibleSubLevels = this.dropdown.getElementsByClassName(
        'dropdown__menu--is-visible'
      )
      if (visibleSubLevels.length == 0) return
      while (visibleSubLevels[0]) {
        this.hideLevel(visibleSubLevels[0])
      }
      const hoveredItems = this.dropdown.getElementsByClassName(
        'dropdown__item--hover'
      )
      while (hoveredItems[0]) {
        Util.removeClass(hoveredItems[0], 'dropdown__item--hover')
      }
    }

    Dropdown.prototype.showLevel = function (level, bool) {
      if (bool == undefined) {
        // check if the sublevel needs to be open to the left
        Util.removeClass(level, 'dropdown__menu--left')
        const boundingRect = level.getBoundingClientRect()
        if (
          window.innerWidth - boundingRect.right < 5 &&
          boundingRect.left + window.scrollX > 2 * boundingRect.width
        ) {
          Util.addClass(level, 'dropdown__menu--left')
        }
      }
      Util.addClass(level, 'dropdown__menu--is-visible')
      Util.removeClass(level, 'dropdown__menu--is-hidden')
    }

    Dropdown.prototype.hideLevel = function (level, bool) {
      if (!Util.hasClass(level, 'dropdown__menu--is-visible')) return
      Util.removeClass(level, 'dropdown__menu--is-visible')
      Util.addClass(level, 'dropdown__menu--is-hidden')

      level.addEventListener('transitionend', function cb (event) {
        if (event.propertyName != 'opacity') return
        level.removeEventListener('transitionend', cb)
        if (Util.hasClass(level, 'dropdown__menu--is-hidden')) {
          Util.removeClass(
            level,
            'dropdown__menu--is-hidden dropdown__menu--left'
          )
        }
        if (bool && !Util.hasClass(level, 'dropdown__menu--is-visible')) {
          level.setAttribute('style', 'width: 0px; overflow: hidden;')
        }
      })
    }

    window.Dropdown = Dropdown

    const dropdown = document.getElementsByClassName('js-dropdown')
    if (dropdown.length > 0) {
      // init Dropdown objects
      for (let i = 0; i < dropdown.length; i++) {
        (function (i) {
          new Dropdown(dropdown[i])
        })(i)
      }
    }
  })();
  // File#: _1_tabs
  // Usage: codyhouse.co/license
  (function () {
    const Tab = function (element) {
      this.element = element
      this.tabList =
        this.element.getElementsByClassName('js-tabs__controls')[0]
      this.listItems = this.tabList.getElementsByTagName('li')
      this.triggers = this.tabList.getElementsByTagName('a')
      this.panelsList =
        this.element.getElementsByClassName('js-tabs__panels')[0]
      this.panels = Util.getChildrenByClassName(
        this.panelsList,
        'js-tabs__panel'
      )
      this.hideClass = 'is-hidden'
      this.customShowClass = this.element.getAttribute('data-show-panel-class')
        ? this.element.getAttribute('data-show-panel-class')
        : false
      this.layout = this.element.getAttribute('data-tabs-layout')
        ? this.element.getAttribute('data-tabs-layout')
        : 'horizontal'
      // deep linking options
      this.deepLinkOn = this.element.getAttribute('data-deep-link') == 'on'
      // init tabs
      this.initTab()
    }

    Tab.prototype.initTab = function () {
      // set initial aria attributes
      this.tabList.setAttribute('role', 'tablist')
      for (let i = 0; i < this.triggers.length; i++) {
        const bool = i == 0
        const panelId = this.panels[i].getAttribute('id')
        this.listItems[i].setAttribute('role', 'presentation')
        Util.setAttributes(this.triggers[i], {
          role: 'tab',
          'aria-selected': bool,
          'aria-controls': panelId,
          id: 'tab-' + panelId
        })
        Util.addClass(this.triggers[i], 'js-tabs__trigger')
        Util.setAttributes(this.panels[i], {
          role: 'tabpanel',
          'aria-labelledby': 'tab-' + panelId
        })
        Util.toggleClass(this.panels[i], this.hideClass, !bool)

        if (!bool) this.triggers[i].setAttribute('tabindex', '-1')
      }

      // listen for Tab events
      this.initTabEvents()

      // check deep linking option
      this.initDeepLink()
    }

    Tab.prototype.initTabEvents = function () {
      const self = this
      // click on a new tab -> select content
      this.tabList.addEventListener('click', function (event) {
        if (event.target.closest('.js-tabs__trigger')) {
          self.triggerTab(event.target.closest('.js-tabs__trigger'), event)
        }
      })
      // arrow keys to navigate through tabs
      this.tabList.addEventListener('keydown', function (event) {
        if (!event.target.closest('.js-tabs__trigger')) return
        if (tabNavigateNext(event, self.layout)) {
          event.preventDefault()
          self.selectNewTab('next')
        } else if (tabNavigatePrev(event, self.layout)) {
          event.preventDefault()
          self.selectNewTab('prev')
        }
      })
    }

    Tab.prototype.selectNewTab = function (direction) {
      const selectedTab = this.tabList.querySelector('[aria-selected="true"]')
      let index = Util.getIndexInArray(this.triggers, selectedTab)
      index = direction == 'next' ? index + 1 : index - 1
      // make sure index is in the correct interval
      // -> from last element go to first using the right arrow, from first element go to last using the left arrow
      if (index < 0) index = this.listItems.length - 1
      if (index >= this.listItems.length) index = 0
      this.triggerTab(this.triggers[index])
      this.triggers[index].focus()
    }

    Tab.prototype.triggerTab = function (tabTrigger, event) {
      const self = this
      event && event.preventDefault()
      const index = Util.getIndexInArray(this.triggers, tabTrigger)
      // no need to do anything if tab was already selected
      if (this.triggers[index].getAttribute('aria-selected') == 'true') return

      for (let i = 0; i < this.triggers.length; i++) {
        const bool = i == index
        Util.toggleClass(this.panels[i], this.hideClass, !bool)
        if (this.customShowClass) {
          Util.toggleClass(this.panels[i], this.customShowClass, bool)
        }
        this.triggers[i].setAttribute('aria-selected', bool)
        bool
          ? this.triggers[i].setAttribute('tabindex', '0')
          : this.triggers[i].setAttribute('tabindex', '-1')
      }

      // update url if deepLink is on
      if (this.deepLinkOn) {
        history.replaceState(
          null,
          '',
          '#' + tabTrigger.getAttribute('aria-controls')
        )
      }
    }

    Tab.prototype.initDeepLink = function () {
      if (!this.deepLinkOn) return
      const hash = window.location.hash.substr(1)
      const self = this
      if (!hash || hash == '') return
      for (var i = 0; i < this.panels.length; i++) {
        if (this.panels[i].getAttribute('id') == hash) {
          this.triggerTab(this.triggers[i], false)
          setTimeout(function () {
            self.panels[i].scrollIntoView(true)
          })
          break
        }
      }
    }

    function tabNavigateNext (event, layout) {
      if (
        layout == 'horizontal' &&
        ((event.keyCode && event.keyCode == 39) ||
          (event.key && event.key == 'ArrowRight'))
      ) {
        return true
      } else if (
        layout == 'vertical' &&
        ((event.keyCode && event.keyCode == 40) ||
          (event.key && event.key == 'ArrowDown'))
      ) {
        return true
      } else {
        return false
      }
    }

    function tabNavigatePrev (event, layout) {
      if (
        layout == 'horizontal' &&
        ((event.keyCode && event.keyCode == 37) ||
          (event.key && event.key == 'ArrowLeft'))
      ) {
        return true
      } else if (
        layout == 'vertical' &&
        ((event.keyCode && event.keyCode == 38) ||
          (event.key && event.key == 'ArrowUp'))
      ) {
        return true
      } else {
        return false
      }
    }

    // initialize the Tab objects
    const tabs = document.getElementsByClassName('js-tabs')
    if (tabs.length > 0) {
      for (let i = 0; i < tabs.length; i++) {
        (function (i) {
          new Tab(tabs[i])
        })(i)
      }
    }
  })()
}
