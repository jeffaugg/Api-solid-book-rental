import { v4 as uuid4 } from "uuid";

class Specification {
    name: string;
    descripton: string;
    id?: string;
    created_at?: Date;

    constructor() {
        if (this.id) {
            this.id = uuid4();
            this.created_at = new Date();
        }
    }
}

export { Specification };
