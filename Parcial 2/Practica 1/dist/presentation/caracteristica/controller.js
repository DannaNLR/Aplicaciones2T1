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
exports.CaracteristicasController = void 0;
const postgres_1 = require("../../data/postgres");
const create_caracteristica_dto_1 = require("../../domain/dtos/caracteristica/create-caracteristica.dto");
const update_caracteristica_dto_1 = require("../../domain/dtos/caracteristica/update-caracteristica.dto");
class CaracteristicasController {
    constructor() {
        this.getCaracteristica = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const caracteristicas = yield postgres_1.prisma.caracteristica.findMany();
            return res.json(caracteristicas);
        });
        this.getCaracteristicaById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idCaracteristica = +req.params.id;
            if (isNaN(idCaracteristica))
                return res.status(400).json({ error: 'El argumento idCaracteristica no es un número' });
            const caracteristica = yield postgres_1.prisma.caracteristica.findFirst({
                where: { idCaracteristica },
            });
            return caracteristica ? res.json(caracteristica) : res.status(404).json({ error: `Característica con id ${idCaracteristica} no encontrada` });
        });
        this.createCaracteristica = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createCaracteristicaDto] = create_caracteristica_dto_1.CreateCaracteristicaDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const caracteristica = yield postgres_1.prisma.caracteristica.create({
                data: createCaracteristicaDto,
            });
            res.json(caracteristica);
        });
        this.updateCaracteristica = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idCaracteristica = +req.params.id;
            const [error, updateCaracteristicaDto] = update_caracteristica_dto_1.UpdateCaracteristicaDto.create(Object.assign(Object.assign({}, req.body), { idCaracteristica }));
            if (error)
                return res.status(400).json({ error });
            const caracteristica = yield postgres_1.prisma.caracteristica.findFirst({
                where: { idCaracteristica },
            });
            if (!caracteristica)
                return res.status(404).json({ error: `Característica con id ${idCaracteristica} no encontrada` });
            const updatedCaracteristica = yield postgres_1.prisma.caracteristica.update({
                where: { idCaracteristica },
                data: updateCaracteristicaDto.values,
            });
            res.json(updatedCaracteristica);
        });
        this.deleteCaracteristica = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const idCaracteristica = +req.params.id;
            const caracteristica = yield postgres_1.prisma.caracteristica.findFirst({
                where: { idCaracteristica },
            });
            if (!caracteristica)
                return res.status(404).json({ error: `Característica con id ${idCaracteristica} no encontrada` });
            const deleted = yield postgres_1.prisma.caracteristica.delete({
                where: { idCaracteristica },
            });
            return deleted ? res.json(deleted) : res.status(400).json({ error: `Característica con id ${idCaracteristica} no encontrada` });
        });
    }
}
exports.CaracteristicasController = CaracteristicasController;
