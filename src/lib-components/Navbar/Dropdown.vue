<template>
    <!-- 👇 icon buttons --desktop -->
    <li class="mega-nav__item">
        <div class="dropdown inline-block js-dropdown">
            <div class="mega-nav__icon-btn dropdown__wrapper inline-block">
                <a
                    href="#0"
                    class="color-inherit flex height-100% width-100% flex-center dropdown__trigger js-dropdown__trigger"
                >
                    <svg class="icon" viewBox="0 0 24 24">
                        <title>Go to account settings</title>
                        <g
                            class="icon__group"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="square"
                            stroke-miterlimit="10"
                            stroke-width="2"
                        >
                            <circle cx="12" cy="6" r="4" />
                            <path d="M12 13a8 8 0 00-8 8h16a8 8 0 00-8-8z" />
                        </g>
                    </svg>
                </a>

                <ul class="dropdown__menu js-dropdown__menu" aria-label="submenu">
                    <li>
                        <a href="#0" class="dropdown__item">Profile</a>
                    </li>
                    <li>
                        <a href="#0" class="dropdown__item">Notifications</a>
                    </li>
                    <li>
                        <a href="#0" class="dropdown__item">Messages</a>
                    </li>
                    <li class="dropdown__separator" role="separator"></li>
                    <li>
                        <a href="#0" class="dropdown__item">Account Settings</a>
                    </li>
                    <li>
                        <a href="#0" class="dropdown__item">Log out</a>
                    </li>
                </ul>
            </div>
        </div>
    </li>
</template>