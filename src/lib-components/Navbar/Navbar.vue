<template>
    <header class="mega-nav mega-nav--mobile mega-nav--desktop@md position-relative js-mega-nav">
        <div class="mega-nav__container">
            <!-- 👇 logo -->
            <a href="#0" class="mega-nav__logo">
                <svg width="104" height="30" viewBox="0 0 104 30">
                    <title>Go to homepage</title>
                    <path
                        d="M37.54 24.08V3.72h4.92v16.37h8.47v4zM60.47 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8 8 0 015.64-2.18 8.07 8.07 0 015.68 2.2 8.49 8.49 0 012 5.69 8.63 8.63 0 01-1.78 5.38 7.6 7.6 0 01-5.89 2.49zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.79 3-2.79 4.26.32 4.23 2.82 4.23zM95.49 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8.4 8.4 0 0111.31 0 8.43 8.43 0 012 5.69 8.6 8.6 0 01-1.77 5.38 7.6 7.6 0 01-5.89 2.51zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.8 3-2.8 4.26.31 4.23 2.83 4.23zM77.66 30c-5.74 0-7-3.25-7.23-4.52l4.6-.26c.41.91 1.17 1.41 2.76 1.41a2.45 2.45 0 002.82-2.53v-2.68a7 7 0 01-1.7 1.75 6.12 6.12 0 01-5.85-.08c-2.41-1.37-3-4.25-3-6.66 0-.89.12-3.67 1.45-5.42a5.67 5.67 0 014.64-2.4c1.2 0 3 .25 4.46 2.82V8.81h4.85v15.33a5.2 5.2 0 01-2.12 4.32A9.92 9.92 0 0177.66 30zm.15-9.66c2.53 0 2.81-2.69 2.81-3.91s-.31-4-2.81-4-2.81 2.8-2.81 4 .27 3.91 2.81 3.91zM55.56 3.72h9.81v2.41h-9.81z"
                        fill="var(--color-contrast-higher)"
                    />
                    <circle cx="15" cy="15" r="15" fill="var(--color-primary)" />
                </svg>
            </a>

            <!-- 👇 icon buttons --mobile -->
            <div class="mega-nav__icon-btns mega-nav__icon-btns--mobile">
                <a href="#0" class="mega-nav__icon-btn">
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

                <button
                    class="reset mega-nav__icon-btn mega-nav__icon-btn--search js-tab-focus"
                    aria-label="Toggle search"
                    aria-controls="mega-nav-search"
                >
                    <svg class="icon" viewBox="0 0 24 24">
                        <g
                            class="icon__group"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="square"
                            stroke-miterlimit="10"
                            stroke-width="2"
                        >
                            <path d="M4.222 4.222l15.556 15.556" />
                            <path d="M19.778 4.222L4.222 19.778" />
                            <circle cx="9.5" cy="9.5" r="6.5" />
                        </g>
                    </svg>
                </button>

                <button
                    class="reset mega-nav__icon-btn mega-nav__icon-btn--menu js-tab-focus"
                    aria-label="Toggle menu"
                    aria-controls="mega-nav-navigation"
                >
                    <svg class="icon" viewBox="0 0 24 24">
                        <g
                            class="icon__group"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="square"
                            stroke-miterlimit="10"
                            stroke-width="2"
                        >
                            <path d="M1 6h22" />
                            <path d="M1 12h22" />
                            <path d="M1 18h22" />
                        </g>
                    </svg>
                </button>
            </div>

            <div
                class="mega-nav__nav js-mega-nav__nav"
                id="mega-nav-navigation"
                role="navigation"
                aria-label="Main"
            >
                <div class="mega-nav__nav-inner">
                    <ul class="mega-nav__items">
                        <li class="mega-nav__label">Menu</li>

                        <!-- 👇 layout 1 -> tabbed content -->
                        <li class="mega-nav__item js-mega-nav__item">
                            <button
                                class="reset mega-nav__control js-mega-nav__control js-tab-focus"
                            >
                                Products
                                <i class="mega-nav__arrow-icon" aria-hidden="true">
                                    <svg class="icon" viewBox="0 0 16 16">
                                        <g
                                            class="icon__group"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="square"
                                            stroke-miterlimit="10"
                                            stroke-width="2"
                                        >
                                            <path d="M2 2l12 12" />
                                            <path d="M14 2L2 14" />
                                        </g>
                                    </svg>
                                </i>
                            </button>

                            <div class="mega-nav__sub-nav-wrapper">
                                <div class="mega-nav__sub-nav mega-nav__sub-nav--layout-1">
                                    <!-- 👇 links - visible on mobile -->
                                    <ul class="mega-nav__sub-items">
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">
                                                <span class="flex items-center gap-xs">
                                                    <img
                                                        class="block width-lg height-lg radius-50% object-cover"
                                                        src="../../../app/assets/img/mega-site-nav-img-1.jpg"
                                                        alt="Image description"
                                                    />
                                                    <i>Product One</i>
                                                </span>
                                            </a>
                                        </li>

                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">
                                                <span class="flex items-center gap-xs">
                                                    <img
                                                        class="block width-lg height-lg radius-50% object-cover"
                                                        src="../../../app/assets/img/mega-site-nav-img-2.jpg"
                                                        alt="Image description"
                                                    />
                                                    <i>Product Two</i>
                                                </span>
                                            </a>
                                        </li>

                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">
                                                <span class="flex items-center gap-xs">
                                                    <img
                                                        class="block width-lg height-lg radius-50% object-cover"
                                                        src="../../../app/assets/img/mega-site-nav-img-3.jpg"
                                                        alt="Image description"
                                                    />
                                                    <i>Product Three</i>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>

                                    <!-- 👇 tabs - visible on desktop -->
                                    <div
                                        class="mega-nav__tabs grid gap-lg js-tabs"
                                        data-tabs-layout="vertical"
                                    >
                                        <ul
                                            class="col-4 mega-nav__tabs-controls js-tabs__controls"
                                            aria-label="Select a product"
                                        >
                                            <li>
                                                <a
                                                    href="#tabProduct1"
                                                    class="mega-nav__tabs-control js-tab-focus"
                                                    aria-selected="true"
                                                >
                                                    <span class="flex items-center gap-xs">
                                                        <img
                                                            class="block width-lg height-lg radius-50% object-cover"
                                                            src="../../../app/assets/img/mega-site-nav-img-1.jpg"
                                                            alt="Image description"
                                                        />

                                                        <i class="margin-right-xxxs">Product One</i>

                                                        <svg
                                                            class="icon icon--xs margin-left-auto"
                                                            viewBox="0 0 16 16"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M5,2l6,6L5,14"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-linecap="square"
                                                                stroke-miterlimit="10"
                                                                stroke-width="1"
                                                            />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="#tabProduct2"
                                                    class="mega-nav__tabs-control js-tab-focus"
                                                    aria-selected="true"
                                                >
                                                    <span class="flex items-center gap-xs">
                                                        <img
                                                            class="block width-lg height-lg radius-50% object-cover"
                                                            src="../../../app/assets/img/mega-site-nav-img-2.jpg"
                                                            alt="Image description"
                                                        />

                                                        <i class="margin-right-xxxs">Product Two</i>

                                                        <svg
                                                            class="icon icon--xs margin-left-auto"
                                                            viewBox="0 0 16 16"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M5,2l6,6L5,14"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-linecap="square"
                                                                stroke-miterlimit="10"
                                                                stroke-width="1"
                                                            />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="#tabProduct3"
                                                    class="mega-nav__tabs-control js-tab-focus"
                                                    aria-selected="true"
                                                >
                                                    <span class="flex items-center gap-xs">
                                                        <img
                                                            class="block width-lg height-lg radius-50% object-cover"
                                                            src="../../../app/assets/img/mega-site-nav-img-3.jpg"
                                                            alt="Image description"
                                                        />

                                                        <i class="margin-right-xxxs">Product Three</i>

                                                        <svg
                                                            class="icon icon--xs margin-left-auto"
                                                            viewBox="0 0 16 16"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M5,2l6,6L5,14"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-linecap="square"
                                                                stroke-miterlimit="10"
                                                                stroke-width="1"
                                                            />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>

                                        <div class="col-8 js-tabs__panels">
                                            <section
                                                id="tabProduct1"
                                                class="mega-nav__tabs-panel js-tabs__panel"
                                            >
                                                <a
                                                    href="#0"
                                                    class="mega-nav__tabs-img margin-bottom-md"
                                                >
                                                    <img
                                                        class="block width-100%"
                                                        src="../../../app/assets/img/mega-site-nav-img-1.jpg"
                                                        alt="Image description"
                                                    />
                                                </a>

                                                <div class="text-component">
                                                    <h1 class="text-xl">Product One</h1>
                                                    <p
                                                        class="color-contrast-medium"
                                                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quaerat.</p>
                                                    <p class="flex gap-xxs">
                                                        <a
                                                            href="#0"
                                                            class="btn btn--subtle"
                                                        >Learn More</a>
                                                        <a href="#0" class="btn btn--primary">Buy</a>
                                                    </p>
                                                </div>
                                            </section>

                                            <section
                                                id="tabProduct2"
                                                class="mega-nav__tabs-panel js-tabs__panel"
                                            >
                                                <a
                                                    href="#0"
                                                    class="mega-nav__tabs-img margin-bottom-md"
                                                >
                                                    <img
                                                        class="block width-100%"
                                                        src="../../../app/assets/img/mega-site-nav-img-2.jpg"
                                                        alt="Image description"
                                                    />
                                                </a>

                                                <div class="text-component">
                                                    <h1 class="text-xl">Product Two</h1>
                                                    <p
                                                        class="color-contrast-medium"
                                                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quaerat.</p>
                                                    <p class="flex gap-xxs">
                                                        <a
                                                            href="#0"
                                                            class="btn btn--subtle"
                                                        >Learn More</a>
                                                        <a href="#0" class="btn btn--primary">Buy</a>
                                                    </p>
                                                </div>
                                            </section>

                                            <section
                                                id="tabProduct3"
                                                class="mega-nav__tabs-panel js-tabs__panel"
                                            >
                                                <a
                                                    href="#0"
                                                    class="mega-nav__tabs-img margin-bottom-md"
                                                >
                                                    <img
                                                        class="block width-100%"
                                                        src="../../../app/assets/img/mega-site-nav-img-3.jpg"
                                                        alt="Image description"
                                                    />
                                                </a>

                                                <div class="text-component">
                                                    <h1 class="text-xl">Product Three</h1>
                                                    <p
                                                        class="color-contrast-medium"
                                                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quaerat.</p>
                                                    <p class="flex gap-xxs">
                                                        <a
                                                            href="#0"
                                                            class="btn btn--subtle"
                                                        >Learn More</a>
                                                        <a href="#0" class="btn btn--primary">Buy</a>
                                                    </p>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <!-- 👇 layout 2 -> multiple lists -->
                        <li class="mega-nav__item js-mega-nav__item">
                            <button
                                class="reset mega-nav__control js-mega-nav__control js-tab-focus"
                            >
                                Lists
                                <i class="mega-nav__arrow-icon" aria-hidden="true">
                                    <svg class="icon" viewBox="0 0 16 16">
                                        <g
                                            class="icon__group"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="square"
                                            stroke-miterlimit="10"
                                            stroke-width="2"
                                        >
                                            <path d="M2 2l12 12" />
                                            <path d="M14 2L2 14" />
                                        </g>
                                    </svg>
                                </i>
                            </button>

                            <div class="mega-nav__sub-nav-wrapper">
                                <div class="mega-nav__sub-nav mega-nav__sub-nav--layout-2">
                                    <ul class="mega-nav__sub-items">
                                        <li class="mega-nav__label">Clothing</li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">All Clothing</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Coats</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Dresses</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Jackets</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Jeans</a>
                                        </li>
                                    </ul>

                                    <ul class="mega-nav__sub-items">
                                        <li class="mega-nav__label">Shoes</li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">All Shoes</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Trainers</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Heels</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Boots</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Ankle Boots</a>
                                        </li>
                                    </ul>

                                    <ul class="mega-nav__sub-items">
                                        <li class="mega-nav__label">Sports</li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">All Sports</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Basketball</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Fitness</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Football</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Golf</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Running</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Swimming</a>
                                        </li>
                                    </ul>

                                    <ul class="mega-nav__sub-items">
                                        <li class="mega-nav__label">Accessories</li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">All Accessories</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Bags</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Jewellery</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Watches</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Scarves</a>
                                        </li>
                                    </ul>

                                    <div
                                        class="mega-nav__card width-100% max-width-xs margin-x-auto"
                                    >
                                        <a href="#0" class="block radius-lg overflow-hidden">
                                            <figure class="aspect-ratio-4:3">
                                                <img
                                                    class="block width-100%"
                                                    src="../../../app/assets/img/mega-site-nav-img-1.jpg"
                                                    alt="Image description"
                                                />
                                            </figure>
                                        </a>

                                        <div class="margin-top-sm">
                                            <h3 class="text-base">
                                                <a
                                                    href="#0"
                                                    class="mega-nav__card-title"
                                                >Browse all →</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <!-- 👇 layout 3 -> gallery -->
                        <li class="mega-nav__item js-mega-nav__item">
                            <button
                                class="reset mega-nav__control js-mega-nav__control js-tab-focus"
                            >
                                Gallery
                                <i class="mega-nav__arrow-icon" aria-hidden="true">
                                    <svg class="icon" viewBox="0 0 16 16">
                                        <g
                                            class="icon__group"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="square"
                                            stroke-miterlimit="10"
                                            stroke-width="2"
                                        >
                                            <path d="M2 2l12 12" />
                                            <path d="M14 2L2 14" />
                                        </g>
                                    </svg>
                                </i>
                            </button>

                            <div class="mega-nav__sub-nav-wrapper">
                                <div class="mega-nav__sub-nav mega-nav__sub-nav--layout-3">
                                    <div class="mega-nav__card">
                                        <a href="#0" class="block radius-lg overflow-hidden">
                                            <figure class="aspect-ratio-4:3">
                                                <img
                                                    class="block width-100%"
                                                    src="../../../app/assets/img/mega-site-nav-img-4.jpg"
                                                    alt="Image description"
                                                />
                                            </figure>
                                        </a>

                                        <div class="margin-top-sm">
                                            <h3 class="text-base">
                                                <a href="#0" class="mega-nav__card-title">Clothing</a>
                                            </h3>
                                        </div>
                                    </div>

                                    <div class="mega-nav__card">
                                        <a href="#0" class="block radius-lg overflow-hidden">
                                            <figure class="aspect-ratio-4:3">
                                                <img
                                                    class="block width-100%"
                                                    src="../../../app/assets/img/mega-site-nav-img-5.jpg"
                                                    alt="Image description"
                                                />
                                            </figure>
                                        </a>

                                        <div class="margin-top-sm">
                                            <h3 class="text-base">
                                                <a href="#0" class="mega-nav__card-title">Shoes</a>
                                            </h3>
                                        </div>
                                    </div>

                                    <div class="mega-nav__card">
                                        <a href="#0" class="block radius-lg overflow-hidden">
                                            <figure class="aspect-ratio-4:3">
                                                <img
                                                    class="block width-100%"
                                                    src="../../../app/assets/img/mega-site-nav-img-6.jpg"
                                                    alt="Image description"
                                                />
                                            </figure>
                                        </a>

                                        <div class="margin-top-sm">
                                            <h3 class="text-base">
                                                <a href="#0" class="mega-nav__card-title">Home</a>
                                            </h3>
                                        </div>
                                    </div>

                                    <div class="mega-nav__card">
                                        <a href="#0" class="block radius-lg overflow-hidden">
                                            <figure class="aspect-ratio-4:3">
                                                <img
                                                    class="block width-100%"
                                                    src="../../../app/assets/img/mega-site-nav-img-7.jpg"
                                                    alt="Image description"
                                                />
                                            </figure>
                                        </a>

                                        <div class="margin-top-sm">
                                            <h3 class="text-base">
                                                <a
                                                    href="#0"
                                                    class="mega-nav__card-title"
                                                >Accessories</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <!-- 👇 layout 4 -> single list -->
                        <li class="mega-nav__item js-mega-nav__item">
                            <button
                                class="reset mega-nav__control js-mega-nav__control js-tab-focus"
                            >
                                Support
                                <i class="mega-nav__arrow-icon" aria-hidden="true">
                                    <svg class="icon" viewBox="0 0 16 16">
                                        <g
                                            class="icon__group"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="square"
                                            stroke-miterlimit="10"
                                            stroke-width="2"
                                        >
                                            <path d="M2 2l12 12" />
                                            <path d="M14 2L2 14" />
                                        </g>
                                    </svg>
                                </i>
                            </button>

                            <div class="mega-nav__sub-nav-wrapper">
                                <div class="mega-nav__sub-nav mega-nav__sub-nav--layout-4">
                                    <ul class="mega-nav__sub-items">
                                        <li class="mega-nav__label">Help &amp; Support</li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Documentation</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a
                                                href="#0"
                                                class="mega-nav__sub-link"
                                            >Questions &amp; Answers</a>
                                        </li>
                                        <li class="mega-nav__sub-item">
                                            <a href="#0" class="mega-nav__sub-link">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li class="mega-nav__label">Other</li>

                        <!-- 👇 link -->
                        <li class="mega-nav__item">
                            <a href="#0" class="mega-nav__control">Link</a>
                        </li>
                    </ul>

                    <ul class="mega-nav__items">
                        <!-- 👇 icon buttons --desktop -->
                        <li class="mega-nav__icon-btns mega-nav__icon-btns--desktop">
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

                                    <ul
                                        class="dropdown__menu js-dropdown__menu"
                                        aria-label="submenu"
                                    >
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

                            <button
                                class="reset mega-nav__icon-btn mega-nav__icon-btn--search js-tab-focus"
                                aria-label="Toggle search"
                                aria-controls="mega-nav-search"
                            >
                                <svg class="icon" viewBox="0 0 24 24">
                                    <g
                                        class="icon__group"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="square"
                                        stroke-miterlimit="10"
                                        stroke-width="2"
                                    >
                                        <path d="M4.222 4.222l15.556 15.556" />
                                        <path d="M19.778 4.222L4.222 19.778" />
                                        <circle cx="9.5" cy="9.5" r="6.5" />
                                    </g>
                                </svg>
                            </button>
                        </li>

                        <!-- 👇 button -->
                        <li class="mega-nav__item">
                            <a href="#0" class="btn btn--primary mega-nav__btn">Download</a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- 👇 search -->
            <div class="mega-nav__search js-mega-nav__search" id="mega-nav-search">
                <div class="mega-nav__search-inner">
                    <input
                        class="form-control width-100%"
                        type="reset search"
                        name="megasite-search"
                        id="megasite-search"
                        placeholder="Search..."
                        aria-label="Search"
                    />

                    <div class="margin-top-lg">
                        <p class="mega-nav__label">Quick Links</p>

                        <ul>
                            <li>
                                <a href="#0" class="mega-nav__quick-link">Find a Store</a>
                            </li>
                            <li>
                                <a href="#0" class="mega-nav__quick-link">Your Orders</a>
                            </li>
                            <li>
                                <a href="#0" class="mega-nav__quick-link">Documentation</a>
                            </li>
                            <li>
                                <a href="#0" class="mega-nav__quick-link">Questions &amp; Answers</a>
                            </li>
                            <li>
                                <a href="#0" class="mega-nav__quick-link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>



