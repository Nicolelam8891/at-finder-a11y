# AI AT Ally: Artificial Intelligence Assistive Tech

## 🌱 Project Description: 
AI AT Ally is a proof-of-concept application, designed to address a long-standing barrier for people with disabilities. Assistive technologies are tools to help manage the effects of disabilities, but it can be very difficult to find these tools and to learn more about them. There have been several grant-funded efforts that have built robust databases, but because technology changes so rapidly, these databases can be difficult and expensive to maintain. For this reason, AI AT Ally leverages the power of generative artificial intelligence (AI) to find assistive technologies based on user-selected disability categories and needs.

## 📑 Planning:
### Wireframe
The front-end and back-end teams met to define the minimal viable product and then the front-end team built a representative [wireframe](https://www.figma.com/file/k7RO3fjo1eQ5q2jsEkXuK2/Capstone?type=design&node-id=0-1&mode=design&t=HJITVf40HZI5TM1D-0) using Figma.

Research was a core component of project planning. Information was gathered on different types of disabilities and corresponding categories of assistive technologies. Information from this research was then used to support prompt engineering for generative AI to populate data, based on user selections.

The project required both the front-end and back-end teams to "stretch" themselves by learning and implementing a technology they had never used before. Using generative AI to build data was new to everyone on the team, but we also decided to learn and implement GraphQL for the back-end and Apollo client for the front-end. Data retrieved from AI was passed from the back-end to the front-end in a standard JSON format, but GraphQL was used to manage login information and support features for user commenting and favoriting.

## 📉 Project Planning Docs:
<details>
<summary>Toggle to View Planning Docs</summary>

- [Define The Relationship (DTR) Document](https://www.notion.so/Assistive-Tech-DTR-3502538cc7f843c1a622af0769a18656)
- [Project Board](https://github.com/orgs/Assistive-Tech-2307/projects/1)

![Screenshot](https://github.com/Nicolelam8891/newsreader/assets/132624450/b2bc89de-ef47-4d40-beb6-69a5debe67f0)

</details>


## Back-end Repositories and Endpoint Documentation:
- [user_service](https://github.com/Assistive-Tech-2307/user_service) / [README](https://github.com/Assistive-Tech-2307/user_service/blob/main/README.md)
  - Endpoint for GraphQL User / Comment API: [https://nameless-stream-88171-cdff591c89ed.herokuapp.com/graphql](https://nameless-stream-88171-cdff591c89ed.herokuapp.com/graphql)
  
- [ai_service](https://github.com/Assistive-Tech-2307/ai_service) / [README](https://github.com/Assistive-Tech-2307/ai_service/blob/main/README.md)
  - Endpoint for AI Services API: [https://assistivie-tech-2307-648a3d563927.herokuapp.com/api/v1/ai_requests](https://assistivie-tech-2307-648a3d563927.herokuapp.com/api/v1/ai_requests)
  
## Technologies used to build this app:
<details>
<summary>Toggle to View Technologies</summary>

- HTML
- CSS
- JavaScript
- React JavaScript Library
- Ruby
- Rails
- Router
- Cypress
- Figma
- ChatGPT
- The Paciello Group, Coulour Contrast Analyser for testing color contrast
- Git / Github
- Vercel
- Heroku
- GraphQL
- Apollo Client
- Github Project
- VS Code

</details>


## Preview of App:
[Visit Our Deployed Site](https://at-finder.vercel.app/)

## GIF of App Functionality: 
![AT-AT-Ally](https://gist.github.com/assets/7227063/827778f1-a17e-4489-a24c-7e72361a2add)

## Screenshots

<details>
<summary>Toggle to View Screenshots</summary>

#### Home Page
![AI AT Ally Home Page](https://gist.github.com/assets/7227063/1ae8be2a-0813-4e65-a72f-c8ae674aca2b)

### Disability Categories
![Disability Categories](https://gist.github.com/assets/7227063/1187eb94-efa0-41a8-91cf-cfca86cee95f)

### Types of Technologies
![Types of Technologies](https://gist.github.com/assets/7227063/d9eb1572-23ee-4853-adfd-4241cfc9ac55)

### Suggested Technologies
![Suggested Technologies](https://gist.github.com/assets/7227063/9d23dcba-c22a-4865-b8f5-11983891e5a1)

### Make a Comment
![Make a Comment](https://gist.github.com/assets/7227063/47300757-92aa-4825-ae60-4fda6746b1d4)

### Comment List
![Comment List](https://gist.github.com/assets/7227063/7996496c-2834-4e04-9c35-74852a50819d)

### Learn More About Assistive Technology
![Learn More About Assistive Technology](https://gist.github.com/assets/7227063/6695716e-78a4-4614-8c0e-65d507346b3c)

### Project Contributor Page
![Project Contributor Page](https://gist.github.com/assets/7227063/07d065bf-2d70-4d72-bab4-419165dff125)
</details>

## Collaborators:
### Front-end team:
- Jack Alfonso | GitHub: [alfonsojack](https://github.com/alfonsojack) | LinkedIn: [jonathan-jack-alfonso](https://www.linkedin.com/in/jonathan-jack-alfonso/)
- Nicole Lam | GitHub: [Nicolelam8891](https://github.com/Nicolelam8891) | LinkedIn: [ngoc-lam-b9628a206](https://www.linkedin.com/in/ngoc-lam-b9628a206/)
- Jan McSorley | GitHub: [jmcsorle](https://github.com/jmcsorle) | LinkedIn: [janmcsorley](https://www.linkedin.com/in/janmcsorley/)
### Back-end team:
- Joop Stark | GitHub: [JoopStark](https://github.com/JoopStark) | LinkedIn: [joop-stark](https://www.linkedin.com/in/joop-stark/)
- Eliza Keating | GitHub: [elizakeating](https://github.com/elizakeating) | LinkedIn: [elizakeating](https://www.linkedin.com/in/elizakeating/)
- Nicholas Spencer | GitHub: [deadbert](https://github.com/deadbert) | LinkedIn: [nicholas-spencer-fort-collins](https://www.linkedin.com/in/nicholas-spencer-fort-collins/)

## 📗 Installation Instructions:
To get AI AT Ally running on your machine: 
- Clone it to your local machine using the command: `git clone git@github.com:Assistive-Tech-2307/at-finder.git`.
- Run the command: `cd at-finder`
- Run the command: `npm install`
- Run the command: `npm start`

### 📗 Context:
 We are currently in Mod 4 at the Turing School of Software and Design and this is our capstone project, where we collaborated with the back-end team to create a full-stack app. Learning objectives for the project included:
 - Demonstrate knowledge gained during our time as students at Turing
- Use an agile process to turn well defined requirements into deployed and production-ready software
- Gain experience dividing applications into components and domains of responsibilities to facilitate multi-developer teams that implement service-oriented architecture concepts and patterns.
- Explore and implement new concepts, patterns, or libraries that have not been explicitly taught while at Turing
- Practice an advanced, professional git workflow including a Pull Request Review
- Gain experience using continuous integration tools to build and automate the deployment of features
- Build applications that execute in development, test, CI, and production environments
- Focus on communication between front-end and back-end teams in order to complete and deploy features that have been outlined by the project spec




