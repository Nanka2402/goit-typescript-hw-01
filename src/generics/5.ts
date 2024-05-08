export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}
type UserRolesStatuses = Record<UserRole, string>;
// Замініть наступний код на версію за допомогою Record
const RoleDescription: UserRolesStatuses = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
console.log(RoleDescription);
