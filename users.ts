//# Defines our User Roles we will use throughout the E2E #//
export enum USER_ROLES{
  standard_user,
  locked_out_user,
  problem_user,
  performance_glitch_user,
  error_user,
  visual_user
}

//# Creates a Type to define properties each user will inherit #//
interface UserRoleProperties{
  [Key: number]: {
    username:string;
    password:string;
  }
}

//# Uses the previously declared Type and fills in the mold #//
const userRoleProperties: UserRoleProperties = {
  [USER_ROLES.standard_user]: {
    username: "standard_user",
    password: "secret_sauce"
  },
  [USER_ROLES.locked_out_user]: {
    username: "locked_out_user",
    password: "secret_sauce"
  },
  [USER_ROLES.problem_user]: {
    username: "problem_user",
    password: "secret_sauce"
  },
  [USER_ROLES.performance_glitch_user]: {
    username: "problem_user",
    password: "secret_sauce"
  },
  [USER_ROLES.error_user]: {
    username: "problem_user",
    password: "secret_sauce"
  },
  [USER_ROLES.visual_user]: {
    username: "visual_user",
    password: "secret_sauce"
  }
}

//# A function to get the username. Takes a role from the Enum at the top of this file. Returns the
//# userRoleProperties and passes the Enum as the key.
export const getUsername = (userRole: USER_ROLES): string => {
    return userRoleProperties[userRole].username;
}

//# A function to get the password. Takes a role from the Enum at the top of this file. #//
export const getPassword = (userRole: USER_ROLES): string => {
    return userRoleProperties[userRole].password;
}


