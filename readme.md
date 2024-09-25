# Cricket XYZ - Cricket Tournament Website

This is a cricket tournament website built using HTML, CSS, and JavaScript. The project integrates advanced libraries like Locomotive JS, GSAP, ScrollTrigger, and AnimeJS for smooth animations and interactivity.

## Features

- Responsive and interactive user interface.
- User login and password recovery pages.
- Smooth scrolling powered by Locomotive JS.
- Advanced animations using GSAP, ScrollTrigger, and AnimeJS.
- Easy to customize and extend.

## Prerequisites

Make sure you have the following tools installed:

- **Node.js** (for package management)
- **NPM** or **Yarn** (for managing dependencies)

## Setup

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/archakNath/Cricket
    cd Cricket
    ```

2. **Install dependencies:**

    If you are using `npm`:

    ```bash
    npm install
    ```

    Or if you are using `yarn`:

    ```bash
    yarn install
    ```

3. **Run the project:**

    To run the project locally, you can use a simple local server. If you are using VSCode, you can install the **Live Server** extension or use any preferred method:

    ```bash
    npm start
    ```

4. **Access the website:**

    Open your browser and go to:

    ```
    http://localhost:3000
    ```

## Folder Structure

```bash
.
├── asset
│   └── cricketFavicon
├── css
│   ├── about.css
│   ├── f_password.css
│   ├── login.css
│   ├── main.css
│   └── universal.css
├── html
│   ├── about.html
│   ├── f_password.html
│   └── login.html
├── images
├── js
│   ├── main.js
│   ├── mainAnim.js
│   └── index.html
└── readme.md
```

## Description of Key Files

### HTML files (html/):

- about.html: Page detailing about the company and its founders.
- f_password.html: Password recovery page.
- login.html: User login page.

### CSS files (css/):

- about.css: Styles for the about page.
- f_password.css: Styles for the password recovery page.
- login.css: Styles for the login page.
- main.css: Styles for the main page.
- universal.css: Universal styles applied across all pages.

### JavaScript files (js/):

- main.js: Handles main logic of index.html
- mainAnim.js: Contains the animations created using GSAP, Locomotive JS, and AnimeJS.

## Libraries Used

- Locomotive JS: For smooth scrolling and parallax effects.
- GSAP: For advanced animations.
- ScrollTrigger: To trigger animations on scroll.
- AnimeJS: For animation control and sequencing.

## Customization

You can easily customize the design and animations by editing the CSS files in the css/ folder and tweaking the JS animations in js/mainAnim.js.

## Contributing

Feel free to submit a pull request if you find any issues or want to contribute to the project. Please open an issue first to discuss any significant changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

```
This `README.md` provides specific details about your file structure, key files, and the usage of various libraries while maintaining clarity for anyone setting up the project.
```