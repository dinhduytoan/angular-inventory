import { UserService } from "./user.service";
import { RoleService } from "./role.service";
import { AuthService } from "./auth.service";
import { SupplierService } from "./supplier.service";

export const API_URL = 'http://127.0.0.1:3334/';

export {
    UserService,RoleService, AuthService, SupplierService
};

export default [
    UserService,
    RoleService, 
    AuthService,
    SupplierService
];