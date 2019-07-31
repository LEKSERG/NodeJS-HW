# BackEnd Todo with JWT Auth

# For access include 'Authorization' Header with this token:
 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiU2VyZ2V5IExla29udHNldiJ9.JCjT9xSFUs2VuMJ6kGEN2vdiO5WGEugTE9tg_QnDWOk

# GET 
/todos
/todo/:id

# POST + req.body.title = string
/todo

# PUT + req.body.completed = boolean
/todo/:id

# DELETE 
/todo/:id