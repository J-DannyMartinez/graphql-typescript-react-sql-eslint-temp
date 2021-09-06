"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const User_1 = require("../entities/User");
const type_graphql_1 = require("type-graphql");
const users = [
    {
        id: 1,
        firstname: 'John',
        lastname: 'Doe',
        age: 29,
        email: 'john@john.com',
        confirmed: true
    },
    {
        id: 2,
        firstname: 'Jane',
        lastname: 'Doe',
        age: 30,
        email: 'jane@jane.com',
        confirmed: false
    }
];
let UserResolver = class UserResolver {
    async users() {
        return users;
    }
    async user(data) {
        const user = users.find(user => user.id === data.id);
        if (data.firstname === (user === null || user === void 0 ? void 0 : user.firstname))
            return user;
        else
            return null;
    }
    async addUser({ confirmed, firstname, lastname, age, email }) {
        const newUser = {
            id: Math.random(),
            confirmed,
            email,
            firstname,
            lastname,
            age
        };
        users.push(newUser);
        return newUser;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [User_1.User], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    (0, type_graphql_1.Query)(() => User_1.User, { nullable: true }),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.UserArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => User_1.User),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.UserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "addUser", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => User_1.User)
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map