<style>
@use '../base' as *;
@use '_2_dropdown.scss' as *;
@use '_1_tabs.scss' as *;

/* -------------------------------- 

File#: _3_mega-site-navigation
Title: Mega-Site Navigation
Descr: Navigation template for mega-sites
Usage: codyhouse.co/license

-------------------------------- */

:root {
  --mega-nav-height: 50px;
  --mega-nav-content-max-width: var(--max-width-lg); /* set max-width for navigation content */

  @include breakpoint(md) {
    --mega-nav-height: 70px;
  }
}

.mega-nav {
  height: var(--mega-nav-height);
  width: 100%;
  z-index: var(--z-index-header, 3); 
  box-shadow: inset 0px -1px 0px alpha(var(--color-contrast-higher), 0.1); /* border bottom */
}

/* change mega-nav style if menu = expanded */
.mega-nav--expanded {
  background-color: var(--color-bg);
}

.mega-nav__container {
  width: calc(100% - 2*var(--component-padding));
  height: 100%;
  max-width: var(--mega-nav-content-max-width);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* logo */
.mega-nav__logo {
  display: block;
  width: 104px; /* logo width */
  height: 30px; /* logo height */

  > * { /* logo SVG */
    width: inherit;
    height: inherit;
  }
}

/* mobile buttons */
.mega-nav__icon-btns {
  display: flex;
  align-items: center;
}

.mega-nav__icon-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-size: 24px; /* icon size */
  color: var(--color-contrast-high); /* icon color */
  cursor: pointer;
  transition: .2s;

  .icon {
    display: block;
  }

  .icon__group {
    stroke-width: 1px; /* icon stroke width */

    > * {
      transition: transform .3s var(--ease-in-out), stroke-dashoffset .3s, opacity .3s;
    }
  }
}

