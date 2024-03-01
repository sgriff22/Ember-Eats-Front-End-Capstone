# EmberEats

EmberEats is an application designed for outdoor cooking enthusiasts who are passionate about campfire and Dutch oven recipes. The app aims to provide a platform for users to store, share, and discover a wide variety of outdoor cooking recipes. Users can not only add, rate, and save their favorite recipes but also explore and try out creations from other enthusiasts.

### Features:

1. **Recipe Management**
   - **Add Recipes:** Users can easily add their own campfire and Dutch oven recipes to share with the EmberEats community.
   - **Rate Recipes:** Users have the ability to rate recipes based on their experience, helping others discover the most popular and delicious outdoor cooking creations.
   - **Save Recipes:** Each user can maintain a personal list of favorite recipes by saving them for quick access and future use.

2. **Community Interaction**
   - **Discover Recipes:** Users can explore a diverse collection of outdoor cooking recipes shared by fellow enthusiasts, creating a dynamic and ever-growing database.
   - **User Ratings:** Gain insights into the popularity and quality of recipes through user ratings, ensuring a curated collection of the best outdoor cooking ideas.
   - **Discuss Recipes:** Engage in discussions by commenting on recipes, sharing tips, modifications, and experiences related to specific recipes.

3. **User Management**
   - **Admin Controls:** Administrators have the authority to block users if necessary and maintain a healthy and respectful community.
   - **Content Editing:** Admins can edit content to ensure the accuracy and appropriateness of shared recipes, maintaining the overall quality of the EmberEats platform.

### Technologies Used

![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Git](https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white) ![JSON Server](https://img.shields.io/badge/JSON_Server%20-%232a2e2a.svg?&style=for-the-badge&logo=JSON&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/VSCode%20-%23007ACC.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white)


## Getting Started

*First, a note about authentication...*  
This application uses mock authentication for demonstration purposes only. The login code provided here is insecure and should not be implemented in a professional application.

### Setup

1. **Clone this repository:**
    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory:**
    ```bash
    cd <repository-directory>
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Move to the 'api' directory inside the repository and run the JSON server for the mock database:**
    ```bash
    json-server database.json -p 8088 -w
    ```

5. **In a separate terminal, start the application in the repository directory:**
    ```bash
    npm start
    ```

### Entering the Site

Demo User Credentials:  
- User:   `aliceJ@att.net`  
- Admin:  `jsmith@gmail.com` 
- Blocked User: `bob@example.com`

Once logged in, you will be directed to the Welcome page. From there, you can click on any of the navigation links.

## User Views

### Recipes Navbar
- Shows a list of all the recipes on the site.
- Includes a Filter Bar:
  - Search by Term: Allows the user to enter search terms and displays all recipes that include the search terms in the title.
  - Filter by Meal: A dropdown option to filter recipes by meal type.
  - Filter by Category: A dropdown option to filter recipes by category.
- Each recipe card is clickable, redirecting the user to the recipe details page.

### My Recipes Navbar
- Shows a list of recipes the logged-in user has created and saved from others.
- Includes a Filter Bar:
  - Search by Term: Allows the user to enter search terms and displays all recipes that include the search terms in the title.
  - Filter by Meal: A dropdown option to filter recipes by meal type.
  - Filter by Category: A dropdown option to filter recipes by category.
- Each recipe card includes a "Remove" button, allowing users to effortlessly remove recipes from their saved list.
- Each recipe card is clickable, redirecting the user to the recipe details page.

#### Recipe Details Page
- Displays comprehensive information about the recipe, including title, image, author, date, rating, etc.
- If the user created the recipe, an edit button will be visible on the right and when clicked an edit form displays.
- If the user did not create the recipe, a save button and star rating option will both appear on the right.
- A comment section is displayed at the bottom of the page.
- Author name links to the author's profile page.

#### Profile Page
- Displays the clicked user's profile with all their info and a list of recipes the user created.
- An edit profile button will only appear if the profile is the current users.

### New Recipe Navbar
- Displays a form to add a new recipe.

### Profile Navbar
- Displays the current user's personalized profile.
- An edit profile button displays on the right and when clicked an edit form displays.

### Logout Navbar
- Logs out of the site.


## Admin Views

### Recipes Navbar
- Shows a list of all the recipes on the site.
- All the same features and functionality that users have.

### Users Navbar
- Shows a list of all the users on the site.
- Includes a Search Bar: Allows the admin to search for a specific user by name.
- Each user card is clickable, redirecting the Admin to the user's profile.
- Additionally, a block button is available on each user card.

### My Recipes Navbar
- Shows a list of recipes the logged-in user has created and saved from others.
- All the same features and functionality that users have.

#### Recipe Details Page
- Provides comprehensive information about the recipe, including title, image, author, date, rating, etc.
- Admin has the same options to save and rate the recipe, with the additional ability to edit any recipe.
- Features a comment section at the bottom of the page, and Admin can edit any comment.

#### Profile Page
- Displays the profile of the clicked user, showcasing their information and a list of recipes they've created.
- For Admins, an "Edit Profile" button is available on every user's profile.
  
### New Recipe Navbar
- Displays a form to add a new recipe.

### Profile Navbar
- Displays the current user's personalized profile.
- An edit profile button displays on the right and when clicked an edit form displays.

### Logout Navbar
- Logs out of the site.

