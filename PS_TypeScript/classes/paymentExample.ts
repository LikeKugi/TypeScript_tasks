enum PaymentStatus {
    Held,
    Processed,
    Reversed,
}

class Payment {
    id: number;
    status: PaymentStatus;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number) {
        this.id = id;
        this.createdAt = new Date();
        this.updatedAt = this.createdAt;
        this.status = PaymentStatus.Held;
    }

    getPaymentLifeTime():number {
        return new Date().getTime() - this.createdAt.getTime();
    }
    freePayment(): void {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('Cant be done')
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}

const examplePayment = new Payment(1);
console.log(examplePayment);

setTimeout(() => {
    console.log(examplePayment.getPaymentLifeTime())
    examplePayment.freePayment()
}, 1500);
