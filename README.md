# Hakkyo Martial Arts Web

This repository contains the source code for the Hakkyo Martial Arts website, which offers information about Taekwon-Do ITF, Kick Boxing, and Muay Thai classes in Argentina. The website is live at [https://www.teamhakkyo.com.ar](https://www.academiahakkyo.com.ar) and is deployed using GitHub Pages.

## Table of Contents

- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Running a Local Server](#running-a-local-server)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project structure is as follows:

```plaintext
/hakkyo-martialarts/hakkyo-web
├── assets
│   ├── favicons
│   └── images
├── css
│   └── styles.css
├── fonts
├── js
├── resources
├── index.html
├── README.md
├── CNAME
└── sitemap.xml
```

- **assets**: Contains images and favicons used on the website.
- **css**: Contains the main stylesheet for the website.
- **fonts**: Contains custom fonts used on the website.
- **resources**: Contains downloadable PDF files.
- **index.html**: The main HTML file for the website.
- **README.md**: This file.
- **CNAME**: Contains the custom domain for GitHub Pages.
- **sitemap.xml**: Sitemap for search engines.

## Setup Instructions

To set up the project locally, follow these steps:

1. **Clone the repository**:

    ```sh
    git clone https://github.com/hakkyo-martialarts/hakkyo-web.git
    cd hakkyo-web
    ```

2. **Install dependencies**:
    This project uses Bootstrap and other libraries via CDN, so no additional dependencies need to be installed.

3. **Open the project**:
    Open `index.html` in your preferred web browser to view the website locally.

## Running a Local Server

To run a local server for testing, you can use a simple HTTP server. Here are a few options:

1. **Using Python (if installed)**:

    ```sh
    # For Python 3.x
    python -m http.server 5500

    # For Python 2.x
    python -m SimpleHTTPServer 5500
    ```

    Then, open your browser and navigate to `http://127.0.0.1:5500`.

2. **Using Node.js and http-server (if installed)**:

    ```sh
    npm install -g http-server
    http-server -p 5500
    ```

    Then, open your browser and navigate to `http://127.0.0.1:5500`.

## Deployment

The website is deployed using GitHub Pages. The `main` branch is used for deployment. To deploy updates, push changes to the `main` branch.

1. **Create a new branch from `develop`**:

    ```sh
    git checkout develop
    git pull origin develop
    git checkout -b new-branch-name
    ```

2. **Make your changes and commit them**:

    ```sh
    git add .
    git commit -m "Description of changes"
    ```

3. **Push the changes and create a pull request**:

    ```sh
    git push origin new-branch-name
    ```

4. **Merge the pull request into `main`**:
    Once the pull request is reviewed and approved, merge it into the `main` branch.

5. **Deploy to GitHub Pages**:
    GitHub Pages will automatically deploy the changes from the `main` branch.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
