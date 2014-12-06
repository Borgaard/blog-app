blog-app
========
Blog should:
* use form to add
  * topic
  * body
  * day
  * ~~automatically submit timestamp/date~~ scratch that. it was miserable. NEVER AGAIN.
* use form to edit
  * ~~self-bonus: update timestamp/date when submit edit~~
* delete

To-do:
* css styling, perhaps with http://stackoverflow.com/questions/13486838/cant-get-stylesheet-to-work-with-ejs-for-node-js
* remove comments route from posts table, create table + posts table relation

Things that are quirky or working as of `fe6bd23` 
* Add score: 5/5
 * posts/new -> hit submit -> redirect to /posts -> method POST
* Edit score: 4/5 because why id?_method=PATCH
 * posts/id -> hit edit -> posts/id/edit -> redirect to /post/id -> id?_method=PATCH
* Delete score: 4/5 because why id?_method=DELETE
 * posts/id -> hit delete -> redirect to /posts -> id?_method=DELETE 
