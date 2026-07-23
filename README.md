# Kwadwo Labs – Portfolio Website

A personal portfolio website showcasing DevOps, Backend, and Networking projects. Built with **React 19**, **Vite**, and **TailwindCSS v4**.

## 🚀 Key Features

- **Modern UI/UX**: Clean and responsive design using TailwindCSS.
- **Animations**: Smooth transitions and effects powered by Framer Motion.
- **Theme Support**: Dark/Light mode toggle via `ThemeContext`.
- **Component-Based**: Modular architecture with reusable components.
- **Working Contact Form**: Email functionality powered by Web3Forms.
- **Spam Protection**: Built-in honeypot field to prevent bot submissions.

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: TailwindCSS v4
- **Icons**: React Icons, Lucide React
- **Animation**: Framer Motion
- **Email**: Web3Forms API

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (latest LTS recommended)
- npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/dev-portfolio.git
    cd dev-portfolio
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Set up environment variables:

    ```bash
    cp .env.example .env
    ```

    Edit `.env` and add your Web3Forms access key (see [Contact Form Setup](#-contact-form-setup)).

### Development

Start the development server:

```bash
npm run dev
```

### Production Build

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📧 Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com/) for email delivery. To set it up:

1. Go to [web3forms.com](https://web3forms.com/)
2. Enter your email address (no signup required)
3. You'll receive an access key instantly
4. Add the key to your `.env` file:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

## 📂 Project Structure

```
src/
├── components/     # Reusable UI components
├── context/        # React Context (e.g., ThemeContext)
├── assets/         # Images and static assets
├── utils/          # Helper functions and data
├── App.jsx         # Main application component
└── main.jsx        # Entry point
```

## 🔐 Environment Variables

| Variable                    | Description                        |
| --------------------------- | ---------------------------------- |
| `VITE_WEB3FORMS_ACCESS_KEY` | Web3Forms API key for contact form |

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
