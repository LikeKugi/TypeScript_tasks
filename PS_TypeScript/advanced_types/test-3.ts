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

interface ISuccessResponseTest3 {
    status: 'success',
    data: IDataSuccessTest3
}

interface IFailedResponseTest3{
    status: 'failed',
    data: IDataFailedTest3,
}

type TypeFTest4 = (res: ISuccessResponseTest3 | IFailedResponseTest3) => number;

let getResponseTest4: TypeFTest4;
getResponseTest4 = function (res) {
    if (res.status === 'success') {
        return res.data.databaseId;
    }
    return res.data.errorCode;
}
