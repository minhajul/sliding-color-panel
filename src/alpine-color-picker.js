export default function ColorPickerPlugin(Alpine) {
    Alpine.data('colorPicker', (config = {}) => ({
        isPanelOpen: false,
        selectedPrimary: config.initialPrimary || 'teal-600',
        selectedSecondary: config.initialSecondary || 'teal-400',
        primaryColors: config.primaryColors || [
            'teal-600', 'orange-500', 'pink-500', 'blue-600',
            'teal-400', 'green-400', 'lime-400', 'yellow-400',
            'orange-600', 'black', 'green-600', 'gray-600'
        ],
        secondaryColors: config.secondaryColors || [
            'red-400', 'orange-300', 'yellow-300', 'lime-300',
            'green-300', 'blue-400', 'indigo-400', 'purple-400',
            'purple-600', 'pink-400', 'gray-800', 'gray-400'
        ],
        togglePanel() {
            this.isPanelOpen = !this.isPanelOpen;
        },
        closePanel() {
            this.isPanelOpen = false;
        },
        selectPrimary(color) {
            this.selectedPrimary = color;
            this.$dispatch('primary-color-changed', color);
        },
        selectSecondary(color) {
            this.selectedSecondary = color;
            this.$dispatch('secondary-color-changed', color);
        }
    }));
}