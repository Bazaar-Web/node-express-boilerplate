const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers'],
  developer: ['getDevelopers', 'manageDevelopers'],
  owner: ['getOwners', 'manageOwners'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
