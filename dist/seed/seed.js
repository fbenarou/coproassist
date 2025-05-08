"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var bcrypt = require("bcrypt");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var hashedPassword, copro, lot1, lot2, copro1, copro2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bcrypt.hash("admin123", 10)];
                case 1:
                    hashedPassword = _a.sent();
                    return [4 /*yield*/, prisma.copropriete.create({
                            data: {
                                nom: "Résidence Les Lilas",
                                // @ts-ignore
                                adresse: "12 rue des Lilas",
                                // @ts-ignore
                                ville: "Paris",
                                // @ts-ignore
                                codePostal: "75020",
                            },
                        })];
                case 2:
                    copro = _a.sent();
                    return [4 /*yield*/, prisma.lot.create({
                            data: {
                                numero: "A101",
                                surface: 55.5,
                                coproprieteId: copro.id,
                            },
                        })];
                case 3:
                    lot1 = _a.sent();
                    return [4 /*yield*/, prisma.lot.create({
                            data: {
                                numero: "A102",
                                surface: 62.0,
                                coproprieteId: copro.id,
                            },
                        })];
                case 4:
                    lot2 = _a.sent();
                    return [4 /*yield*/, prisma.coproprietaire.create({
                            data: {
                                nom: "Alice Dupont",
                                email: "alice@example.com",
                                telephone: "0612345678",
                                // @ts-ignore
                                coproprieteId: copro.id,
                            },
                        })];
                case 5:
                    copro1 = _a.sent();
                    return [4 /*yield*/, prisma.coproprietaire.create({
                            data: {
                                nom: "Jean Martin",
                                email: "jean@example.com",
                                telephone: "0698765432",
                                // @ts-ignore
                                coproprieteId: copro.id,
                            },
                        })];
                case 6:
                    copro2 = _a.sent();
                    // Créer des appartenances
                    return [4 /*yield*/, prisma.appartenance.createMany({
                            data: [
                                {
                                    lotId: lot1.id,
                                    coproprietaireId: copro1.id,
                                    pourcentage: 60,
                                },
                                {
                                    lotId: lot2.id,
                                    coproprietaireId: copro2.id,
                                    pourcentage: 40,
                                },
                            ],
                        })];
                case 7:
                    // Créer des appartenances
                    _a.sent();
                    // Créer un utilisateur avec rôle ADMIN
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: "admin@coproassist.fr",
                                password: hashedPassword,
                                name: "Admin CoproAssist",
                                // @ts-ignore
                                role: "ADMIN",
                            },
                        })];
                case 8:
                    // Créer un utilisateur avec rôle ADMIN
                    _a.sent();
                    console.log("✅ Données de test insérées avec succès");
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () {
    prisma.$disconnect();
});
