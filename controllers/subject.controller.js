import categoryService from '../services/category.service.js';

const subjectController = {

    getCategories: async (req, res) => {
        const categories = await categoryService.getAll();
        res.status(200).json(categories);
    },

    getMessages: (req, res) => {
        res.sendStatus(501);
    },

    addMessage: (req, res) => {
        res.sendStatus(501);
    }

};

export default subjectController;