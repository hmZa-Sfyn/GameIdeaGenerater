"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const generateBtn = document.getElementById('generate-btn');
const ideaDisplay = document.getElementById('idea-display');
function fetchGameIdea() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('http://localhost:4000/api/idea');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = yield response.json();
            return data.idea;
        }
        catch (error) {
            console.error("Could not fetch game idea:", error);
            return "Failed to generate an idea. Is the server running?";
        }
    });
}
if (generateBtn && ideaDisplay) {
    generateBtn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        ideaDisplay.textContent = 'Generating...';
        const newIdea = yield fetchGameIdea();
        ideaDisplay.textContent = newIdea;
    }));
}
