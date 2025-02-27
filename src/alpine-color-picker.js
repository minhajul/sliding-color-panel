export default function ColorPickerPlugin(Alpine) {
    Alpine.data('colorPicker', (config = {}) => ({
        init() {
            // Load saved colors from localStorage
            this.selectedPrimary = localStorage.getItem('selectedPrimary') || config.initialPrimary || 'cyan-200';
            this.selectedSecondary = localStorage.getItem('selectedSecondary') || config.initialSecondary || 'indigo-300';
        },
        isPanelOpen: false,
        selectedPrimary: config.initialPrimary || 'cyan-200',
        selectedSecondary: config.initialSecondary || 'indigo-300',
        primaryColors: config.primaryColors || [
            'teal-200',
            'orange-200',
            'pink-200',
            'blue-200',
            'cyan-200',
            'green-200', 
            'lime-200', 
            'yellow-200',
            'emerald-200', 
            'black', 
            'sky-200', 
            'gray-200'
        ],
        secondaryColors: config.secondaryColors || [
            'red-300', 
            'orange-300', 
            'yellow-300', 
            'lime-300',
            'green-300', 
            'blue-300', 
            'indigo-300', 
            'purple-300',
            'cyan-300',
            'pink-300', 
            'gray-300',
            'gray-900'
        ],
        togglePanel() {
            this.isPanelOpen = !this.isPanelOpen;
        },
        closePanel() {
            this.isPanelOpen = false;
        },
        selectPrimary(color) {
            this.selectedPrimary = color;
            localStorage.setItem('selectedPrimary', color);
            this.$dispatch('primary-color-changed', color);
        },
        selectSecondary(color) {
            this.selectedSecondary = color;
            localStorage.setItem('selectedSecondary', color);
            this.$dispatch('secondary-color-changed', color);
        }
    }));
}