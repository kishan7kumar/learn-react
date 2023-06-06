import { createContext } from "react";

/* NOTE
 * React context is like a use state for whole application
 * we can use react context to store variable that can be
 * used throughout the application
 * In case of class based component it is used as component
 * see ProfileClass component
 */
const userContext = createContext({
  user: {
    name: "kishan",
    email: "acb@gmail.com,",
  },
});

// NOTE: this will make sure that react developer tool shows proper name for the context
userContext.displayName = "userContext";

export default userContext;
