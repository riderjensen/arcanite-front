# Project Arcanite

A posting platform

## Future Plans

Add in a chat section that is site-wide. People can only post once a day and comment twice a day but they can chat all they want. Chat is created with web sockets with no DB so you only get the chat messages as long as you are on the page.

## Todo

1. Main Application
    * ~~Add in spinner for async calls~~    
    * ~~Add delete functionality to posts and comments~~
    * ~~Add error reporting on application~~
    * ~~Make a text counter for max post length~~
    * Let an account vote only once
    * Add a sort function to profile to sort for comments or posts
    * Create a frontpage algorithm to vote posts higher
    * Add a way for comments on the profile to go to their parent
    * Homepage sorting potentially based on location/group

2. Chat Functionality
    * Create socket connetions on the back
    * Allow the chat area to minimize
    * Create a page that is for chat
    * Fix the index.js action to not have dummy data


## Current Bugs

1. ~~Deleting a comment seems to delete more than we want~~
2. ~~Cards dont leave immedietly after you delete them~~
3. ~~Multiple comments show up as the same content as the first one until you refresh the page~~
4. ~~Modal stays open after async call completes~~
5. ~~You cant delete the comment you just created~~