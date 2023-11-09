import { Router } from 'express';
import { SubCategoriaController } from './controller'; // Importa el controlador de SubCategorias

export class SubCategoriaRoutes {
  static get routes(): Router {
    const router = Router();
    const subCategoriaController = new SubCategoriaController(); // Usa el controlador de SubCategorias

    router.get('/', subCategoriaController.getSubCategoria);
    router.get('/:id', subCategoriaController.getSubCategoriaById);

    router.post('/', subCategoriaController.createSubCategoria);
    router.put('/:id', subCategoriaController.updateSubCategoria);
    router.delete('/:id', subCategoriaController.deleteSubCategoria);

    return router;
  }
}
