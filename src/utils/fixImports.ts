
// This utility file exists to help break any circular dependencies
// and ensure consistent imports across the application

export const IMPORT_CONSTANTS = {
  CARD_IMPORT: "@/components/ui/card"
};

// Custom CSS classes for the flashcards
const addCustomCSSToHead = () => {
  const style = document.createElement('style');
  style.textContent = `
    .perspective-1000 {
      perspective: 1000px;
    }
    .transform-preserve-3d {
      transform-style: preserve-3d;
    }
    .backface-hidden {
      backface-visibility: hidden;
    }
    .rotate-y-180 {
      transform: rotateY(180deg);
    }
    .animate-fade-in {
      animation: fadeIn 0.5s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
};

// Call this function when the app initializes
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', addCustomCSSToHead);
}
