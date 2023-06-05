interface IRequestTest3 {
    sum: number,
    from: number,
    to: number,
}

interface IDataSuccessTest3 extends IRequestTest3 {
    databaseId: number,
}

interface IDataFailedTest3 {
    errorMessage: string,
    errorCode: number,
}

interface TypeSuccessResponseTest3 {
    status: 'success',
    data: IDataSuccessTest3
}

interface IFailedResponseTest3{
    status: 'failed',
    data: IDataFailedTest3,
}
