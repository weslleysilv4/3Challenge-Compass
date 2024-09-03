<p align="center">
  <a href="" rel="noopener">
<img height="100%" src="https://s3.sa-east-1.amazonaws.com/remotar-assets-prod/company-profile-covers/cl7god9gt00lx04wg4p2a93zt.jpg" alt="Project logo"></a>
</p>

<h3 align="center">3 Challenge - Tour Management System</h3>

<p align="center"> This project was developed to manage tour information, including countries, categories, and reviews. The system is built with React, TypeScript, Node.js, Express, and Prisma, with a focus on providing a seamless user experience and efficient backend operations.
    <br> 
</p>

<div align="center">
  <a href="#">Project Documentation</a>
</div>

## 📝 Table of Contents

- [About](#about)
- [Usage](#usage)
- [Team](#team)

## 🧐 About <a name = "about"></a>

This project includes the following key features:

- **Front-end Development:** The user interface was developed using React with TypeScript, focusing on a clean and intuitive design. TailwindCSS was used for styling to ensure a responsive and modern look.
- **Back-end Development:** The backend was structured using Node.js with the Express framework, ensuring efficient handling of API requests and database operations. Prisma was used as an ORM for database management, providing a seamless interface with the SQLite database.
- **Database Management:** The project uses SQLite with Prisma ORM to handle all database operations, ensuring data integrity and efficient querying. The database schema includes models for Users, Tours, Countries, Categories, Reviews, and Ratings, reflecting a comprehensive system for managing tour-related data.
- **API Integration:** The system integrates with various APIs, such as the WeatherAPI, to provide real-time weather information for each tour destination.
- **Testing and Optimization:** Extensive testing was performed to ensure the system works efficiently across different environments and meets all specified requirements. The code was optimized for performance and maintainability.

<div align="center">
  <img height="100%" src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/Untitled(1).png?alt=media&token=284b13dc-73cc-46b6-adb4-0ba7328be2cb" alt="Database Schema Diagram">
</div>

## 🚀 Usage <a name="usage"></a>

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/weslleysilv4/3Challenge-Compass.git
```

2. Navigate to the project directory:

```bash
cd 3Challenge-Compass
```

3. Install the dependencies:

```bash
npm install
```

4. Set up environment variables by creating a `.env` file:

```bash
touch .env
PORT=3001
CORS_ORIGIN="http://localhost:5173"
DATABASE_URL="file:./dev.db"
```

5. Run the database migrations:

```bash
npx prisma migrate dev
```

6. Start the development server:

```bash
npm run dev
```

7. Access the application in your browser at `http://localhost:3001`.

## ⛏️ Built Using <a name = "built_using"></a>

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)&nbsp;
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)&nbsp;
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)&nbsp;
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)&nbsp;
![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)&nbsp;


## ✍️ Team <a name = "team"></a>

- [Weslley Silva](https://github.com/weslleysilv4) - Developer
- [Isabella Terssariol](mailto:isabella.terssariol@compasso.com.br) - Product Owner
- [Nelson Nedis](mailto:nelson.silva@compasso.com.br) - Scrum Master
- [Ariel Souza](mailto:ariel.souza@compasso.com.br) - Teacher
- [Caroline Cobucci](mailto:caroline.cobucci@compasso.com.br) - Teacher
- [Lucas Gauto](mailto:lucas.gauto@compasso.com.br) - Teacher
- Liliv Hana - Team Coordinator
