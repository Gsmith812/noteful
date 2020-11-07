# Noteful
Noteful application leverages Front-End technologies: React.js, CSS 3, JSX  
Works in cohesion with Noteful server utilizing back-end technologies

---
## How it works:
* Retrieves data from back-end server containing stored folders and corresponding notes objects.
* These objects are updated in state and passed down to their components and conditionally rendered.
* There are two forms available to use: Add Note and Add Folder
* These forms accept user submission of new Notes/Folders to send a POST request to the server and update the DOM accordingly.
* Delete button function to remove notes
