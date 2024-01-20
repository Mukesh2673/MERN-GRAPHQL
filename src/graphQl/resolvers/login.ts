import jwt from 'jsonwebtoken';
// Secret key for JWT (should be stored securely in a real-world application)
const JWT_SECRET_KEY = 'graphql';
export const resolvers = {
    Query: {
      securedResource: (parent:any, args:any, context:any) => {
        // Check if user is authenticated using context
        if (!context.user) {
          throw new Error('Unauthorized. Please login.');
        }
  
        // Access secured resource
        return 'This is a secured resource!';
      },
    },
    Mutation: {
      login: (parent:any, { username, password }:any) => {
        console.log("puserins",username)
        // Example: Check username and password (replace with your authentication logic)
        if (username === 'user@gmail.com' && password === 'password') {
          // Generate a JWT token upon successful login
          const token:any = jwt.sign({ username }, JWT_SECRET_KEY, { expiresIn: '1h' });
  
          return { token};
        } else {
          return {  error: 'Invalid credentials' };
        }
      },
    },
  };