/** @type {import('tailwindcss').Config} */

module.exports = {
    theme: {
      extend: {},
    },
    safelist: [
      'bg-teal-200',
      'bg-orange-200',
      'bg-pink-200',
      'bg-blue-200',
      'bg-cyan-200',
      'bg-green-200', 
      'bg-lime-200', 
      'bg-yellow-200',
      'bg-emerald-200', 
      'bg-black', 
      'bg-sky-200', 
      'bg-gray-200',
      // secondary colors
      'bg-red-300', 
      'bg-orange-300', 
      'bg-yellow-300', 
      'bg-lime-300',
      'bg-green-300', 
      'bg-blue-300', 
      'bg-indigo-300', 
      'bg-purple-300',
      'bg-cyan-300',
      'bg-pink-300', 
      'bg-gray-300',
      'bg-gray-900'
    ],
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", 
      "./index.html",
    ],
    plugins: [],
  }
  