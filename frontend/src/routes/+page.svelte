<div class="bg-white lg:pb-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <header class="flex justify-between items-center py-4 md:py-8">
        <!-- logo - start -->
        <a href="/" class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
          <svg width="95" height="94" viewBox="0 0 95 94" class="w-6 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
          </svg>
  
          Flowrift
        </a>
        <!-- logo - end -->
  
        <!-- nav - start -->
        <nav class="hidden lg:flex gap-12">
          <a href="#" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Home</a>
          <a href="#" class="inline-flex items-center text-indigo-500 text-lg font-semibold gap-1">
            Features
  
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Pricing</a>
          <a href="#" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">About</a>
        </nav>
        <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative inline-block text-left">
    <div>
      <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
        Options
        <!-- Heroicon name: solid/chevron-down -->
        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  
    <!--
      Dropdown menu, show/hide based on menu state.
  
      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    -->
    <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div class="py-1" role="none">
        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
        <form method="POST" action="#" role="none">
          <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
        </form>
      </div>
    </div>
  </div>
  
        <!-- nav - end -->
  
        <!-- buttons - start -->
        <div class="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
          <a href="#" class="inline-block focus-visible:ring ring-indigo-300 text-gray-500 hover:text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3">Sign in</a>
  
          <a href="#" class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Sign up</a>
        </div>
  
        <button type="button" class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
  
          Menu
        </button>
        <!-- buttons - end -->
      </header>
  
      <!-- menu - start -->
      <div class="w-full hidden lg:block bg-gray-50 border rounded-lg shadow-sm overflow-hidden">
        <div class="max-w-screen-lg flex items-center gap-8 p-8 mx-auto">
          <div class="w-2/3 grid grid-cols-2 gap-8">
            <!-- link - start -->
            <a href="#" class="group flex gap-4">
              <div class="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
  
              <div>
                <div class="font-semibold mb-1">Growth</div>
                <p class="text-sm text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
              </div>
            </a>
            <!-- link - end -->
  
            <!-- link - start -->
            <a href="#" class="group flex gap-4">
              <div class="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
  
              <div>
                <div class="font-semibold mb-1">Security</div>
                <p class="text-sm text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
              </div>
            </a>
            <!-- link - end -->
  
            <!-- link - start -->
            <a href="#" class="group flex gap-4">
              <div class="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
  
              <div>
                <div class="font-semibold mb-1">Cloud</div>
                <p class="text-sm text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
              </div>
            </a>
            <!-- link - end -->
  
            <!-- link - start -->
            <a href="#" class="group flex gap-4">
              <div class="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
  
              <div>
                <div class="font-semibold mb-1">Analytics</div>
                <p class="text-sm text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
              </div>
            </a>
            <!-- link - end -->
          </div>
  
          <!-- promo - start -->
          <div class="w-1/3 border rounded-lg overflow-hidden">
            <div class="h-48 bg-gray-100">
              <img src="https://images.unsplash.com/photo-1619118884592-11b151f1ae11?auto=format&q=75&fit=crop&w=320" loading="lazy" alt="Photo by Fakurian Design" class="w-full h-full object-cover object-center" />
            </div>
  
            <div class="flex justify-between items-center bg-white gap-2 p-3">
              <p class="text-gray-500 text-sm">This is some simple filler text.</p>
  
              <a href="#" class="inline-block shrink-0 bg-white hover:bg-gray-50 active:bg-gray-100 focus-visible:ring ring-indigo-300 text-indigo-500 text-sm font-semibold border rounded-lg outline-none transition duration-100 px-3 py-1">More</a>
            </div>
          </div>
          <!-- promo - end -->
        </div>
      </div>
      <!-- menu - end -->
    </div>
  </div>