/*
The parameters for sorting and pagination follow the same philosophy. 
Let's look at a few features we could possibly implement:

Receive all workouts that require a barbell: /api/v1/workouts?equipment=barbell
Get only 5 workouts: /api/v1/workouts?length=5

When using pagination, receive the second page: /api/v1/workouts?page=2

Sort the workouts in the response in descending order by their creation 
date: /api/v1/workouts?sort=-createdAt

You can also combine the parameters, to get the last 10 updated workouts
 for example: /api/v1/workouts?sort=-updatedAt&length=10

*/
