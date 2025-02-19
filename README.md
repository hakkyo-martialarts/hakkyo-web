# Hakkyo Martial Arts Web

This repository contains the source code for the Hakkyo Martial Arts website, which offers information about Taekwon-Do ITF, Kick Boxing, and Muay Thai classes in Argentina. The website is live at [https://www.teamhakkyo.com.ar](https://www.teamhakkyo.com.ar) and is deployed using GitHub Pages.

## Table of Contents

- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
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
