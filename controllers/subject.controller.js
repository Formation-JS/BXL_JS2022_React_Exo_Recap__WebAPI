import categoryService from '../services/category.service.js';
import messageService from '../services/message.service.js';

const subjectController = {

    getCategories: async (req, res) => {
        const categories = await categoryService.getAll();
        res.status(200).json(categories);
    },

    getMessages: async (req, res) => {
        const categoryId = parseInt(req.params.categoryId);

        if(isNaN(categoryId) || (categoryId < 0)) {
            res.status(400).json({message: 'Bad Category Id'});
            return
        }

        const exists = await categoryService.exists(categoryId);
        if(!exists) {
            res.status(404).json({message: 'Category don\'t exists'});
            return
        }

        const messages = await messageService.getByCategory(categoryId);
        res.status(200).json(messages);
    },

    addMessage: async (req, res) => {
        const categoryId = parseInt(req.params.categoryId);

        
        if(isNaN(categoryId) || (categoryId < 0)) {
            res.status(400).json({message: 'Bad Category Id'});
            return
        }

        const exists = await categoryService.exists(categoryId);
        if(!exists) {
            res.status(404).json({message: 'Category don\'t exists'});
            return
        }

        if(!req.body.content || !req.body.author) {
            res.status(400).json('Properties author and content are required');
            return;
        }

        const data = {
            content: req.body.content,
            author: req.body.author,
            categoryId
        };

        const result = await messageService.add(data);

        res.location(`/api/subject/${categoryId}/message`)
        res.status(201).json(result);
    }

};

export default subjectController;