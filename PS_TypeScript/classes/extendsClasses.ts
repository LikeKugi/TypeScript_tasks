type PaymentStatusExtends = 'new' | 'paid'

class PaymentForExtends{
    id: number;
    status: PaymentStatusExtends= 'new';

    constructor(id: number) {
        this.id = id
    }

    pay() {
        this.status = 'paid';
    }
}

class PersistedPaymentExtends extends PaymentForExtends {
    databaseId: number;
    paidAt: Date = new Date();
    constructor() {
        const id = Math.floor(Math.random() * 57)
        super(id);
        this.databaseId = 1000000 + this.id;
    }
    override pay(date?:Date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
