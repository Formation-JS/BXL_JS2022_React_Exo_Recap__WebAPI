import db from '../db/db.js';
import { CategoryDTO } from '../dto/category.dto.js';

const categoryService = {

    getAll: async () => {
        await db.read();

        const results = db.data.category.map(
            c => {
                const messages = db.data.message.filter(m => m.categoryId === c.id);
                const lastUpdate = Math.max(...messages.map(m => m.createAt));

                return new CategoryDTO({
                    id: c.id,
                    name: c.name,
                    icon: c.icon,
                    count: messages.length,
                    lastUpdate
                });
            }
        );
        
        return results;
    },

    exists: async (id) => {
        await db.read();

        const result = db.data.category.find(c => c.id === id);
        return result !== undefined;
    }
};


export default categoryService;