/* animated menu button */
.mega-nav__icon-btn--menu {
  .icon__group {
    > * {
      stroke-dasharray: 24;
    }

    > *:nth-child(1) {
      transform-origin: 12px 6px;
    }

    > *:nth-child(2) {
      stroke-dashoffset: 0;
    }

    > *:nth-child(3) {
      transform-origin: 12px 18px;
    }
  }

  &.mega-nav__icon-btn--state-b {
    .icon__group {
      > *:nth-child(1) {
        transform: translateY(6px) rotate(-45deg);
      }
  
      > *:nth-child(2) {
        stroke-dashoffset: 24;
      }
  
      > *:nth-child(3) {
        transform: translateY(-6px) rotate(45deg);
      }
    }
  }
}

/* animated search button */
.mega-nav__icon-btn--search {
  .icon__group {
    transform-origin: 12px 12px;
    transform: rotate(0deg);
    transition: transform .3s var(--ease-out);

    > *:nth-child(1) {
      stroke-dashoffset: 34;
      stroke-dasharray: 24;
    }

    > *:nth-child(2) {
      stroke-dashoffset: 24;
      stroke-dasharray: 24;
    }

    > *:nth-child(3) {
      transform-origin: 9.5px 9.5px;
      transform: rotate(45deg);
      stroke-dashoffset: 84;
      stroke-dasharray: 42;
      opacity: 1;
    }
  }

  &.mega-nav__icon-btn--state-b {
    .icon__group {
      transform: rotate(-90deg);

      > *:nth-child(1) {
        stroke-dashoffset: 48;
      }

      > *:nth-child(2) {
        stroke-dashoffset: 48;
      }

      > *:nth-child(3) {
        stroke-dashoffset: 42;
        opacity: 0;
      }
    }
  }
}

