import db from '../db/db.js';
import { MessageDTO } from '../dto/message.dto.js';

const messageService = {

    getByCategory: async (categoryId) => {
        await db.read();

        const results = db.data.message
            .filter(m => m.categoryId === categoryId)
            .map(m => new MessageDTO(m));

        return results;
    }

};


export default messageService;