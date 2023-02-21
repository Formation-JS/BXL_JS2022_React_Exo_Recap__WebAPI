import db from '../db/db.js';
import { CategoryDTO } from '../dto/category.dto.js';

const categoryService = {

    getAll: async () => {
        await db.read();

        const results = db.data.category.map(
            c => {
                const messages = db.data.message.filter(m => m.categoryId === c.id);
                const lastUpdate = Math.max(...messages.map(m => m.createAt));

                return new CategoryDTO(
                    c.id,
                    c.name,
                    messages.length,
                    lastUpdate
                );
            }
        );
        
        return results;
    }

};


export default categoryService;