/* animated arrow icon */
.mega-nav__arrow-icon {
  font-size: 16px; /* icon size */
  color: currentColor; /* icon color */
  transition: color .2s;

  .icon {
    display: block;
  }

  .icon__group {
    stroke-width: 1px; /* icon stroke width */
    will-change: transform;
    transform-origin: 8px 8px;
    transition: transform .3s var(--ease-out);

    > * {
      stroke-dasharray: 17;
      transform-origin: 8px 8px;
      transform: translateY(3px);
      transition: transform .3s, stroke-dashoffset .3s;
      transition-timing-function: var(--ease-out);
    }

    > *:first-child {
      stroke-dashoffset: 8.5;
    }

    > *:last-child {
      stroke-dashoffset: 8.5;
    }
  }
}

/* label/divider */
.mega-nav__label {
  color: var(--color-contrast-medium);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: var(--text-xs);
}

/* card */
.mega-nav__card {
  img {
    transition: opacity .3s;

    &:hover {
      opacity: 0.85;
    }
  }
}

.mega-nav__card-title {
  color: var(--color-contrast-higher);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

/* -------------------------------- 

--mobile - style affecting only small screens 👇

-------------------------------- */

.mega-nav--mobile {
  .mega-nav__icon-btns--desktop {
    display: none; /* hide --desktop icon buttons */
  }

  .mega-nav__nav, .mega-nav__search {
    display: none;
    position: absolute;
    top: var(--mega-nav-height);
    left: 0;
    width: 100%;
    height: calc(100vh - var(--mega-nav-height) - var(--mega-nav-offset-y, 0px)); /* set --mega-nav-offset-y in JS */
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: var(--color-bg);
    box-shadow: var(--shadow-lg);
  }

  .mega-nav__nav--is-visible, .mega-nav__search--is-visible {
    display: block;

    > * {
      animation: mega-nav-entry-animation .5s var(--ease-out);
    }
  }

  .mega-nav__nav-inner, .mega-nav__search-inner {
    padding: var(--space-md) 0;
    width: calc(100% - 2*var(--component-padding));
    max-width: var(--mega-nav-content-max-width);
    margin-left: auto;
    margin-right: auto;
  }

  .mega-nav__label { /* label/divider */
    margin: var(--space-lg) 0 var(--space-xs);
  }

  .mega-nav__item { /* main navigation items */
    border-bottom: 1px solid var(--color-contrast-lower);
  }

  .mega-nav__control { /* navigation main controls (buttons/links) */
    display: flex;
    align-items: center;
    width: 100%;
    font-size: var(--text-md);
    text-align: left;
    padding: var(--space-sm) 0;
    color: var(--color-contrast-higher);
    text-decoration: none;
    cursor: pointer;
  }

  a[aria-current="page"] { /* current page */
    color: var(--color-primary);
  }

  .mega-nav__arrow-icon {
    margin-left: auto;
    margin-right: 12px;
  }

  .mega-nav__btn { /* button */
    width: 100%;
    margin: var(--space-sm) 0;
    font-size: var(--text-md);
  }

  /* sub navigation */
  .mega-nav__sub-nav-wrapper { /* sub navigation content */
    display: none;
    padding: 0 var(--space-md) var(--space-lg);
    overflow: hidden;
  }

  .mega-nav__sub-items { /* list of sub items */
    &:not(:last-child) {
      margin-bottom: var(--space-lg);
    }
  }

  .mega-nav__sub-item { /* sub item */
    border-bottom: 1px solid var(--color-contrast-lower);
  }

  .mega-nav__sub-link { /* sub link */
    display: block;
    color: var(--color-contrast-higher);
    text-decoration: none;
    padding: var(--space-xxs) 0;
  }

  .mega-nav__quick-link {  /* search quick links */
    display: block;
    color: var(--color-contrast-higher);
    text-decoration: none;
    border-bottom: 1px solid var(--color-contrast-lower);
    padding: var(--space-xs) 0;
  }

  .mega-nav__sub-nav--layout-1 { /* layout 1 -> tabbed content */
    .mega-nav__sub-items {
      margin-bottom: 0;
    }

    .mega-nav__tabs {
      display: none; /* hide tabbed content on smaller screens */
    }
  }

  .mega-nav__sub-nav--layout-3 { /* layout 3 -> gallery */
    padding-top: var(--space-md);
    display: grid;
    gap: var(--space-md);
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); /* auto add new cols */
  }

  .mega-nav__item--expanded {
    .mega-nav__arrow-icon {
      .icon__group { /* animated arrow icon */
        > *:first-child {
          transform: translateY(-3px) rotate(-90deg);
        }
    
        > *:last-child {
          transform: translateY(-3px) rotate(90deg);
        }
      }
    }

    .mega-nav__sub-nav-wrapper {
      display: block;

      > * {
        animation: mega-nav-entry-animation .5s var(--ease-out);
      }
    }
  }
}

