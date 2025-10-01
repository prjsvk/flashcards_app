# Web Development Project 2 - *Flashcards Study App*

Submitted by: **Surya Varun Kolachana**

This web app: **A modern, interactive flashcards application for studying web development concepts with smooth animations and categorized content.**

Time spent: **6** hours spent in total

---

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)

- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time

- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front

- [x] **Clicking on the next button displays a random new card**

---

The following **optional** features are implemented:

- [x] Cards have different visual styles such as color based on their category  
  - Green = Easy  
  - Orange = Medium  
  - Red = Hard  

---

The following **additional** features are implemented:

- Smooth 3D flip animations  
- Fully responsive design  
- Modern gradient UI  
- Interactive hover effects  
- Professional styling  

---

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://go.screenpal.com/watch/cT6VDQnDpGB' title='Video Walkthrough' width='' alt='Video Walkthrough' />

---

## Installation & Setup

### Prerequisites
- Node.js (download from [nodejs.org](https://nodejs.org/))

### Step-by-Step Instructions

1. **Create project folder:**
   ```bash
   mkdir flashcards-project
   cd flashcards-project
   ```
2. **Create all files from the provided code**

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Fix vulnerabilities (optional):**
   ```bash
   npm audit fix
   ```

5. **Start development server:**
   ```bash
   npm run dev
   ```

6. **Open browser to:**
   ```
   http://localhost:3000
   ```

7. **Build for Production**
   ```bash
   npm run build
   ```

---

## Project Structure
```
flashcards-project/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    └── Flashcard.jsx
```

---

## Usage

- Click any card to flip between question and answer  
- Click "Next Card" to get a random new card  
- Categories are color-coded for easy identification  
- Fully responsive - works on desktop and mobile  

---

## Technical Details

- Built with React and modern hooks  
- CSS 3D transforms for smooth animations  
- Vite build tool for fast development  
- Component-based architecture  

---

## Notes

### Challenges Encountered
- Implementing smooth 3D flip animations  
- Responsive design across devices  
- State management for card interactions  
- CSS styling for professional appearance  

### Solutions
- Used CSS transforms for performant animations  
- Implemented mobile-first responsive design  
- Leveraged React `useState` for state management  
- Created reusable Flashcard component  

---

## License

    Copyright [2025] [Surya Varun Kolachana]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

---

## Support
If you encounter any issues:
- Ensure all files are in correct locations  
- Run `npm install` to install dependencies  
- Check that Node.js is properly installed  
- Contact: [your-email@example.com]