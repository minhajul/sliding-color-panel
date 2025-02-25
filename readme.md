## Sliding Color Panel
This is a simple sliding color panel that changes color when you click on it.

### Installation
1. Copy ```alpine-color-picker.js``` in your project
2. Update your main js file like below:
   ```bash
    import Alpine from 'alpinejs';
    import ColorPickerPlugin from './alpine-color-picker.js';
    
    Alpine.plugin(ColorPickerPlugin);
    Alpine.start();
   ```
4. Open the index.html file and add below code inside the ```body``` tag
   ```bash
   <div x-data="colorPicker()">
        <!-- Settings Icon Button -->
        <button 
            @click="togglePanel"
            class="fixed top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200"
            aria-label="Toggle color settings">
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
        </button>
    
        <!-- Sliding Panel -->
        <div 
            x-cloak
            class="fixed top-0 right-0 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
            :class="isPanelOpen ? 'translate-x-0' : 'translate-x-full'"
        >
            <div class="p-6">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-xl font-semibold">Color Settings</h2>
                    <button @click="closePanel" class="text-gray-500 hover:text-gray-700">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
    
                <h3 class="text-lg font-semibold mb-4">Primary color</h3>
                <div class="grid grid-cols-4 gap-4 mb-8" id="primary-colors">
                    <template x-for="color in primaryColors">
                        <div class="color-box h-12 rounded-lg cursor-pointer relative" :class="`bg-${color}`" @click="selectPrimary(color)">
                            <div class="absolute inset-0 flex items-center justify-center" x-show="selectedPrimary === color">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>
                    </template>
                </div>
    
                <h3 class="text-lg font-semibold mb-4">Secondary color</h3>
                <div class="grid grid-cols-4 gap-4" id="secondary-colors">
                    <template x-for="color in secondaryColors">
                        <div class="color-box h-12 rounded-lg cursor-pointer relative" :class="`bg-${color}`" @click="selectSecondary(color)">
                            <div class="absolute inset-0 flex items-center justify-center" x-show="selectedSecondary === color">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
   ```
