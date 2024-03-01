# EmberEats

EmberEats is an application designed for outdoor cooking enthusiasts who are passionate about campfire and Dutch oven recipes. The app aims to provide a platform for users to store, share, and discover a wide variety of outdoor cooking recipes. Users can not only add, rate, and save their favorite recipes but also explore and try out creations from other enthusiasts.

###Features:
1. Recipe Management
• Add Recipes: Users can easily add their own campfire and Dutch oven recipes to share with the EmberEats community.
• Rate Recipes: Users have the ability to rate recipes based on their experience, helping others discover the most popular and delicious outdoor cooking creations.
• Save Recipes: Each user can maintain a personal list of favorite recipes by saving them for quick access and future use.

2. Community Interaction
• Discover Recipes: Users can explore a diverse collection of outdoor cooking recipes shared by fellow enthusiasts, creating a dynamic and ever-growing database.
• User Ratings: Gain insights into the popularity and quality of recipes through user ratings, ensuring a curated collection of the best outdoor cooking ideas.
• Discuss Recipes: Engage in discussions by commenting on recipes, sharing tips, modifications, and experiences related to specific recipes.

3. User Management
• Admin Controls: Administrators have the authority to block users if necessary and maintain a healthy and respectful community.
• Content Editing: Admins can edit content to ensure the accuracy and appropriateness of shared recipes, maintaining the overall quality of the EmberEats platform.

### Technologies Used

![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Git](https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white) ![JSON Server](https://img.shields.io/badge/JSON_Server%20-%232a2e2a.svg?&style=for-the-badge&logo=JSON&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/VSCode%20-%23007ACC.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white)


### Getting Started

*First, a note about authentication...*
This application uses mock authentication which is purely for demonstration purposes. Therefore the login code written here is completely insecure and would never be implemented in a professional application.

### Setup

1.  Clone this repository
2.  ```cd``` into the directory
3.  Install dependencies: ```npm install```
4.  Run ```json-server database.json -p 8088 -w``` from the api directory
5.  In a separate terminal, run ```npm start``` from the repository directory

### Entering the Site

Demo User Credentials<br>
    User:   jdoe@gmal.com<br>
    Admin:  jsmith@gmail.com<br>
    Blocked User: bob@example.com

Once logged in, you will be directed to the Welcome page. From there, you can click on any of the navigation links. 

##User Views
Recipes - shows a list of all the recipes on the site
    includes a Search Bar - allows the user to enter search terms and displays all recipes that includes the search terms in the title
    The linked Make and Model (Name) of each appliance will take you to a detailed view of that appliance, which shows the Owner, Model Number, Serial Number, and Notes (plus Add a Note button)
My Recipes - shows a list of appliances this logged in user has added
    includes a Search Bar - allows the user to enter search terms and displays all recipes that includes the search terms in the title
    The linked Make and Model (Name) of each appliance will take you to a detailed view of that appliance, which shows the Owner, Model Number, Serial Number, and Notes (plus Add a Note button)
New Recipe - displays a form to add a new recipe
Logout - logs out of the site

##Admin Views
Recipes - shows a list of all the recipes on the site
    Includes a Search Bar - allows the user to enter search terms and displays all recipes that includes the search terms in the title
    The linked Make and Model (Name) of each appliance will take you to a detailed view of that appliance, which shows the Owner, Model Number, Serial Number, and Notes (plus Add a Note button)
Users - shows a list of all the users on the site
   Includes a Search Bar - allows the admin to enter search for a specific user by name
My Recipes - shows a list of appliances this logged in user has added
    Includes a Search Bar - allows the user to enter search terms and displays all recipes that includes the search terms in the title
    The linked Make and Model (Name) of each appliance will take you to a detailed view of that appliance, which shows the Owner, Model Number, Serial Number, and Notes (plus Add a Note button)
New Recipe - displays a form to add a new recipe
Logout - logs out of the site