/* -------------------------------- 

--desktop - style affecting only big screens 👇

-------------------------------- */

.mega-nav--desktop {
  .mega-nav__icon-btns--mobile, .mega-nav__sub-nav-wrapper, .mega-nav__search, .mega-nav__label {
    display: none;
  }

  .mega-nav__logo {
    flex-shrink: 0;
    margin-right: var(--space-sm);
  }

  .mega-nav__nav {
    flex-grow: 1;
    height: 100%;
  }

  .mega-nav__nav-inner {
    height: 100%;
    display: flex;
    justify-content: space-between; /* navigation layout - change to "flex-end" to push the navigation to the right */
  }

  .mega-nav__items {
    display: flex;
    height: 100%;
  }

  .mega-nav__item {
    display: flex;
    align-items: center;
  }

  .mega-nav__control {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 var(--space-md);
    height: 100%;
    font-size: var(--text-sm);
    color: var(--color-contrast-higher);
    text-decoration: none;
    transition: .2s;

    &::after { /* marker */
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--color-contrast-higher);
      pointer-events: none;
      opacity: 0;
      transition: opacity .2s;
    }

    .mega-nav__arrow-icon {
      margin-left: var(--space-xxs);
    }

    &:hover {
      cursor: pointer;
      background-color: alpha(var(--color-contrast-higher), 0.05);
    }
  }

  .mega-nav__sub-nav-wrapper, .mega-nav__search {
    position: absolute;
    top: var(--mega-nav-height);
    left: 0;
    width: 100%;
    background-color: var(--color-bg);
    box-shadow: var(--shadow-lg);
    max-height: calc(100vh - var(--mega-nav-height) - var(--mega-nav-offset-y, 0px)); /* set --mega-nav-offset-y in JS */ 
    overflow: auto;
  }

  .mega-nav__sub-nav, .mega-nav__search-inner {
    width: calc(100% - 2*var(--component-padding));
    margin: 0 auto;
    padding: var(--space-xl) 0;
    
    .mega-nav__label {
      display: block;
    }
  }
  
  .mega-nav__sub-nav {
    max-width: var(--mega-nav-content-max-width);
  }

  .mega-nav__search-inner {
    max-width: var(--max-width-xs); /* reduce max-width for search content */
  }

  .mega-nav__label {
    margin-bottom: var(--space-md);
  }

  .mega-nav__sub-item:not(:last-child) {
    margin-bottom: var(--space-xxs);
  }

  .mega-nav__sub-link {
    font-size: var(--text-sm);
    color: var(--color-contrast-higher);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .mega-nav__quick-link { /* search quick links */
    display: inline-block;
    margin-bottom: var(--space-xxs);
    font-size: var(--text-sm);
    color: var(--color-contrast-higher);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .mega-nav__btn {
    font-size: var(--text-sm);
    margin-left: var(--space-sm);
  }

  .mega-nav__sub-nav--layout-1 { /* layout 1 -> tabbed content */
    .mega-nav__sub-items {
      display: none; /* hide links */
    }

    .mega-nav__tabs {
      display: flex;
    }
  }

  .mega-nav__sub-nav--layout-2 { /* layout 2 -> multi lists */
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: var(--space-sm);

    // ⚠️ if you need to provide a fallback for browsers not supporting CSS grid (e.g., IE11), use the code below 👇
    // @include gridFallback(var(--space-sm)); // grid fallback
    // margin-left: auto;
    // margin-right: auto;
    // @supports (grid-area: auto) {
    //   display: grid;
    //   grid-template-columns: repeat(5, 1fr);
    //   gap: var(--space-sm);
    //   margin: 0 auto;
    // }

    // > * {
    //   @include column(1/5);
    // }
  }

  .mega-nav__sub-nav--layout-3 { /* layout 3 -> gallery */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-md);

    // ⚠️ if you need to provide a fallback for browsers not supporting CSS grid (e.g., IE11), use the code below 👇
    // @include gridFallback(var(--space-md)); // grid fallback
    // margin-left: auto;
    // margin-right: auto;
    // @supports (grid-area: auto) {
    //   display: grid;
    //   grid-template-columns: repeat(4, 1fr);
    //   gap: var(--space-md);
    //   margin: 0 auto;
    // }

    // > * {
    //   @include column(1/4);
    // }
  }

  .mega-nav__sub-nav--layout-4 { /* layout 4 -> single list */
    text-align: center;

    .mega-nav__sub-link {
      font-size: var(--text-lg);
    }
  }

  /* tabs */
  .mega-nav__tabs-controls {
    > *:not(:last-child) {
      border-bottom: 1px solid var(--color-contrast-lower);
    }
  }

  .mega-nav__tabs-control {
    display: block;
    width: 100%;
    padding: var(--space-xs);
    overflow: hidden;
    color: var(--color-contrast-higher);
    text-decoration: none;
    cursor: pointer;
    transition: .2s;

    .icon {
      opacity: 0;
      transform: translateX(-10px);
      transition: transform .5s var(--ease-out), opacity .5s;
    }

    &:hover, &[aria-selected="true"] {
      color: var(--color-primary);
    }

    &[aria-selected="true"] {
      .icon {
        opacity: 1;
        transform: translateX(0px);
      }
    }
  }

  .mega-nav__tabs-img {
    display: block;
    overflow: hidden;
    border-radius: var(--radius-lg);
    transition: opacity .3s;

    &:hover {
      opacity: 0.85;
    }
  }

  .mega-nav__item--expanded {
    .mega-nav__control {
      background-color: alpha(var(--color-contrast-higher), 0.05);

      &::after { /* marker */
        opacity: 1;
      }
    }

    .mega-nav__sub-nav-wrapper {
      display: block;
    }

    .mega-nav__sub-nav {
      animation: mega-nav-entry-animation .5s var(--ease-out);
    }
  }

  /* icon animation on click */
  &:not([data-hover="on"]) .mega-nav__item--expanded .mega-nav__arrow-icon .icon__group {
    transform: rotate(-90deg);

    > *:first-child, *:last-child {
      stroke-dashoffset: 0;
      transform: translateY(0px);
    }
  }

  /* icon buttons */
  .mega-nav__icon-btn {
    border-radius: 50%;
    margin-left: var(--space-xxxxs);
  }

  .mega-nav__icon-btn:hover, 
  .mega-nav__icon-btn--state-b {
    background-color: alpha(var(--color-contrast-higher), 0.05);
  }

  .mega-nav__search--is-visible {
    display: block;

    .mega-nav__search-inner {
      animation: mega-nav-entry-animation .5s var(--ease-out);
    }
  }
}

/* animations */
@keyframes mega-nav-entry-animation {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

/* used in JS - detect when the menu needs to switch from --mobile to --desktop layout */
[class*="mega-nav--desktop"]::before {
  display: none;
  content: 'mobile';
}

@each $breakpoint, $value in $breakpoints {
  @include breakpoint(#{$breakpoint}) {
    .mega-nav--desktop\@#{$breakpoint}::before {
      content: 'desktop';
    }
  }
}

/* no JS */
html:not(.js) {
  .mega-nav--mobile {
    .mega-nav__logo {
      margin: var(--space-md) 0;
    }

    .mega-nav__icon-btns {
      display: none;
    }

    .mega-nav__container, .mega-nav__sub-nav-wrapper {
      display: block;
    }

    .mega-nav__nav, .mega-nav__search {
      display: block;
      position: static;
      height: auto;
      box-shadow: none;
      border-top: 1px solid var(--color-contrast-lower);
    }
  }
}
</style>