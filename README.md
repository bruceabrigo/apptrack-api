# AppTrack API

This API will allow our front-end users to CRUD new applications.

This application uses token authentication.


## Resources 


### Users

| VERB   | URI Pattern                      | Controller#Action     |
| ------ | -------------------------------- | --------------------- |
| POST   | `/sign-up`                       | `user#signup`         |
| POST   | `/sign-in`                       | `user#signin`         |
| PATCH  | `/change-password/`              | `users#updatepw`      |
| DELETE | `/sign-out/`                     | `users#signout`       |

##### Routes Table

| VERB   | URI Pattern                      | Controller#Action      |
| ------ | -------------------------------- | ---------------------- |
| GET    | `/applications`                  | `applications#index`   |
| GET    | `/applications/:id`              | `applications#show`    |
| POST   | `/applications/`                 | `applications#create`  |
| PATCH  | `/applications/:id`              | `applications#update`  |
| DELETE | `/applications/:id`              | `applications#delete`  |