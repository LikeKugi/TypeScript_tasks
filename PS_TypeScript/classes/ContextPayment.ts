class ContextPayment {
  private date: Date = new Date();
  getDate(this: ContextPayment) {
    return this.date;
  }
  getDateArrow = (): Date => this.date;
}

const p = new ContextPayment();
console.log(p.getDate());

const ContextUser = {
  id: 1,
  paymentDate: p.getDate.bind(p),
  paymentDateArrow: p.getDateArrow,
}
console.log(ContextUser.id);
console.log(ContextUser.paymentDate())
console.log(ContextUser.paymentDateArrow())

class ContextPaymentPersistent extends ContextPayment {
  save() {
    return super.getDate()
  }
  saveArrow() {
    return this.getDateArrow()
  }
}

const pp = new ContextPaymentPersistent()

console.log(pp.save())
console.log(pp.saveArrow())
