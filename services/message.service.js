import db from '../db/db.js';
import { MessageDTO } from '../dto/message.dto.js';

const messageService = {

    getByCategory: async (categoryId) => {
        await db.read();

        const results = db.data.message
            .filter(m => m.categoryId === categoryId)
            .map(m => new MessageDTO(m));

        return results;
    },
    
    add: async (data) => {
        await db.read();

        const id = Math.max(...db.data.message.map(m => m.id)) + 1;
        const createAt = parseInt((new Date()).getTime() / 1000);
        db.data.message.push({...data, id, createAt})

        await db.write();
    }

};


export default messageService;