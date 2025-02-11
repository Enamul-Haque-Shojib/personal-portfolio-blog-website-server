export const AuthRole = {
  Admin: 'Admin',
  User: 'User',
} as const;

export const authSearchableField = [
  'authId',
  'name',
  'email',
  'role',
];
