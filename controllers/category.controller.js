import categoryService from '../services/category.service.js';

const categoryController = {

    getAll: async (req, res) => {
        const categories = await categoryService.getAll();
        res.status(200).json(categories);
    }

};

export default categoryController;