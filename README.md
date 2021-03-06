# Project Arcanite

A posting platform
[Related Backend](https://github.com/riderjensen/arcanite-back)
## Future Plans

Add in a chat section that is site-wide. People can only post once a day and comment twice a day but they can chat all they want. Chat is created with web sockets with no DB so you only get the chat messages as long as you are on the page.

## Todo

1. Main Application
    * ~~Deleting a comment seems to delete more than we want~~
    * ~~Cards dont leave immedietly after you delete them~~
    * ~~Multiple comments show up as the same content as the first one until you refresh the page~~
    * ~~Modal stays open after async call completes~~
    * ~~You cant delete the comment you just created~~
    * ~~Add in spinner for async calls~~    
    * ~~Add delete functionality to posts and comments~~
    * ~~Add error reporting on application~~
    * ~~Make a text counter for max post length~~
    * ~~Let an account vote only once~~
    * ~~Add a sort function to profile to sort for comments or posts~~
    * Create a frontpage algorithm to vote posts higher
    * Add a way for comments on the profile to go to their parent
    * Homepage sorting potentially based on location/group
    * Return to the previous page after login

2. Chat Functionality
    * Create socket connetions on the back
    * ~~Allow the chat area to minimize~~
    * Scroll the div when we get a new comment
    * Fix the index.js action to not have dummy data
    * Add the counter to the chat functionality
    * Fix chat positioning for when someone is logged out
