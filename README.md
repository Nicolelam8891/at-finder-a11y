# AI AT Ally: Artificial Intelligence Assistive Tech

## 🌱 Project Description: 
AI AT Ally is a proof-of-concept application, designed to address a long-standing barrier for people with disabilities. Assistive technologies are tools to help manage the effects of disabilities, but it can be very difficult to find these tools and to learn more about them. There have been several grant-funded efforts that have built robust databases, but because technology changes so rapidly, these databases can be difficult and expensive to maintain. For this reason, AI AT Ally leverages the power of generative artificial intelligence (AI) to find assistive technologies based on user-selected disability categories and needs.

## 📑 Planning:
### Wireframe
The front-end and back-end teams met to define the minimal viable product and then the front-end team built a representative [wireframe](https://www.figma.com/file/k7RO3fjo1eQ5q2jsEkXuK2/Capstone?type=design&node-id=0-1&mode=design&t=HJITVf40HZI5TM1D-0) using Figma.

Research was a core component of project planning. Information was gathered on different types of disabilities and corresponding categories of assistive technologies. Information from this research was then used to support prompt engineering for generative AI to populate data, based on user selections.

The project required both the front-end and back-end teams to "stretch" themselves by learning and implementing a technology they had never used before. Using generative AI to build data was new to everyone on the team, but we also decided to learn and implement GraphQL for the back-end and Apollo client for the front-end. Data retrieved from AI was passed from the back-end to the front-end in a standard JSON format, but GraphQL was used to manage login information and support features for user commenting and favoriting.

## 📉 Project Planning Docs:
 - [Project Board](https://github.com/orgs/Assistive-Tech-2307/projects/1)
  
<img width="1153" alt="Screenshot 2023-11-25 at 11 13 06 PM" src="https://github.com/Nicolelam8891/newsreader/assets/132624450/b2bc89de-ef47-4d40-beb6-69a5debe67f0">

- [Define The Relationship (DTR) Document](https://www.notion.so/Assistive-Tech-DTR-3502538cc7f843c1a622af0769a18656)

 - Back-end Repositories and Endpoint Documentation:
   - [user_service](https://github.com/Assistive-Tech-2307/user_service) / [README](https://github.com/Assistive-Tech-2307/user_service/blob/main/README.md)
     - Endpoint for GraphQL User / Comment API: [https://nameless-stream-88171-cdff591c89ed.herokuapp.com/graphql](https://nameless-stream-88171-cdff591c89ed.herokuapp.com/graphql) / [README](https://github.com/Assistive-Tech-2307/ai_service/blob/main/README.md)
     - Endpoint for AI Services API: [https://assistivie-tech-2307-648a3d563927.herokuapp.com/api/v1/ai_requests](https://assistivie-tech-2307-648a3d563927.herokuapp.com/api/v1/ai_requests)
  
## Technologies used to build this app:
- HTML
- CSS
- JavaScript
- React JavaScript Library
- Router
- Cypress
- Figma
- The Paciello Group, Coulour Contrast Analyser for testing color contrast
- Git / Github
- Vercel
- Heroku
- GraphQL
- Apollo Client
- Github Project
- VS Code

## Preview of App:
[Visit Our Deployed Site](https://at-finder.vercel.app/)

### Screenshots:
#### Home Page:
![AI AT Ally](https://gist.github.com/assets/7227063/f2de91fb-a254-46f5-a93a-979fa2092c89)

### Video Demo: 

## Collaborators:
### Front-end team:
- Jack Alfonso, GitHub: [alfonsojack](https://github.com/alfonsojack)
- Nicole Lam, GitHub: [Nicolelam8891](https://github.com/Nicolelam8891)
- Jan McSorley, GitHub: [jmcsorle](https://github.com/jmcsorle)
### Back-end team:
- Joop Stark, GitHub: [JoopStark](https://github.com/JoopStark)
- Eliza Keating, GitHub: [elizakeating](https://github.com/elizakeating)
- Nicholas Spencer, GitHub: [deadbert](https://github.com/deadbert)

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

### 🎉 Wins & challenges:
```
...MORE INFO
```




