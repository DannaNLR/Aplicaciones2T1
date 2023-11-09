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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fotosController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class fotosController {
    constructor() {
        this.getFoto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const foto = yield postgres_1.prisma.foto.findMany();
            return res.json(foto);
        });
        this.getFotoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idfoto = +req.params.id;
            if (isNaN(idfoto))
                return res.status(400).json({ error: 'El argumento idfoto no es un número' });
            const foto = yield postgres_1.prisma.foto.findFirst({
                where: { idfoto },
            });
            return foto ? res.json(foto) : res.status(404).json({ error: `Foto con id ${idfoto} no encontrada` });
        });
        this.createFoto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, CreateFotoDto] = dtos_1.createFotoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const foto = yield postgres_1.prisma.foto.create({
                data: CreateFotoDto,
            });
            res.json(foto);
        });
        this.updateFoto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idfoto = +req.params.id;
            const [error, UpdateFotoDto] = dtos_1.updateFotoDto.create(Object.assign(Object.assign({}, req.body), { idfoto }));
            if (error)
                return res.status(400).json({ error });
            const foto = yield postgres_1.prisma.foto.findFirst({
                where: { idfoto },
            });
            if (!foto)
                return res.status(404).json({ error: `Foto con id ${idfoto} no encontrada` });
            const updatedFoto = yield postgres_1.prisma.foto.update({
                where: { idfoto },
                data: UpdateFotoDto.values,
            });
            res.json(updatedFoto);
        });
        this.deleteFoto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idfoto = +req.params.id;
            const foto = yield postgres_1.prisma.foto.findFirst({
                where: { idfoto },
            });
            if (!foto)
                return res.status(404).json({ error: `Foto con id ${idfoto} no encontrada` });
            const deleted = yield postgres_1.prisma.foto.delete({
                where: { idfoto },
            });
            return deleted ? res.json(deleted) : res.status(400).json({ error: `Foto con id ${idfoto} no encontrada` });
        });
    }
}
exports.fotosController = fotosController;
