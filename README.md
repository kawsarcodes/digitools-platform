<div align="center">
    <h1>DIGITOOLS PLATFORM [ASSIGNMENT 6]</h1>
</div>

## ABOUT

Digitools Platform is a modern marketplace designed for developers and tech enthusiasts to browse, compare, and manage digital products. This project was developed as part of **Programming Hero Assignment 6**, focusing on dynamic data rendering and state management.

<div align="center">
    <p>
        <a href="https://digitools-platform-kawsarcodes.netlify.app/">
            <img src="https://img.shields.io/website?url=https%3A%2F%2Fyour-live-link.com&style=for-the-badge&label=Live%20Link&logo=google-chrome&logoColor=white&color=1e293b" alt="Website Status">
        </a>
        <a href="https://github.com/kawsarcodes/digitools-platform">
            <img src="https://img.shields.io/github/last-commit/kawsarcodes/digitools-platform?style=for-the-badge&color=1e293b&logo=github" alt="Last Commit">
        </a>
    </p>
</div>

## TECH STACK

![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white) ![DaisyUI](https://img.shields.io/badge/daisyUI-%235AD7E4.svg?style=flat-square&logo=daisyui&logoColor=white) ![React Toastify](https://img.shields.io/badge/React_Toastify-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB) ![Lucide React](https://img.shields.io/badge/Lucide_React-%23F59E0B.svg?style=flat-square&logo=lucide&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=flat-square&logo=vite&logoColor=white)


## UI DESIGN

<div align="center">
  <a href="#">
    <img src="./ui-ux-design/Home.png" alt="The Dev Blog Home" width="100%">
  </a>
</div>



<div align="center">
    <h1>ASSIGNMENT INSTRUCTIONS</h1>
    <h2>[Features & Requirements]</h2>
</div>

## Navbar
- Navbar designed according to Figma  
- Cart icon displayed (initially empty)  

## Banner
- Banner section includes:
  - Heading  
  - Description text  
  - Image  
  - Buttons  

## Stats Section
- Stats section designed based on Figma  

## Main Section & Toggling
- Design  2 buttons at the center of the section.
- By clicking Cart,  the cart section will be shown. By default it will show an empty message.
- By Clicking  Product,  the Products section will be shown. 
- By Default product section will be visible. 

## JSON Data
Create 6–10 product data with:
- id  
- name  
- description  
- price  
- period (one-time / monthly / yearly)  
- tag ( example- popular, new, best seller) 
- tagType ( example- popular, new, best seller) 
- features ( array. Example:  ["100+ templates", "ATS optimization", "Export to PDF"] )   
- icon  

## Product Cards
- Display all products in a 3-column layout  
- Each card includes:
  - Name  
  - Description  
  - Price  
  - Period  
  - TagType  
  - Features  
  - Icon  
  - Buy Now button  

## Cart Functionality
- Show selected products in cart  
- Display total product count in navbar  
- Cart layout: 1 column  
- Each cart item includes:
  - Name  
  - Icon  
  - Price  
  - Remove button  
- "Proceed to Checkout" button:
  - Clears all cart items  

## Steps Section
- Designed according to Figma  

## Pricing Section
- Designed according to Figma  

## Footer
- Footer designed based on Figma  

## Responsive Design
- Fully responsive across devices  
- Follow standard responsive practices  

<div align="center">
    <h1>[Challenges Part]</h1>
</div>

## Use a NPM Package React-Toastify
- Use **React Toastify** to show all the alerts of add to cart, remove, and proceed to checkout. 

## Implement Selected product remove functionality 
- On Click Remove Button product will remove from cart section.

- In this section the total of the selected products ( added on the carts) will show here. 
- Proceed to checkout button will remove all the products from the cart  

## Optional Features: 

1. When you click on a product it increases the cart count in the Navbar and clears it when you click on the proceed to checkout button. 
2. When clicking on the Buy now Button it shows an “Added to cart” message on the button. 