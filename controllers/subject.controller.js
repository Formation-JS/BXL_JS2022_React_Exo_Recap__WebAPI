import categoryService from '../services/category.service.js';
import messageService from '../services/message.service.js';

const subjectController = {

    getCategories: async (req, res) => {
        const categories = await categoryService.getAll();
        res.status(200).json(categories);
    },

    getMessages: async (req, res) => {
        const categoryId = parseInt(req.params.categoryId);

        if(isNaN(categoryId) || categoryId < 0) {
            res.status(400).json({message: 'Bad Category Id'});
            return
        }

        const messages = await messageService.getByCategory(categoryId);
        res.status(200).json(messages);
    },

    addMessage: (req, res) => {
        res.sendStatus(501);
    }

};

export default subjectController;