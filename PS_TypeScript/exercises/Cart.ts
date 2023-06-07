type Product = {
    id: number,
    name: string,
    price: number,
}

interface ITargetDelivery {
    address: string,
    date: Date,
    id?: number,
}

class Cart {
    private products: Product[] = [];
    private delivery: boolean = false;

    private deliveryTarget: ITargetDelivery | null = null;

    public addProduct(p: Product): void {
        this.products = [...this.products, p];
    }

    public removeProducts(id: number): void {
        this.products = this.products.filter((p:Product) => p.id !== id);
    }

    public delProductByID(id: number): void {
        for (let i = 0; i < this.products.length; i += 1) {
            if (this.products[i].id === id) {
                this.products = [...this.products.slice(0, i), ...this.products.slice(i + 1)];
                return;
            }
        }
    }

    public getTotalCost(): number {
        return this.products.reduce((a:number, p:Product) => a + p.price, 0);
    }

    public setDelivery(target: ITargetDelivery):void {
        this.delivery = true;
        this.deliveryTarget = target;
        if ('id' in target) {
            console.log('target with ID')
        } else {
            console.log('target: home')
        }
    }

    public checkout(): boolean {
        return this.delivery && this.getTotalCost() > 0;
    }

}
