# art-enjoy

ART&ENJOY

Welcome to our experiences' platform. Here you can find a wide variety of special experiences, created with enthusiasm and finesse by experienced tour guides. We are committed to offering an easy and secure shopping experience so that you can acquire these amazing experiences you can't miss. Join our web and discover unique and amazing experiences! Find our experience promotions!

Our vision is to create an online platform where the user can register and thus enjoy incredible experiences organized in different cities of activities that cannot be missed. Most of our experiences include a specialized tour guide, so you don't miss any detail.

TOOLS:

-Trello:

https://trello.com/b/BJc56X0M/art-enjoy

-Desktop graphic reference:

![Figma Art Enjoy png2](https://user-images.githubusercontent.com/117833121/228344491-07f0b076-9d68-4098-a8cb-9ee33928352b.png)

-Figma:

https://www.figma.com/file/8n8e7bBmO57yphQJQuRFMF/Art%26Enjoy?node-id=0-1&t=Cb4B4kiL3eFK6Nam-0

-Git / GitHub:

Repository CSS: https://github.com/Art-Enjoy/art-enjoy

-Visual Studio Code

TECHNOLOGIES:

-React

-HTML

-Bootstrap

-CSS

-JS



Requirements, Installation and Getting started:
-NodeJS.

1) Clone the repository
2) npm install
3) npm install -g json-server
4) json-server --watch ./api/db.json
5) npm run dev

CONTENT:

USER PAGES:
-First page of the user, landing page that shows what you will find on our platform and links to our experiences, promotional experiences and locations of our experiences.

Files are properly organized and separated with controllers and service architecture.

-Second page of the user with the experience you have previously selected.

Each experience with title, image, location, description, price and purchase button.

-Third user page, user registration.

-Fourth user page, user login.

-Fifth user page, ticket purchase.

-Sixth user page, cart page where we can add or subtract products and finalize the purchase.


ADMIN PAGES:
-First admin page, admin login.

-Second page of the admin, landing page that shows what our page contains and links to open, edit and delete our experiences.
The files are properly organized and separated with drivers and service architecture.

-Third page of the admin with the experience that you have previously selected.
Each experience with title, image, location, description, price.

-Fourth admin page, add activity with your form. This will be added to the main page.



We use Bootstrap to make the web responsive.

User experience.

Admin experience.

Repository commits related to the task checklist.

CRUD user: can see, read and buy experiences.

CRUD admin: Can create, read, update, and delete experiences.

Search Bar: You can search by location or experience title.



TESTING:

COMPONET TESTING 
•	We need to install:

•	npm install --save-dev vitest

•	npm install --save-dev jsdom 

•	npm install --save-dev @testing-library/jest-dom

•	npm instal --save-dev @testing-library/react


We need to import:

•	import ExpDetail from "../pages/ExpDetail";

•	import { render, screen } from "@testing-library/react";

•	import '@testing-library/jest-dom';


In the ExpDetail.test.jsx file, we tested:


In the first test we check that the title of the exp is printed
correctly:


test('should render product title', () => {

        const titleElement = screen.getByText(/La Alhambra/i);
        
        expect(titleElement).toBeInTheDocument();
        
    });
    
    

In the second test we check that the exp description is printed
correctly:


test('should render product description', () => {

        const descriptionElement = screen.getByText(/this is a test item/i);
        
        expect(descriptionElement).toBeInTheDocument();
        
    });
    
    

If in terminal we execute the : npm run test command, our tests should pass.


TEAM

[<img src="https://avatars.githubusercontent.com/u/117835592?v=4" width=115><br><sub> Aldara Martinez </sub>](https://github.com/AldaraMG)| [<img src="https://avatars.githubusercontent.com/u/117833121?v=4" width=115><br><sub>Jennifer Cordero</sub>](https://github.com/JenniferCorderoR) | [<img src="https://avatars.githubusercontent.com/u/117833691?v=4" width=115><br><sub>Magdalena Reig</sub>](https://github.com/MagdalenaRB) | [<img src="https://avatars.githubusercontent.com/u/117834108?v=4" width=115><br><sub>Yamila Marquez</sub>](https://github.com/Milacover) | [<img src="https://avatars.githubusercontent.com/u/124665913?v=4" width=115><br><sub>Miriam García</sub>](https://github.com/miriamremesal) |
| :---: | :---: | :---: |  :---: |  :---: | 
